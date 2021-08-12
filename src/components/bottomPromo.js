import React from 'react'
import { Container, Button } from '@material-ui/core';
import bottomPromoCard from '../homepageIMG/bottomPromoIMGs/bottomPromoCard.png';
import EnquireNow from '../homepageIMG/bottomPromoIMGs/enquireNow.png';
import SignUp from '../homepageIMG/bottomPromoIMGs/signUp.png';
import Login from './Login.js';
import './bottomPromo.css';

export default function BottomPromo({ setDialogOpen}) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    return (
        <Container maxWidth="xl">
            <div className="bottomPromo">
                <img className="bottomPromoPic" src={bottomPromoCard} alt="" />
                <div className="bottomPromoText">
                    <h2>What are you waiting for?</h2>
                    <h3>Start teaching Digital Technologies today.</h3><br/>
                    <p>If you need more information, we are happy to answer any questions you may have.</p>
                    <br/><br/><br/>
                    <div className="bottomPromoButtons">
                        <Button style={{ width: "200px" }}> <img src={EnquireNow}  style={{ height: "45px" }} /></Button>
                        <Button onClick={() => setDialogOpen(true)} style={{ width: "200px" }} src={Login}> <img src={SignUp} style={{ height: "45px" }} /></Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}