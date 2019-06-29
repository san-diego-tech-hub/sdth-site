import React from "react"
import styled from "styled-components"

const SearchBar = () => (
  <Container>
    <Selector>
      <select>
        <option value="0">Code Schools</option>
        <option value="1">Venues</option>
        <option value="2">Food Sponsors</option>
      </select>
    </Selector>
    <Search type="text" />
  </Container>
)

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  max-width: 1000px;
  width: 90%;
`

const Selector = styled.div`
  background: white;
  border-radius: 30px 0 0 30px;
  height: 65px;
  width: 100px;
`

const Search = styled.input`
  border: none;
  border-radius: 0 30px 30px 0;
  font-size: 3rem;
  padding: 10px 2rem;
`

export default SearchBar
