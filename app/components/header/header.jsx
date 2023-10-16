import styles from './header.module.css';
import NavLink from "../navLink"

const Header = () => (
    <div>
        <div>
            <NavLink href="/" text="Cadastre uma nova skin!!!" />
        </div>

        <div>
            <NavLink href="/" text="Home" />
            <NavLink href="/" text="Skins" />
            <NavLink href="/" text="mapas" />
            <NavLink href="/" text="sobre" />
        </div>
    </div>
)

export default Header;