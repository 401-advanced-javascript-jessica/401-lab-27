import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter.js';

describe("<Counter />", () => {
    it('down clicker is rendered at application start', () => {
        let app = shallow(<Counter />);
        expect(app.find('.counter').exists()).toBe(true);
        expect(app.find('.down').text()).toEqual("-");
        expect(app.find('.up').text()).toEqual("+");
        expect(app.find('span').exists()).toBe(true);
    });

    it('counter should increment', () => {
        let app = mount(<Counter />);
        let button = app.find('.up');
        button.simulate('click');
        expect(app.state("count")).toEqual(1);
        expect(app.find('span').text()).toEqual('1');
    });

    it('counter should decrement', () => {
        let app = mount(<Counter />);
        let button = app.find('.down');
        button.simulate('click');
        expect(app.state("count")).toEqual(-1);
        expect(app.find('span').text()).toEqual('-1');
    });

    it('renders properly', ()=> {
        const tree = renderer.create(<Counter />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
