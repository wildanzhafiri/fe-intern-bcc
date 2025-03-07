import React from 'react';

export interface Category {
  id: number;
  name: ProductCategory;
  icon: React.ReactNode;
  value: string;
}

export enum ProductCategory {
  ELECTRONICS = 'Alat Elektronik',
  TOOLS = 'Perkakas',
  HOBBY = 'Hobi',
  EVENT = 'Acara',
  HOLIDAY = 'Liburan',
}
