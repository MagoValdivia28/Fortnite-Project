import styles from './price.module.css';
// import Image from 'next/image';


const calcPrice = (rarity) => {
  if (rarity === 'legendary') {
    return 2000;
  } else if (rarity === 'epic') {
    return 1500;
  } else if (rarity === 'rare') {
    return 1200;
  } else if (rarity === 'uncommon') {
    return 800;
  } else if (rarity === 'common') {
    return 500;
  } else {
    return 1500;
  }
};

const Price = ({ rarity }) => {
  return (
    <div className={styles.vbucksCard}>
      <p>{calcPrice(rarity)}</p>
      <img src={"/fortnite-v-buck.png"} alt={"V-bucks"} width={32} height={32} />
    </div>
  );
};

export default Price;