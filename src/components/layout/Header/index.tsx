import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import LanguageSwitcher from '@/components/layout/Header/LanguageSwitcher';
import {useTranslations} from 'next-intl';

const Header: React.FC = () => {
  const t = useTranslations('search');
  
  return (
    <header className="dcent-layout bg-white border-b border-gray-200 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between gap-2">
        {/* TODO: logo? */}
        <div className="flex items-center">
          <h1 className="text-lg font-semibold text-gray-900">Dcent</h1>
        </div>
        
        {/* Search Bar */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder={t('placeholder')}
              className="w-full text-sm placeholder:text-sm pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
