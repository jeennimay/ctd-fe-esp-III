import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Faq from "./faq.page";

describe("Testing Faq page", () => {
    describe("when rendering default", () => {
        beforeAll(() => render(<Faq />));
        it("should render the title", () => {
            async () => {

                const title = screen.getByText("FAQ");
                
                await waitFor(() => {
                    expect(title).toBeInTheDocument();
                });
            }
        });
        
        it("shoukd render the questions and after click, show the answer", () =>{
            async () => {
                const txtFirstQ = screen.getByText(/Quantos comics eles têm\?/i);
                const txtSecQ = screen.getByText(/Podemos reservar novos lançamentos\?/i);
                
                await waitFor(() =>{
                    expect(txtFirstQ).toBeInTheDocument();
                    userEvent.click(txtFirstQ);
                });
                
                const txtFirstA = screen.getByText("Atualmente temos toda a coleção Marvel. Algumas cópias podem ter pouca ou nenhuma disponibilidade no momento. Para mais informações você pode acessar https://marvel.com");
                expect(txtFirstA).toBeInTheDocument();
                
                await waitFor(() => {
                    expect(txtSecQ).toBeInTheDocument();
                    userEvent.click(txtSecQ);
                })
                
                const txtSecA = screen.getByText("Infelizmente nosso site ainda não aceita reservas antecipadas. Mas estamos trabalhando nessa funcionalidade. Siga nosso twitter para ficar por dentro das novidades.");
                expect(txtSecA).toBeInTheDocument();
            }
        })
    });
});
