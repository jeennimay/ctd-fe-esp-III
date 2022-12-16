import { useContext } from "react";

import Head from "next/head";

import { CheckoutContext } from "context/checkout.context";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";

import { Typography, Container, Box, CardMedia } from "@mui/material";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";

const Success = () => {
    const { checkout } = useContext(CheckoutContext);
    console.log(checkout)

     
    if(!checkout) {
        return <BodySingle title="Sorry, we had a problem :(" />
    }
    

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
                                        <CardMedia component="img" sx={{ width: "250px", margin: "0 auto" }} src={checkout.order.image} />
                                        <Typography fontSize={18} ><strong>Title: </strong>{checkout.order.name}</Typography>
                                        <Typography fontSize={18} ><strong>Price: </strong>${(checkout.order.price).toFixed(2)}</Typography>
                                    </Container>
                                    <Container  >
                                        <Typography variant="h4" fontWeight="bold">customer detail</Typography>
                                        <Typography fontSize={18} ><strong>Name: </strong>{checkout.customer.name}</Typography>
                                        <Typography fontSize={18} ><strong>Last Name: </strong>{checkout.customer.lastname}</Typography>
                                        <Typography fontSize={18} ><strong>Address: </strong>
                                            {checkout.customer.address.address1},
                                            {!!checkout.customer.address.address2 ? ` ${checkout.customer.address.address2}, ${checkout.customer.address.city}, ${checkout.customer.address.state}` : ` ${checkout.customer.address.city},  ${checkout.customer.address.state}`}</Typography>
                                    </Container>
                                </Container>
                            </Box>
                    </Container>
                </BodySingle>
            </LayoutCheckout>
        </>
    )

}

export default Success;