import { RawResult } from '@/service/@types';
import { createContext, useEffect, useState } from 'react';

type WatchlistContextType = {
  watchlist: RawResult[];
  setWatchlist: (watchlist: RawResult[]) => void;
};

export const WatchlistContext = createContext<WatchlistContextType>({
  watchlist: [],
  setWatchlist: () => {},
});

const WatchlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [watchlist, setWatchlist] = useState<RawResult[]>([]);

  useEffect(() => {
    const storedWatchlist = localStorage.getItem('watchlist');
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <WatchlistContext.Provider value={{ watchlist, setWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistProvider;