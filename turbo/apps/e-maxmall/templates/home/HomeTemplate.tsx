import { useQuery } from "@tanstack/react-query";
// components
import HomeHeader from "@components/home/HomeHeader";
import HomeProductList from "@components/home/HomeProductList";
// style
import { HomeMainWrapper, HomeSectionWrapper, HomeWrapper } from "@styles/home/home";
// api
import { getProduct } from "@api/product";
// query
import { queryKeys, commonOptions } from "@query/constant";

const HomeTemplate = () => {
  const { data } = useQuery({
    queryKey: [queryKeys.product],
    queryFn: () =>
      getProduct({
        page: "1",
        sort: "desc",
        size: "30",
      }),
    ...commonOptions,
  });
  return (
    <HomeWrapper>
      <HomeMainWrapper>
        <HomeHeader product={data?.productItems[0]} />
        <HomeSectionWrapper>
          <h2>Product Card List</h2>
          <p>
            All cards get a 3d rotation with CSS based on the cursor position.
            <br />
            The default basic non-holo cards simply apply a <mark>flare/glare</mark> effect to the
            card which follows the mouse.
          </p>
          <HomeProductList productList={data?.productItems} />
        </HomeSectionWrapper>
      </HomeMainWrapper>
    </HomeWrapper>
  );
};

export default HomeTemplate;
