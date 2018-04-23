import * as React from 'react';
import { Text } from 'react-native';

import { CenterView } from './styles';

export interface AppProps {
	dark?: boolean;
}

export default class App extends React.Component<AppProps> {
	render() {
		return (
			<CenterView>
				<Text>Open up App.ts to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
			</CenterView>
		);
	}
}
