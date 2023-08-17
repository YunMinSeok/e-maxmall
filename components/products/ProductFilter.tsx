// constant
import { SearchSortData } from "@constant/searchSort";
// styles
import { ProductFilterWrap, ProductSearchSortWrap } from "@styles/products/products";

const ProductFilter = () => {
  return (
    <ProductFilterWrap>
      <ProductSearchSortWrap>
        <ul>
          {SearchSortData.map((sort, index) => {
            return (
              <li key={sort.value + "-" + String(index)}>
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
