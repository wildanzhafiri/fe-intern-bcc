import { useQuery } from '@tanstack/react-query';
import { getPublicSellerInfo } from '../api/ownerApi';
import { PublicOwner } from '../types/owner';

const DEFAULT_SELLER: PublicOwner = {
  name: 'Unknown',
  store_name: 'Unknown Store',
  store_location: 'Not Available',
  profile_picture: '',
};

export const useSellerInfo = (sellerId?: string) => {
  return useQuery<PublicOwner | null>({
    queryKey: ['public-seller', sellerId],
    queryFn: async () => {
      if (!sellerId || sellerId === '00000000-0000-0000-0000-000000000000') {
        return DEFAULT_SELLER;
      }
      return getPublicSellerInfo(sellerId);
    },
    enabled: !!sellerId,
    staleTime: 1000 * 60 * 5,
  });
};
