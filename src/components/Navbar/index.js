import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Navbar = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="nav-bg">
      <img
        className="website-logo-in-navbar"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
      <div className="align-nav-items">
        <AiFillHome className="theme-icon" />
        <img
          className="profile-icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <button className="logout-btn" type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
export default withRouter(Navbar)
