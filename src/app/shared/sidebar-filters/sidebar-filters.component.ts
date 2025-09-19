import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { dataBankItems } from '../data/data-bank-info';

export interface FilterGroup {
  id: string;
  title: string;
  iconUrl: string;
  options: FilterOption[];
  isExpanded?: boolean;
}

export interface FilterOption {
  id: string;
  label: string;
  isSelected?: boolean;
}

@Component({
  selector: 'app-sidebar-filters',
  standalone: true,
  imports: [CommonModule, ChipModule],
  templateUrl: './sidebar-filters.component.html',
  styleUrl: './sidebar-filters.component.scss',
})
export class SidebarFiltersComponent implements OnInit {
  @Output() filterChange = new EventEmitter<{
    groupId: string;
    optionId: string;
    isSelected: boolean;
  }>();
  @Output() resetFilters = new EventEmitter<void>();

  filterGroups: FilterGroup[] = [
    {
      id: 'orgType',
      title: 'Organization Type',
      iconUrl: 'assets/building.svg',
      isExpanded: false,
      options: [{ id: 'govt', label: 'Public' }],
    },
    {
      id: 'org',
      title: 'Organization',
      iconUrl: 'assets/flag.svg',
      isExpanded: false,
      options: [],
    },
    {
      id: 'industry',
      title: 'Industry',
      iconUrl: 'assets/flag.svg',
      isExpanded: false,
      options: [
        { id: 'health', label: 'Health' },
        { id: 'education', label: 'Education' },
        { id: 'agriculture', label: 'Agriculture' },
      ],
    },
    {
      id: 'format',
      title: 'File Format',
      iconUrl: 'assets/folder.svg',
      isExpanded: false,
      options: [
        { id: 'parquet', label: 'PARQUET' },
        { id: 'dicom', label: 'DICOM' },
        { id: 'tsv', label: 'TSV' },
        { id: 'xml', label: 'XML' },
      ],
    },
    {
      id: 'permission',
      title: 'Permission',
      iconUrl: 'assets/key.svg',
      isExpanded: false,
      options: [
        { id: 'all', label: 'All' },
        { id: 'open', label: 'OPEN' },
        { id: 'restricted', label: 'RESTRICTED' },
      ],
    },
    {
      id: 'update-date',
      title: 'Last Updated',
      iconUrl: 'assets/calendar.svg',
      isExpanded: false,
      options: [
        { id: '7', label: '7 Days Ago' },
        { id: '30', label: 'Last 30 Days' },
        { id: '1', label: 'Last 1 Year' },
      ],
    },
    {
      id: 'data-readiness',
      title: 'Data Readiness',
      iconUrl: 'assets/rocket.svg',
      isExpanded: false,
      options: [
        { id: '100', label: '80%-100%' },
        { id: '80', label: '60%-80%' },
        { id: '60', label: 'Less than 60%' },
      ],
    },
  ];

  ngOnInit(): void {
    // Populate the Organization filter with unique departments from dummy data
    const departmentSet = new Set<string>();
    dataBankItems.forEach((item) => departmentSet.add(item.department));
    const departments = Array.from(departmentSet).sort((a, b) =>
      a.localeCompare(b)
    );

    const orgGroup = this.filterGroups.find((g) => g.id === 'org');
    if (orgGroup) {
      orgGroup.options = departments.map((dept) => ({
        id: this.slugify(dept),
        label: dept,
      }));
    }
  }

  private slugify(value: string): string {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  toggleGroup(groupId: string): void {
    const group = this.filterGroups.find((g) => g.id === groupId);
    if (group) {
      group.isExpanded = !group.isExpanded;
    }
  }

  onFilterToggle(groupId: string, optionId: string): void {
    const group = this.filterGroups.find((g) => g.id === groupId);
    const option = group?.options.find((o) => o.id === optionId);
    if (option) {
      option.isSelected = !option.isSelected;
      this.filterChange.emit({
        groupId,
        optionId,
        isSelected: option.isSelected,
      });
    }
  }

  onResetFilters(): void {
    this.filterGroups.forEach((group) => {
      group.options.forEach((option) => {
        option.isSelected = false;
      });
    });
    this.resetFilters.emit();
  }
}
