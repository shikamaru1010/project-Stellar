import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; 
import userEvent from "@testing-library/user-event"; 
import { describe, test, expect, vi } from "vitest";
import SignUp from "../layout/signUp/signUp";


// Mock implementation with async/await
vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as typeof import('react-router-dom');

  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

  

describe("Hero Component", () => {
  test("should render and trigger navigation on 'Shop Now' button click", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

   
    const shopNowButton = screen.getByText(/Log in/i);

    // Simulate button click
    await user.click(shopNowButton);

  
    expect(window.location.pathname).toBe("/Login"); 
  });
});
