import './index.css'
const Gameover = props => {
  const {score, play} = props
  const playagain = () => {
    play()
  }
  return (
    <div className="game">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
        alt="trophy"
      />
      <p>Your Score</p>
      <p>{score}</p>
      <button onClick={playagain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default Gameover
