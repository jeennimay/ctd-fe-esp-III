import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "dh-marvel/pages/checkout/[id].page";
import comic from "dh-marvel/test/mocks/comic";
import { server } from "dh-marvel/test/server";

describe("Testing checkout page", () => {
    beforeAll(() => {
        server.listen()
        render(<Checkout
            data={comic}
        />);
    });
    afterAll(() => server.close());


    it("should render the title",
        async () => {
            const title = screen.getByText(/Checkout/i);

            await waitFor(() => {
                expect(title).toBeInTheDocument();
            });
        }
    );

    it("Should render errors messages because inputs are empty",
        async () => {
            const btnSubmit = screen.getByRole("button", { name: "submit" });

            await waitFor(() => {
                userEvent.click(btnSubmit);
            });

            const msgEr = await screen.findAllByText(/required field/i);

            await waitFor(() => {
                expect(msgEr).toBeInTheDocument();
            });
        }
    );

    it("Should render errors menssages when submit form with incorrect card number", async () => {
        const buttonSubmit = screen.getByText("Confirmar");
        const inputFirstName = screen.getByRole("textbox", { name: "Name" });
        const inputLastName = screen.getByRole("textbox", { name: "Last Name" });
        const inputEmail = screen.getByRole("textbox", { name: "E-mail" });
        const inputAddress = screen.getByRole("textbox", { name: "Adress" });
        const inputAddress2 = screen.getByRole("textbox", { name: "Complement" });
        const inputCity = screen.getByRole("textbox", { name: "City" });
        const inputState = screen.getByRole("textbox", { name: "State" });
        const inputZipCode = screen.getByRole("textbox", { name: "Zip Code" });
        const inputCardNumber = screen.getByRole("textbox", { name: "Card number" });
        const inputNameOnCard = screen.getByRole("textbox", { name: "Name on card" });
        const inputValidCard = screen.getByRole("textbox", { name: "Expiration date" });
        const inputCvcCard = screen.getByTestId("cvc");

        await userEvent.type(inputFirstName, "Jennifer");
        await userEvent.type(inputLastName, "Koga");
        await userEvent.type(inputEmail, "mj@email.com");
        await userEvent.type(inputAddress, "street");
        await userEvent.type(inputAddress2, "complement");
        await userEvent.type(inputCity, "São Paulo");
        await userEvent.type(inputState, "São Paulo");
        await userEvent.type(inputZipCode, "50050-200");
        await userEvent.type(inputCardNumber, "4000 4000 4000 4000");
        await userEvent.type(inputNameOnCard, "Jennifer Koga");
        await userEvent.type(inputValidCard, "10/2026");
        await userEvent.type(inputCvcCard, "123");

        expect(inputFirstName).toHaveValue("Jennifer")
        expect(inputLastName).toHaveValue("Koga")
        expect(inputEmail).toHaveValue("mj@email.com")
        expect(inputAddress).toHaveValue("street")
        expect(inputAddress2).toHaveValue("complement")
        expect(inputCity).toHaveValue("São Paulo")
        expect(inputState).toHaveValue("São Paulo")
        expect(inputZipCode).toHaveValue("50050-200")
        expect(inputCardNumber).toHaveValue("4000 4000 4000 4000")
        expect(inputNameOnCard).toHaveValue("Jennifer Koga")
        expect(inputValidCard).toHaveValue("10/2026")
        expect(inputCvcCard).toHaveValue("123")

        await userEvent.click(buttonSubmit);

        const errorMessage = await screen.findByTestId("alert-error");

        expect(errorMessage).toBeInTheDocument();
    })
    it("Should be success", async () => {

        const buttonSubmit = screen.getByText("Confirmar");
        const inputFirstName = screen.getByRole("textbox", { name: "Name" });
        const inputLastName = screen.getByRole("textbox", { name: "Last Name" });
        const inputEmail = screen.getByRole("textbox", { name: "E-mail" });
        const inputAddress = screen.getByRole("textbox", { name: "Adress" });
        const inputAddress2 = screen.getByRole("textbox", { name: "Complement" });
        const inputCity = screen.getByRole("textbox", { name: "City" });
        const inputState = screen.getByRole("textbox", { name: "State" });
        const inputZipCode = screen.getByRole("textbox", { name: "Zip Code" });
        const inputCardNumber = screen.getByRole("textbox", { name: "Card number" });
        const inputNameOnCard = screen.getByRole("textbox", { name: "Name on card" });
        const inputValidCard = screen.getByRole("textbox", { name: "Expiration date" });
        const inputCvcCard = screen.getByTestId("cvc");

        await userEvent.type(inputFirstName, "Jennifer");
        await userEvent.type(inputLastName, "Koga");
        await userEvent.type(inputEmail, "mj@email.com");
        await userEvent.type(inputAddress, "street");
        await userEvent.type(inputAddress2, "complement");
        await userEvent.type(inputCity, "São Paulo");
        await userEvent.type(inputState, "São Paulo");
        await userEvent.type(inputZipCode, "50050-200");
        await userEvent.type(inputCardNumber, "4242 4242 4242 4242");
        await userEvent.type(inputNameOnCard, "Jennifer Koga");
        await userEvent.type(inputValidCard, "10/2026");
        await userEvent.type(inputCvcCard, "123");
        await userEvent.click(buttonSubmit);
    })



});