import React, {useState} from 'react'
import Header from './Header.js'
import PromoBanner from './promoBanner.js'
import WeOffer from './weOffer.js'
import DigitalSkills from './DigitalSkills.js'
import ProgrammeText from './ProgrammeText.js'
import BottomPromo from './bottomPromo.js'
import Footer from './Footer.js'
import PopUpList from './Login'

export default function Homepage() {
    const [dialogOpen, setDialogOpen] =useState(false)
    return (

        <div className="root">
            <Header setDialogOpen={setDialogOpen} />
            <PromoBanner setDialogOpen={setDialogOpen} />
            <WeOffer />
            <DigitalSkills />
            <ProgrammeText />
            <BottomPromo setDialogOpen={setDialogOpen} />
            <Footer />
            <PopUpList dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
        </div>
    )
}