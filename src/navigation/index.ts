import { StackNavigator } from 'react-navigation';

import Event from './Event';
import Events from './Events';

export default StackNavigator(
	{
		[Event.routeName]: Event.config,
		[Events.routeName]: Events.config,
	},
	{
		initialRouteName: Events.routeName,
		navigationOptions: {
			headerBackTitle: null,
		}
	},
);
