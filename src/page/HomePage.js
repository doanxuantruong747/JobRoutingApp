import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../app/config';
import apiService from '../app/apiService'
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import CardCompanies from '../component/CardCompanies'

function HomePage() {
    const [data, setData] = useState([])
    useEffect(() => {
        const companesAPI = async () => {
            try {
                const response = await apiService.get('/companies')
                setData(response.data)
            } catch (error) {
                return error;
            }
        }
        companesAPI(BASE_URL)
    }, [])
    return (
        <Container>
            <Grid container rowSpacing={3} mt={1}>
                {data.slice(0, 3).map((company => (
                    <Grid key={company.id} item xs={12} md={3} lg={4} >
                        <CardCompanies company={company}></CardCompanies>
                    </Grid>
                )))}
            </Grid>
        </Container>
    )
}

export default HomePage