import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { Comic } from "types/types";

interface DataProps {
    data: Comic;
}

export const Checkout = ({ data }: DataProps) => {

    return (
        <>
            <BodySingle title="Checkout">

            </BodySingle>
        </>
    )
}