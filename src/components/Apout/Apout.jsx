import React, { Component } from 'react'
import styles from './Apout.module.css';

export default class Apout extends Component {
    render() {
        return (
            <>
                <div className={`${styles.test} pb-5 d-flex h-50  justify-content-center text-center`}>
                    <div >

                        <h1 className='text-uppercase text-white fs-1 fw-bolder pt-5'>about</h1>
                        <i class="fa fa-star fs-1 text-white pt-3"></i>

                        <div class="container text-center py-5 text-white fw-normal fs-6 lh-4">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 ml-auto">
                                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>
                                <div class="col-lg-4 mr-auto">
                                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
