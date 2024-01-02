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

  .author {
    grid-column: 1;
    font-size: 16px;
  }

  .intro {
    grid-column: 1;
    mark {
      background: #006065;
      color: white;
      font-style: italic;
      font-weight: bold;
      padding-inline: 0.25em;
      border-radius: 3px;
    }
  }
`;
