import styles from './footer.module.css';
import {AiFillInstagram } from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"


const Footer = () => (
    <div>
    <div className={styles.Article}>
        <div className={styles.link}>
          <a href="https://www.instagram.com/">< AiFillInstagram /> </a>
          <a href="https://github.com/MagoValdivia28?tab=repositories"><AiFillGithub /></a>
        </div>

        <div className={styles.copy}>
            <p>Todos os direitos reservados &copy; 2023</p>


        </div>

      

    </div>
    </div>
)

export default Footer;