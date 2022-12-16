import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system';

interface Card {
    title: string,
    id: string,
}

const CardAct = styled(`div`)({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    gap: '1rem',
    marginBottom: '1rem',
})

export default function BodySmallCard({ id, title}: Card) {

    return (
        <Card sx={{ height: 500 }} key={id}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" width="100%" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    {title}
                </Typography>
            </CardContent>
            <CardAct>
                <Button href={`/chracters/${id}`} size="large" variant="outlined">Learn More</Button>
        </CardAct>
        </Card >
    )
}