import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("renders daily quote", () => {
    render(<Home />);
    const quoteElement = screen.getByText("VT-5786");
    expect(quoteElement).toBeInTheDocument();
});