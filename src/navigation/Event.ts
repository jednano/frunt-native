import * as React from 'react';

import Event from '../screens/Event';

import createNavigation from './createNavigation';

export default createNavigation('Event', {
	navigationOptions: ({ navigation }: any) => ({
		title: `Event ${navigation.getParam('id')}`,
	}),
	screen: Event,
});
