import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Experiment {
  id: number;
  name: string;
  displayName: string;
  extension: string;
}

async function getExperiments(): Promise<Experiment[]> {
  const experimentsDir = path.join(process.cwd(), 'experiments');
  
  if (!fs.existsSync(experimentsDir)) {
    return [];
  }

  const files = fs.readdirSync(experimentsDir);
  return files
    .filter(file => !file.startsWith('.'))
    .map((file, index) => ({
      id: index + 1,
      name: file,
      displayName: `Exp ${index + 1}`,
      extension: path.extname(file).slice(1).toUpperCase(),
    }));
}

export default async function Home() {
  const experiments = await getExperiments();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Experiments
        </h1>
        <p className="text-gray-600">
          Download experiment files
        </p>
      </header>

      {experiments.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>No experiments available.</p>
          <p className="text-sm mt-2">Add files to the <code className="bg-gray-200 px-2 py-1 rounded">/experiments</code> folder to get started.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {experiments.map((experiment) => (
            <div
              key={experiment.id}
              className="flex items-center justify-between bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                  {experiment.displayName}
                </span>
                <div className="flex flex-col">
                  <span className="text-gray-900 font-medium">
                    {experiment.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {experiment.extension} file
                  </span>
                </div>
              </div>
              <Link
                href={`/api/download/${encodeURIComponent(experiment.name)}`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download
              </Link>
            </div>
          ))}
        </div>
      )}

      <footer className="text-center mt-12 text-sm text-gray-500">
        <p>Total: {experiments.length} experiment{experiments.length !== 1 ? 's' : ''}</p>
      </footer>
    </main>
  );
}
