import React from 'react'
import BeerList from './BeerList'

class Listing extends React.Component {
  render () {
    return (
      <div>
        <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
        <BeerList />
      </div>
    )
  }
}

export default Listing
