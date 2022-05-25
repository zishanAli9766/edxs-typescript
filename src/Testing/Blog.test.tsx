import Enzyme, { render, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Blog from './Blog';
Enzyme.configure({ adapter: new Adapter() });




describe('Testing the Blog Test',() =>{
    test('first blog test case',()=>{
        let wrappers = shallow(<Blog />)
        expect(wrappers.find('.liCls').length).toBe(3)
    })
    it('second blog test case at & key',()=>{
        let wrappers = shallow(<Blog />)
        expect(wrappers.find('.liCls').at(0).key()).toBe('Test1')
    })
    it('third blog test case child',()=>{
        let wrappers = shallow(<Blog />)
        expect(wrappers.find('.numbers').childAt(0).type()).toBe('span')
    })
    it('fourth blog test case child',()=>{
        let wrappers = shallow(<Blog />)
        // console.log(wrappers.debug());
        expect(wrappers.find('ul').children().length).toBe(3)
    })
    it('hasclass blog test case check',()=>{
        let wrappers = shallow(<Blog />)
        expect(wrappers.find('.my-button').hasClass('disabled')).toBe(true)
    })
    it('is class blog test case check',()=>{
        let wrappers = shallow(<Blog />)
        expect(wrappers.is('.mainCls')).toBe(true)
    })
    it('main class blog test case child',()=>{
        let wrappers = shallow(<Blog />)
        // console.log(wrappers.debug());
        expect(wrappers.find('.mainCls').children().length).toBe(4)
    })
})