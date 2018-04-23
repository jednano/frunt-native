import glamorous from 'glamorous-native';

import { AppProps } from './';

export const CenterView = glamorous.view<AppProps>((props) => ({
	flex: 1,
	backgroundColor: props.dark ? '#333' : '#fff',
	alignItems: 'center',
	justifyContent: 'center',
}));
