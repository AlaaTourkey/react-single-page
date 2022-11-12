import React, { Component } from 'react'
import styles from './Contact.module.css';

export default class Contact extends Component {
    render() {
        return (
            <>
                <div className='py-3 my-5 text-center'>
                    <div className={`${styles.contact}`}>
                        <h1 className='text-uppercase  fs-1 fw-bolder pt-5' >contact me</h1>
                        <i class="fa fa-star fs-1  pt-3"></i>
                    </div>

                    <div className="container my-5 text-sm-start ">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <form>
                                    <div className="control-group ">
                                        <div className=" controls mb-0 pb-2">
                                            <label>Name</label>
                                            <input className="form-control py-3 my-3" type="text" placeholder="Name" required="required"  />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className=" controls mb-0 pb-2">
                                            <label>Email Address</label>
                                            <input className="form-control py-3 my-3" type="email" placeholder="Email Address" required="required"  />
                                            
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className=" controls mb-0 pb-2">
                                            <label>Phone Number</label>
                                            <input className="form-control py-3 my-3" type="tel" placeholder="Phone Number" required="required"  />

                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className=" controls mb-0 pb-2">
                                            <label>Message</label>
                                            <textarea className="form-control py-3 my-3" rows={5} placeholder="Message" required="required"   />

                                        </div>
                                    </div>
                                    <br />
                                    
                                    <div className="form-group">
                                        <button className={`${styles.bot} fs-5`} id="sendMessageButton" type="submit">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            
            </>
        )
    }
}
