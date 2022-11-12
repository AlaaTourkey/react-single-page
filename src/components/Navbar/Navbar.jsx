import React, { Component } from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className={`${styles.navbarColor} navbar navbar-expand-lg navbar-dark  fixed-top navbar-shrink`}>
                    <div className="container w-75">
                        <Link className="navbar-brand text-uppercase" to={'start'}>start react</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={'Portfolio'}>Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'Apout'} >Apout</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'contact'} >contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </>
        )
    }
}
