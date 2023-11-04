"use client"
import skins from 'data/skins';
import { useEffect, useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './catalogoSkins.module.css';
import Skin from '../components/skin/Skin';
import InfoCard from '../components/infoCard/InfoCard';
import PopUpCadastro from '../components/PopUpCadastro/cadastro';
import Roupas from '../../models/roupas';
import Roupa from '../../models/roupa';
import { PuffLoader } from 'react-spinners';



const listaRoupas = new Roupas();
function CatalogSkins() {
  const [listaFinal, setListaFinal] = useState([]);
  const [apiData, setApiData] = useState(null);
  const [listaSkin, setListaSkin] = useState(null);
  const [exibirPopUp, setExibirPopUp] = useState(false);
  const [tipoPopUp, setTipoPopUp] = useState(null);
  const [on, setOn] = useState(true);
  const [edited, setEdited] = useState(null);

  // Adicionar Skin
  const handleCadastro = (nome, descricao, rarity, data, capitulo, temporada, imagem, ) => {
    // crio a skin
    const novaSkin = new Roupa(nome, descricao, rarity, data, capitulo, temporada, imagem, );
    // Atualizo ela na instacia da lista
    const updatedSkins = [...listaFinal, novaSkin];
    setListaFinal(updatedSkins);
    // Adiciono com o metodo addRoupa
    listaRoupas.addRoupa(novaSkin);
  }

  const handleCadastroEdit = (nome, descricao, rarity, data, capitulo, temporada, imagem,id) => {
    listaRoupas.getEditRoupaById(nome, descricao, rarity, data, capitulo, temporada, imagem ,id);
    setListaFinal(listaRoupas.getRoupas());
    setEdited(null);
  }

  const removeSkin = (list) => {
    listaRoupas.getRemoveRoupaById(list);
    setListaFinal(listaRoupas.getRoupas());
    handleClose();
  }

  const editSkin = (list) => {
    setEdited(list);
    handleClose();
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

  const handleSkin = (list) => {
    setListaSkin(list);
  }

  const handleClose = () => {
    setListaSkin(null);
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
        const novaSkin = new Roupa(
          skinData.name,
          skinData.description,
          skinData.rarity.value,
          skinData.added,
          skinData.introduction.chapter,
          skinData.introduction.season,
          skinData.images.icon,
          skinData.rarity.displayValue
        );
        listaRoupas.addRoupa(novaSkin);
      });
      setListaFinal(listaRoupas.getRoupas());
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
          <PopUpCadastro novosCadastros={handleCadastro} editCadastro={handleCadastroEdit}  lista={listaFinal} handleEdit={edited} />
          <button className={styles.bntExit} onClick={() => exit()}>X</button>

        </div>

      }
      {/* <h1 className={styles.skinpronta}>skins prontas!</h1> */}
      {
        listaFinal && listaFinal.length > 0 ? (

          <div className={styles.containerSkin}>
            {
              listaSkin !== null ? (
                <InfoCard list={listaSkin} close={handleClose} remove={removeSkin} edit={editSkin} />
              ) : null
            }
            {
              listaFinal.map((cardSkin) => (
                <Skin list={cardSkin} handleOpenSkin={handleSkin} />
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
