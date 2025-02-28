import { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string, email: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(() => localStorage.getItem('user'));

  const [users, setUsers] = useState<{ username: string; password: string; email: string }[]>(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers
      ? JSON.parse(storedUsers)
      : [
          { username: 'admin', password: 'admin123', email: 'admin@example.com' },
          { username: 'user', password: 'user123', email: 'user@example.com' },
        ];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const login = (username: string, password: string) => {
    const validUser = users.find((u) => u.username === username && u.password === password);

    if (validUser) {
      localStorage.setItem('user', username);
      setUser(username);
      return true;
    }

    return false;
  };

  const register = (username: string, password: string, email: string) => {
    const userExists = users.some((u) => u.username === username || u.email === email);
    if (userExists) return false;

    const newUser = { username, password, email };
    setUsers([...users, newUser]);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
