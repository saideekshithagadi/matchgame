import './index.css'

const ItemList = props => {
  const {id, imageUrl, category, verify} = props
  const check = () => {
    verify(imageUrl)
  }

  return (
    <li>
      <button className="imagebtn" onClick={check}>
        <img src={imageUrl} className="img_size" alt={category} />
      </button>
    </li>
  )
}
export default ItemList
