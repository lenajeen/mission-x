import React from 'react'
import './DigitalSkills.css';
import Container from '@material-ui/core/container';

import creativityCard from '../homepageIMG/digitalSkillsIMGs/creativityCard.png';
import creativityOverlay from '../homepageIMG/digitalSkillsIMGs/creativityOverlay.png';
import criticalThinkingCard from '../homepageIMG/digitalSkillsIMGs/criticalThinkingCard.png';
import criticalThinkingOverlay from '../homepageIMG/digitalSkillsIMGs/criticalThinkingOverlay.png';
import communicationCard from '../homepageIMG/digitalSkillsIMGs/communicationCard.png';
import communicationOverlay from '../homepageIMG/digitalSkillsIMGs/communicationOverlay.png';
import futureFocusCard from '../homepageIMG/digitalSkillsIMGs/futureFocusCard.png';
import futureFocusOverlay from '../homepageIMG/digitalSkillsIMGs/futureFocusOverlay.png';


export default function DigitalSkills() {
    return (
        <Container maxWidth="xl">
            <div className="ds1">
                <div className="dsHeading">
                    <h3>Teaching kids programming and digital skills is <i>MORE</i> than just writing code.</h3>
                </div>

                <div className="ds2">
                    <div className="dsCard">
                        <img className="photoCard" src={creativityCard} alt="" />
                        <img className="iconOverlay" src={creativityOverlay} alt="" />
                        <p className="dsCardText">Creativity<br/>& Individuality</p>
                    </div>

                    <div className="dsCard">
                        <img className="photoCard" src={criticalThinkingCard} alt="" />
                        <img className="iconOverlay" src={criticalThinkingOverlay} alt="" />
                        <p className="dsCardText"> Critical Thinking<br/>& Problem Solving</p>
                    </div>

                    <div className="dsCard">
                        <img className="photoCard" src={communicationCard} alt="" />
                        <img className="iconOverlay" src={communicationOverlay} alt="" />
                        <p className="dsCardText">Communication<br/>& Collaboration</p>
                    </div>

                    <div className="dsCard">
                        <img className="photoCard" src={futureFocusCard} alt="" />
                        <img className="iconOverlay" src={futureFocusOverlay} alt="" />
                        <p className="dsCardText">Technology<br/>& Future Focus </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
