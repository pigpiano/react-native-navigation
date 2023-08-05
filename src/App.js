import React from 'react';
import styled from 'styled-components/native';
// import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import TabNavigation from './navigations/Tab';
//import TabNavigation from './navigations/Tab'

//  StackNavigation /> 
const App = () => {
    return (
    <NavigationContainer>
        {/* <StackNavigation /> */}
        <TabNavigation />
    </NavigationContainer>
    );
    
};

  // flex:1 전체 화면 차지! align-items, justify-content: center 컴포넌트 중앙정렬
  // 그리고 아래 요소들 옆에 주석달고 쓰면 Error 발생!
  const Container = styled.View`
  flex: 1; 
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export default App;