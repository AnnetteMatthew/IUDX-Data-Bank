# TGDeX Data Bank Portal

A modern, responsive Angular 18 application for exploring and accessing data banks from the Telangana Data Exchange platform.

## 🚀 Features Overview

### 🎨 UI/UX Design
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes (320px to 1400px+)
- **Modern Interface**: Clean, intuitive design inspired by government data portals
- **Consistent Branding**: Telangana government color scheme and typography
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### 📱 Responsive Layout
- **Desktop**: Full sidebar with filters, multi-column grid layout
- **Tablet**: Collapsible sidebar, optimized grid spacing
- **Mobile**: Hidden sidebar with slide-out filter panel, single-column layout
- **Ultra-small screens (320px)**: Optimized for smallest devices

### 🏗️ Component Architecture

#### Core Page Components
- **DataBankComponent**: Main page orchestrating all functionality
- **HeaderComponent**: Fixed navigation with mobile menu
- **FooterComponent**: Multi-column footer with accordion for mobile

#### Shared Components
- **BreadcrumbComponent**: Navigation breadcrumbs with inline description
- **SearchBarComponent**: Real-time search with debouncing (300ms delay)
- **SidebarFiltersComponent**: Advanced filtering with PrimeNG chips
- **DataBankCardComponent**: Uniform height cards with data readiness indicators
- **SortComponent**: Multi-option sorting with default state
- **PaginatorComponent**: PrimeNG paginator with configurable page sizes
- **RequestDataBankComponent**: Call-to-action section
- **ConnectTgdexComponent**: Contact and social media section

### 🔍 Search & Filter System

#### Search Functionality
- **Real-time Search**: Debounced input with 300ms delay
- **Multi-field Search**: Searches across title, description, department, format, and tags
- **Case-insensitive**: Flexible search matching
- **Inline Search Button**: Search button integrated within input field

#### Advanced Filtering
- **Organization Type**: Public/Government filters
- **Organization**: Dynamic list populated from data (all departments)
- **Industry**: Health, Education, Agriculture categories
- **File Format**: PARQUET, DICOM, TSV, XML, CSV, API
- **Permission**: All, Open, Restricted access levels
- **Last Updated**: 7 days, 30 days, 1 year options
- **Data Readiness**: 80-100%, 60-80%, <60% ranges

#### Filter Features
- **Dynamic Chips**: Clickable PrimeNG chips with active states
- **Text Truncation**: Long organization names show ellipsis
- **Mobile Panel**: Slide-out filter panel for mobile devices
- **Reset Functionality**: Clear all filters with one click
- **Filter State Management**: Persistent filter state across operations

### 📊 Sorting System
- **Multiple Sort Options**: A-Z, Z-A, New to Old, Old to New, Data Readiness
- **Default State**: Returns to original order when unchecked
- **PrimeNG Listbox**: Checkbox-style selection with single choice
- **Dropdown Interaction**: Click outside to close, backdrop support
- **Sort Button**: Fixed width to prevent layout shift

### 📄 Pagination
- **PrimeNG Paginator**: Professional pagination component
- **Configurable Page Sizes**: 6, 12, 18 items per page
- **Responsive Design**: Adapts to screen size
- **State Management**: Maintains pagination across filter/search changes

### 💾 Data Management
- **TypeScript Interfaces**: Strongly typed data structures
- **Sample Data**: 10 realistic data bank entries
- **Data Fields**: ID, title, description, department, updated date, status, format, data readiness, tags
- **Dynamic Organization Filter**: Auto-populated from actual data

### 📱 Mobile Experience

#### Mobile Header
- **Fixed Header**: Stays at top during scroll
- **Hamburger Menu**: Smooth dropdown animation from header
- **Mobile Navigation**: Full-width panel with navigation links

#### Mobile Filter Panel
- **Slide-out Panel**: 85% width overlay from left side
- **Touch-friendly**: Large touch targets and smooth animations
- **Backdrop Close**: Tap outside to close
- **Scrollable Content**: Handle long filter lists

#### Mobile Footer
- **Accordion Structure**: Collapsible sections for navigation
- **Social Media Links**: Clickable links to official Telangana government social media
- **Responsive Breakpoints**: Different layouts for various screen sizes

### 🌐 Social Media Integration
Official Telangana Emerging Technologies Wing social media links:
- **Facebook**: https://www.facebook.com/etgots/
- **X (Twitter)**: https://x.com/emergingtechts
- **LinkedIn**: https://www.linkedin.com/company/et-itec-gots/
- **Instagram**: https://www.instagram.com/emerging.technology.ts.gov.in/

#### Desktop Social Media
- **Icon Buttons**: SVG icons with hover animations
- **Hover Effects**: Color change to green, upward transform
- **New Tab Opening**: All links open in new tabs with security attributes

