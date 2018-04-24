import * as React from 'react';
import { Button } from 'react-native';
import { NavigationStackScreenOptions } from 'react-navigation';

import BaseScreen from './Base';

export default class EventsScreen extends BaseScreen {

	static navigationOptions: NavigationStackScreenOptions = {
		title: 'Events',
	};

	render() {
		const {
			navigation,
		} = this.props;
		return (
			<Button
				title="Go to Event 42"
				onPress={() =>
					navigation.navigate('Event', { id: 42 })
				}
			/>
		);
	}
}
