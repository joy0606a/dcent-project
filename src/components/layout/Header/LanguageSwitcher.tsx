'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        className="bg-muted-foreground/10 text-foreground"
        onClick={() => handleLanguageChange(locale === 'ko' ? 'en' : 'ko')}
      >
        <Globe size={24} />
      </Button>

      {/* TODO: 언어 선택 dialog 추가 */}
      {/* <select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc === 'ko' ? '한국어' : 'English'}
          </option>
        ))}
      </select> */}
    </div>
  );
}
