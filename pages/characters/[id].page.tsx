import { Box } from "@mui/system";
import { styled } from '@mui/system';
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import { Character } from "../../types/types";
import { Button, Typography, Grid } from "@mui/material";
import { BodySmallCard } from "dh-marvel/components/layouts/body/card/body-smallCard";


export const getStaticPaths = async () => {
    return {
        paths: [{ params: { id: "1009156" } }],
        fallback: true
    };
}

export async function getStaticProps({ params }: any) {
    const data = await getCharacter(Number(params.id))

    return {
        props: {
            data
        }
    }

}

const Description = styled(`p`)({
    padding: '1rem',
    textAlign: 'justify',
    fontSize: '1.25rem',
    textIndent: '1rem'
})

interface CharacterDetail {
    data: Character;
};

export default function CharacterDetail({ data }: CharacterDetail) {
    const charac = data;

    console.log(charac)

    const getComics = charac?.comics.items.map(c => {
        let getId = new URL(c.resourceURI).pathname.split("/")[4];

        return {
            ...c,
            id: getId,
        }
    })

    if (!charac) {
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
                <title>{`DH | Marvel Comics - ${charac?.name}`}</title>
                <meta name="og:description" content={charac?.description} />
                <meta name="og:title" content={charac?.name} />
            </Head>
            <BodySingle title={charac?.name}>
                <Box
                display='flex'
                justifyContent='center'
                flexGrow='column'
                flexWrap = 'wrap'
                >
                    <Box>
                        <img
                            src={charac?.thumbnail.path + "." + charac?.thumbnail.extension}
                            alt={charac?.name}
                            style={{
                                width:'100%',
                            }}
                        />
                    </Box>
                    <Description>{charac?.description}</Description>
                    <Grid
                        container
                        spacing={4}
                        columns={{ xs: 1, sm: 4, md: 12 }}
                        marginBottom='2rem'
                    >
                        {
                            getComics.map(c => {
                                return (
                                    <BodySmallCard id={c.id} title={c.name} href={`/comics/${c.id}`} />
                                )
                            })
                        }
                    </Grid>
                </Box>
            </BodySingle>
        </>
    )
}
