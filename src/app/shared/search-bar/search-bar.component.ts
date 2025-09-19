import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  searchTerm: string = '';
  private searchTimeout: any;

  onSearch(): void {
    this.search.emit(this.searchTerm);
  }

  onSearchInput(event: Event): void {
    // Debounce search to avoid too many API calls
    this.searchTerm = (event.target as HTMLInputElement).value;
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      this.onSearch();
    }, 300); // 300ms delay
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.onSearch();
  }
}
