import axios from "axios";
import { useMutation } from "react-query";
import { CheckoutData } from "types/types";

export async function createCheckout(data: CheckoutData) {

    try {
        const response = await axios.post(
            '/api/checkout',
            {
                customer: {
                    name: data.customer.name,
                    lastname: data.customer.lastname,
                    email: data.customer.email,
                    address: {
                        address1: data.customer.address.address1,
                        address2: data.customer.address.address2,
                        city: data.customer.address.city,
                        state: data.customer.address.state,
                        zipCode: data.customer.address.zipCode,
                    }
                },
                card: {
                    number: data.card.number,
                    cvc: data.card.cvc,
                    expDate: data.card.expDate,
                    nameOnCard: data.card.nameOnCard,
                }
            }
        )

        return response;
    } catch (e: any) {
        return Promise.reject(e);
    }
}

export function useCheckout() {
    return useMutation(createCheckout);
}