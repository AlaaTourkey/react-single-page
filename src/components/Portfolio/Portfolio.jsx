import React, { Component } from 'react';
import styles from './Portfolio.module.css'
import photo from '../../images/portfolio/cabin.png';
import photo2 from '../../images/portfolio/cake.png';
import photo3 from '../../images/portfolio/circus.png';
import photo4 from '../../images/portfolio/game.png';
import photo5 from '../../images/portfolio/safe.png';
import photo6 from '../../images/portfolio/submarine.png';
export default class Portfolio extends Component {
    render() {
        return (
            <>
                <div className='my-5 pb-5 text-center'>
                    <h1 className='text-uppercase fw-bolder fs-1'>Portfolio</h1>
                    <i class="fa fa-star fs-1 "></i>
                    <div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src={photo} alt=""  />
                                </div>
                                <div class="col-md-4">
                                <img src={photo2} alt=""  />
                                </div>
                                <div class="col-md-4">
                                <img src={photo3} alt=""  />
                                </div>
                                <div class="col-md-4">
                                <img src={photo4} alt=""  />
                                </div>
                                <div class="col-md-4">
                                <img src={photo5} alt=""  />
                                </div>
                                <div class="col-md-4">
                                    <img src={photo6} alt=""  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
