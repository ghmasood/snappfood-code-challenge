export interface IRequestResult<T> {
  data: T;
  render_type: number;
  status: boolean;
}

// REQUEST
export interface IVendorListReq {
  page: number;
  page_size: number;
  lat: number;
  long: number;
}

//RESPONSE
export interface IVendorItem {
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

  has_coupon: boolean; //دارای کوپن ------- done
  has_cashback: boolean; //جایزه خرید ----- done
  has_discount: boolean; //دارای تخفیف
  coupon_count: number; //دارای n کوپن ---- done
  has_first_coupon: boolean; //تخفیف سفارش اول -- done
  is_pro: boolean; //فودپرو
  is_eco: boolean; //خوش‌قیمت --- done
  preOrderEnabled: boolean; // رستوران بسته است / فقط پیش سفارش
  isOpen: boolean;
  bid: boolean; //آگهی بج
  best_coupon: string | null;

  isZFExpress: boolean; //پیک اسنپ‌فود --- done
  deliveryFee: number;
}

export type IVendorCardData =
  | { type: 'TEXT'; data: string }
  | { type: 'VENDOR'; data: IVendorItem }
  | {
      type: 'BANNER';
      data: { image: string; deepLink: string };
    };

export interface IVendorListData {
  finalResult: IVendorCardData[];
  count: number;
  open_count: number;
  extra_sections: unknown;
  meta_tags: {
    title: string;
    header: string;
    description: string;
  };
}

export type IVendorResult = IRequestResult<IVendorListData>;
