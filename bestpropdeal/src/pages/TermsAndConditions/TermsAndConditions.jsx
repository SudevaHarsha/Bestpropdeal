import React from 'react'
import "./terms.css"
import Footer from '../../layout/Footer/Footer'
import Navbar from '../../layout/Navbar/Navbar'

const TermsAndConditions = () => {
    return <>
        <Navbar type="fixed" bcolor="#342f30" />
        <div className='conditions_container'>
            <h2>Terms And Conditions</h2>
            <p>Terms And Conditions</p>
        </div>
        <Footer />
    </>
}

export default TermsAndConditions