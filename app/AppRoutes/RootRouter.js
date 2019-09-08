import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Splash from '../Splash';
import NavKeys from './NavKeys';
import Auth from '../Modules/Auth/Containers/Auth';
import Analytic from '../Modules/Analytic/Containers/Analytic';

const root = createSwitchNavigator(
  {
    [NavKeys.rootRoute.SPLASH]: {screen: Splash},
    [NavKeys.rootRoute.AUTH_MODULE]: {screen: Auth},
    [NavKeys.rootRoute.APP_MODULE]: {screen: Analytic},
  },
  {
    initialRouteName: NavKeys.rootRoute.SPLASH,
  },
);

export default createAppContainer(root);
