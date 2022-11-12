import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Apout from '../Apout/Apout'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Location from '../Location/Location'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'
import Start from '../Start/Start'

export default class MasterLayOut extends Component {
    render() {
        return (
            <>
        <Navbar/>
        <Outlet></Outlet>
                {/* <Start/>
                <Portfolio/>
                <Apout/>
                <Contact/>
                 */}
        <Location/>
        <Footer/>
            </>
        )
    }
}
