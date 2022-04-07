import Topbar from '../Topbar';
import Navbar from '../Navbar';
import styles from '../../styles/main-header.module.css';
import React from 'react'

function MainHeader() {
    return (
        <header className='sticky top-0 z-50'>
            <Topbar></Topbar>
            <nav className={`${styles.header} flex py-2  bg-white`}>
                <Navbar></Navbar>
            </nav>
        </header>
    )

}
export default MainHeader;