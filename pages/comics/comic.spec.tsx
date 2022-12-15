import { render, screen, waitFor } from "@testing-library/react";
import comic from "dh-marvel/test/mocks/comic";
import { server } from "dh-marvel/test/server";
import Detail from "./[id].page";

describe("Testing comic detail page", () => {
    describe("when rendering default", () => {
        beforeAll(() => {
            server.listen();
            render(<Detail
                data={comic}
            />);
        })

        afterAll(() => server.close());

        it("should render the title",
            async () => {
                const title = screen.getByText(/Ant-Man (2003) #1 Detail/i);

                await waitFor(() => {
                    expect(title).toBeInTheDocument();
                });
            }
        );

        it("should render the price and old price",
            async () => {
                const price = screen.getByText("$72.00");
                const oldPrice = screen.getByText("$87.00");

                await waitFor(() => {
                    expect(price).toBeInTheDocument();
                    expect(oldPrice).toBeInTheDocument();
                })
            }
        );

        it("should render the descripition",
            async () => {
                const description = screen.getByText("Size does matter.  And no one knows this more than Hank Pym - a.k.a. Ant-Man. Got a problem with Galactus? Call the FF. Got a problem with, say, mind-controlled cockroaches? Then Ant-Man's your man! And needless to say, it's done a number on our diminutive hero's self-esteem.  When Ant-Man is tapped to infiltrate an international spy ring that has been siphoning secrets out of Washington, he jumps at the chance - unaware that he's being used as a pawn in a larger game of espionage.\r\n32 PGS./PARENTAL ADVISORY...$2.99");

                await waitFor(() => {
                    expect(description).toBeInTheDocument();
                })
            }
        );
    });
});