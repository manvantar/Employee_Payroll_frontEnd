import { shallow, mount } from 'enzyme';
import Register from '../pages/register';

describe('Login test', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Register />);

    })

    test('render h1 tag text', () => {
        expect(wrapper.find('h1').text()).toContain("EMPLOYEE PAYROLL");
    })
    
    test('render h2 tag text', () => {
        expect(wrapper.find('h2').text()).toContain("REGISTRATION");
    })

})