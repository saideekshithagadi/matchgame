import './index.css'

const Navbar = props => {
  const {score, timer} = props
  return (
    <div className="Nav_con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
        alt="website logo"
        className="matchlogo"
      />
      <div className="nav_right ">
        <p>Score: {score}</p>
        <div className="nav_right2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timerlogo"
          />
          <p>{timer} sec</p>
        </div>
      </div>
    </div>
  )
}
export default Navbar
