import { render, screen, waitFor } from "@testing-library/react";
import character from "dh-marvel/test/mocks/character";
import { server } from "dh-marvel/test/server";
import CharacterDetail from './[id].page';


describe("Testing character detail page", () => {
    describe("when rendering default", () => {
        beforeAll(() => {
            server.listen();
            render(
            <CharacterDetail
                data={character}
            />);
        })

        afterAll(() => server.close());

        it("should render the title",
            async () => {
                const title = screen.getByText(/Hulk/i);

                await waitFor(() => {
                    expect(title).toBeInTheDocument();
                });
            }
        );

        it("should render the descripition",
            async () => {
                const description = screen.getByText("Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.");

                await waitFor(() => {
                    expect(description).toBeInTheDocument();
                })
            }
        );

        it("should render a card with a comic in which character appears", async () =>{
            const comicTitle = screen.getByText("5 Ronin (2010) #2");

            await waitFor(() => {
                expect(comicTitle).toBeInTheDocument();
            })
        })
    });
});