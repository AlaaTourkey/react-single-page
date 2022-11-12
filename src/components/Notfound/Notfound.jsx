import React, { Component } from 'react'
import photo from '../../images/404-error.jpg'
export default class NotFound extends Component {

render() {
    return (
        <>
        <div className=' text-center'>
            <img className='w-50' src={photo} alt=""  />
        </div>
        </>
    )
}
}
