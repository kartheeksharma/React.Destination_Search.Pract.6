// Write your code here

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-cont">
        <div className="dest-search-cont">
          <h1 className="heading"> Destination Search </h1>
          <div className="search-input-cont">
            <input
              type="search"
              placeholder="search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destination-list">
            {searchResults.map(each => (
              <DestinationItem key={each.id} destinationDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
