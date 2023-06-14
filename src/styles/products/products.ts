import styled from "@emotion/styled";

export const ProductsWrap = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding: 40px 0px;
  .section-title {
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      color: rgb(51, 51, 51);
      font-size: 28px;
      line-height: 1.15;
      letter-spacing: -0.26px;
      font-weight: 500;
    }
  }
  .section-content {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, 209px);
    gap: 31px 0;
    width: 1050px;
    margin: 0px auto;
    overflow: hidden;
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
  .image-container {
    position: relative;
    overflow: hidden;
    background-color: rgb(245, 245, 245);
    height: 270px;
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
