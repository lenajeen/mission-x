import React from 'react'
import { Container, Button } from '@material-ui/core'
import LearningPathways from '../homepageIMG/programmeTextIMGs/learningpath.png'
import DigitalTechnologies from '../homepageIMG/programmeTextIMGs/digitaltech.png'
import KeyCompetencies from '../homepageIMG/programmeTextIMGs/keycomp.png'
import IR4 from '../homepageIMG/programmeTextIMGs/ir4.png'
import './ProgrammeText.css'

export default function ProgrammeText() {
    return (
        <Container maxWidth="xl">
            <div className="ptHeading">
                <h2 className="ptH1">How our programmes helps teachers and schools</h2>
                <br/>
                <div>
                    <Button style={{ width: "350px" }}>
                        <img src={LearningPathways} style={{ height: "45px" }}/></Button>
                    <Button style={{ width: "350px" }}>
                        <img src={DigitalTechnologies} style={{ height: "45px" }}/></Button>
                    <Button style={{ width: "350px" }}>
                        <img src={KeyCompetencies} style={{ height: "45px" }}/></Button>
                    <Button style={{ width: "350px" }}>
                        <img src={IR4} style={{ height: "45px" }}/></Button>
                </div>
            </div>
        </Container>
    )
}