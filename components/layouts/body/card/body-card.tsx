import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system';
import { BuyBtn } from '../buybtn/body-buybtn';

interface Card {
    img: string,
    title: string,
    id: number,
    stock: number,
}

const CardAct = styled(`div`)({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    gap: '1rem',
    marginBottom: '1rem',
})

export default function BodyCard({ id, img, title, stock }: Card) {

    return (
        <Card sx={{ height: 500 }} key={id}>
            <CardMedia
                component="img"
                alt={title}
                image={img}
                height="75%"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" width="100%" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    {title}
                </Typography>
            </CardContent>
            <CardAct>
                <BuyBtn stock={stock} href={`/checkout/${id}`} />
                <Button href={`/comics/${id}`} size="small" variant="outlined">Learn More</Button>
        </CardAct>
        </Card >
    )
}