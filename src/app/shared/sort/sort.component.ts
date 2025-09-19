import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

export interface SortOption {
  key: string;
  name: string;
  value: string;
}

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule, FormsModule, ListboxModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
})
export class SortComponent {
  @Output() sortChange = new EventEmitter<string>();

  isDropdownOpen = false;

  constructor(private elementRef: ElementRef) {}

  options: SortOption[] = [
    { key: 'alphabetical', name: 'A–Z', value: 'alphabetical' },
    { key: 'reverse', name: 'Z-A', value: 'reverse' },
    { key: 'recent', name: 'New to Old', value: 'recent' },
    { key: 'oldest', name: 'Old to New', value: 'oldest' },
    { key: 'readiness', name: 'Data Readiness', value: 'readiness' },
  ];

  selectedOption: SortOption | null = null;

  get selectedSort(): string {
    return this.selectedOption
      ? this.selectedOption.name
      : 'Explore Collection';
  }

  toggleSort(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onCategoryChange(): void {
    if (this.selectedOption) {
      this.sortChange.emit(this.selectedOption.value);
    } else {
      this.sortChange.emit('default');
    }
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (
      this.isDropdownOpen &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.closeDropdown();
    }
  }
}
