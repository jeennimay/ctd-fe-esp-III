import { useContext } from "react";

import Head from "next/head";

import { CheckoutContext } from "context/checkout.context";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";

import { Typography, Container, Box, CardMedia } from "@mui/material";
import Card from '@mui/material/Card';

const Success = () => {
    const { checkout } = useContext(CheckoutContext);
    //console.log(checkout)


    if (!checkout) {
        return <BodySingle title="Sorry, we had a problem :(" />
    }


    return (
        <>
            <Head>
                <title>DH | Marvel Comics</title>
            </Head>
            <LayoutCheckout>
                <BodySingle title="Enjoy your purchase!">
                    <Container
                        sx={{
                            marginTop: '2rem',
                            display: 'flex',
                            gap: '2rem',
                            alignItems: 'center'
                        }}
                    >
                        <Card
                            sx={{
                                padding: "20px",
                                borderRadius: '1rem',
                            }}
                        >
                            <Typography
                                fontWeight="bold"
                                variant='h5'
                            >
                                Purchase detail:
                            </Typography>
                            <CardMedia
                                component="img"
                                sx={{
                                    maxWidth: '30vw',
                                    margin: ".75rem auto"
                                }}
                                src={checkout.order.image} alt={checkout.order.name}
                            />
                            <Typography variant="body1"><strong>Title: </strong>{checkout.order.name}</Typography>
                            <Typography variant="body1"><strong>Price: </strong>{(checkout.order.price).toFixed(2)}</Typography>
                        </Card>
                        <Card
                            sx={{
                                padding: "20px",
                                borderRadius: '1rem',
                                height: 'auto',
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold">Customer detail</Typography>
                            <Typography variant="h6" margin='.75rem 0'><strong>Name: </strong>{checkout.customer.name}</Typography>
                            <Typography variant="h6" margin='.75rem 0'><strong>Last Name: </strong>{checkout.customer.lastname}</Typography>
                            <Typography variant="h6" margin='.75rem 0'><strong>Address: </strong>{checkout.customer.address.address1},
                                {!!checkout.customer.address.address2 ? ` ${checkout.customer.address.address2}, ${checkout.customer.address.city}, ${checkout.customer.address.state}` : ` ${checkout.customer.address.city},  ${checkout.customer.address.state}`}
                            </Typography>

                        </Card>
                    </Container>
                </BodySingle>
            </LayoutCheckout>
        </>
    )

}

export default Success;