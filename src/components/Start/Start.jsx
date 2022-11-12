import React, { Component } from 'react';
import styles from './Start.module.css';
import photo from '../../images/avataaars.svg'
export default class Start extends Component {
    render() {
        return (
            <>
                <header className={`${styles.test} pb-4 vh-100 d-flex h-100 align-items-center justify-content-center text-center`}>
                    
                            <div >
                                <img className={`${styles.photo1} mb-4`} src={photo} alt="photo" />
                                <h1 className='text-uppercase text-white fs-1 fw-bolder '>START REACT</h1>
                                <i class="fa fa-star fs-1 text-white"></i>
                                <p className='font-weight mb-0 text-white text-capitalize fs-4'>Graphic Artist - Web Designer - Illustrator</p>
                            </div>
                </header>
            </>
        )
    }
}
