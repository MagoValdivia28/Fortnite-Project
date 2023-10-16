import styles from './header.module.css';
import Link from 'next/link';
const Header = () => (
    <div className={styles.main}>
        <div className={styles.btn}>
            <Link className={styles.item1} href="/">Cadastre uma nova skin! </Link>
        </div>

        <div className={styles.itens}>
            <Link className={styles.item} href="/">home</Link>
            <Link className={styles.item} href="/">skins</Link>
            <Link className={styles.item} href="/">Maps</Link>
            <Link className={styles.item} href="/sobrenos">equipe</Link>
        </div>
    </div>
)

export default Header;