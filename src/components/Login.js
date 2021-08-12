import React from 'react'
import {makeStyles} from '@material-ui/core/Styles';
import {useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { EmailSharp } from '@material-ui/icons'
import { style } from '@material-ui/system';
import './Login.css';
import Students from './students.png';
import Teacher from './teacher.png';
//import CloseIcon from '@material-ui/icons/Close';
import CloseIcon from './CloseIcon.png';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles( {
    dialog: {
        flexDirection: "row",
    },
})

export default function PopUpList(props) {

    const handleListItemClick = (value) => {
        props.onClose(value);
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] =useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [currentState, setCurrentState] = useState('login')

    let history = useHistory()

    const handleLogin = () => {
        axios.post('http://localhost:4000/login', {
            "email": email,
            "password": password,
        })

        .then(response => {
            console.log(response.data)
            console.log(response.status)
            console.log("login successful")
            alert("Login Success!")
        })

        .catch(err => {
            console.log(err)
            alert("Email or password entered is incorrect.")
        })
    }


    const styles = useStyles()
    return (
        <Dialog classes={{paperScrollPaper: styles.dialog}} open={props.dialogOpen} onClose={() => props.setDialogOpen(false)} aria-labelledby="d-title">
            <p className="closeButton">
                <IconButton onClick={() => props.setDialogOpen(false)}>
                    <img src={CloseIcon} style={{height: "35px", width: "35px"}}/>
                </IconButton>
            </p>
            <div className="d1">
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex"}}>
                    <img className="studentsImage" src={Students} />
                </div>
                <h1>Students</h1>
                <div style={{display: "flex", justifyContent: 'center'}}>
                <button onClick={() => setCurrentState('login')} className={currentState === 'login' ? "loginButton activeLogin" : "loginButton"}>LOG IN</button>
                    <button onClick={() => setCurrentState('signup')} className={currentState === 'signup' ? "signupButton activeSignup" : "signupButton"}>SIGN UP</button>
                </div>
                <br/>
                <div className="container">
                    {currentState === 'signup' && (
                     <input type="text" placeholder="Full Name" name="name" onChange={(e) => setFullName(e.target.value)}/>
                    )}
                    <br/><br/>
                    <input type="text" placeholder="Email Address" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    <br/><br/>
                    <input type="password" placeholder="Password" name="pw" onChange={(e) => setPassword(e.target.value)}/>
                    <br/><br/>
                    {currentState === 'signup' && (
                     <input type="password" placeholder="Confirm Password" name="cpw" onChange={(e) => setConfirmPass(e.target.value)}/>
                    )}
                    <br/><br/>
                    <button className="btn" type="submit" onClick={handleLogin}>{currentState === 'login' ? "LOG IN" : "SIGN UP"}</button>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", justifyContent: 'center'}}>
                <img className="teacherImage" src={Teacher} />
                    
                </div>
                <h1>Teachers</h1>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <button onClick={() => setCurrentState('login')} className={currentState === 'login' ? "loginButton activeLogin" : "loginButton"}>LOG IN</button>
                    <button onClick={() => setCurrentState('signup')} className={currentState === 'signup' ? "signupButton activeSignup" : "signupButton"}>SIGN UP</button>
                </div>
                <br/>
                <div className="container">
                    {currentState === 'signup' && (
                     <input type="text" placeholder="Full Name" name="name" onChange={(e) => setFullName(e.target.value)}/>
                    )}
                    <br/><br/>
                    <input type="text" placeholder="Email Address" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    <br/><br/>
                    <input type="password" placeholder="Password" name="pw" onChange={(e) => setPassword(e.target.value)}/>
                    <br/><br/>
                    {currentState === 'signup' && (
                     <input type="password" placeholder="Confirm Password" name="cpw" onChange={(e) => setConfirmPass(e.target.value)}/>
                    )}
                    <br/><br/>
                    <button className="btn" type="submit" onClick={handleLogin}>{currentState === 'login' ? "LOG IN" : "SIGN UP"}</button>
                </div>
            </div>
            </div>
        </Dialog>
    )
}


// export default function Login() {

//     const [dialogOpen, setDialogOpen] = useState(false);

//     const handleDialogOpen = () => {
//         setDialogOpen(true);
//     };

//     const handleDialogClose = (value) => {
//         console.log('dialog closed')
//         setDialogOpen(false);
//     }

//     const handleClickOpen = () => {
//         setDialogOpen(true);
//     }

//     return (
//         <Card>
//             <CardActions>
//                 <Button variant="outlined" color="primary" onClick={handleClickOpen}>login</Button>

//             </CardActions>
//             <PopUpList setDialogOpen={setDialogOpen} dialogOpen={dialogOpen} onClose={handleDialogClose} />
//         </Card>
//     )
// }

