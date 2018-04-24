import * as React from 'react';
import { Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

export default class EventsScreen extends React.Component<NavigationScreenProps> {

	static navigationOptions = {
		title: 'Events',
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<Button
				title="Go to Event 42"
				onPress={() =>
					navigate('Event', { id: 42 })
				}
			/>
		);
	}
}
