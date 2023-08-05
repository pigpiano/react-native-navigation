import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Meet, Settings } from '../screens/TabSreens'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
};




// createBottomTabNavigator함수를 이용해서 탭 네비게이션 생성
const Tab = createBottomTabNavigator();

// 탭 네비게이션 1. Navigator component 2. Screen component
// 앞에서 만든 Mail, Meet, Settings 컴포넌트들을 Screen 컴포넌트의 component로 지정해 화면으로 사용하고
// Navigator 컴포넌트로 감싸준다.

// 화면을 구성하는 Screen 컴포넌트마다 tabBarIcon에 MaterialCommunityIcons 컴포넌트를 반환하는 함수를 지정
const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName='Meet'
        screenOptions={ 
            { cardStyle: {backgroundColor: '#ffffff'},
            tabBarShowLabel: false, tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
            backgroundColor: 'green',
            borderTopColor: 'red',
            borderTopWidth: 2,
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveBackgroundColor: 'pink',
    }}
        >
            
            <Tab.Screen name= "Mail" component={Mail}
            options={{tabBarLabel: 'inbox',
                tabBarIcon: props => TabIcon({ ...props, name: props.focused ? 'email' : 'email-outline', }),
            }} />
            <Tab.Screen name= "Meet" component={Meet}
            options={{ tabBarIcon: props => TabIcon({ ...props, name: props.focused ?  'video': 'video-outline',}),
            }} />
            <Tab.Screen name= "Settings" component={Settings}
            options={{ tabBarIcon: props => TabIcon({ ...props, name: props.focused ? 'wifi' : '', }),
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigation;

