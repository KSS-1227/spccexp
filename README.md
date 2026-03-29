# Experiments Download Site

A lightweight, production-ready web application for downloading experiment files, built with Next.js 14 and deployable on Vercel.

## Features

- Dynamically lists all files from the `/experiments` folder
- Clean, responsive UI with TailwindCSS
- Direct download links for each experiment
- Vercel-ready configuration

## Project Structure

```
/
├── app/
│   ├── api/
│   │   ├── experiments/
│   │   │   └── route.ts          # API endpoint to list experiments
│   │   └── download/
│   │       └── [filename]/
│   │           └── route.ts      # API endpoint for file downloads
│   ├── globals.css                # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage with experiment list
├── experiments/                  # Place your experiment files here
│   ├── exp1.txt
│   ├── exp2.csv
│   └── exp3.json
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your experiment files:**
   Place your files in the `/experiments` folder. They will be automatically listed on the homepage.

3. **Run locally:**
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to see your experiments.

## Vercel Deployment

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel deploy
   ```

   For production deployment:
   ```bash
   vercel deploy --prod
   ```

### Option 2: Deploy via GitHub

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will automatically detect Next.js and deploy

### Option 3: Deploy via Vercel Dashboard

1. Download this project as a ZIP
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Upload the project folder
5. Deploy

## Adding Experiments

Simply add files to the `/experiments` folder:

```
experiments/
├── experiment1.pdf
├── experiment2.txt
├── results.csv
├── data.json
└── report.docx
```

Each file will automatically appear on the homepage with:
- Experiment number (based on order)
- Original filename
- File type/extension
- Download button

## API Endpoints

### List Experiments
- **URL:** `/api/experiments`
- **Method:** GET
- **Response:**
  ```json
  {
    "experiments": [
      {
        "id": 1,
        "name": "exp1.txt",
        "displayName": "Exp 1",
        "extension": "TXT"
      }
    ]
  }
  ```

### Download Experiment
- **URL:** `/api/download/{filename}`
- **Method:** GET
- **Response:** File download

## Supported File Types

The download API supports various file types including:
- Documents: PDF, TXT, DOC, DOCX
- Spreadsheets: XLS, XLSX, CSV
- Images: PNG, JPG, JPEG, GIF
- Archives: ZIP, RAR
- Data: JSON, XML

## Configuration

### Vercel Configuration

The project includes a `vercel.json` configuration (optional). The default `next.config.js` is already optimized for Vercel.

### Environment Variables

No environment variables are required for basic functionality.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Deployment:** Vercel

## License

MIT
