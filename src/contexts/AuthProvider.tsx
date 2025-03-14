import { createContext, useState, ReactNode, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Owner } from '../types/owner';
import useLoading from '../hooks/useLoading';

interface User {
  userId: string;
  username: string;
  email: string;
  profile_picture: string;
}

interface AuthContextType {
  user: User | null;
  owner: Owner | null;
  userToken: string | null;
  ownerToken: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  loginOwner: (username: string, password: string) => Promise<boolean>;
  register: (username: string, password: string, email: string) => Promise<boolean>;
  registerOwner: (username: string, password: string, email: string, store_name: string, store_location: string, phone_number: string) => Promise<boolean>;
  logout: () => void;
  logoutOwner: () => void;
  isLoading: boolean;
  isInitialized: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [owner, setOwner] = useState<Owner | null>(null);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [ownerToken, setOwnerToken] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const { loading: isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();

    const storedUser = localStorage.getItem('user');
    const storedOwner = localStorage.getItem('owner');
    const storedUserToken = localStorage.getItem('userToken');
    const storedOwnerToken = localStorage.getItem('ownerToken');

    if (storedUser && storedUserToken) {
      setUser(JSON.parse(storedUser));
      setUserToken(storedUserToken);
    }

    if (storedOwner && storedOwnerToken) {
      setOwner(JSON.parse(storedOwner));
      setOwnerToken(storedOwnerToken);
    }
    setIsInitialized(true);
    stopLoading();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      startLoading();
      const response = await axiosInstance.post('/users/login', {
        username,
        password,
      });

      const userResponse = await axiosInstance.get('/users/info', {
        headers: { Authorization: `Bearer ${response.data.token}` },
      });

      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);
        setUserToken(response.data.token);

        const userData: User = {
          userId: userResponse.data.payload.userId,
          username,
          email: userResponse.data.payload.email,
          profile_picture: userResponse.data.payload.profile_picture,
        };

        localStorage.setItem('user', JSON.stringify(userData));

        setUser(userData);
        stopLoading();

        return true;
      }
      stopLoading();
      return false;
    } catch (error) {
      stopLoading();
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
    localStorage.removeItem('userToken');
    setUser(null);
    setUserToken(null);
  };
  const logoutOwner = () => {
    localStorage.removeItem('owner');
    localStorage.removeItem('ownerToken');
    setUser(null);
    setUserToken(null);
  };

  const loginOwner = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await axiosInstance.post('/seller/login', {
        username,
        password,
      });

      const userResponse = await axiosInstance.get('/seller/info', {
        headers: { Authorization: `Bearer ${response.data.token}` },
      });

      if (response.data.token) {
        localStorage.setItem('ownerToken', response.data.token);
        setOwnerToken(response.data.token);
        const ownerData: Owner = {
          id: userResponse.data.payload.id,
          username,
          name: userResponse.data.payload.name,
          email: userResponse.data.payload.email,
          store_name: userResponse.data.payload.store_name,
          store_location: userResponse.data.payload.store_location,
          phone_number: userResponse.data.payload.phone_number,
          profile_picture: userResponse.data.payload.profile_picture,
        };

        localStorage.setItem('owner', JSON.stringify(ownerData));

        setOwner(ownerData);

        return true;
      }

      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const registerOwner = async (username: string, password: string, email: string, store_name: string, store_location: string, phone_number: string): Promise<boolean> => {
    try {
      const response = await axiosInstance.post('/seller/register', {
        username,
        password,
        email,
        store_name,
        store_location,
        phone_number,
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

  return <AuthContext.Provider value={{ user, owner, userToken, ownerToken, login, register, logout, loginOwner, registerOwner, logoutOwner, isLoading, isInitialized }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
