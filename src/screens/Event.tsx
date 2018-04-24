import * as React from 'react';
import { Button, Text, View } from 'react-native';

import BaseScreen from './Base';

interface EventScreenProps {
	/**
	 * Event id
	 */
	id: string;
}

export default class EventScreen extends BaseScreen<EventScreenProps> {

	render() {
		const {
			navigation,
		} = this.props;
		return (
			<View>
				<Text>
					Event ID: {navigation.getParam('id')}
				</Text>
				<Button
					title="Go to Events"
					onPress={() =>
						navigation.navigate('Events')
					}
				/>
			</View>
		);
	}
}
