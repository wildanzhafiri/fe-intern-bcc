import { createContext, useState, ReactNode } from 'react';
import axiosInstance from '../api/axiosInstance';

interface AuthContextType {
  user: string | null;
  token: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  register: (username: string, password: string, email: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(() => localStorage.getItem('user'));
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await axiosInstance.post('/users/login', {
        username,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('user', username);
        localStorage.setItem('token', response.data.token);
        setUser(username);
        setToken(response.data.token);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (username: string, password: string, email: string): Promise<boolean> => {
    try {
      const response = await axiosInstance.post('/users/register', {
        username,
        password,
        email,
      });

      if (response.status === 201 || response.status === 200) {
        return true;
      }

      return false;
    } catch (error) {
      console.error('Register failed:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  return <AuthContext.Provider value={{ user, token, login, register, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
