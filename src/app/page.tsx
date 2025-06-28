import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Environment Variables
        </h1>
        
        <div className="space-y-4">
          <div className="border-b pb-2">
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
              NEXT_PUBLIC_ENV:
            </label>
            <p className="text-lg font-mono text-blue-600 dark:text-blue-400">
              {process.env.NEXT_PUBLIC_ENV || 'undefined'}
            </p>
          </div>
          
          <div className="border-b pb-2">
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
              API_BASE_URL:
            </label>
            <p className="text-lg font-mono text-green-600 dark:text-green-400 break-all">
              {process.env.API_BASE_URL || 'undefined'}
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Environment variables loaded successfully!
          </p>
        </div>
      </div>
    </div>
  );
}
