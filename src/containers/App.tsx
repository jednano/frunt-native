import * as React from 'react';

import App from '../components/App';
import createAppStyles from '../styles/App';

export default function AppContainer() {
	return React.createElement(App, {
		styles: createAppStyles({
			dark: false,
		}),
	});
}
