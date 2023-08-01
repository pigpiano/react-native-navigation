// List 화면으로 사용될 컴포넌트를 작성. 화면에서 사용할 임시 목록을 만들고 항목 수만큼 버튼을 생성
import { View } from 'react-native';
import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

const items = [
    {_id: 1, name: 'React Native'},
    {_id: 2, name: 'React Navigation'},
    {_id: 3, name: 'Hanbit'},
];

    // Item 화면으로 이동하면서 항목의 id와 name을 함께 전달하도록 작성했습니다. 전달된 내용은 컴포넌트의 props로 전달되는 route의
    // params를 통해 확인할 수 있다.
const List = ({ navigation }) => {

    const _onPress = item => { 
        navigation.navigate('Item', { id: item._id, name: item.name });
     };

    return (
        <Container>
            <StyledText>List</StyledText>
            {items.map(item => (
                <Button
                    key={item._id}
                    title={item.name}
                    onPress={() => _onPress(item)} />
            ))}
        </Container>
    )
}

export default List;