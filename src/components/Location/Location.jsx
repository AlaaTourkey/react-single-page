import React, { Component } from 'react'
import styles from './Location.module.css';

export default class Location extends Component {
    render() {
        return (
            <>
                <div className={`${styles.location} py-5   text-center`}>
                    <div className="container w-75">
                        <div className="row">
                            <div className="col ">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive Clark, MO 65243</p>
                            </div>
                            <div className="col ">
                                <h3>AROUND THE WEB</h3>
                                <div>
                                    <div className='socials'>
                                        <ul>
                                            <div className="icon my-4 ">
                                                <div className="  pb-2 mb-2 text-center">
                                                    <span className="position-relative">
                                                        <li><i class="fa fa-home  rounded-circle px-2 fs-4"></i></li>
                                                        <li><i class="fa fa-home  rounded-circle px-2 fs-4"></i></li>
                                                        <li><i class="fa fa-home  rounded-circle px-2 fs-4"></i></li>
                                                        <li><i class="fa fa-home  rounded-circle px-1 fs-4"></i></li>
                                                    </span>
                                                </div>
                                            </div>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
