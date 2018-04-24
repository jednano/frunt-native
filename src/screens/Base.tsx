import * as React from 'react';
import { NavigationScreenProps } from 'react-navigation';

export default class BaseScreen<P = {}, O = {}>
extends React.Component<NavigationScreenProps<P, O>> {}
