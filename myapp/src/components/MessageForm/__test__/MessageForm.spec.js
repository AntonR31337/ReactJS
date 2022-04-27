import { fireEvent, render, screen } from "@testing-library/react";
import MessageForm from "..";

describe('MessageForm', ()=> {
    it('cals onSubmit when btn clicked', ()=> {
        const mockSubmit = jest.fn();
        render(<MessageForm onSubmit={mockSubmit} />)
        const button = screen.getByRole('button');
        fireEvent(button, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
});