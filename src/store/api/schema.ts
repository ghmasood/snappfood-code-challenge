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

  has_coupon: boolean; //دارای کوپن
  has_cashback: boolean; //جایزه خرید
  has_discount: boolean; //دارای تخفیف
  has_first_coupon: boolean; //تخفیف سفارش اول
  is_pro: boolean; //فودپرو
  is_eco: boolean; //خوش‌قیمت
  preOrderEnabled: boolean; // رستوران بسته است / فقط پیش سفارش
  best_coupon: string | null;

  isZFExpress: boolean; //پیک اسنپ‌فود
  deliveryFee: number;
}

export type IVendorCardData =
  | { type: 'TEXT'; data: string }
  | { type: 'VENDOR'; data: IVendorItem };

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
