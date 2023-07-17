import styled from "@emotion/styled";

export const ProductDetailWrap = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding: 40px 0px;
  .section-title {
    margin-bottom: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: rgb(51, 51, 51);
      font-size: 28px;
      line-height: 1.15;
      letter-spacing: -0.26px;
      font-weight: 500;
    }
    .cart-icon {
      margin-left: auto;
      padding-right: 18px;
    }
  }
`;

export const ProductDetailMainWrap = styled.main`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  .product-image {
    width: 430px;
    height: 552px;
  }
`;

export const ProductDetailInfoWrap = styled.section`
  width: 560px;
  .product-info-delivery-type {
    width: 500px;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: -0.5px;
    color: rgb(153, 153, 153);
  }
  .product-info-title {
    h1 {
      width: 500px;
      font-weight: 500;
      font-size: 24px;
      color: rgb(51, 51, 51);
      line-height: 34px;
      letter-spacing: -0.5px;
      word-break: keep-all;
      margin-right: 20px;
    }
  }
  .product-info-price {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-top: 19px;
    font-weight: bold;
    line-height: 30px;
    letter-spacing: -0.5px;
    .price {
      padding-right: 4px;
      font-size: 28px;
      color: rgb(51, 51, 51);
    }
    .won {
      display: inline-block;
      position: relative;
      top: 3px;
      font-size: 18px;
      color: rgb(51, 51, 51);
      vertical-align: top;
    }
  }
  .product-info-totalPrice {
    padding-top: 30px;
    div {
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;
      align-items: flex-end;
      .title {
        padding-right: 12px;
        font-size: 13px;
        font-weight: 500;
        color: rgb(51, 51, 51);
        line-height: 20px;
      }
      .total-price {
        font-weight: bold;
        font-size: 32px;
        color: rgb(51, 51, 51);
        line-height: 36px;
      }
      .won {
        padding-left: 5px;
        font-size: 20px;
        font-weight: 600;
        color: rgb(51, 51, 51);
        line-height: 30px;
      }
    }
  }
  .product-cart-wrap {
    display: flex;
    margin-top: 20px;
    .cart-button-wrap {
      flex-grow: 1;
      .cart-button {
        display: block;
        padding: 0px 10px;
        text-align: center;
        overflow: hidden;
        width: 100%;
        height: 56px;
        border-radius: 3px;
        color: rgb(255, 255, 255);
        background-color: rgb(95, 0, 128);
        border: 0px none;
        span {
          display: inline-block;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
`;

export const ProductDetailInfoTable = styled.div`
  margin-top: 20px;
  .product-info-box {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow: hidden;
    width: 100%;
    padding: 17px 0px 18px;
    border-top: 1px solid rgb(244, 244, 244);
    font-size: 14px;
    letter-spacing: -0.5px;
    dt {
      width: 128px;
      height: 100%;
      color: rgb(102, 102, 102);
      font-weight: 400;
      line-height: 19px;
    }
    dd {
      display: flex;
      flex: 1 1 0%;
      flex-direction: column;
      .delivery {
        color: rgb(51, 51, 51);
        font-weight: 400;
        line-height: 19px;
        white-space: pre-line;
        word-break: break-all;
        overflow: hidden;
      }
      .delivery-description {
        display: block;
        font-size: 12px;
        color: rgb(102, 102, 102);
        padding-top: 4px;
        line-height: 16px;
        white-space: pre-line;
      }
      .cart-option-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 11px 10px 11px 15px;
        font-size: 12px;
        border-left: 1px solid rgb(244, 244, 244);
        border-top: 1px solid rgb(244, 244, 244);
        border-right: 1px solid rgb(244, 244, 244);
        border-bottom: 1px solid rgb(244, 244, 244);
        .item-name {
          display: flex;
          -webkit-box-pack: justify;
          justify-content: space-between;
          align-items: flex-start;
          span {
            line-height: 16px;
            width: 320px;
            color: rgb(51, 51, 51);
            overflow-wrap: break-word;
          }
        }
        .item-price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          .count-wrap {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            border: 1px solid rgb(221, 223, 225);
            width: 88px;
            border-radius: 3px;
            .count {
              display: inline-flex;
              overflow: hidden;
              white-space: nowrap;
              justify-content: center;
              font-size: 14px;
              color: rgb(51, 51, 51);
              text-align: center;
              width: 31px;
              height: 28px;
              line-height: 32px;
              font-weight: 400;
            }
            button {
              display: inline-flex;
              width: 31px;
              height: 28px;
              border: none;
              justify-content: center;
              text-align: center;
              font-size: 14px;
              line-height: 28px;
              color: #333;
              vertical-align: top;
              cursor: pointer;
            }
          }
          .price {
            font-weight: bold;
            font-size: 12px;
            color: rgb(51, 51, 51);
            padding-right: 5px;
          }
        }
      }
    }
  }
`;
