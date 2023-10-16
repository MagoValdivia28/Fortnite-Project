import styles from './header.module.css';
import Link from 'next/link';
const Header = () => (
    <div>
        <div>
            <Link href="/">Cadastre uma nova skin!!!" </Link>
        </div>

        <div>
            <Link href="/">home </Link>
            <Link href="/">skin </Link>
            <Link href="/">Mapa </Link>
            <Link href="/">sobre nós </Link>
        </div>
    </div>
)

export default Header;