import React from 'react';
import { Container, Button } from '@material-ui/core';
import LearnM from '../homepageIMG/promoBannerIMGs/LearnM.png';
import signUp from '../homepageIMG/promoBannerIMGs/signUp.png';
import './promoBanner.css'
import babyBanner from '../homepageIMG/promoBannerIMGs/babyBanner.png';
import Login from './Login.js';

export default function PromoBanner({ setDialogOpen}) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    return (
        <div>
            <Container maxWidth="xl">
                <div className="promoBanner">
                    <div className="promoText">
                        <div>Prepare young minds <br/> for a better <span style={{color: '#42C0F6'}}>future.</span></div>
                        <p>Let us help you advance students in Digital Technologies and other learning areas with <br/> our project-based learning programme.</p>
                        
                        <div className="buttonDiv">
                            <Button style={{ width: "200px" }}> <img src={LearnM}  style={{ height: "45px" }} />
                            </Button>

                            <div className="button2Div">
                                <Button onClick={() => setDialogOpen(true)} style={{ width: "200px" }} src={Login}> <img src={signUp} style={{ height: "45px" }} />
                                </Button>

                                <h6 className="subtext">*Basic subscription includes the first 15 projects <span style={{fontWeight:"800"}}>free </span>of charge.</h6>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}