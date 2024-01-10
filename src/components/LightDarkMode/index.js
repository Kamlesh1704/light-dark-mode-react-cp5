// Write your code here
import './index.css'
import {Component} from 'react'
class LighDarkMode extends Component {
  state = {
    mode: 'Light Mode',
    headClass: 'headingLight',
    bgClass: 'dark',
    buttonClass: 'buttonLight',
  }
  onclicking = () => {
    const {mode} = this.state
    if (mode === 'Light Mode') {
      return this.setState(prev => ({
        mode: (prev.mode = 'Dark Mode'),
        headClass: (prev.headClass = 'headingDark'),
        bgClass: (prev.bgClass = 'light'),
        buttonClass: (prev.buttonClass = 'buttonDark'),
      }))
    } else {
      return this.setState(prev => ({
        mode: (prev.mode = 'Light Mode'),
        headClass: (prev.headClass = 'headingLight'),
        bgClass: (prev.bgClass = 'dark'),
        buttonClass: (prev.buttonClass = 'buttonLight'),
      }))
    }
  }
  render() {
    const {mode, headClass, bgClass, buttonClass} = this.state
    return (
      <div className={bgClass}>
        <h1 className={headClass}>Click To change mode</h1>
        <button className={buttonClass} onClick={this.onclicking}>
          {mode}
        </button>
      </div>
    )
  }
}
export default LighDarkMode
