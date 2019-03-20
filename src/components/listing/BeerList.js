import React from 'react'
import BeerListItem from './BeerListItem'
import {connect} from 'react-redux'
import {getBeers} from '../../actions'
import { Loader } from 'semantic-ui-react'

class BeerList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getBeers())
  }
  render () {
    return (
      <div>
        <div>
          {this.props.beers.length === 0 ? <Loader active inline='centered' /> : <span></span>}
        </div>
        {this.props.beers.map(beer => {
          return <BeerListItem beer={beer} key={beer.name} />
          
        })}
      </div>
    )
  }
}

function mapStateToProps ({beers}) {
  return {
    beers
  }
}

export default connect(mapStateToProps)(BeerList)
