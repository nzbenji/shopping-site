import React from 'react'
import BeerList from './BeerList'
import styled from "styled-components"

const Container = styled.div`
  margin-left: 15rem;
`;

class Listing extends React.Component {
  render () {
    return (
      <Container>
        <BeerList />
      </Container>
    )
  }
}

export default Listing
