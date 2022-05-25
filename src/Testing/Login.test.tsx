import { render, screen } from "@testing-library/react";
import Logins from "./Login";
import * as ReactDOM from 'react-dom';






describe('First Login test', () => {
   

    test("render the  button on the screen", async () => {
        render(<Logins />);
        const buttonList = await screen.queryAllByRole("button");
        expect(buttonList).not.toHaveLength(2);
    });
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Logins />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(3);
        expect(inputs[0].name).toBe('login');
        expect(inputs[1].name).toBe('password');
        expect(inputs[2].value).toBe('Login');
    });
    it('Renders correctly initial document buttons', () => {
        const inputs = container.querySelectorAll('button');
        expect(inputs).toHaveLength(2);
    });
    
    it('Renders correctly initial document label', () => {
        const label = container.querySelector('label');
        expect(label).not.toBeInTheDocument();
    });


    it('Renders correctly initial document with data-test query', () => {
        expect(container.querySelector("[data-test='login-form']")).toBeInTheDocument();
        expect(container.querySelector("[data-test='login-input']")?.getAttribute('name'))
            .toBe('login');
        expect(container.querySelector("[data-test='password-input']")?.getAttribute('name'))
            .toBe('password');
    });
    it('Renders correctly initial document with data-test query with type', () => {
        expect(container.querySelector("[data-test='login-form']")).toBeInTheDocument();
        expect(container.querySelector("[data-test='password-input']")?.getAttribute('type'))
            .toBe('password');
    });
    it('Renders correctly initial document with data-test query with type', () => {
        expect(container.querySelector("[data-test='submit-button']")?.getAttribute('type'))
            .toBe('submit');
        expect(container.querySelector("[data-test='submit-button']")?.getAttribute('value'))
            .toBe('Login');
    });
    
})