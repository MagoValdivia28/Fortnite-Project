"use client"
import roupas from 'data/roupas';
import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import Header from '../components/header/header';
import Price from '../components/price/Price';
import styles from './catalogoSkins.module.css';
import Skins from '../components/skins/skins';
import Image from 'next/image';

export default function Home() {
  const [apiData, setApiData] = useState([]);
  const [click, setClick] = useState(false);

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
                <Skins item={item} src={item.images.icon} p={item.type.displayValue} p1={item} key={index} h1={item.name} />
              );
            }
          })
        )}
      </div>
    </>

  )
}