import styled from 'styled-components'

export const Card = styled.div`
  background: ${props => props.color};
  border-radius: 0.5rem;
  border: 1px solid rgb(207, 207, 207);
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  max-width: 500px;
  margin: 1rem;

  .card-header {
    text-align: center;
    color: white;
    margin-top: 1rem;
    text-shadow: 1px 1px 5px rgba(0,0,0,0.6);
    div,
    p {
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

    div,
    p {
      color: white;
      display: block;
      font-size: 1.4rem;
      text-transform: none;
    }
  }
  @media (max-width: 990px) {
    width: 100% !important;
    .card-text {
      padding: 2.5rem 5rem;
    }
  }
`

export const Label = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 42px;
  padding: 0.2rem 1.5rem 1rem 0.2rem;
  min-width: 120px;
  width: fit-content;

  font-size: 1.4rem;
  color: white;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
  text-transform: capitalize;
  margin-top: 1rem;

  img {
    margin: 1rem 0 0 0;
  }
`
export const AvatarCard = styled.div`
  border-radius: 100%;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
  margin: auto;
  width: 200px;
  img {
    border-radius: 100%;
  }
`

export const PillarLeaders = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3.2rem;
  div,
  p {
    margin-top: 1.6rem !important;
  }
  @media (max-width: 990px) {
  }
`

export const TeamSection = styled.section`
  margin: 10rem 0 !important;
  width: 100vw !important;
  @media(max-width: 600px) {
    padding: 0 !important;
    margin: 0;
  }
`

export const Why = styled.div`
  // background: rgba(255,255,255,0.05);
  // color: rgba(0,0,0,0.45) !important;
  color: ${props => props.color} !important;
  font-weight: bold;
  padding: 0.1rem 3rem;
  text-transform: uppercase !important;
  text-shadow: 1px 1px 1px rgba(255,255,255,0.3);
`
