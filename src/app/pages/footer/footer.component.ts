import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Removed PanelMenu and MenuItem as we are implementing a custom accordion for <1400px

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  // Reusable sections rendered via *ngFor for < 1400px
  accordionSections: Array<{
    id: string;
    title: string;
    items: Array<{ label: string; url?: string }>;
    open: boolean;
  }> = [
    {
      id: 'tgdex',
      title: 'TGDeX',
      items: [{ label: 'Home' }, { label: 'About TGDeX' }],
      open: false,
    },
    {
      id: 'platform',
      title: 'Platform Features',
      items: [
        { label: 'Data Banks' },
        { label: 'AI Models' },
        { label: 'Use Cases' },
        { label: 'Sandbox IDE' },
        { label: 'Toolsets' },
        { label: 'Library' },
      ],
      open: false,
    },
    {
      id: 'help',
      title: 'Help & Support',
      items: [
        { label: 'Help & Support' },
        { label: 'FAQs' },
        { label: 'User Manual' },
        { label: 'Sitemap' },
      ],
      open: false,
    },
    {
      id: 'social',
      title: 'Social Media',
      items: [
        { label: 'Facebook', url: 'https://www.facebook.com/etgots/' },
        { label: 'X (Twitter)', url: 'https://x.com/emergingtechts' },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/company/et-itec-gots/?originalSubdomain=in',
        },
        {
          label: 'Instagram',
          url: 'https://www.instagram.com/emerging.technology.ts.gov.in/',
        },
      ],
      open: false,
    },
  ];

  toggleSection(sectionId: string): void {
    const section = this.accordionSections.find((s) => s.id === sectionId);
    if (section) {
      section.open = !section.open;
    }
  }

  trackBySectionId = (_: number, section: { id: string }): string => section.id;
}
