import React from "react"
import styled from "styled-components"

const SearchBar = ({
  filterText,
  setFilterText,
  resourceType,
  setResourceType
}) => {
  return (
    <Container>
      <BookEnd />
      <Selector value={resourceType}>
        <select onChange={setResourceType}>
          <option value="codeSchool">
            Code Schools
          </option>
          <option value="venue">
            Venues
          </option>
          <option value="sponsor">
            Sponsors
          </option>
          <option value="mentorMentee">
            Mentors/Mentees
          </option>
        </select>
      </Selector>
      <Search type="text" onChange={setFilterText} value={filterText} />
    </Container>
  )
}

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
      height: 40px;
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
