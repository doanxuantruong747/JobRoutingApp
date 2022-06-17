import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {
    Stack, Alert, IconButton, InputAdornment, Typography, Box,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import LockIcon from '@mui/icons-material/Lock';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import {
    FormProvider, FTexField,

} from './HookForm';

import { useContext } from 'react';
import { Context } from '../App'

const schema = yup.object({
    username: yup.string().required(),

}).required();


function Login({ handleClose, setIsLogin, setNameuser }) {
    const defaultValues = {
        username: 'web virgil learner',
        password: "123456",
    };

    const methods = useForm({ resolver: yupResolver(schema), defaultValues });
    const {
        setError,
        handleSubmit,
        formState: { error },

    } = methods;

    const [showPassword, setShowPassword] = useState(false);

    const homePage = useContext(Context)

    const onSubmit = (data) => {

        if ((data.username === defaultValues.username) && (data.password === defaultValues.password)) {
            setIsLogin(true)
            handleClose()
            setNameuser(data.username)
            homePage(true)
        }
        setError('afterSubmit', { message: 'Sever Response Error' });
    }
    return (
        <div>

            <Box sx={{ textAlign: 'center', border: '1', borderRadius: 2, mb: 2 }}>
                <LockIcon />
            </Box>

            <Typography variant='h5' textAlign='center' mb={3}>
                Log in
            </Typography>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    {!!error && (
                        <Alert security='error'>{error.message}</Alert>
                    )}
                    <FTexField name='username' label='User name' />

                    <FTexField
                        name='password'
                        label='Password'
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='toggle password visibility'
                                        onClick={() => setShowPassword(!showPassword)}
                                        onMouseDown={(e) => e.preventDefault()}
                                        edge='end'
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                </Stack>
                <LoadingButton
                    sx={{ mt: 3 }}
                    fullWidth
                    size='large'
                    type='submit'
                    variant='contained'
                //loading={isSubmitting}
                >
                    Sign in
                </LoadingButton>
                <Box sx={{ mt: 2, cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography>Forgot password?</Typography>
                    <Typography>
                        Don't have an account? Sign Up</Typography>
                </Box>


            </FormProvider>

        </div >
    )
}

export default Login;