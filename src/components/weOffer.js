import React from 'react'
import { useState } from 'react';
import { Container, Button, ButtonGroup } from '@material-ui/core';

import backgroundCard from "../homepageIMG/weOfferIMGs/backgroundCard.png";
import animationOverlay from "../homepageIMG/weOfferIMGs/animationOverlay.png";
import Screen1 from "../homepageIMG/weOfferIMGs/Projects 01.png";
import gamesOverlay from "../homepageIMG/weOfferIMGs/gamesOverlay.png";
import Screen2 from "../homepageIMG/weOfferIMGs/Projects 02.png";
import chatbotOverlay from "../homepageIMG/weOfferIMGs/chatbotOverlay.png";
import Screen3 from "../homepageIMG/weOfferIMGs/Projects 03.png";
import augmentedReality from "../homepageIMG/weOfferIMGs/augmentedReality.png";
import Screen4 from "../homepageIMG/weOfferIMGs/Projects 04.png";
import './weOffer.css'

export default function WeOffer() {
    const [changeScreen, setChangeScreen] = useState('b1')
    var image = '';

    const handleChange = (e) => {
        setChangeScreen(e.currentTarget.value)
    }
    if (changeScreen === 'b2') {
        image = <img src={Screen2} />
        console.log(2);
    } else if (changeScreen === 'b3') {
        image = <img src={Screen3} />
        console.log(3);
    } else if (changeScreen === 'b4') {
        image = <img src={Screen4} />
        console.log(4);
    } else if (changeScreen === 'b1'){
        image = <img src={Screen1} />
        console.log(1)
    }


    return (
        <Container maxWidth="xl">
            <div className="weOffer" value={changeScreen}>
                <div className="left">
                    <div className="weOfferText">
                        <h2>What we offer</h2>
                        <p>The Creative Problem Solving programme is series of digital creation aimed to encourage
                            self-motvion and student agency, designed by New Zealand's leading import PropTypes from 'prop-types'
                            industry experts and schools.</p>
                        
                        <h3>What will students create?</h3>
                    </div>

                    <div className="weOfferButtons" >
                        <div className="weOfferCard" >
                            <div><Button value ="b1" style={{ padding: "0", display: 'inline-block', margin: '0' }}  onClick={handleChange}>
                                <img className="overlay" src={animationOverlay}  />
                                <p>ANIMATION</p></Button>
                            </div>
                        </div>

                        <div className="weOfferCard" value="b2">
                            <div><Button value="b2" style={{ padding: "0", display: 'inline-block' }}  onClick={handleChange}>
                                <img className="overlay" src={gamesOverlay} />
                                <p>GAMES</p></Button>
                            </div>
                        </div>
                        
                        <div className="weOfferCard" value='b3'>
                            <Button value="b3" style={{ padding: "0", display: 'block' }} onClick={handleChange}>
                                <img className="overlay" src={chatbotOverlay} value="b3" />
                                <p value='b3'>CHATBOTS</p></Button>
                        </div>

                        <div className="weOfferCard" value='b4'>
                            <Button style={{ padding: "0", display: 'block' }} 
                                onClick={handleChange} value='b4'>
                                    <img className="overlay" src={augmentedReality} />
                                    <p>AUGMENTED REALITY</p></Button>
                        </div>
                    </div>
                </div>

                <div className="weOfferPic">
                    <p2>{image}</p2>
                    <div className="radioButtons">
                        <input type="radio" name="radio" onClick={handleChange} value="b1" />
                        <input type="radio" name="radio" onClick={handleChange} value='b2' />
                        <input type="radio" name="radio" onClick={handleChange} value='b3' />
                        <input type="radio" name="radio" onClick={handleChange} value='b4' />
                    </div>
                    <br />
                </div>
            </div>
        </Container>
    )
}