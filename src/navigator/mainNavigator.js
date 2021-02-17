import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList206687Navigator from '../features/NotificationList206687/navigator';
import Settings206686Navigator from '../features/Settings206686/navigator';
import Settings206678Navigator from '../features/Settings206678/navigator';
import UserProfile206676Navigator from '../features/UserProfile206676/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList206687: { screen: NotificationList206687Navigator },
Settings206686: { screen: Settings206686Navigator },
Settings206678: { screen: Settings206678Navigator },
UserProfile206676: { screen: UserProfile206676Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
