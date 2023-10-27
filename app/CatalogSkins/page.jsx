"use client"
import skins from 'data/skins';
import { useEffect, useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './catalogoSkins.module.css';
import Skin from '../components/skin/Skin';
import InfoCard from '../components/infoCard/InfoCard';
import PopUpCadastro from '../components/PopUpCadastro/cadastro';

function CatalogSkins() {
  const [apiData, setApiData] = useState(null);
  const [name, setName] = useState(null);
  const [rarity, setRarity] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [vbucks, setVbucks] = useState(null);
  const [exibirPopUp, setExibirPopUp] = useState(false);
  const [tipoPopUp, setTipoPopUp] = useState(null);


  // const formattedData = (date) => {
  //   const format = date.slice(0, 10);
  //   return format.split('-').reverse().join('/');
  // }

  // const handleSkin = (name) => {
  //   alert(name);
  // }

  function handlePopUp(tipo) {
    setExibirPopUp(true);
    setTipoPopUp(tipo);
  }
  function exit() {
    setExibirPopUp(false);
  }

  const handleSkin = (name, rarity, description, image, vbucks) => {
    setName(name);
    setRarity(rarity);
    setDescription(description);
    setImage(image);
    setVbucks(vbucks);
    console.log(name, rarity, description, image, vbucks);
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
    <div className={styles.main}>
      <Header />
      <button className={styles.bnt} onClick={() => handlePopUp("Deu tudo certo", "success")}>Crie sua própria skin!!!</button>
      {
        exibirPopUp && <div className={styles.cardCreator}>
          <PopUpCadastro type={tipoPopUp} func={exibirPopUp} />
          <button className={styles.bntExit} onClick={() => exit()}>X</button>

        </div>

      }
      {
        apiData ? (
          <div className={styles.containerSkin}>
            {
              name !== null ? (
                <InfoCard nome={name} raridade={rarity} descricao={description} imagem={image} vbucks={vbucks} />
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
    </div>

  )
}

export default CatalogSkins;