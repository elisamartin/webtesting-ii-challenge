import React from 'react';
import * as rtl from 'react-testing-library';
import Container from './Container';

afterEach(rtl.cleanup);

describe('Container', () => {
	it('renders the container component', () => {
		rtl.render(<Container />);
	});
});
