import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Container } from './src/providers/Container';

AppRegistry.registerComponent(appName, () => Container);
