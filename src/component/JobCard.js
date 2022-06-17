import React, { createContext } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';

export const dataJobsContext = createContext()

export default function JobCard({ job }) {
    const arraySkill = job.skills;
    const navigate = useNavigate();

    //console.log(dataJobs)
    return (
        <Container>
            <Box sx={{
                maxWidth: 350, height: 520,
                backgroundColor: '#e3f2fd', borderRadius: 2, mt: 2,
                display: 'flex', flexDirection: 'column'
            }}>

                <Typography variant="body1"
                    sx={{ color: '#212121', textAlign: "center", padding: 1, }}
                >
                    {job.title}
                </Typography>

                <Divider variant="middle" sx={{ mb: 1 }} />

                <Stack direction="row" spacing={0.5} sx={{ ml: 1, textAlign: 'center' }} >
                    {arraySkill.slice(0, 3).map((skill, index) => {
                        return (
                            <Chip key={index} label={`${skill}`} sx={{
                                backgroundColor: "#2196f3",
                                color: "#212121", fontSize: 8.5, textAlign: "center"
                            }} />
                        )
                    })}

                </Stack>

                <Box sx={{ height: '72%', mt: 2, ml: 2, mr: 1, textAlign: 'left' }}>
                    <Typography color="text.secondary" variant="body2">
                        {job.description}
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center", }}>
                    <Button
                        onClick={() => { navigate(`/job/${job.id}`) }}
                        sx={{ background: '#2196f3', color: "#212121" }} size="small" variant="contained" >LEARN MORE</Button>
                </Box>
            </Box>
        </Container>

    );
}
