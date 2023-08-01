// 목록의 상세 정보를 보여주는 컴포넌트 작성
import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native'
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

// Item 화면에 전달되는 params를 이용해 화면에 항목의 id와 name을 출력해 보겠습니다.
const Item = ( { navigation, route } ) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitleVisible: false,
            headerTintColor: '#ffffff',
            headerLeft: ({ onPress, tintColor }) => {
                return (
                    <MaterialCommunityIcons
                        name='keyboard-backspace'
                        size={30}
                        style={{ marginLeft: 11}}
                        color={tintColor}
                        onPress={onPress} 
                        />
                )
            },
            headerRight: ({ tintColor }) => (
                <MaterialCommunityIcons
                    name='home-variant'
                    size={25}
                    style={{ marginRight: 11 }}
                    color={tintColor}
                    onPress={() => navigation.popToTop()}
                    />
            )
        })
    }, []);
    return (
        <Container>
            <StyledText>Item</StyledText>
            <StyledText>ID: {route.params.id}</StyledText>
            <StyledText>NAME: {route.params.name}</StyledText>
        </Container>
    )
}

export default Item;