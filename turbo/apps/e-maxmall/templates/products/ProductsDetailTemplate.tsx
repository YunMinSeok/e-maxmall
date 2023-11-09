"use client";

import Image from "next/image";

// type
import { ProductItemVO } from "@type/product/product";

// style
import {
  ProductDetailInfoWrap,
  ProductDetailMainWrap,
  ProductDetailWrap,
  ProductDetailInfoTable,
} from "@styles/products/productDetail";

// hooks
import { useProductDetail } from "@hooks/products/useProductDetail";
import { useProducts } from "@hooks/products/useProducts";
import Header from "@components/common/Header";

interface ProductDetailTemplateType {
  product: ProductItemVO;
}

const ProductDetailTemplate = ({ product }: ProductDetailTemplateType) => {
  const { count, handleSetCount } = useProductDetail();
  const { handleClickCart } = useProducts();
  return (
    <ProductDetailWrap>
      <Header title={"상품 상세페이지"} />
      <ProductDetailMainWrap>
        {/* 상품 사진 */}
        <div className="product-image">
          <Image
            priority
            src={product.detail_image_url}
            alt={product.item_name}
            width={430}
            height={552}
          />
        </div>
        {/* 상품 정보 */}
        <ProductDetailInfoWrap>
          <div className="product-info-delivery-type">특급배송</div>
          <div className="product-info-title">
            <h1>{product.item_name}</h1>
          </div>
          <h2 className="product-info-price">
            <span className="price">{product.price}</span>
            <span className="won">원</span>
          </h2>
          {/* 상품 정보 테이블 */}
          <ProductDetailInfoTable>
            {/* 배송 */}
            <dl className="product-info-box">
              <dt>배송</dt>
              <dd>
                <p className="delivery">특급배송</p>
                <p className="delivery-description">
                  23시 전 주문 시 내일 아침 7시 전 도착
                  <br />
                  (대구·부산·울산 샛별배송 운영시간 별도 확인)
                </p>
              </dd>
            </dl>
            {/* 판매자 */}
            <dl className="product-info-box">
              <dt>판매자</dt>
              <dd>
                <p className="delivery">MAX</p>
              </dd>
            </dl>
            {/* 포장타입 */}
            <dl className="product-info-box">
              <dt>포장타입</dt>
              <dd>
                <p className="delivery">상온 (종이포장)</p>
                <p className="delivery-description">
                  택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                </p>
              </dd>
            </dl>
            {/* 판매단위 */}
            <dl className="product-info-box">
              <dt>판매단위</dt>
              <dd>
                <p className="delivery">1개</p>
              </dd>
            </dl>
          </ProductDetailInfoTable>
          <div>
            <ProductDetailInfoTable>
              <dl className="product-info-box">
                <dt>상품선택</dt>
                <dd>
                  <p className="delivery">특급배송</p>
                  <div className="cart-option-item">
                    <div className="item-name">
                      <span>{product.item_name}</span>
                    </div>
                    <div className="item-price">
                      <div className="count-wrap">
                        <button onClick={() => handleSetCount("minus")}>-</button>
                        <div className="count">{count}</div>
                        <button onClick={() => handleSetCount("plus")}>+</button>
                      </div>
                      <div>
                        <span className="price">{product.price}원</span>
                      </div>
                    </div>
                  </div>
                </dd>
              </dl>
            </ProductDetailInfoTable>
          </div>
          {/* 상품 금액 */}
          <div className="product-info-totalPrice">
            <div>
              <span className="title">총 상품금액:</span>
              <span className="total-price">{Number(product.price) * count}</span>
              <span className="won">원</span>
            </div>
          </div>
          {/* 장바구니 */}
          <div className="product-cart-wrap">
            <div className="cart-button-wrap">
              <button
                className="cart-button"
                onClick={e => {
                  handleClickCart(e, product, count);
                }}
              >
                <span>장바구니 담기</span>
              </button>
            </div>
          </div>
        </ProductDetailInfoWrap>
      </ProductDetailMainWrap>
    </ProductDetailWrap>
  );
};

export default ProductDetailTemplate;
