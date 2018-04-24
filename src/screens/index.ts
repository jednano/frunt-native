import { NavigationTransitionProps, StackNavigator } from 'react-navigation';

import Event from './Event';
import Events from './Events';

export default StackNavigator(
	{
		Event: {
			navigationOptions: ({ navigation }: NavigationTransitionProps) => ({
				title: `Event ${(navigation.state as any).params.id}`,
			}),
			screen: Event,
		},
		Events: { screen: Events },
	},
	{
		initialRouteName: 'Events',
	},
);
