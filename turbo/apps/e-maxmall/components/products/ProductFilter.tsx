"use client";

// constant
import { SearchSortData, toSortType } from "@constant/searchSort";
// styles
import {
  ProductFilterWrap,
  ProductSearchSortWrap,
  ProductSortingList,
} from "@styles/products/products";

interface ProductFilterPropsType {
  sortState: string;
  sizeState: string;
  onChange: (type: string, value: string) => void;
}

const ProductFilter = ({ sortState, sizeState, onChange }: ProductFilterPropsType) => {
  return (
    <ProductFilterWrap>
      <ProductSearchSortWrap>
        <ul>
          {SearchSortData.map((sort, index) => {
            const revertSortValue = toSortType(sort.value);
            return (
              <li
                key={sort.value + "-" + String(index)}
                onClick={() => onChange("sort", revertSortValue)}
                className={sortState === revertSortValue ? "selected" : ""}
              >
                <input type={"radio"} />
                <label>{sort.value}</label>
              </li>
            );
          })}
        </ul>
      </ProductSearchSortWrap>
      <ProductSortingList>
        <ul>
          <li className={sizeState === "5" ? "selected" : ""} onClick={() => onChange("size", "5")}>
            5개씩 보기
          </li>
          <li
            className={sizeState === "10" ? "selected" : ""}
            onClick={() => onChange("size", "10")}
          >
            10개씩 보기
          </li>
        </ul>
      </ProductSortingList>
    </ProductFilterWrap>
  );
};

export default ProductFilter;
