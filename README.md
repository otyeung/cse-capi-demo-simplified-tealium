# LinkedIn CAPI Demo with Tealium Integration

A responsive web application that demonstrates LinkedIn Conversion API (CAPI) integration with Tealium. This application provides a form interface for collecting user data and showcasing LinkedIn's CAPI functionality.

## Demo

🚀 **Live Demo**: [https://cse-capi-demo-simplified-tealium.vercel.app/](https://cse-capi-demo-simplified-tealium.vercel.app/)

## Features

- Mobile responsive design that works on all device sizes
- LinkedIn CAPI integration demo
- Form data collection with validation
- Modal-based result display
- First-party cookie detection (li_fat_id)

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- pnpm package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/cse-capi-demo-simplified-tealium.git
   cd cse-capi-demo-simplified-tealium
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Run the application locally

Start the development server:

```bash
pnpm start
```

The application runs on port 3000. Open a browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Testing Responsiveness

The application is designed to be fully responsive:

- Desktop: Full layout with two-column form sections
- Tablet: Adaptive layout with proper spacing
- Mobile: Single column layout optimized for smaller screens

You can test responsiveness using browser developer tools (F12 → Toggle device toolbar), resizing your browser window, or viewing on actual mobile devices.

## Deployment

### Deploy to Vercel

1. **Prepare for deployment**:

   Modify the `package.json` file by either:

   - Removing the `homepage` property, or
   - Setting it to the production URL from Vercel (which will be generated automatically during deployment)

2. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

3. **Deploy to Vercel**:

   ```bash
   vercel
   ```

   You will be prompted to log in and answer a few configuration questions. Choose the default options for a standard setup.

4. **Deploy to production**:

   Once you're satisfied with the preview deployment, deploy to production:

   ```bash
   vercel --prod
   ```

5. **Access the application** by opening your browser and navigating to the production URL provided by Vercel.

## Application Structure

- **App.tsx**: Main application component
- **ContactForm.tsx**: Form component with LinkedIn CAPI integration
- **Modal.tsx**: Modal component for displaying form submission results
- **App.css**: Styles including responsive design implementations

## Troubleshooting

### Webpack Deprecation Warnings

You may see webpack deprecation warnings when running the development server. These warnings are related to `onAfterSetupMiddleware` and `onBeforeSetupMiddleware` options in React Scripts 5.x and are expected behavior.

**What causes these warnings?**

- React Scripts 5.x uses an older version of webpack-dev-server
- The warnings are cosmetic and don't affect application functionality
- This is a known issue in the React Scripts ecosystem

**Solution implemented:**
This project includes a warning suppression script (`suppress-warnings.js`) that filters out these specific deprecation warnings while preserving other important warnings and errors.

**Alternative solutions:**

- Migrate to Vite or another modern build tool (recommended for new projects)
- Wait for React Scripts to be updated (unlikely as it's no longer actively maintained)
- Eject from Create React App and update webpack manually (not recommended)

### Common Issues

1. **Port 3000 already in use**: Change the port by setting the PORT environment variable:

   ```bash
   PORT=3001 pnpm start
   ```

2. **LinkedIn Insight Tag not loading**: Check your browser's network tab to ensure the LinkedIn script is loading properly.

## Technologies Used

- React with TypeScript
- TailwindCSS for styling
- LinkedIn Conversion API (CAPI)
- Tealium integration

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.

## Last Updated

October 8, 2025
