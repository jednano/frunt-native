import * as React from 'react';
import { Text, View, ViewStyle } from 'react-native';

interface AppProps {
	styles: {
		container: ViewStyle;
	}
}

export default class App extends React.Component<AppProps> {
	render() {
		const { styles } = this.props;
		return (
			<View style={styles.container}>
				<Text>Open up App.ts to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
			</View>
		);
	}
}
