// style
import { HomeMainWrapper, HomeSectionWrapper, HomeWrapper } from "@styles/home/home";
import HomeHeader from "@components/home/HomeHeader";

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
          <section></section>
        </HomeSectionWrapper>
      </HomeMainWrapper>
    </HomeWrapper>
  );
};

export default HomeTemplate;
