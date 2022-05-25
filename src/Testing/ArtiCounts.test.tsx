
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { render, shallow } from 'enzyme';
import ArtiCounts from './ArtiCounts';
import Tables from './Tables';
Enzyme.configure({ adapter: new Adapter() });
 

test('render Text in app page', () => {
const app = 'Zishan'
  expect(app).toBe('Zishan');
});
describe('This is a ArtiCounts tset cases',()=>{
    it('click Count',()=>{
        let words = shallow(<ArtiCounts />)
        // console.log(words.debug());
        expect(words.find('.clicks-0').length).toEqual(1)
        words.find('button').simulate('click')
        expect(words.find('.clicks-1').length).toEqual(1)
    })
    it('click Count incre 2',()=>{
        let words = shallow(<ArtiCounts />)
        // console.log(words.debug());
        expect(words.find('.clicks-0').length).toEqual(1)
        words.find('button').simulate('click')
        words.find('button').simulate('click')
        expect(words.find('.clicks-2').length).toEqual(1)
    })
    it('Dive in Table',()=>{
        let variables = shallow(<ArtiCounts />)
        expect(variables.find(Tables).dive().find('.custom-border').length).toBe(1)
    })
    it('SnapShot 1',()=>{
        let variables = shallow(<Tables />)
        expect(variables).toMatchSnapshot();
    })
})