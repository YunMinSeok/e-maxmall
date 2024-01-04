import styled from "@emotion/styled";

// image
import ProductImage from "@images/product_image_1.jpg";

export const HomeWrapper = styled.div`
  font-family: Roboto;
  background-color: hsl(220, 7%, 24%);
`;

export const HomeMainWrapper = styled.main`
  color: white;
  padding: 50px;
  max-width: 1200px;
  margin: auto;
`;

export const HomeHeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: 900px;
  margin: auto;

  h1 {
    font-family: "Roboto Condensed";
    sup {
      font-weight: 300;
      font-size: 0.5em;
    }
  }

  svg {
    width: 1em;
    fill: currentColor;
    position: relative;
    margin: 0 5px;
    display: inline-block;
  }

  .author .intro .info {
    grid-column: 1;
  }

  .author {
    font-size: 16px;
  }

  .intro {
    mark {
      background: #006065;
      color: white;
      font-style: italic;
      font-weight: bold;
      padding-inline: 0.25em;
      border-radius: 3px;
    }
  }
  .info {
    h2 {
      margin-top: 0;
      font-weight: 100;
    }
    hr {
      border: none;
      background: white;
      height: 1px;
      opacity: 0.25;
      margin: 1em -1em;
    }
  }
`;

export const ShowCase = styled.div`
  position: relative;
  grid-column: 2;
  grid-row: 1/5;
  width: 220px;
  height: 310px;
  transition: all 0.1s;

  .card {
    width: 220px;
    height: 310px;
    border-radius: 10px;
    background-image: url(${ProductImage.src});
    background-size: cover;
  }
  .overlay {
    position: absolute;
    z-index: 100;
    top: 0;
    width: 220px;
    height: 310px;
    background: linear-gradient(
      105deg,
      transparent 40%,
      rgba(255, 219, 112, 0.8) 45%,
      rgba(132, 50, 255, 0.6) 50%,
      transparent 54%
    );
    filter: brightness(1.1) opacity(0.8);
    mix-blend-mode: color-dodge;
    background-size: 150% 150%;
    background-position: 100%;
    transition: all 0.1s;
  }
`;
