// components
import HomeHeader from "@components/home/HomeHeader";
import HomeProductList from "@components/home/HomeProductList";
// style
import { HomeMainWrapper, HomeSectionWrapper, HomeWrapper } from "@styles/home/home";

const HomeTemplate = () => {
  return (
    <HomeWrapper>
      <HomeMainWrapper>
        <HomeHeader />
        <HomeSectionWrapper>
          <h2>Product Card List</h2>
          <p>
            All cards get a 3d rotation with CSS based on the cursor position.
            <br />
            The default basic non-holo cards simply apply a <mark>flare/glare</mark> effect to the
            card which follows the mouse.
          </p>
          <HomeProductList />
        </HomeSectionWrapper>
      </HomeMainWrapper>
    </HomeWrapper>
  );
};

export default HomeTemplate;
