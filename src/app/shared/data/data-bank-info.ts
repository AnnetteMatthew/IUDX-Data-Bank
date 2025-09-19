import { DataBankItem } from '../../pages/data-bank-card/data-bank-card.component';

export const dataBankItems: DataBankItem[] = [
  {
    id: '1',
    title: 'Antenatal Care (ANC) Visit Details Table',
    description:
      'Visit-wise ANC data from the MCH system capturing medical assessments, diagnostics, vitals, and supplement distribution during pregnancy.',
    department: 'Dept. of Health, Medical & Family Welfare',
    updatedDate: '22-Jun-2025',
    status: 'open',
    format: 'PARQUET',
    dataReadiness: 68.82,
    tags: ['ANC Visits', 'Medical Assess...', 'Supplement T'],
  },
  {
    id: '2',
    title: 'eAushadhi - District Master Table',
    description:
      'District-level reference table in eAushadhi capturing codes, hospital mappings, zones, and administrative metadata...',
    department: 'Dept. of Health, Medical & Family Welfare',
    updatedDate: '15-Aug-2025',
    status: 'open',
    format: 'API',
    dataReadiness: 85.4,
    tags: ['District Codes', 'Hospital Mapping', 'Zones'],
  },
  {
    id: '3',
    title: 'Crop Production Statistics 2015–2025',
    description:
      'Comprehensive agricultural data covering crop yields, production volumes, and seasonal patterns across districts...',
    department: 'Department of Agriculture',
    updatedDate: '10-Jul-2025',
    status: 'restricted',
    format: 'CSV',
    dataReadiness: 92.1,
    tags: ['Crop Yields', 'Production', 'Seasonal Data'],
  },
  {
    id: '4',
    title: 'School Enrollment by District',
    description:
      'Student enrollment data across primary and secondary schools with demographic breakdowns and trend analysis...',
    department: 'Education Department',
    updatedDate: 'Jun 2025',
    status: 'restricted',
    format: 'DICOM',
    dataReadiness: 75.0,
    tags: ['Enrollment', 'Demographics', 'Schools'],
  },
  {
    id: '5',
    title: 'PHC Facilities and Bed Strength',
    description:
      'Primary Health Center infrastructure data including facility capacity, equipment, and staffing information...',
    department: 'Health & Family Welfare',
    updatedDate: 'May 2025',
    status: 'open',
    format: 'API',
    dataReadiness: 88.5,
    tags: ['PHC', 'Healthcare', 'Infrastructure'],
  },
  {
    id: '6',
    title: 'State Road Network and Traffic Counts',
    description:
      'Transportation infrastructure mapping with traffic volume data and road condition assessments...',
    department: 'Transport Department',
    updatedDate: 'Apr 2025',
    status: 'open',
    format: 'GeoJSON',
    dataReadiness: 79.2,
    tags: ['Roads', 'Traffic', 'Transportation'],
  },
  {
    id: '7',
    title: 'Water Quality Monitoring Data',
    description:
      'Comprehensive water quality assessment data from various sources including lakes, rivers, and groundwater...',
    department: 'Environment Department',
    updatedDate: 'Mar 2025',
    status: 'open',
    format: 'CSV',
    dataReadiness: 91.5,
    tags: ['Water Quality', 'Environment', 'Monitoring'],
  },
  {
    id: '8',
    title: 'Industrial Production Statistics',
    description:
      'Manufacturing output data across different industrial sectors with quarterly and annual trends...',
    department: 'Industries Department',
    updatedDate: 'Feb 2025',
    status: 'restricted',
    format: 'TSV',
    dataReadiness: 87.3,
    tags: ['Industry', 'Manufacturing', 'Statistics'],
  },
  {
    id: '9',
    title: 'Employment Survey Results',
    description:
      'Labor market analysis with employment rates, job categories, and skill demand patterns...',
    department: 'Labor Department',
    updatedDate: 'Jan 2025',
    status: 'open',
    format: 'XML',
    dataReadiness: 82.7,
    tags: ['Employment', 'Labor', 'Survey'],
  },
  {
    id: '10',
    title: 'Tourism Statistics and Visitor Data',
    description:
      'Tourist arrivals, popular destinations, and seasonal tourism patterns with revenue analysis...',
    department: 'Tourism Department',
    updatedDate: 'Dec 2024',
    status: 'open',
    format: 'API',
    dataReadiness: 76.8,
    tags: ['Tourism', 'Visitors', 'Revenue'],
  },
];
