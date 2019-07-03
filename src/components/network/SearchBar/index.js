import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const SearchBar = () => (
  <Container>
    <BookEnd />
    <Selector>
      <select>
        <option value="0">Code Schools</option>
        <option value="1">Venues</option>
        <option value="2">Food Sponsors</option>
        <option value="3">Mentors</option>
      </select>
      {/* <FontAwesomeIcon icon="caret-down" /> */}
    </Selector>
    <Search type="text" />
  </Container>
)

const BookEnd = styled.div`
  background: white;
  border-radius: 50%;
  height: 65px;
  margin-right: -32px;
  width: 65px;

  @media(max-width: 990px) {
    display: none;
  }
`

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  max-width: 1000px;
  width: 100%;

  @media(max-width: 990px) {
    flex-direction: column;
  }
`

const Selector = styled.div`
  select {
    background: white;
    border: none;
    color: #444;
    font-size: 2rem;
    font-weight: bold;
    height: 65px;
    position: relative;
    text-align: center;
    width: 160px;

    @media(max-width: 990px) {
      background: linear-gradient(#eee, #fff, #eee);
      width: 101vw;
    }
  }
`

const Search = styled.input`
  border: none;
  border-radius: 0 40px 40px 0;
  font-size: 3rem;
  margin-left: -5px;
  padding: 10px 2rem;
  width: 95%;

  @media(max-width: 990px) {
    border-radius: 0;
    width: 102vw;
  }
`

export default SearchBar
