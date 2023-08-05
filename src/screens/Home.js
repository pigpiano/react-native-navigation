// 첫 화면으로 사용할 홈 화면 작성완료. 화면을 확인하기 위한 텍스트와 다음 화면인 list 화면으로 이동하기 위한 버튼으로 화면 구성
import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { View } from 'react-native';

//styled.View -> styled.SafeAreaView를 통해 노치 디자인 문제를 해결할 수 있다.
const Container = styled.SafeAreaView`
    background-color: #ffffff;
    align-items: center;
    `;

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

// 홈 화면에서 props로 전달되는 navigation을 사용해서 버튼을 클릭하면 List 화면으로 이동하도록 만들어 보겠습니다.
// navigation에는 다양한 기능들이 있는데, 이중에서 navigate 함수를 사용해서 원하는 화면으로 이동할 수 있다. 
const Home = ( {navigation} ) => {
    return (
        <Container>
            <StyledText>Home</StyledText>
            <Button title='go to the screen'
                    onPress={ () => navigation.navigate('List')} />
        </Container>
    )
}

export default Home