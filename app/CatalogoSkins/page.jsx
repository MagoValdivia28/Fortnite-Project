"use client"
import roupas from 'data/roupas';
import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import Header from '../components/header/header';
import Skins from '../components/skins/skins';
import Image from 'next/image';

import styles from './catalogoSkins.module.css';


export default function Home() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await roupas();
        setApiData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const filteredData = apiData.filter(item => item.type.value === 'outfit' && item.name !== 'TBD' && item.name !== 'null' && item.introduction !== null);

  console.log(filteredData);

  const formattedData = (date) => {
    const format = date.slice(0, 10);
    return format.split('-').reverse().join('/');
  }

  const price = (item) => {
    if (item.rarity.displayValue === 'Legendary') {
      return <div className={styles.vbucksCard}>
        <p>2000</p>
        <Image src={"/fortnite-v-buck.png"} alt={"V-bucks"} width={32} height={32} />
      </div>; // Substitua essa string pelo ícone apropriado
    }
    else if (item.rarity.displayValue === 'Rare') {
      return <div className={styles.vbucksCard}>
        <p>1200</p>
        <Image src={"/fortnite-v-buck.png"} alt={"V-bucks"} width={32} height={32} />
      </div>;
    }
    else if (item.rarity.displayValue === 'Uncommon') {
      return <div className={styles.vbucksCard}>
        <p>800</p>
        <Image src={"/fortnite-v-buck.png"} alt={"V-bucks"} width={32} height={32} />
      </div>;
    }
    else if (item.rarity.displayValue === 'Common') {
      return <div className={styles.vbucksCard}>
        <p>500</p>
        <Image src={"/fortnite-v-buck.png"} alt={"V-bucks"} width={32} height={32} />
      </div>;
    }
    else {
      return <div className={styles.vbucksCard}>
        <p>1500</p>
        <Image src={"/fortnite-v-buck.png"} alt={"V-bucks"} width={32} height={32} />
      </div>;
    }
  }

  return (
    <>
      <Header />
      <div className={styles.containerSkin}>
        {apiData.length == 0 ? (
          <div>
            <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor='#F4442E'
              barColor='#51E5FF'
            />
          </div>
        ) : (
          filteredData.map((item, index) => {
            if (index < 1699) {
              return (
               <Skins item={item} index={index} src={item.images.icon} p={item.type.displayValue} p1={price(item)} key={index} h1={item.name}/>
              );
            }
          })
        )}
      </div>
    </>

  )
}