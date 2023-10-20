"use client"
import roupas from 'data/roupas';
import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import Header from '../components/header/header';
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
      return "2000 v-bucks"; // Substitua essa string pelo ícone apropriado
    }
    else if (item.rarity.displayValue === 'Rare') {
      return "1200 v-bucks"; // Substitua essa string pelo ícone apropriado
    }
    else if (item.rarity.displayValue === 'Uncommon') {
      return "800 v-bucks"; // Substitua essa string pelo ícone apropriado
    }
    else if (item.rarity.displayValue === 'Common') {
      return "500 v-bucks"; // Substitua essa string pelo ícone apropriado
    }
    else {
      return "1500 v-bucks"; // Substitua essa string pelo ícone apropriado
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
                <div className={styles.card} key={index}>
                  <img src={item.images.icon} width={300} height={300} alt={item.name} />
                  <div className={styles.cardDescription}>
                    <h1>{item.name}</h1>
                    <p>{item.type.displayValue}</p>
                    <div className={styles.vbucks}>
                      <p>{price(item)}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
    </>

  )
}