import React from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import ReadLater from '../components/ReadLater'

export default function ReadLaterScreen() {
    return (
        <>
            <Navbar />
            <main className="main">
                <SideNavbar 
                    activePage="Read Later"
                />
                <div className="main--col2">
                    <ReadLater />
                </div>
                <div className="main--col3">
                    <div className="read-later-articles">
                    </div>
                </div>
            </main>
        </>
    )
}
