import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Container } from './src/providers/Container';

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

AppRegistry.registerComponent(appName, () => Container);
