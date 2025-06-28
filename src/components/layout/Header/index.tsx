import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import LanguageSwitcher from '@/components/layout/Header/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Header: React.FC = () => {
  const t = useTranslations('search');

  return (
    <header className="dcent-layout fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white py-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold text-gray-900">
            <Image
              src="https://cdn.prod.website-files.com/668b3a82199c56fe12067652/668b3a82199c56fe12067710_logo_color.svg"
              alt="Dcent"
              width={88}
              height={40}
            />
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <Input
              type="text"
              placeholder={t('placeholder')}
              className="w-full rounded-lg py-2 pr-4 pl-10 text-sm outline-none placeholder:text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Language selector */}
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
