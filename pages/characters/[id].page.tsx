import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import { Character } from "../../types/types";

export const getStaticPaths = async () => {
    return {
        paths: [{ params: { id: "1009156" } }],
        fallback: true
    };
}

/*
export async function getStaticProps({params}:any) {
    const data: await getCharacter()

    return {
        props: { 
            data
        }
    }
}

type PropsDetails = {
    data: Character
}
*/

export default function CharacterDetail(props: Character) {
    const data = props;
    const character = data

    console.log(character)
}