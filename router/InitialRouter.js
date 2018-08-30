import {
  createStackNavigator,
} from 'react-navigation';

import Login from '../screen/Login';
import Main from '../router/Navbar';
import Profile from '../screen/Profile'

const App = createStackNavigator({
  Login: {screen: Login},
  Main: {screen: Main},
  Profile: {screen: Profile}
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default App;