import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 0.5rem;
  border: 1px solid rgb(207, 207, 207);

  .card-header {
    text-align: center;
    color: #4c4e7a;
    margin-top: 1rem;
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
    color: rgb(156, 168, 195);
    text-transform: uppercase;

    div,
    p {
      color: #4c4e7a !important;
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

export const Label = styled.span`
  font-size: 1.4rem;
  padding: 0.2rem 2rem 0.2rem 0.2rem;
  color: white;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  text-transform: capitalize;
  display: inline-block;
  margin-top: 1rem;

  img {
    display: inline-block;
    margin: 1rem 0 0 0;
  }
`
export const AvatarCard = styled.div`
  border-radius: 100%;
  margin: auto;
  width: 200px;
  img {
    border-radius: 100%;
  }
`

export const PillarLeaders = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  margin-top: 3.2rem;
  div,
  p {
    margin-top: 1.6rem !important;
  }
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`
