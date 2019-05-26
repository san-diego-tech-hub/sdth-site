import styled from "styled-components"


export const NetworkContainer = styled.div`

margin: 0 auto;
max-width: 1200px;
width: 1200px;
padding: 10rem;
background: linear-gradient(rgba(82,48,181,0.7),70%,rgba(129,74,198,0.4));
.conduits-flow-illustration {
  position: absolute;
  opacity: 0.1;
  clip-path: inset(150px 0px 0px 40px);
  margin-top: -15vw;
  margin-left: -12vw;
  display: flex;
}
@media (max-width: 990px) {
  padding: 5rem;
}

@media (max-width: 450px) {
  padding: 2rem;

  h2 {
    text-align: center;
  }
}
`

export const NetworkContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 10rem;

  @media (max-width: 990px) {
    padding: 5rem;
  }

  @media (max-width: 450px) {
    padding: 2rem;

    h2 {
      text-align: center;
    }
  }
`

export const NetworkSection = styled.section`
  margin: 0 !important;
  display: block;
  margin: auto auto;
  .conduits-flow-illustration {
    position: relative;
    display: block;
    height: 50vh;
    color: white; 
    opacity: 1;
    margin-top: -35vh;
    margin-left: 0;
    clip-path: inset(90px 0px 0px 40px);
  }
  .network-logo {
    display: block;
    height: 23vh;
    color: white; 
    opacity: 1;
    margin: -5vh auto;
  }
  .network-subHeading {
    color: white;
    font-size: 1.6rem; 
  }
`

export const NetworkLinks = styled.div`
display: block;
width: 35vw;
margin: 10vh auto;
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -1px;
}
li:first-child {
  border-left: 1px solid transparent;
}
li {
  flex-grow: .5;
  flex-basis: auto;
  padding: 0;
  text-align: center;
  border-left: 1px solid #ccc;
  list-style-type: none;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size:1.5em;
  }
}
`
