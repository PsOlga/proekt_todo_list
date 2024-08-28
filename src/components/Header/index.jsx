import styles from "./style.module.css";
import React from "react";
import logo from "../../assets/icons/logo.png"
function Header() {
    return (

        <div className={styles.container}>
            <header className={styles.header}>

                <img src={logo} alt="logo" />

                <nav className={styles.nav_header}>
                    <a href="#">Главная</a>
                    <div className={styles.linie}></div>
                    <a href="#">Музыка</a>
                    <div className={styles.linie}></div>
                    <a href="#">Сообщества</a>
                    <div className={styles.linie}></div>
                    <a href="#">Друзья</a>
                </nav>

            </header>
        </div>
    )
}
export default Header;