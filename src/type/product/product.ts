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
  detail_image_url: string;
  price: string;
  score: string;
  availableCoupon?: boolean;
}
