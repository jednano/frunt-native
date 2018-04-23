import { StyleSheet, ViewStyle } from 'react-native';

interface Mods {
	dark?: boolean
}

function container(mods: Mods): ViewStyle {
	return {
		flex: 1,
		backgroundColor: mods.dark ? '#333' : '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	};
}

export default function createAppStyles(mods: Mods = {}) {
	return StyleSheet.create({
		container: container(mods),
	});
}
