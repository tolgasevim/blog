import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import QuestionListScreen from './src/screens/QuestionListScreen';
import QuizScreen from './src/screens/QuizScreen';
import QuizResultScreen from './src/screens/QuizResultScreen';
import UserScreen from './src/screens/UserScreen';
import LoginScreen from './src/screens/LoginScreen';
import React from 'react'; // if it is a export default then
// we can import without curly braces else import only with curly braces as the example below
import { Provider } from './src/context/QuestionContext';
import { Provider as UserProvider} from './src/context/UserContext';


const navigator = createStackNavigator ({
  Index : IndexScreen,
  QuestionList : QuestionListScreen,
  Show : ShowScreen,
  Create : CreateScreen,
  Edit : EditScreen,
  Quiz : QuizScreen,
  QuizResult : QuizResultScreen,
  User : UserScreen,
  Login : LoginScreen

},{
  initialRouteName : 'Login',
  defaultNavigationOptions: {
    title : 'FunLearn'
  }

});



const App = createAppContainer(navigator);
export default () => {
  return (<Provider><UserProvider><App/></UserProvider>
  </Provider>);
};
