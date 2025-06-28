'use client';

import { useLocale } from 'next-intl';
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
        className="bg-muted-foreground/10 text-foreground hover:bg-muted-foreground/20"
        onClick={() => handleLanguageChange(locale === 'ko' ? 'en' : 'ko')}
      >
        <Globe size={24} />
      </Button>

      {/* TODO: 언어 선택 dialog 추가 */}
    </div>
  );
}
