import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="main">
                <p style={{ paddingTop: "2em", textAlign: 'center', width: '100%' }} className='grey'>
                    Error 404: this page doesn't exist!
                </p>
            </main>
        </>
    )
}
