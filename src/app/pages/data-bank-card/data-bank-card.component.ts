import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';

export interface DataBankItem {
  id: string;
  title: string;
  description: string;
  department: string;
  updatedDate: string;
  status: 'open' | 'restricted';
  format: string;
  dataReadiness?: number;
  tags?: string[];
  imageUrl?: string;
}

@Component({
  selector: 'app-data-bank-card',
  standalone: true,
  imports: [CommonModule, ChipModule],
  templateUrl: './data-bank-card.component.html',
  styleUrl: './data-bank-card.component.scss',
})
export class DataBankCardComponent {
  @Input() item!: DataBankItem;
}
