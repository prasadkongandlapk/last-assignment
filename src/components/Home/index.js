import './index.css'
import {Component} from 'react'
import Navbar from '../Navbar'

class Home extends Component {
  render() {
    return (
      <div className="bg">
        <Navbar />
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
