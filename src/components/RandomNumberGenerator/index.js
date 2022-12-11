import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {RandomNumber: 0}

  onGenerate = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({RandomNumber: randomNumber})
  }

  render() {
    const {RandomNumber} = this.state
    return (
      <div className="RandomNumberAppContainer">
        <div className="HomeContainer">
          <h1 className="title">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onGenerate}
          >
            Generate
          </button>
          <p className="Number">{RandomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
