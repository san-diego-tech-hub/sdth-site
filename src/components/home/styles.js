import styled from 'styled-components';
import { Link } from 'gatsby';
import conduitsFlow from 'Images/conduits-flow.svg';
import { NAV_HEIGHT } from 'Utils/constants';

export const Collaboration = styled.div`
  max-width: 800px;
  margin: 7rem auto 5rem;
  text-align: center;

  @media (max-width: 450px) {
    margin-top: 11rem;
  }
`;

export const CollabIcon = styled.div`
  border-radius: 100%;
  height: 20rem;
  margin: auto;
  padding: 2rem;
  position: relative;
  text-align: center;
  width: 20rem;
`;

export const Description = styled.p`
  font-size: 1.7rem;
  padding: 0 5rem;
`;

export const HomeTitle = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 12rem;
  left: 0;
  right: 0;

  @media (max-width: 1267px) {
    top: calc(${NAV_HEIGHT} * 2 - 20px);
  }

  @media (max-width: 612px) {
    top: 12rem;
  }

  @media (max-width: 450px) {
    background: linear-gradient(
      rgba(82, 48, 181, 0.9),
      40%,
      rgba(129, 74, 198, 0.9)
    );
    top: ${NAV_HEIGHT};
  }

  @media (max-width: 450px) {
    background: linear-gradient(
      rgba(82, 48, 181, 0.9),
      40%,
      rgba(129, 74, 198, 0.9)
    );
    top: ${NAV_HEIGHT};
  }
`;

export const PillarDescription = styled.div`
  margin: 15rem auto 5rem;
  max-width: 800px;

  p {
    font-size: 1.7rem;
  }

  @media (max-width: 990px) {
    text-align: center;
  }
`;

export const PillarIcon = styled(Link)`
  background: ${props => props.background};
  border-radius: 1rem;
  color: white;
  height: 30rem;
  line-height: 2rem;
  margin: 0.5rem;
  overflow: hidden;
  padding: 3rem;
  text-align: center;
  text-decoration: none;
  width: 27rem;

  &:hover,
  &:focus {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    transform: translate(-2px, -2px);
  }

  p {
    padding-bottom: 1rem;
    min-height: 300px;
  }

  @media (max-width: 990px) {
    padding: 1.5rem;
    div {
      align-self: flex-end;
    }
  }

  @media (max-width: 600px) {
    width: 100vw;

    p {
      margin: auto;
      width: 25rem;
    }
  }
`;

export const PillarRow = styled.aside`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15rem;
  width: 100%;
  h4 {
    font-size: 2.4rem;
    text-transform: capitalize;
  }
  p {
    font-size: 1.6rem;
    padding: 0 1rem;
  }
`;

export const ThreeStep = styled.section`
  background: rgb(240, 240, 240);
  text-align: center;
  margin: 0 !important;
  padding: 3.2rem 20rem;
  h3 {
    font-size: 3.2rem;
    margin-top: 1.6rem;
    color: ${props => props.theme.primaryDark};
    font-weight: normal;
  }
  aside {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
    margin: auto;
  }

  .description {
    font-size: 1.6rem;
    text-align: center;
  }
  @media (max-width: 667px) {
    text-align: center;
    padding: 3.2rem 0;
    padding: 1.6rem;
    .description {
      padding: 0;
    }
  }
  @media (max-width: 990px) {
    width: 100% !important;
    aside {
      grid-template-columns: 1fr;
    }
  }
`;

export const WhatIsSDTH = styled.div`
  background: linear-gradient(
    rgba(82, 48, 181, 0.7),
    70%,
    rgba(129, 74, 198, 0.4)
  );
  border-radius: 5px;
  color: white;
  padding: 4rem;
  position: relative;
  width: 570px;
  z-index: 0;

  @media (max-width: 1267px) {
    padding-bottom: 1.5rem;
  }

  @media (max-width: 990px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    left: 0;
    justify-content: center;
    text-align: center;
    width: 100vw;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
    top: 0;
  }

  @media (max-width: 448px) {
    &::before {
      content: '';
      background-image: url(${conduitsFlow});
      background-size: cover;
      opacity: 0.4;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: 0;
    }
  }
`;
