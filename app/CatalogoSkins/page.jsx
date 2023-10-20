"use client"
import roupas from 'data/roupas';
import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import Header from '../components/header/header';
import Price from '../components/price/Price';
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

  const formattedData = (date) => {
    const format = date.slice(0, 10);
    return format.split('-').reverse().join('/');
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
          apiData.map((item, index) => {
            if (index < 1699) {
              return (
                <div className={styles.card} key={index}>
                  <img src={item.images.icon} width={300} height={300} alt={item.name} />
                  <div className={styles.cardDescription}>
                    <h1>{item.name}</h1>
                    <p>{item.type.displayValue}</p>
                    <div className={styles.vbucks}>
                      <Price item={item} />
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