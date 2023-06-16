import {  View } from 'react-native';
import MyStack from './component/redux/navigation';
import { Provider } from 'react-redux';
import store from "./component/redux/store"


export default function App() {
  return (
    <Provider store={store}>
      <MyStack></MyStack>
    </Provider>
  );
}

