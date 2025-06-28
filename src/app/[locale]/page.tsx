import {useTranslations} from 'next-intl';

export default function Home() {

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Title
        </h1>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Description
          </p>
        </div>
      </div>
    </div>
  );
}
