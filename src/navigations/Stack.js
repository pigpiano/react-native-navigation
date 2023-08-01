// 생성된 컴포넌트들을 이용해서 스택 내비게이션을 구성해보자
import React from 'react';
import styled from 'styled-components/native'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import List from '../screens/List'
import Item from '../screens/Item'

// 버튼 컴포넌트 변경
import { Platform } from 'react-native';

// headerTitle에 컴포넌트를 반환하는 함수를 지정해서 타이틀 컴포넌트를 교체해보자
import { MaterialCommunityIcons} from '@expo/vector-icons';
// createStackNavigator 함수를 이용해서 스택 내비게이션을 생성
const Stack = createStackNavigator();

//내비게이션은 화면 전체를 차지하고 있지만 화면으로 사용된 컴포넌트의 영역이 전체를 차지 하고 있지 않으면 배경이 영역별로 모두 동일하지 않는
//문제 발생, 1. flex:1 2. 리액트 내비게이션에서 설정 -> screenOptions={{ cardStyle: {backgroundColor: '#ffffff }}}
// cardStyle을 사용하면 스택 내비게이션의 화면 배경색을 수정 가능. 보통 화면 배경색은 동일하게 사용하기 때문에 화면마다 설정보다는 
// Navigator 컴포넌트의 screenOptions에 설정해서 화면 전체에 적용되도록 하는 것이 편하다.
const StackNavigation = () => {
    return (
       
        <Stack.Navigator initialRouteName='Home'
                         screenOptions={{ cardStyle: {backgroundColor: '#ffffff'},
                         headerStyle: {
                            height: 110,
                            backgroundColor: '#95a5a6',
                            borderBottomWidth: 5,
                            borderBottomColor: '#34495e',
                         },
                         headerTitleStyle: { color: '#ffffff', fontSize: 24},
                         headerTitleAlign: 'center',
                         headerTitle: ({ style }) => (
                            <MaterialCommunityIcons name='react' style={style} />
                         )}}>
            <Stack.Screen name='Home' component={Home}
                options={{ headerShown: false }} />
            <Stack.Screen name='List' component={List}
                options={{headerTitle: 'List Screen',
                headerBackTitleVisible: true,
                headerTitleStyle: { fontSize: 24},
                headerTintColor: '#e74c3c',
                
                headerBackImage: ({ tintColor}) => {
                    const style = {
                        marginRight: 5,
                        marginLeft: Platform.OS === 'ios' ? 11 : 0,
                    };
                    return (
                        <MaterialCommunityIcons
                            name="keyboard-backspace"
                            size={30}
                            color={tintColor}
                            style={style} />
                    )
                }}} />

            <Stack.Screen name='Item' component={Item} />
        </Stack.Navigator>
    )
}
export default StackNavigation;


