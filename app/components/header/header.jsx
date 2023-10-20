import styles from './header.module.css';
import Link from 'next/link';
import { AiFillHome } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiTShirtFill } from "react-icons/ri";
import { FaMap } from "react-icons/fa";
import {BsFillPersonPlusFill} from "react-icons/bs";




const Header = () => (
    <header className={styles.headerContainer}>
        <nav className={styles.nav}>
            <Link className={styles.titile} href="/">
                <h2 className={styles.icon}><BsFillPersonPlusFill /></h2>
                <h1 className={styles.textIcon}>Crie sua Skin !!!</h1>
            </Link>
            <ul className={styles.list}>
                <li>
              
                    <Link className={styles.item} href="/"><p><AiFillHome /> Home</p></Link>
                </li>
                <li>

                    <Link className={styles.item} href="/"> <p><RiTShirtFill /> Skins</p></Link>
                </li>
                <li>

                    <Link className={styles.item} href="/"><p><FaMap /> Mapas</p></Link>
                </li>
                <li>

                    <Link className={styles.item} href="/sobrenos"><p><IoIosPeople /> Equipe</p></Link>
                </li>

            </ul>
        </nav>
    </header>
)

export default Header;