#### Mobile Social Media
- **Accordion Links**: Clickable text links in mobile footer accordion
- **Same URLs**: Consistent linking across desktop and mobile
- **Hover Styles**: Color changes and underlines on interaction

### 🎯 User Experience Features

#### No Results State
- **Empty State Message**: "Oops! We Couldn't Find What You Were Looking For"
- **Helpful Text**: Suggests trying different keywords or adjusting filters
- **Clean Design**: Centered layout with clear messaging

#### Loading & Performance
- **Debounced Search**: Prevents excessive API calls during typing
- **Efficient Filtering**: Client-side filtering with optimized algorithms
- **trackBy Functions**: Optimized Angular *ngFor performance
- **Lazy Loading Ready**: Component structure supports lazy loading

#### Accessibility
- **ARIA Labels**: Screen reader support for all interactive elements
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus handling in modals and dropdowns

### 🛠️ Technical Implementation

#### Angular 18 Features
- **Standalone Components**: No NgModules, tree-shakable architecture
- **Signal-based**: Ready for Angular's future signal-based reactivity
- **Modern TypeScript**: Latest TypeScript features and strict mode
- **SSR Ready**: Component structure supports Server-Side Rendering

#### PrimeNG Integration
- **Lara Light Blue Theme**: Professional UI theme
- **Components Used**: Paginator, Chips, Listbox, Icons
- **Custom Styling**: Deep component customization with ::ng-deep
- **Responsive Components**: All PrimeNG components adapt to screen size

#### State Management
- **Reactive Patterns**: Event emitters and property binding
- **Centralized Logic**: Main component orchestrates all state
- **Filter State**: Map-based filter storage for complex queries
- **Search State**: Debounced search term management

#### SCSS Architecture
- **Component Styles**: Scoped styles for each component
- **Global Utilities**: Reusable utility classes
- **Responsive Mixins**: Consistent breakpoint handling
- **CSS Variables**: Maintainable color and spacing system
- **Mobile-first**: Progressive enhancement from mobile to desktop

### 🔧 Development Features

#### Code Quality
- **TypeScript Strict Mode**: Full type safety
- **ESLint Configuration**: Code quality enforcement
- **Component Isolation**: Each component is self-contained
- **Clean Architecture**: Separation of concerns

#### Performance Optimizations
- **OnPush Change Detection**: Optimized rendering (ready to implement)
- **TrackBy Functions**: Efficient list rendering
- **Lazy Loading**: Component structure supports route-based code splitting
- **Tree Shaking**: Dead code elimination with standalone components

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+
- Angular CLI 18

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd data-bank

# Install dependencies
npm install

# Start development server
ng serve

# Build for production
ng build
```

### Development Server
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

## 📁 Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── data-bank/           # Main page component
│   │   ├── header/              # Header component
│   │   ├── footer/              # Footer component
│   │   ├── request-data-bank/   # CTA section
│   │   └── connect-tgdex/       # Contact section
│   ├── shared/
│   │   ├── breadcrumb/          # Navigation breadcrumbs
│   │   ├── search-bar/          # Search functionality
│   │   ├── sidebar-filters/     # Filter system
│   │   ├── data-bank-card/      # Data bank cards
│   │   ├── sort/                # Sorting component
│   │   └── data/                # Sample data
│   ├── app.component.*          # Root component
│   ├── app.config.ts            # App configuration
│   └── app.routes.ts            # Routing configuration
├── assets/                      # Static assets
├── styles.scss                  # Global styles
└── main.ts                      # Application bootstrap
```

## 🎨 Design System

### Colors
- **Primary Green**: #059669 (buttons, active states)
- **Secondary Green**: #00a651 (accents)
- **Background**: #d8f7eb (header section)
- **Text Primary**: #1f2937
- **Text Secondary**: #6b7280
- **Border**: #e5e7eb

### Typography
- **Font Family**: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif
- **Responsive Sizing**: clamp() functions for fluid typography
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold)

### Spacing
- **Base Unit**: 0.25rem (4px)
- **Common Spacing**: 0.5rem, 1rem, 1.5rem, 2rem
- **Responsive Gaps**: Adapts to screen size

## 📱 Responsive Breakpoints

```scss
// Ultra-small screens
@media (max-width: 460px) { /* Optimized for 320px+ */ }

// Mobile
@media (max-width: 767px) { /* Mobile optimizations */ }

// Tablet
@media (min-width: 768px) { /* Tablet layouts */ }

// Desktop
@media (min-width: 1200px) { /* Desktop features */ }

// Large Desktop
@media (min-width: 1400px) { /* Full desktop layout */ }
```
**Built with**: Angular 18, PrimeNG, TypeScript, SCSS