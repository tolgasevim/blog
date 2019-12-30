import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import React from 'react'; // if it is a export default then
// we can import without curly braces else import only with curly braces as the example below
import { Provider } from './src/context/BlogContext';


const navigator = createStackNavigator ({
  Index : IndexScreen

},{
  initialRouteName : 'Index',
  defaultNavigationOptions: {
    title : 'Blogs'
  }

});



const App = createAppContainer(navigator);
export default () => {
  return (<Provider><App/>
  </Provider>);
};
