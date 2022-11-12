import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Apout from './components/Apout/Apout'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Location from './components/Location/Location'
import MasterLayOut from './components/MasterLayOut/MasterLayOut'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/Notfound/Notfound'
import Portfolio from './components/Portfolio/Portfolio'
import Start from './components/Start/Start'



export default class App extends Component {
  routes=createBrowserRouter([
    {
      path: "/", element:<MasterLayOut /> ,errorElement: <NotFound/>, children: [
        { index: true, element: <MasterLayOut /> },
        { path: "start", element: <Start/> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "Apout", element: <Apout /> },
        { path: "Contact", element: < Contact/> },
  
      ]
    }
  ])

  render() {
    return (
      <>
      <RouterProvider router={this.routes}/>
      </>
    )
  }
}

