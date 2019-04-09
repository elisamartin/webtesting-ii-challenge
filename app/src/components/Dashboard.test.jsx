import React from 'react';
import * as rtl from 'react-testing-library';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('Dashboard', () => {
	it('renders the dashboard component', () => {
		rtl.render(<Dashboard />);
	});

	it('renders the buttons', () => {
		const dashboard = rtl.render(<Dashboard />);

		expect(dashboard.getByText(/strike/i));
		expect(dashboard.getByText(/ball/i));
		expect(dashboard.getByText(/hit/i));
		expect(dashboard.getByText(/foul/i));
	});
});
