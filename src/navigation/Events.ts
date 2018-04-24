import * as React from 'react';

import Events from '../screens/Events';

import createNavigation from './createNavigation';

export default createNavigation('Events', {
	screen: Events,
});
