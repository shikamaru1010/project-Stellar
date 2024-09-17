import { render,screen } from "@testing-library/react"
import LandingPage from "../pages/landingPage"
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe('Landin Page functionality', () => {
    it('should check is button functionality renders correctly and navigate to /collection', async() => {
        render(
        <BrowserRouter>
            <LandingPage/>
        </BrowserRouter>
        );
        const button = screen.getByText(/Shop Now/i);
        await userEvent.click(button);
        expect(window.location.pathname).toBe('/collection');

    })
})