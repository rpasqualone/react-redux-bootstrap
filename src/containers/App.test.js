import React from 'react';
import { render } from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import App from './App';

describe('App Component', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(<App />);
		const tree = shallowToJson(wrapper);
		expect(tree).toMatchSnapshot();
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		render(<App />, div);
	});

	describe('method someMethod', () => {
		it('returns appropriate string', () => {
			const wrapper = shallow(<App />);
			expect(wrapper.instance().someMethod()).toEqual('Some strings');
		});
	});
});
