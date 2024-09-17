import { render, screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import { describe, it, expect} from 'vitest';
import HomePage from '../pages/homePage';
import userEvent from '@testing-library/user-event';


describe('HomePage Component', () => {
    it('should render the title,title with span and description', () => {
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        )

        const titleEl = screen.getByText(/Step into the Universe/i);
        expect(titleEl).toBeInTheDocument();

        const titleSpanEl = screen.getByText(/Stellarwear/i);
        expect(titleSpanEl).toBeInTheDocument();

        const descEl = screen.getByText(/redefine your style with exclusive streetwear/i);
        expect(descEl).toBeInTheDocument();
    });

    it('should navigate to /home when the button is clicked',async () => {
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        );

        const btnEl = screen.getByRole('button',{name: /Get started/i});
        await userEvent.click(btnEl);

        expect(window.location.pathname).toBe('/home');
    })
})