import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoginIcon from '@mui/icons-material/Login';
import Login from './Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useContext } from 'react';
import { Context } from '../App'
import { Container } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [islogin, setIsLogin] = useState(false)
    const [nameuser, setNameuser] = useState('')

    const home = useContext(Context)

    const handleSignOut = () => {
        setIsLogin(false)
        home(false)

    }


    return (

        <Container>
            {!islogin ?
                <Box sx={{ display: 'flex', flexdirection: 'row', cursor: 'pointer' }}>
                    <LoginIcon onClick={handleOpen} sx={{ mr: 2, color: '#fff' }} ></LoginIcon>
                    <Typography onClick={handleOpen} sx={{ color: '#fff' }}>Sign in</Typography>
                </Box>
                :
                <Box sx={{ display: 'flex', flexdirection: 'row', cursor: 'pointer' }}>
                    <AccountCircleIcon />
                    <Typography sx={{ color: '#fff', mr: 2, ml: 1 }}>{nameuser}</Typography>
                    <LoginIcon onClick={handleSignOut} sx={{ mr: 2, color: '#fff' }} ></LoginIcon>
                    <Typography onClick={handleSignOut} sx={{ color: '#fff' }}>Sign out</Typography>
                </Box>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Login handleClose={handleClose} setIsLogin={setIsLogin}
                        setNameuser={setNameuser}
                    />

                </Box>
            </Modal>
        </Container>
    );
}
