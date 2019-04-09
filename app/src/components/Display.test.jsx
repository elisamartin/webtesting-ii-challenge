import React from 'react';
import * as rtl from 'react-testing-library';
import Display from './Display';

afterEach(rtl.cleanup);

describe('Display', () => {
	it('renders the display component', () => {
		rtl.render(<Display />);
	});

	it('displays strikes and balls', () => {
		const display = rtl.render(<Display />);
		expect(display.getByTestId('strikes'));
		expect(display.getByTestId('balls'));
	});
});
