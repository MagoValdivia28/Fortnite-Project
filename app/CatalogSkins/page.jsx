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
import { ImSearch } from 'react-icons/im';



const listaRoupas = new Roupas();
function CatalogSkins() {
  const [listaFinal, setListaFinal] = useState([]);
  const [apiData, setApiData] = useState(null);
  const [listaSkin, setListaSkin] = useState(null);
  const [exibirPopUp, setExibirPopUp] = useState(false);
  const [tipoPopUp, setTipoPopUp] = useState(null);
  const [on, setOn] = useState(true);
  const [edited, setEdited] = useState(null);
  const [busca, setBusca] = useState(null);
  const [rarity, setRarity] = useState([]);
  const [search, setSearch] = useState(null);

  // Adicionar Skin
  const handleCadastro = (nome, descricao, rarity, data, capitulo, temporada, imagem,) => {
    // crio a skin
    const novaSkin = new Roupa(nome, descricao, rarity, data, capitulo, temporada, imagem,);
    // Atualizo ela na instacia da lista
    const updatedSkins = [...listaFinal, novaSkin];
    setListaFinal(updatedSkins);
    // Adiciono com o metodo addRoupa
    listaRoupas.addRoupa(novaSkin);
  }

  const handleCadastroEdit = (nome, descricao, rarity, data, capitulo, temporada, imagem, id) => {
    listaRoupas.getEditRoupaById(nome, descricao, rarity, data, capitulo, temporada, imagem, id);
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
    console.log(listaRoupas.roupas)
    setExibirPopUp(true);
    setTipoPopUp(tipo);
    setOn(false);
  }

  function exit() {
    console.log(listaRoupas.roupas)
    setExibirPopUp(false);
    setOn(true);
  }

  const handleSkin = (list) => {
    setListaSkin(list);
  }

  const handleClose = () => {
    setListaSkin(null);
  }

  console.log(apiData);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await skins();
        setApiData(data);
        const raridadeFilter = data.filter((skin, index) => data.findIndex((skinUnica) => skinUnica.rarity.value == skin.rarity.value) == index);
        setRarity(raridadeFilter.map((skin) => skin.rarity.value));
      } catch (error) {
        throw error;
      }
    }
    fetchData();
  }, []);

  console.log(rarity);

  useEffect(() => {
    console.log(listaRoupas.roupas);
    if (apiData) {
      if (listaRoupas.getRoupas().length == 0) {
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
        console.log(listaRoupas.roupas);
      }
    }
  }, [apiData]);
  console.log(busca);


  useEffect(() => {
    if (busca) {
      const filtro = listaRoupas.roupas.filter((roupa) => {
        return roupa.nome.toLowerCase().includes(busca.toLowerCase());
      });
      setListaFinal(filtro);
    } else if (search) {
      const filtro = listaRoupas.roupas.filter((roupa) => {
        return roupa.raridade.toLowerCase().includes(search.toLowerCase());
      });
      setListaFinal(filtro);
    }
     else {
      setListaFinal(listaRoupas.roupas);
    }
  }, [busca, search]);


  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.filtros}>
        <input type="text"
          onChange={(e) => { setBusca(e.target.value) }}
          value={busca}
          className={styles.inputSearch}
          placeholder="🔍Pesquisar o nome da skin"
        />
        <select className={styles.selectRaridade} name="raridades" value={search} onChange={(e) => setSearch(e.target.value)} >
          <option value="">Todas as raridades</option>
          {
            rarity.map((raridade) => (
              <option value={raridade}>{raridade}</option>
            ))
          }
        </select>
      </div>
      {
        on == true ? (

          <div className={styles.cardBnt}>
            <button className={styles.bnt} onClick={() => handlePopUp("Deu tudo certo", "success")}>Crie sua própria skin!!!</button>
          </div>
        ) : null
      }
      {
        exibirPopUp && <div className={styles.cardCreator}>
          <PopUpCadastro novosCadastros={handleCadastro} editCadastro={handleCadastroEdit} lista={listaRoupas.roupas} handleEdit={edited} />
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
