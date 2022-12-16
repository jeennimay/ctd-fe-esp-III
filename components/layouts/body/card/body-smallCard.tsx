import { styled } from "@mui/system";
import { Grid, Typography, Button } from '@mui/material';

const SmallCard = styled(`div`)`
    width: 20vw;
    height: 20rem;
    border: solid 1px #1976d2;
    padding: 1rem;
    border-radius:1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0.5rem 2rem;
    
    :first-child{
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (max-width: 460px) {
        min-width: 20vw;
    } 
`

interface smallCardProps {
    id: number | string,
    title: string,
    href: string,
}

export const BodySmallCard = ({ id, title, href }: smallCardProps) => {
    return (
        <Grid item key={id}>
            <SmallCard>
                <Typography gutterBottom variant="h5" component="div" marginTop='1rem'>
                    {title}
                </Typography>
                <Button
                    href={href}
                    variant="contained"
                    size="large"
                    sx={{
                        height: '25%',
                        fontWeight: 'bold',
                        margin: '1rem 0'
                    }}
                >
                    Learn More
                </Button>
            </SmallCard>
        </Grid>
    )
}
