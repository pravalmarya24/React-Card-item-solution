// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsListDetails} = props
  const {title, description, className, imgUrl} = cardsListDetails
  return (
    <li className={`${className}`}>
      <div>
        <h1 className="list-heading">{title}</h1>
        <p className="list-para">{description}</p>
        <div className="image-container">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}
export default CardItem
