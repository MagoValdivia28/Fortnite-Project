import styles from './price.module.css';
import Image from 'next/image';


const calculatePreco = (rarity) => {
  if (rarity === 'Legendary') {
    return 2000;
  } else if (rarity === 'Epic') {
    return 1500;
  } else if (rarity === 'Rare') {
    return 1200;
  } else if (rarity === 'Uncommon') {
    return 800;
  } else if (rarity === 'Common') {
    return 500;
  } else {
    return 1500;
  }
};


const Price = ({ item }) => {
  const preco = calculatePreco(item.rarity.displayValue);

  return (
    <div onLoad={arrumarOrdem()} className={styles.vbucksCard}>
      <p>{preco}</p>
      <Image src={"/fortnite-v-buck.png"} alt={"V-bucks"} width={32} height={32} />
    </div>
  );
};

export default Price;