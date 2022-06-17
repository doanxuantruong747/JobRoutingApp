import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../app/config';
import apiService from '../app/apiService'
import { Container } from '@mui/system';
import { Box, Grid, Pagination, Stack } from '@mui/material';
import JobCard from '../component/JobCard';

function JobPage({ searchParams }) {

    const [dataJobs, setDataJobs] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        const jobAPI = async () => {
            try {
                const response = await apiService.get(`/jobs`)
                setDataJobs(response.data)
            } catch (e) {
                return e;
            }
        }
        jobAPI(BASE_URL)
    }, [])
    const handleChange = (event, value) => {
        setPage(value)
    };
    function paginate(array, page_size, page_number) {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }
    const arrayPag = paginate(dataJobs, 3, page)

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid container spacing={2} >
                {arrayPag
                    .filter((job) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = job.title.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((job => (
                        <Grid key={job.id} item xs={12} md={3} lg={4} >
                            <JobCard job={job} />
                        </Grid>
                    )))}
            </Grid>
            <Stack spacing={2} >
                <Box sx={{ mt: 4, mb: 3, color: '#fff', textAlign: 'center' }}> page-{page} </Box>

                <Pagination color="primary" count={10} page={page}
                    onChange={handleChange} >
                </Pagination>
            </Stack>
        </Container>

    )
}

export default JobPage