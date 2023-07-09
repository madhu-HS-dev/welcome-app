// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  changeBtn = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you!Happy Learning</p>
        {isSubscribed ? (
          <button className="button" type="button" onClick={this.changeBtn}>
            Subscribe
          </button>
        ) : (
          <button className="button" type="button" onClick={this.changeBtn}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
