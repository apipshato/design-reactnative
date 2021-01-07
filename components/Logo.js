import React from 'react'
import styled from 'styled-components'


const Logo = props =>(
    <Container>
        <Image source={props.image}/>
        <Text>{props.text}</Text>
    </Container>
)

export default Logo

const Container =styled.View`

`

const Image =styled.Image`

`
const Text= styled.Text`

`