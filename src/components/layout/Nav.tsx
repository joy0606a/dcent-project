import {
  Wallet,
  TrendingUp,
  ArrowLeftRight,
  Compass,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

const Nav: React.FC = () => {
  const t = useTranslations('navigation');

  return (
    <nav className="dcent-layout fixed right-0 bottom-0 left-0 bg-gray-900 py-4 text-white">
      <div className="flex items-center justify-around">
        <Button
          variant="ghost"
          size="sm"
          className="flex h-12 flex-1 flex-col items-center gap-1 text-gray-400 hover:bg-gray-900 hover:text-white"
        >
          <Wallet size={32} />
          <span className="text-[10px]">{t('myWallet')}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex h-12 flex-1 flex-col items-center gap-1 text-gray-400 hover:bg-gray-900 hover:text-white"
        >
          <TrendingUp size={32} />
          <span className="text-[10px]">{t('insight')}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex h-12 flex-1 flex-col items-center gap-1 text-gray-900 hover:bg-gray-900"
        >
          <div className="flex h-full w-full items-center justify-center rounded-md bg-white">
            <ArrowLeftRight size={32} className="text-gray-900" />
          </div>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex h-12 flex-1 flex-col items-center gap-1 text-green-400 hover:bg-gray-900 hover:text-green-400"
        >
          <Compass size={32} />
          <span className="text-[10px]">{t('discovery')}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex h-12 flex-1 flex-col items-center gap-1 text-gray-400 hover:bg-gray-900 hover:text-white"
        >
          <Settings size={32} />
          <span className="text-[10px]">{t('settings')}</span>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
