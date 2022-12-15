import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import Index from "dh-marvel/pages/index.page";
import { server } from "dh-marvel/test/server";

describe("IndexPage", () => {
  describe("when rendering default", () => {
    beforeAll(()=> server.listen());
    afterAll(() => server.close());
    it("should render the title", () => {
      async () => {
        server.use();
        render(<Index />);


        const title = screen.getByText("Comics");
        const pagNextBtn = screen.getByRole('button', {name: "NEXT"});
        const pagPrevBtn = screen.getByRole('button', {name: "PREVIOUS"})
        
        await waitFor(() => {
          expect(title).toBeInTheDocument();
          userEvent.click(pagNextBtn);
          userEvent.click(pagPrevBtn);
        })
      }
    });
  });
});