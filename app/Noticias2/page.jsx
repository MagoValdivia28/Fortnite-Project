import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import styles from './page.module.css'
import Image from 'next/image'

const Noticia2 = () => {
    return (
        <>
         <Header/>
        <div className={styles.main}>
            <img className={styles.img2}  src="	https://cdn2.unrealengine.com/discord-gfx-blogheader-1900x600-89c1c2c109a8.jpg"/>

            <div>
                <h1> 2</h1>
            </div>
           
            <p>Noticia  2</p>
            
        </div>
        <Footer/>
        </>
    )

}

export default Noticia2