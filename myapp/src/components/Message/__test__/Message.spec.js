import { render } from "@testing-library/react";
import Message from "..";

describe('Message', ()=> {
    it('renders passed text', ()=> {
        const component = render(<Message id="id" author="author" text="text" />);

        const text = component.queryAllByAltText("text");
        expect(text).toBeDefined();
    });

    it('matches snapshot', ()=> {
        const component = render(<Message id="id" author="author" text="text" />);

        expect(component).toMatchSnapshot();
    });
});