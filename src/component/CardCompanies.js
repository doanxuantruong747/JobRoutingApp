import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from '@mui/system';

export default function ActionAreaCard({ company }) {
    return (
        <Container>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?w=2000"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {company.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {company.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
}
