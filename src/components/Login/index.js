import './index.css'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {username: '', showPassword: false, password: '', error: ''}

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 10})
  }

  onError = error => {
    this.setState({error})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {history} = this.props
    history.replace('/')

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onError(data.error_msg)
    }
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, error, showPassword, password} = this.state

    const passwordType = showPassword ? 'text' : 'password'

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg">
        <form onSubmit={this.onSubmitForm}>
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <div className="label-input-bg">
            <label htmlFor="name">USERNAME</label>
            <input
              onChange={this.onChangeName}
              className="input"
              value={username}
              id="name"
              placeholder="Username"
              type="text"
            />
          </div>
          <div className="label-input-bg">
            <label htmlFor="name">PASSWORD</label>
            <input
              className="input"
              placeholder="Password"
              value={password}
              id="name"
              type={passwordType}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="show">
            <input onClick={this.onShowPassword} id="show" type="checkbox" />
            <label htmlFor="show">Show Password</label>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <p className="error">{error}</p>
        </form>
      </div>
    )
  }
}

export default Login
