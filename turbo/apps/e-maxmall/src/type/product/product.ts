import { StaticImageData } from "next/image";

export interface ProductVO {
  products: {
    page: number;
    totalPage: number;
    productItems: ProductItemVO[];
  };
}

export interface ProductItemVO {
  item_no: number;
  item_name: string;
  detail_image_url: StaticImageData;
  price: string;
  score: string;
  availableCoupon?: boolean;
}

export interface ProductItemInterface extends ProductItemVO {
  count: number;
}
