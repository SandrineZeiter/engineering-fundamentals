import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter";

test("increments count when button is clicked", async () => {
    render(<Counter />);
    
    const button = screen.getByText(/count is 0/i);
    
    await userEvent.click(button);
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();

    await userEvent.click(button);
    expect(screen.getByText(/count is 2/i)).toBeInTheDocument();
});