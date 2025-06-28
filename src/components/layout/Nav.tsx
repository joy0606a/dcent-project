import { Wallet, TrendingUp, ArrowLeftRight, Compass, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {useTranslations} from 'next-intl';

const Nav: React.FC = () => {
  const t = useTranslations('navigation');
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white dcent-layout py-4">
      <div className="flex items-center justify-around">
        <Button variant="ghost" size="sm" className="flex h-12 flex-1 flex-col items-center gap-1 text-gray-400 hover:text-white">
          <Wallet size={32} />
          <span className="text-[10px]">{t('myWallet')}</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex h-12 flex-1 flex-col items-center gap-1 text-gray-400 hover:text-white">
          <TrendingUp size={32} />
          <span className="text-[10px]">{t('insight')}</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex h-12 flex-1 flex-col items-center gap-1 text-gray-900 hover:bg-gray-100">
            <div className="bg-white w-full h-full flex items-center justify-center rounded-md">
                <ArrowLeftRight size={32} className="text-gray-900"/>
            </div>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex h-12 flex-1 flex-col items-center gap-1 text-green-400 hover:text-green-300">
          <Compass size={32} />
          <span className="text-[10px]">{t('discovery')}</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex h-12 flex-1 flex-col items-center gap-1 text-gray-400 hover:text-white">
          <Settings size={32} />
          <span className="text-[10px]">{t('settings')}</span>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
