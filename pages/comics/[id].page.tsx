import Head from "next/head";

import { Comic } from "types/types";
import { getComic } from 'dh-marvel/services/marvel/marvel.service';
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { BuyBtn } from "dh-marvel/components/layouts/body/buybtn/body-buybtn";

import { styled } from '@mui/system';
import { Box, Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';

interface DataProps {
    data: Comic,
}

export const getStaticPaths = async () => {

    return {
        paths: [{ params: { id: '376' } }],
        fallback: true,
    };
};

export const getStaticProps = async ({ params }: any) => {
    const data = await getComic(Number(params.id));

    return {
        props: { data },
        revalidate: 60 * 60,
    }
}

const Description = styled(`p`)({
    padding: '1rem',
    textAlign: 'justify',

})

const Price = styled('p')`
    text-align: right;
    margin: 0 auto;
    &.primary{
        color: #1976d2;
        font-weight: bolder;
        font-size: x-large;

        :first-child{
            margin: 0.75rem 0;
            text-decoration: underline;
            letter-spacing: 2px;
            text-align: left;
            text-transform: uppercase;
        }
    }
    
    &.secondary{
        color: SlateGray;
        text-decoration: line-through;
    }
`

const SmallCard = styled(`div`)`
    width: 25vw;
    border: solid 1px #1976d2;
    padding: 1rem;
    border-radius:1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin: 0.5rem 2rem;    
`


export default function DatailPage(props: DataProps) {
    const comic = props?.data;

    const getCharacters = comic?.characters.items.map(char => {
        let getId = new URL(char.resourceURI).pathname.split("/")[4];

        return {
            ...char,
            id: getId,
        }
    })

    if (!comic) {
        return (
            <>
                <Head>
                    <title>DH | Marvel Comics</title>
                    <meta name="description" content="Project generated by create next app for Certified Tech Developer checkpoint." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <BodySingle>
                    <h3>Loading...</h3>
                </BodySingle>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>{`DH | Marvel Comics - ${comic.title} Detail`}</title>
                <meta name="og:description" content={comic.description} />
                <meta name="og:title" content={comic.title} />
            </Head>
            <BodySingle title={`${comic.title} Detail`}>
                <Box
                    display='flex'
                    justifyContent='center'
                    gap='1.5rem'

                    sx={{
                        flexWrap: { xs: 'wrap', md: 'nowrap' },
                        padding: { lg: '2rem' }
                    }}
                >
                    <picture>
                        <img
                            src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                            alt={comic.title}
                        />
                    </picture>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignContent='center'
                        flexWrap='wrap'
                    >
                        <Description>{comic.description}</Description>
                        <div
                            style={{
                                margin: '1rem',
                                padding: '0.5rem 1.5rem',
                                border: 'solid #1976d2 1px',
                                borderRadius: '.5rem',
                                height: '9rem',
                                width: '14rem',
                            }}

                        >
                            <Price className="primary">Price</Price>
                            <Price className="secondary">${(comic.oldPrice).toFixed(2)}</Price>
                            <Price className="primary">${(comic.price).toFixed(2)}</Price>
                        </div>
                        <BuyBtn
                            stock={comic.stock}
                            href={`/checkout/${comic.id}`}
                            items={{
                                margin: '1.5rem 2rem',
                                textAlign: 'center',
                                width: '100%',
                                height: '3rem',
                            }}
                        />
                    </Box>
                </Box>
                <Box>
                    {
                        getCharacters.map(c => {
                            return (
                                <SmallCard key={c.id}>
                                    <Typography gutterBottom variant="h4" component="div" marginTop='1rem'>
                                        {c.name}
                                    </Typography>
                                    <Button 
                                    href={`/characters/${c.id}`}
                                    size="large"
                                    variant="contained"
                                    sx={{
                                        fontWeight:'bold',
                                        fontSize: '1.2rem',
                                        margin: '1rem 0'
                                    }}
                                    >
                                        Learn More
                                        </Button>
                                </SmallCard>
                            )
                        })
                    }
                </Box>
            </BodySingle>
        </>
    )
}
