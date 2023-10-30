import styles from "./skin.module.css"
import Price from '../price/Price';

const Skin = ({ list, func}) => {
  const handleSkin = () => {
    func(list.name, list.rarity.displayValue, list.description, list.images.icon, list.introduction.text, list.added ,list.rarity.value );
  }
  return (
    <div onClick={handleSkin} className={styles[list.rarity.value] + ' ' + styles.card} key={list.id}>
      <img src={list.images.icon} width={300} height={300} alt={list.name} />
      <div className={styles.cardDescription}>
        <h1>{list.name}</h1>
        <p>{list.type.displayValue}</p>
        <div className={styles.vbucks}>
          <Price rarity={list.rarity.displayValue} />
        </div>
      </div>
    </div>
  )
}

export default Skin;