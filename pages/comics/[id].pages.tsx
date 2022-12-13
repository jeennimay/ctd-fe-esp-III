import { useRouter } from "next/router";
import { Container, CardMedia, Button } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { getComic } from 'dh-marvel/services/marvel/marvel.service';
import { Comic } from "types/types";

interface DataProps {
    comic: Comic
}

export const ComicDetail = ({ comic }: DataProps) => {
    const router = useRouter();
    const isStock = comic.stock
    const imgSrc = `${comic?.thumbnail.path}.${comic?.thumbnail.extension}`

    if (router.isFallback) {
        return <div>Loading...</div>
    }


    return (
        <Container>
            <CardMedia width="100px !important" height="200px" component="img" image={imgSrc} alt={`Front cover ${comic.title}`} />
            <h1>{comic.title}</h1>
            <span>{comic.price}</span>
            <Button variant="outlined">{isStock ? "Comprar" : "Sem estoque"}</Button>
        </Container>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [{ params: { id: '82965' } }],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const comic = await getComic(params.id)

    return {
        props: { comic },
        revalidate: 1,
    }
}