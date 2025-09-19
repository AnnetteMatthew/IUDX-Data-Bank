import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import all the shared components
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {
  BreadcrumbComponent,
  BreadcrumbItem,
} from '../../shared/breadcrumb/breadcrumb.component';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { SidebarFiltersComponent } from '../../shared/sidebar-filters/sidebar-filters.component';
import {
  DataBankCardComponent,
  DataBankItem,
} from '../data-bank-card/data-bank-card.component';
import { SortComponent } from '../../shared/sort/sort.component';
import { RequestDataBankComponent } from '../request-data-bank/request-data-bank.component';
import { ConnectTgdexComponent } from '../connect-tgdex/connect-tgdex.component';
import { PaginatorModule } from 'primeng/paginator';
import { dataBankItems } from '../../shared/data/data-bank-info';

@Component({
  selector: 'app-data-bank',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    SearchBarComponent,
    SidebarFiltersComponent,
    DataBankCardComponent,
    SortComponent,
    RequestDataBankComponent,
    ConnectTgdexComponent,
    PaginatorModule,
  ],
  templateUrl: './data-bank.component.html',
  styleUrl: './data-bank.component.scss',
})
export class DataBankComponent implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', link: '#' },
    { label: 'Data Banks', isActive: true },
  ];

  breadcrumbDescription =
    'Explore a collection of data banks from multiple sectors designed to support analysis, research, and solution development';

  dataBankItems: DataBankItem[] = dataBankItems;

  filteredItems: DataBankItem[] = [...this.dataBankItems];

  // Pagination properties
  first: number = 0;
  rows: number = 6;
  totalRecords: number = 0;
  paginatedItems: DataBankItem[] = [];

  currentSearchTerm: string = '';
  activeFilters: Map<string, string[]> = new Map();
  currentSortOption: string = 'default';

  isMobileFilterPanelOpen: boolean = false;

  ngOnInit(): void {
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalRecords = this.filteredItems.length;
    const startIndex = this.first;
    const endIndex = this.first + this.rows;
    this.paginatedItems = this.filteredItems.slice(startIndex, endIndex);
  }

  onSearch(searchTerm: string): void {
    this.currentSearchTerm = searchTerm;
    this.applyAllFilters();
  }

  onFilterChange(filterData: {
    groupId: string;
    optionId: string;
    isSelected: boolean;
  }): void {
    console.log('Filter changed:', filterData);

    if (filterData.isSelected) {
      // Add filter
      if (!this.activeFilters.has(filterData.groupId)) {
        this.activeFilters.set(filterData.groupId, []);
      }
      const currentFilters = this.activeFilters.get(filterData.groupId)!;
      if (!currentFilters.includes(filterData.optionId)) {
        currentFilters.push(filterData.optionId);
      }
    } else {
      // Remove filter
      const currentFilters = this.activeFilters.get(filterData.groupId);
      if (currentFilters) {
        const index = currentFilters.indexOf(filterData.optionId);
        if (index > -1) {
          currentFilters.splice(index, 1);
        }
        if (currentFilters.length === 0) {
          this.activeFilters.delete(filterData.groupId);
        }
      }
    }

    this.applyAllFilters();
  }

  onResetFilters(): void {
    this.activeFilters.clear();
    this.applyAllFilters();
    console.log('Filters reset');
  }

  // Mobile filter panel methods
  openMobileFilterPanel(): void {
    this.isMobileFilterPanelOpen = true;
    // Prevent body scroll when panel is open
    document.body.style.overflow = 'hidden';
  }

  closeMobileFilterPanel(): void {
    this.isMobileFilterPanelOpen = false;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  onMobileFilterChange(filterData: {
    groupId: string;
    optionId: string;
    isSelected: boolean;
  }): void {
    // Same logic as desktop filters
    this.onFilterChange(filterData);
  }

  onMobileResetFilters(): void {
    // Same logic as desktop reset
    this.onResetFilters();
  }

  onSort(selectedSortOption: string): void {
    this.currentSortOption = selectedSortOption;
    this.applyAllFilters();
  }

  trackByItemId(index: number, item: DataBankItem): string {
    return item.id;
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePagination();
  }

  /**
   * Apply all filters, search, and sorting in sequence
   */
  applyAllFilters(): void {
    let result = [...this.dataBankItems];

    // 1. Apply search filter
    if (this.currentSearchTerm.trim()) {
      const searchLower = this.currentSearchTerm.toLowerCase();
      result = result.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(searchLower);
        const descriptionMatch = item.description
          .toLowerCase()
          .includes(searchLower);
        const departmentMatch = item.department
          .toLowerCase()
          .includes(searchLower);
        const formatMatch = item.format.toLowerCase().includes(searchLower);
        const tagsMatch =
          item.tags?.some((tag) => tag.toLowerCase().includes(searchLower)) ||
          false;

        return (
          titleMatch ||
          descriptionMatch ||
          departmentMatch ||
          formatMatch ||
          tagsMatch
        );
      });
    }

    // 2. Apply category filters
    result = this.applyFilters(result);

    // 3. Apply sorting
    result = this.applySorting(result);

    this.filteredItems = result;
    this.first = 0; // Reset to first page
    this.updatePagination();
  }

  /**
   * Apply filter categories to the data
   */
  applyFilters(items: DataBankItem[]): DataBankItem[] {
    if (this.activeFilters.size === 0) {
      return items;
    }

    return items.filter((item) => {
      // All filter groups must pass (AND logic between groups)
      for (const [groupId, selectedOptions] of this.activeFilters) {
        if (selectedOptions.length === 0) continue;

        let groupMatches = false;

        switch (groupId) {
          case 'industry':
            // Map item department to industry categories
            const itemIndustry = this.getIndustryFromDepartment(
              item.department
            );
            groupMatches = selectedOptions.some((option) =>
              this.matchesIndustryFilter(itemIndustry, option)
            );
            break;

          case 'format':
            groupMatches = selectedOptions.some(
              (option) => item.format.toLowerCase() === option.toLowerCase()
            );
            break;

          case 'permission':
            groupMatches = selectedOptions.some((option) => {
              if (option === 'all') return true;
              return item.status.toLowerCase() === option.toLowerCase();
            });
            break;

          case 'data-readiness':
            const readiness = item.dataReadiness || 0;
            groupMatches = selectedOptions.some((option) => {
              switch (option) {
                case '100':
                  return readiness >= 80 && readiness <= 100;
                case '80':
                  return readiness >= 60 && readiness < 80;
                case '60':
                  return readiness < 60;
                default:
                  return false;
              }
            });
            break;

          case 'update-date':
            const itemDate = new Date(
              item.updatedDate.replace(/(\d{2})-(\w{3})-(\d{4})/, '$2 $1, $3')
            );
            const now = new Date();
            groupMatches = selectedOptions.some((option) => {
              switch (option) {
                case '7':
                  const sevenDaysAgo = new Date(
                    now.getTime() - 7 * 24 * 60 * 60 * 1000
                  );
                  return itemDate >= sevenDaysAgo;
                case '30':
                  const thirtyDaysAgo = new Date(
                    now.getTime() - 30 * 24 * 60 * 60 * 1000
                  );
                  return itemDate >= thirtyDaysAgo;
                case '1':
                  const oneYearAgo = new Date(
                    now.getTime() - 365 * 24 * 60 * 60 * 1000
                  );
                  return itemDate >= oneYearAgo;
                default:
                  return false;
              }
            });
            break;

          case 'orgType':
          case 'org':
            // Match department against selected organization options (slugified)
            const deptSlug = this.getDepartmentSlug(item.department);
            groupMatches = selectedOptions.some(
              (opt) => opt.toLowerCase() === deptSlug
            );
            break;

          default:
            groupMatches = true; // Unknown filters pass by default
        }

        if (!groupMatches) {
          return false; // If any group doesn't match, exclude this item
        }
      }

      return true; // All groups matched
    });
  }

  applySorting(items: DataBankItem[]): DataBankItem[] {
    if (this.currentSortOption === 'default' || !this.currentSortOption) {
      return [...items];
    }

    return [...items].sort((a, b) => {
      switch (this.currentSortOption) {
        case 'alphabetical':
          return a.title.localeCompare(b.title);

        case 'reverse':
          return b.title.localeCompare(a.title);

        case 'recent':
          const dateA = new Date(
            a.updatedDate.replace(/(\d{2})-(\w{3})-(\d{4})/, '$2 $1, $3')
          );
          const dateB = new Date(
            b.updatedDate.replace(/(\d{2})-(\w{3})-(\d{4})/, '$2 $1, $3')
          );
          return dateB.getTime() - dateA.getTime();

        case 'oldest':
          const dateOldA = new Date(
            a.updatedDate.replace(/(\d{2})-(\w{3})-(\d{4})/, '$2 $1, $3')
          );
          const dateOldB = new Date(
            b.updatedDate.replace(/(\d{2})-(\w{3})-(\d{4})/, '$2 $1, $3')
          );
          return dateOldA.getTime() - dateOldB.getTime();

        case 'readiness':
          const readinessA = a.dataReadiness || 0;
          const readinessB = b.dataReadiness || 0;
          return readinessB - readinessA;

        default:
          return 0;
      }
    });
  }

  /**
   * Helper method to get industry category from department
   */
  getIndustryFromDepartment(department: string): string {
    const dept = department.toLowerCase();
    if (dept.includes('health') || dept.includes('medical')) return 'health';
    if (dept.includes('education') || dept.includes('school'))
      return 'education';
    if (dept.includes('agriculture') || dept.includes('farming'))
      return 'agriculture';
    return 'other';
  }

  /**
   * Helper method to match industry filter
   */
  matchesIndustryFilter(itemIndustry: string, filterOption: string): boolean {
    return itemIndustry === filterOption.toLowerCase();
  }

  private getDepartmentSlug(department: string): string {
    return department
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
