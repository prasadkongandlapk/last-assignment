import './index.css'
import {BsMoonFill} from 'react-icons/bs'

const Navbar = () => (
  <div className="nav-bg">
    <img
      className="logo-img"
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="website logo"
    />
    <div>
      <BsMoonFill />
      <p>p</p>
      <button type="button" onClick={this.onClickLogout}>
        Logout
      </button>
    </div>
  </div>
)

export default Navbar
