import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Welcome } from './src/screens/Welcome';

AppRegistry.registerComponent(appName, () => Welcome);
