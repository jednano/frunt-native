import * as React from 'react';
import { NavigationRouteConfig } from 'react-navigation';

export default function createNavigation(
	routeName: string,
	config: NavigationRouteConfig,
) {
	return {
		config,
		routeName,
	};
}
