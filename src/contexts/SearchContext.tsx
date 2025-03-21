import { createContext, useState, ReactNode, useContext } from 'react';

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState('');

  return <SearchContext.Provider value={{ query, setQuery }}>{children}</SearchContext.Provider>;
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export default SearchContext;
