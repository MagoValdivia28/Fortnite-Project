import styles from './footer.module.css';
import Link from 'next/link';
const Footer = () => (
    <div className={styles.main}>
    <div className={styles.btn}>
        <p  className={styles.item1}> copy </p>
    </div>

    <div className={styles.footer_redesocial}>
        <a href="#">instagram</a>

    </div>

    <div className={styles.itens}>
        <Link className={styles.item} href="/">home</Link>
        <Link className={styles.item} href="/">skins</Link>
        <Link className={styles.item} href="/">Maps</Link>
        <Link className={styles.item} href="/sobrenos">equipe</Link>
    </div>
</div>

)

export default Footer;