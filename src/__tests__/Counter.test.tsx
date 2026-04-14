import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("increments count when button is clicked", () => {
    render(<Counter />);
    
    // Button anhand seines Textes finden
    const button = screen.getByText(/count is 0/i);
    
    // Klick simulieren
    fireEvent.click(button);
    
    // Prüfen, ob sich der Text geändert hat
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
});