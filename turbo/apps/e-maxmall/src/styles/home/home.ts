import { StaticImageData } from "next/image";
import styled from "@emotion/styled";

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
    font-size: 32px;
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

export const HomeSectionWrapper = styled.section`
  margin-top: 12em;
  h2 {
    font-size: 24px;
    margin-bottom: 0.25em;
  }
  p {
    font-style: italic;
    margin-bottom: 1em;
  }
`;

type ShowCaseType = {
  image: StaticImageData;
  brightType: string;
};

export const ShowCase = styled.div<ShowCaseType>`
  position: relative;
  grid-column: 2;
  grid-row: 1/5;
  width: 220px;
  height: 310px;
  transition: all 0.1s;

  .card {
    width: 100%;
    height: 100%;
    border-radius: 4.55% / 3.5%;
    background-image: url(${({ image }) => image.src});
    background-size: cover;
  }
  .overlay {
    position: absolute;
    z-index: 100;
    top: 0;
    width: 100%;
    height: 100%;
    // filter: brightness(1.1) opacity(0);
    background-size: 150% 150%;
    transition: all 0.1s;
    will-change: transform, opacity, background-image, background-size, background-position,
      background-blend-mode, filter;
  }
`;

export const ProductListWrap = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px 2vw;
  transform-style: preserve-3d;
  height: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 50px;

  div {
    grid-column: inherit;
    grid-row: inherit;
  }
`;
