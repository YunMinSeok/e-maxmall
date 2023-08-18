import styled from "@emotion/styled";

export const ProductsWrap = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding: 40px 0px;
`;

export const ProductSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, 202px);
  gap: 10px;
  width: 1050px;
  margin: 0px auto;
  padding-bottom: 60px;
  overflow: hidden;
`;

export const ProductFilterWrap = styled.div`
  max-width: 100%;
  height: 32px;
  margin-bottom: 15px;
  background-color: #fafafa;
`;

export const ProductSearchSortWrap = styled.div`
  position: relative;
  float: left;

  ul {
    margin-top: 6px;
    height: 20px;

    li {
      float: left;
      height: 100%;
      padding: 0 10px;
      line-height: 1.5;
      color: #555;
      border-left: 1px solid #eee;
    }

    .selected {
      color: #0073e9;
      font-weight: bold;
    }
  }
`;

export const ProductItemWrap = styled.div`
  position: relative;
  width: 199px;
  height: 100%;
  margin-right: 18px;
  flex-shrink: 0;
  transition-property: transform;
  a {
    display: block;
    color: rgb(51, 51, 51);
    cursor: pointer;
    width: 199px;
  }
  .product-image-container {
    position: relative;
    overflow: hidden;
    background-color: rgb(245, 245, 245);
    height: 270px;
    .product-image {
      object-fit: cover;
      transition: all 0.5s ease-in-out 0s;
      cursor: pointer;
    }
    .product-cart-container {
      position: absolute;
      display: flex;
      right: 16px;
      bottom: 16px;
      padding: 3px;
      border-radius: 50%;
      background-color: #ffffff;
    }
    .product-cart-click-container {
      position: absolute;
      display: flex;
      top: -0.2px;
      left: -0.2px;
      width: 35px;
      height: 35px;
      padding: 3px;
      border-radius: 50%;
      justify-content: center;
      background: transparent;
      transition: opacity 0.5s ease-in-out 0s;
      span {
        align-self: center;
        font-size: 16px;
        color: black;
        opacity: 0;
      }
    }
    .product-cart-container:hover {
      .product-cart-click-container {
        background: #ffffff;
        span {
          opacity: 1;
        }
      }
    }
  }
  .product-image-container:hover {
    .product-image {
      transform: scale(1.05);
    }
  }
  .product-info {
    position: relative;
    padding: 14px 10px 0px 0px;
    .product-name {
      font-size: 16px;
      line-height: 1.45;
      font-weight: 400;
      margin-bottom: 8px;
    }
    .product-price {
      display: flex;
      span {
        font-size: 16px;
        font-weight: 800;
        line-height: 1.5;
        white-space: nowrap;
      }
    }
  }
`;
