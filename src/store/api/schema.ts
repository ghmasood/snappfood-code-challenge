export type IRequestResult<T> = {
  data: T;
  render_type: number;
  status: boolean;
};

export type IVendorListReq = {
  page: number;
  page_size: number;
  lat: number;
  long: number;
};

export type IVendorItem = {
  id: number;

  logo: string;
  backgroundImage: string;
  title: string;
  description: string;

  menuUrl: string;

  rate: number;
  rating: number;
  voteCount: number;

  discountValueForView: number;

  has_coupon: boolean;
  has_cashback: boolean;
  has_discount: boolean;
  coupon_count: number;
  has_first_coupon: boolean;
  is_pro: boolean;
  is_eco: boolean;
  preOrderEnabled: boolean;
  isOpen: boolean;
  bid: boolean;
  best_coupon: string | null;

  isZFExpress: boolean;
  deliveryFee: number;
};

export type IVendorCardData =
  | { type: 'TEXT'; data: string }
  | { type: 'VENDOR'; data: IVendorItem }
  | {
      type: 'BANNER';
      data: { image: string; deepLink: string };
    };

export type IVendorListData = {
  finalResult: IVendorCardData[];
  count: number;
  open_count: number;
  extra_sections: unknown;
  meta_tags: {
    title: string;
    header: string;
    description: string;
  };
};

export type IVendorResult = IRequestResult<IVendorListData>;
