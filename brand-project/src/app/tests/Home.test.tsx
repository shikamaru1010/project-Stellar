import { render } from "react-dom"
import {expect,it,describe} from "vitest"
import HomePage from "../pages/homePage";
describe('Home Page ', () => {
    it('should render the home page correctly', () => {
        render(<HomePage  />);
    })
})