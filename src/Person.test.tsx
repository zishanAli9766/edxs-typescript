import React from 'react';
import { render, screen } from '@testing-library/react';
import {Person} from './Testing/Person';
import { SideBare } from './Testing/SideBare';



describe('Test cases For Person',()=>{
    test('render a name', () => {
        render(<Person name='Zishan' />);
        const linkElement = screen.getByText(/name is Zishan/i);
        expect(linkElement).toBeInTheDocument();
      });
    test('render a attribute ', () => {
        render(<Person name='Zishan' />);
        const divElement = screen.getByRole("contentinfo");
        expect(divElement).toHaveTextContent("name is Zishan");
        expect(divElement).toHaveAttribute("role","contentinfo");
      });
})
describe('Test cases For SideBare',()=>{
  
    test('render a multiple event ', () => {
        const items = [{
            name : 'Test',
            href : '/test'
        }]
        render(<SideBare items={items} />);
        const anchorElement = screen.getAllByRole("navigation");
        expect(anchorElement[0]).toHaveTextContent(items[0].name);
        expect(anchorElement[0]).toHaveAttribute("href",items[0].href);
      });
})

