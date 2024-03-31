import './index.css'

const ThumbNail = props => {
  const {thumbnail} = props
  const imageurl = thumbnail
  return (
    <div className="thumb_con">
      <img src={imageurl} className="thumbimg" />
    </div>
  )
}

export default ThumbNail
