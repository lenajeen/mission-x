import React from 'react';
import { makeStyles } from '@material-ui/core/Styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Login from './Login.js';
import './Header.css';
import StarLogo from './starlogo.png';
import UserIcon from './usericon.png';
import NZFlag from './nzflag.png';
import MaoriFlag from './maoriflag.png';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  
  },
  dialog: {
    display: "flex",
    flexDirection:"row",
    overflowY: "hidden",
    overflowX: "hidden",
    maxWidth: "700px",
  },
  header: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
  }
});

export default function Header({ setDialogOpen }) {
  const styles = useStyles ();

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
    
  const handleClickOpen = () => {
    setOpen(true);
  }
    
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  }

  return (
    <div>
      <div className="navbar">
        <img src={StarLogo} style={{ height: "50px" }}/>
        <div className="pageLinks">
          <p href="#">HOME</p>
          <p href="#">FEATURES</p>
          <p href="#">TEACHERS</p>
        </div>

        <div className="lang">
          <div className="flags">
            <p>LANG <img src={NZFlag} style={{ height: "15px" }}/><img src={MaoriFlag} style={{ height: "15px" }}/></p>

            <div className="avatar">
              <img src={UserIcon} style={{ height: "10px" }}/>
              <Button onClick={() => setDialogOpen(true)} style={{ height: "20px"}} src={Login}>
                <p>REGISTER | LOGIN</p>
              </Button>
            </div>
          </div>
        </div>

        <Dialog classes={{root: styles.root, paperScrollPaper: styles.dialog, paper:styles.overflow,scrollPaper:styles.margin}} selectedValue={selectedValue} open={open} onClose={handleClose}>
        </Dialog>

      </div>
    </div>
  )
};