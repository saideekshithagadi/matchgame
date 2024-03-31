import './index.css'

const TabList = props => {
  const {tabId, displayText, clickid} = props

  const changetab = () => {
    clickid(tabId)
  }
  return (
    <li className="button_con">
      <button onClick={changetab}>{displayText}</button>
    </li>
  )
}
export default TabList
