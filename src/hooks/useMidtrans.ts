import axiosInstance from '../api/axiosInstance';

export const createMidtransTransaction = async (totalPrice: number) => {
  try {
    const userToken = localStorage.getItem('userToken');

    if (!userToken) {
      throw new Error('User is not authenticated');
    }

    const response = await axiosInstance.post(
      '/payment/new',
      { total_price: totalPrice },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    if (response.data && response.data.midtrans) {
      return response.data.midtrans;
    } else {
      throw new Error('Failed to get Midtrans token');
    }
  } catch (error) {
    console.error('Error creating Midtrans transaction:', error);
    return null;
  }
};
