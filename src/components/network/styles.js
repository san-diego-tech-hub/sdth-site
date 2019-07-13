import styled from "styled-components"
import { NAV_HEIGHT } from "Utils/constants"

export const NetworkContainer = styled.main`
  margin: ${NAV_HEIGHT} auto;
  padding: 0;
  width: 100vw;
}
`

export const Header = styled.div`
  background: linear-gradient(${props => `${props.theme.primary}, ${props.theme.primaryLight}`});
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Title = styled.h1`
  color: white;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
`

export const Container = styled.div`
background-color: #f2f3f2;
`

export const LocationSearchResult = styled.div`
  border: 1px solid #ccc;
  padding: 4rem 6rem 2rem;
  width: 100%;
  display: flex;
  background: ${props => props.color};
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 100%;
  > div {
    padding: 0.4rem;
  }
  max-width: 100vw;

  .card-header {
    text-align: center;
    color: white;
    margin-top: 1rem;
    text-shadow: 1px 1px 5px rgba(0,0,0,0.4);

    p,
    div {
      font-size: 3rem;
      line-height: 2.4rem;
    }
  }
  .card-text {
    font-size: 1.6rem !important;
    line-height: 3rem;
    padding: 1.6rem;
    color: rgba(255,255,255,0.8);
    text-transform: uppercase;

    p,
    div {
      color: white;
      display: block;
      font-size: 1.4rem;
      text-transform: none;
    }
  }

  li {
    display: inline;
  }

  .imgCol {
    display: flex; 
    flex: 0.25;
    justify-content: flex-end;
  }

  .contentCol {
    align-content: center;
    flex: 1;
  }

  .actionCol {
    display: flex;
    justify-content: center;
    flex: 0.25;
    align-items: flex-end;
    flex-direction: column; 
  }

  @media(max-width: 768px) {
    padding: 2rem 3rem 2rem;
    flex-direction: column;
    > .imgCol, .contentCol, .actionCol {
      justify-content: flex-start;
    }
  }

  @media (max-width: 990px) {
    width: 100% !important;
    .card-text {
      padding: 2.5rem 5rem;
    }
  }

  @media(max-width: 600px) {
    margin: 1rem 0;
  }

  @media(max-width: 450px) {
    .card-text {
      padding: 2.5rem 0.5rem;
    }
  }
`

export const PlacesSearchResultsSection = styled.section`
  max-width: 100vw;
`
