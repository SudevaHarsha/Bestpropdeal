import React from 'react'
import "./policies.css"
import Footer from '../../layout/Footer/Footer'
import Navbar from '../../layout/Navbar/Navbar'

const Policies = () => {
    return <>
        <Navbar type="fixed" bcolor="#342f30" />
        <div className='conditions_container'>
            <h2>Privacy And Policy</h2>
            <p>Policies</p>
        </div>
        <Footer />
    </>
}

export default Policies