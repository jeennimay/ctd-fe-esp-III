import { render, screen, waitFor } from "@testing-library/react";
import { server } from "dh-marvel/test/server";
import Detail from "./[id].page";

describe("Testing comic detail page", () => {
    describe("when rendering default", () => {
        beforeAll(() => {
            server.listen();
            render(<Detail
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
        })

        afterAll(() => server.close());

        it("should render the title",
            async () => {
                const title = screen.getByText(/nomedahq Detail/i);

                await waitFor(() => {
                    expect(title).toBeInTheDocument();
                });
            }
        );

        it("should render the price and old price",
            async () => {
                const price = screen.getByText(/preco/i);
                const oldPrice = screen.getByText(/precoantigo/i);

                await waitFor(() => {
                    expect(price).toBeInTheDocument();
                    expect(oldPrice).toBeInTheDocument();
                })
            }
        );

        it("should render the descripition",
            async () => {
                const description = screen.getByText(/descriçao/i);

                await waitFor(() => {
                    expect(description).toBeInTheDocument();
                })
            }
        );
    });
});