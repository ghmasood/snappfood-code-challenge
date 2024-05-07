import type { VendorCardData, VendorListReq } from './api/schema';

export type VendorsStore = {
  vendors: VendorCardData[];
};

export type QueryStore = Omit<VendorListReq, 'lat' | 'long'>;
