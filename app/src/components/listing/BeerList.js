import React from 'react'
import BeerListItem from './BeerListItem'
import {connect} from 'react-redux'
import {getBeers} from '../../actions'

class BeerList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getBeers())
  }
  render () {
    return (
      <div>
        <div>
          {this.props.isLoading && <span>Loading ... </span>}
        </div>
        {this.props.beers.map(beer => {
          return <BeerListItem beer={beer} key={beer.name} />
        })}
      </div>
    )
  }
}

function mapStateToProps ({beers, isLoading}) {
  return {
    isLoading,
    beers
  }
}

export default connect(mapStateToProps)(BeerList)
