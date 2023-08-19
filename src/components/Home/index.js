import './index.css'
import {AiFillHome} from 'react-icons/ai'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Navbar from '../Navbar'

class Home extends Component {
  state = {isBannerShowing: true, searchInput: '', videos: []}

  componentDidMount = () => {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const token = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    const videosInfo = data.videos.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      channelName: each.channel.name,
      channelProfileImageUrl: each.channel.profile_image_url,
      viewCount: each.view_count,
      publishedAt: each.published_at,
    }))
    this.setState({videos: videosInfo})
  }

  onRemoveBanner = () => {
    this.setState(prevState => ({isBannerShowing: !prevState.isBannerShowing}))
  }

  render() {
    const {isBannerShowing, videos} = this.state
    return (
      <div className="bg">
        <Navbar />
        <div className="home-bg-without-nav">
          <div className="navigation-buttons-bg">
            <div className="navigation-button-bg">
              <AiFillHome className="navigation-icon" />
              <p>Home</p>
            </div>
            <div className="navigation-button-bg">
              <AiFillHome className="navigation-icon" />
              <p>Trending</p>
            </div>
            <div className="navigation-button-bg">
              <AiFillHome className="navigation-icon" />
              <p>Gaming</p>
            </div>
            <div className="navigation-button-bg">
              <AiFillHome className="navigation-icon" />
              <p>Saved Videos</p>
            </div>
          </div>
          <div className="info-bg">
            {isBannerShowing ? (
              <div className="advertizing-banner">
                <div>
                  <img
                    className="website-logo-in-home"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                  <p className="buy-premium-products-text">
                    Buy Nxt, Watch Premium prepaid plans with UPI
                  </p>
                  <button type="button" className="get-it-now-btn">
                    GET IT NOW
                  </button>
                </div>
                <button
                  className="del-banner-btn"
                  type="button"
                  onClick={this.onRemoveBanner}
                >
                  into
                </button>
              </div>
            ) : (
              ''
            )}
            <div className="search-bg">
              <input type="text" placeholder="Search" />
              <button type="button">searchIcon</button>
            </div>
            <div className="videos-bg">
              <div>
                <img src={videos.thumbnailUrl} alt="thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
