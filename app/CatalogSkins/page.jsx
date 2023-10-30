"use client"
import skins from 'data/skins';
import { useEffect, useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './catalogoSkins.module.css';
import Skin from '../components/skin/Skin';
import InfoCard from '../components/infoCard/InfoCard';
import PopUpCadastro from '../components/PopUpCadastro/cadastro';
import { PuffLoader } from 'react-spinners';
import Roupas from '../../models/roupas';

function CatalogSkins() {
  const [listaFinal, setListaFinal] = useState([]);
  const [apiData, setApiData] = useState(null);
  const [name, setName] = useState(null);
  const [rarity, setRarity] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [vbucks, setVbucks] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [season, setSeason] = useState(null);
  const [dateAdded, setDateAdded] = useState(null);
  const [exibirPopUp, setExibirPopUp] = useState(false);
  const [tipoPopUp, setTipoPopUp] = useState(null);
  const [on, setOn] = useState(true);

  const listaRoupas = new Roupas();
  const formattedData = (date) => {
    const format = date.slice(0, 10);
    return format.split('-').reverse().join('/');
  }
  function handlePopUp(tipo) {
    setExibirPopUp(true);
    setTipoPopUp(tipo);
    setOn(false);
  }

  function exit() {
    setExibirPopUp(false);
    setOn(true);
  }

  const handleSkin = (name, rarity, description, image, chapter, season, dateAdded, vbucks) => {
    setName(name);
    setRarity(rarity);
    setDescription(description);
    setImage(image);
    setVbucks(vbucks);
    setChapter(chapter);
    setSeason(season);
    setDateAdded(formattedData(dateAdded))
   console.log(name, rarity, description, chapter, season, image, vbucks);
  }

  const handleClose = () => {
    setName(null)
    setRarity(null);
    setDescription(null);
    setImage(null);
    setVbucks(null);
  }

  const handleCadastro = (nome, descricao, rarity, data, capitulo, temporada) => {
    listaRoupas.addRoupa(nome, descricao, rarity, data, capitulo, temporada);
    console.log(nome, descricao, rarity, data, capitulo, temporada);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await skins();
        setApiData(data);
      } catch (error) {
        throw error;
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (apiData) {
      apiData.forEach((skinData) => {
        listaRoupas.addRoupa(skinData.name, skinData.description, skinData.rarity.value, skinData.added, skinData.introduction.chapter, skinData.introduction.season, skinData.images.icon);
      });
      
      /*       // Atualize o estado com a lista de agentes atualizada
      const updatedAgentes = [...listaAgentes, ...instanciaLista.getListaAgentes()]; // Combine os dados da API com os existentes
      setListaAgentes(updatedAgentes); */
      setListaFinal(listaRoupas.getRoupas());
      console.log(listaRoupas.getRoupas());
    }
  }, [apiData]);

  
  return (
    <div className={styles.main}>
      <Header />
      {
        on == true ? (
          <div className={styles.cardBnt}>
            <button className={styles.bnt} onClick={() => handlePopUp("Deu tudo certo", "success")}>Crie sua própria skin!!!</button>
          </div>
        ) : null
      }
      {
        exibirPopUp && <div className={styles.cardCreator}>
          <PopUpCadastro novosCadastros={handleCadastro} />
          <button className={styles.bntExit} onClick={() => exit()}>X</button>

        </div>

      }
      {/* <h1 className={styles.skinpronta}>skins prontas!</h1> */}
      {
        apiData ? (

          <div className={styles.containerSkin}>
            {
              name !== null ? (
                <InfoCard nome={name} raridade={rarity} descricao={description} imagem={image} vbucks={vbucks} chapter={chapter} season={season} added={dateAdded} close={handleClose} />
              ) : null
            }
            {
              listaFinal.map((cardSkin) => (
                  <Skin list={cardSkin} func={handleSkin} />  
              ))
            }
          </div>
        ) : (
          <PuffLoader
            color="yellow"
            className={styles.loading}
            speedMultiplier={0.8}
            size={80}
          />
        )
      }
      <Footer />
    </div>

  )
}

export default CatalogSkins;
