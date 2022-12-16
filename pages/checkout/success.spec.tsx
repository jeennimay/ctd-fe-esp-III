import { render, screen } from "@testing-library/react";
import { CheckoutContext } from "context/checkout.context";
import Success from "./success.page";

const checkout = {
    "customer": {
        "name": "Jenni",
        "lastname": "Koga",
        "email": "mj@email.com",
        "address": {
            "address1": "Av. fortuna",
            "address2": "no complement",
            "city": "são paulo",
            "state": "são paulo",
            "zipCode": "50050-200"
        }
    },
    "card": {
        "number": "42424242 4242 4242",
        "nameOnCard": "Jennifr Koga",
        "expDate": "10/2026",
        "cvc": "123"
    },
    "order": {
        "name": "Marvel Previews (2017)",
        "image": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada.jpg",
        "price": 48
    }
}
describe("Testing component success", () => {
    it("Should render component success", () => {
        const handleCheckout = jest.fn()
        render(
            <CheckoutContext.Provider value={{ checkout, handleCheckout }} >
                <Success />
            </CheckoutContext.Provider>
        )
        const successMessage = screen.getByText("Aproveite sua compra!");
        expect(successMessage).toBeInTheDocument();
    })
    it("Should not render component sucess without comic purchased", () => {
        const handleCheckout = jest.fn()
        render(
            <CheckoutContext.Provider value={{ checkout: null, handleCheckout }} >
                <Success />
            </CheckoutContext.Provider>
        )
        const errorMessage = screen.getByText("null");
        expect(errorMessage).toBeInTheDocument();
    })
    it("Should render component sucess without comic purchased", () => {
        const handleCheckout = jest.fn()

        const checkoutWithoutComplement = {
            "customer": {
                "name": "Jenni",
                "lastname": "Koga",
                "email": "mj@email.com",
                "address": {
                    "address1": "Av. fortuna",
                    "address2": "no complement",
                    "city": "são paulo",
                    "state": "são paulo",
                    "zipCode": "50050-200"
                }
            },
            "card": {
                "number": "42424242 4242 4242",
                "nameOnCard": "Jennifr Koga",
                "expDate": "10/2026",
                "cvc": "123"
            },
            "order": {
                "name": "Marvel Previews (2017)",
                "image": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada.jpg",
                "price": 48
            }
        }
        render(
            <CheckoutContext.Provider value={{ checkout: checkoutWithoutComplement, handleCheckout }} >
                <Success />
            </CheckoutContext.Provider>
        )
        const errorMessage = screen.getByText("Av. fortuna, são paulo, são paulo");
        expect(errorMessage).toBeInTheDocument();
    })
})