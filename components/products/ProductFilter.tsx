// constant
import { SearchSortData, toSortType } from "@constant/searchSort";
// styles
import { ProductFilterWrap, ProductSearchSortWrap } from "@styles/products/products";

interface ProductFilterPropsType {
  state: string;
  onChange: (value: string) => void;
}

const ProductFilter = ({ state, onChange }: ProductFilterPropsType) => {
  return (
    <ProductFilterWrap>
      <ProductSearchSortWrap>
        <ul>
          {SearchSortData.map((sort, index) => {
            const revertSortValue = toSortType(sort.value);
            return (
              <li
                key={sort.value + "-" + String(index)}
                onClick={() => onChange(revertSortValue)}
                className={state === revertSortValue ? "selected" : ""}
              >
                <input type={"radio"} />
                <label>{sort.value}</label>
              </li>
            );
          })}
        </ul>
      </ProductSearchSortWrap>
    </ProductFilterWrap>
  );
};

export default ProductFilter;
