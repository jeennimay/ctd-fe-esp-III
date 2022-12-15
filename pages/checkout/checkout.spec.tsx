import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkout } from "dh-marvel/pages/checkout/[id].page";
import { server } from "dh-marvel/test/server";

describe("Testing checkout page", () => {
    beforeAll(() => {
        server.listen()
        render(<Checkout
            data={{
                id: 376,
                title: string,
                thumbnail: {
                    path: string,
                    extension: string,
                },
                oldPrice: number,
                price: number,
                stock: number,
                characters: Characters,
                description: string,
            }}
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

    

});


async function fillForm() {
    const buttonSubmit = screen.getByText("Confirmar");
    const inputFirstName = screen.getByRole("textbox", { name: "Nome" });
    const inputLastName = screen.getByRole("textbox", { name: "Sobrenome" });
    const inputEmail = screen.getByRole("textbox", { name: "E-mail" });
    const inputAddress = screen.getByRole("textbox", { name: "Endereço" });
    const inputAddress2 = screen.getByRole("textbox", { name: "Apartamento, andar, etc" });
    const inputCity = screen.getByRole("textbox", { name: "Cidade" });
    const inputState = screen.getByRole("textbox", { name: "Estado" });
    const inputCep = screen.getByRole("textbox", { name: "CEP" });
    const inputNumberCard = screen.getByRole("textbox", { name: "Nº do cartão" });
    const inputNameOnCard = screen.getByRole("textbox", { name: "Nome no cartão" });
    const inputValidCard = screen.getByRole("textbox", { name: "Validade" });
    const inputCvcCard = screen.getByTestId("cvc");

    await userEvent.type(inputFirstName, "Matheus")
    await userEvent.type(inputLastName, "Silva")
    await userEvent.type(inputEmail, "matheus@email.com")
    await userEvent.type(inputAddress, "Minha rua")
    await userEvent.type(inputAddress2, "Complemento da minha rua")
    await userEvent.type(inputCity, "São Luís")
    await userEvent.type(inputState, "Maranhão")
    await userEvent.type(inputCep, "65056-330")
    await userEvent.type(inputNumberCard, "4040 4042 4042 4042")
    await userEvent.type(inputNameOnCard, "Matheus Silva Souza")
    await userEvent.type(inputValidCard, "02/2020")
    await userEvent.type(inputCvcCard, "123")
}

describe(("Page checkout"), () => {
    it("Should render page checkout", () => {
        render(<Checkout comic={comic} />)
        const titleComic = screen.getByText(/official handbook of the marvel universe \(2004\) #12 \(spider\-man\)/i)
        expect(titleComic).toBeInTheDocument();

    })
    it("Should render errors menssages when inputs are empty", async () => {
        render(<Checkout comic={comic} />)
        const buttonSubmit = screen.getByRole("button");
        await userEvent.click(buttonSubmit);
        const messageErrors = await screen.findAllByText("Campo obrigatório");
        expect(messageErrors[0]).toBeInTheDocument()
    })
    jest.setTimeout(10000)
    it("Should render errors menssages when submit form with incorrect card number", async () => {
        render(<Checkout comic={comic} />)
        const buttonSubmit = screen.getByText("Confirmar");
        const inputFirstName = screen.getByRole("textbox", { name: "Nome" });
        const inputLastName = screen.getByRole("textbox", { name: "Sobrenome" });
        const inputEmail = screen.getByRole("textbox", { name: "E-mail" });
        const inputAddress = screen.getByRole("textbox", { name: "Endereço" });
        const inputAddress2 = screen.getByRole("textbox", { name: "Apartamento, andar, etc" });
        const inputCity = screen.getByRole("textbox", { name: "Cidade" });
        const inputState = screen.getByRole("textbox", { name: "Estado" });
        const inputCep = screen.getByRole("textbox", { name: "CEP" });
        const inputNumberCard = screen.getByRole("textbox", { name: "Nº do cartão" });
        const inputNameOnCard = screen.getByRole("textbox", { name: "Nome no cartão" });
        const inputValidCard = screen.getByRole("textbox", { name: "Validade" });
        const inputCvcCard = screen.getByTestId("cvc");

        await userEvent.type(inputFirstName, "Matheus")
        await userEvent.type(inputLastName, "Silva")
        await userEvent.type(inputEmail, "matheus@email.com")
        await userEvent.type(inputAddress, "Minha rua")
        await userEvent.type(inputAddress2, "Complemento da minha rua")
        await userEvent.type(inputCity, "São Luís")
        await userEvent.type(inputState, "Maranhão")
        await userEvent.type(inputCep, "65056-330")
        await userEvent.type(inputNumberCard, "4000 4000 4000 4000")
        await userEvent.type(inputNameOnCard, "Matheus Silva Souza")
        await userEvent.type(inputValidCard, "02/2020")
        await userEvent.type(inputCvcCard, "123")
        expect(inputFirstName).toHaveValue("Matheus")
        expect(inputLastName).toHaveValue("Silva")
        expect(inputEmail).toHaveValue("matheus@email.com")
        expect(inputAddress).toHaveValue("Minha rua")
        expect(inputAddress2).toHaveValue("Complemento da minha rua")
        expect(inputCity).toHaveValue("São Luís")
        expect(inputState).toHaveValue("Maranhão")
        expect(inputCep).toHaveValue("65056-330")
        expect(inputNumberCard).toHaveValue("4000 4000 4000 4000")
        expect(inputNameOnCard).toHaveValue("Matheus Silva Souza")
        expect(inputValidCard).toHaveValue("02/2020")
        expect(inputCvcCard).toHaveValue("123")
        await userEvent.click(buttonSubmit);

        const errorMessage = await screen.findByTestId("alert-error");

        expect(errorMessage).toBeInTheDocument();

        // await waitForElementToBeRemoved(() => {
        //     expect(errorMessage).not.toBeInTheDocument();
        // }, {interval: 2500})
    })
    it("Should push to router /checkout/success", async () => {
        render(<Checkout comic={comic} />)
        const buttonSubmit = screen.getByText("Confirmar");
        const inputFirstName = screen.getByRole("textbox", { name: "Nome" });
        const inputLastName = screen.getByRole("textbox", { name: "Sobrenome" });
        const inputEmail = screen.getByRole("textbox", { name: "E-mail" });
        const inputAddress = screen.getByRole("textbox", { name: "Endereço" });
        const inputAddress2 = screen.getByRole("textbox", { name: "Apartamento, andar, etc" });
        const inputCity = screen.getByRole("textbox", { name: "Cidade" });
        const inputState = screen.getByRole("textbox", { name: "Estado" });
        const inputCep = screen.getByRole("textbox", { name: "CEP" });
        const inputNumberCard = screen.getByRole("textbox", { name: "Nº do cartão" });
        const inputNameOnCard = screen.getByRole("textbox", { name: "Nome no cartão" });
        const inputValidCard = screen.getByRole("textbox", { name: "Validade" });
        const inputCvcCard = screen.getByTestId("cvc");

        await userEvent.type(inputFirstName, "Matheus")
        await userEvent.type(inputLastName, "Silva")
        await userEvent.type(inputEmail, "matheus@email.com")
        await userEvent.type(inputAddress, "Minha rua")
        await userEvent.type(inputAddress2, "Complemento da minha rua")
        await userEvent.type(inputCity, "São Luís")
        await userEvent.type(inputState, "Maranhão")
        await userEvent.type(inputCep, "65056-330")
        await userEvent.type(inputNumberCard, "4042 4042 4042 4042")
        await userEvent.type(inputNameOnCard, "Matheus Silva Souza")
        await userEvent.type(inputValidCard, "02/2020")
        await userEvent.type(inputCvcCard, "123")
        await userEvent.click(buttonSubmit);
    })
})