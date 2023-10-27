"use client"
import skins from 'data/skins';
import { useEffect, useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './catalogoSkins.module.css';
import Skin from '../components/skin/Skin';
import InfoCard from '../components/infoCard/InfoCard';

function CatalogSkins() {
  const [apiData, setApiData] = useState(null);
  const [name, setName] = useState(null);
  const [rarity, setRarity] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [vbucks, setVbucks] = useState(null);
  const [introduction, setIntroducion] = useState(null);
  const [dateAdded, setDateAdded] = useState(null);

  const formattedData = (date) => {
    const format = date.slice(0, 10);
    return format.split('-').reverse().join('/');
  }


  const handleSkin = (name, rarity, description, image, introduction, dateAdded ,vbucks) => {
    setName(name);
    setRarity(rarity);
    setDescription(description);
    setImage(image);
    setVbucks(vbucks);
    setIntroducion(introduction);
    setDateAdded(formattedData(dateAdded))
    console.log(name, rarity, description, image, vbucks);
  }

  const handleClose = () => {
    setName(null)
    setRarity(null);
    setDescription(null);
    setImage(null);
    setVbucks(null);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await skins();
        setApiData(data);
        console.log(data);
      } catch (error) {
        throw error;
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {
        apiData ? (
          <div className={styles.containerSkin}>
            {
              name !== null ? (
                <InfoCard nome={name} raridade={rarity} descricao={description} imagem={image} vbucks={vbucks} introduction={introduction} added={dateAdded} close={handleClose} />
              ) : null
            }
            {
              apiData.map((cardSkin) => (
                <Skin list={cardSkin} func={handleSkin} />
              ))

            }
          </div>
        ) : (
          <p>aaa</p>
        )
      }
      <Footer />
    </>

  )
}

export default CatalogSkins;