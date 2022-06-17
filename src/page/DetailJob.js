import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../app/config';
import apiService from '../app/apiService';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Button, Chip, Divider, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function DetailJob() {
    const navigate = useNavigate();
    const params = useParams();
    const [job, setJob] = useState([])
    const [skills, setSkills] = useState([])

    useEffect(() => {

        const jobAPI = async () => {
            try {
                const response = await apiService.get(`/jobs`)
                const datas = await (response.data)
                const jobId = params.id;
                const datajob = datas.find((job) => job.id === jobId)
                setJob(datajob)
                setSkills(datajob.skills)

            } catch (e) {
                return e;
            }
        }
        jobAPI(BASE_URL)

    })

    return (
        <Container sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
            <Box sx={{
                Width: 'auto', height: 'auto',
                backgroundColor: '#e3f2fd', borderRadius: 2, mt: 2,
                display: 'flex', flexDirection: 'column',
            }}>

                <Typography variant="body1"
                    sx={{ color: '#212121', textAlign: "center", padding: 1, }}
                >
                    {job.title}
                </Typography>

                <Divider variant="middle" sx={{ mb: 1 }} />

                <Stack direction="row" spacing={0.5} sx={{ ml: 1 }} >
                    {skills.slice(0, 5).map((skill, index) => {
                        return (
                            <Chip key={index} label={`${skill}`} sx={{
                                backgroundColor: "#2196f3",
                                color: "#212121", fontSize: 8.5, textAlign: "center"
                            }} />
                        )
                    })}
                </Stack>
                <Typography sx={{ mt: 2, ml: 2 }}>
                    salaryLow: {job.salaryLow}
                </Typography>
                <Typography sx={{ mt: 1, ml: 2 }}>
                    salaryHigh: {job.salaryHigh}
                </Typography>


                <Box sx={{ height: '68%', mt: 2, ml: 2, textAlign: 'left', }}>
                    <Typography color="text.secondary" variant="body2" fontSize=' 16px'>
                        {job.description}
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center", mt: 2, mb: 2 }}>
                    <Button
                        onClick={() => { navigate(`/`) }}
                        sx={{ background: '#2196f3', color: "#212121" }} size="small" variant="contained" >BACK</Button>
                </Box>
            </Box>
        </Container>

    )
}
