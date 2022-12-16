import { useContext } from "react";

import Head from "next/head";

import { CheckoutContext } from "context/checkout.context";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";

import { Typography, Container, Box, CardMedia } from "@mui/material";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";

export default function Success() {
    const { checkout } = useContext(CheckoutContext);
    const { customer, order } = checkout;
    const { address } = customer;

    /* 
    if(!checkout) {
        return <BodySingle title="Sorry, we had a problem :(" />
    }
     */

    return (
        <>
            <Head>
                <title>DH | Marvel Comics</title>
            </Head>
            <LayoutCheckout>
                <BodySingle title="Enjoy your purchase!">
                    <Container >
                            <Box>
                                <Typography textAlign="center" fontSize={22} fontWeight="bold">Purchase detail</Typography>
                                <Container sx={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
                                    <Container sx={{ width: "auto", marginBottom: "10px" }}>
                                        <Typography variant="h4" fontWeight="bold">Comic</Typography>
                                        <CardMedia component="img" sx={{ width: "250px", margin: "0 auto" }} src={order.image} />
                                        <Typography fontSize={18} ><strong>Title: </strong>{order.name}</Typography>
                                        <Typography fontSize={18} ><strong>Price: </strong>${(order.price).toFixed(2)}</Typography>
                                    </Container>
                                    <Container  >
                                        <Typography variant="h4" fontWeight="bold">customer detail</Typography>
                                        <Typography fontSize={18} ><strong>Name: </strong>{customer.name}</Typography>
                                        <Typography fontSize={18} ><strong>Last Name: </strong>{customer.lastname}</Typography>
                                        <Typography fontSize={18} ><strong>Address: </strong>
                                            {address.address1},
                                            {!!address.address2 ? ` ${address.address2}, ${address.city}, ${address.state}` : ` ${address.city},  ${address.state}`}</Typography>
                                    </Container>
                                </Container>
                            </Box>
                    </Container>
                </BodySingle>
            </LayoutCheckout>
        </>
    )

}