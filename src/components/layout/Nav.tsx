import { Wallet, TrendingUp, ArrowLeftRight, Compass, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Nav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white dcent-layout py-4">
      <div className="flex items-center justify-around">
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
          <Wallet size={32} />
          <span className="text-[10px]">My Wallet</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
          <TrendingUp size={32} />
          <span className="text-[10px]">Insight</span>
        </Button>
        
        <Button variant="ghost" size="lg" className="flex flex-col items-center gap-1 bg-white text-gray-900 hover:bg-gray-100">
            <ArrowLeftRight size={32} className="text-gray-900"/>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-green-400 hover:text-green-300">
          <Compass size={32} />
          <span className="text-[10px]">Discovery</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
          <Settings size={32} />
          <span className="text-[10px]">Settings</span>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
