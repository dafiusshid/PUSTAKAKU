// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import AddEmployee from './src/components/Employee/AddEmployee';
import AddTransaction from './src/components/Transaction/AddTransaction';
import BookList from './src/components/Book/BookList';
import EmployeeList from './src/components/Employee/EmployeeList';
import TransactionList from './src/components/Transaction/TransactionList';
import BookDetail from './src/components/Book/BookDetail';
import { DataProvider } from './DataContext';
import AddBook from './src/components/Book/AddBook';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddEmployee" component={AddEmployee} />
          <Stack.Screen name="AddTransaction" component={AddTransaction} />
          <Stack.Screen name="BookList" component={BookList} />
          <Stack.Screen name="AddBook" component={AddBook} />
          <Stack.Screen name="EmployeeList" component={EmployeeList} />
          <Stack.Screen name="TransactionList" component={TransactionList} />
          <Stack.Screen name="BookDetail" component={BookDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;