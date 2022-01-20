import React from 'react';

// style components
import {Wrapper} from './LisAtors.style';

// composents
import {Carousel} from '../Carousel';
import Menu from '../Menu/Menu'
import Grid from '../Grid'

export const LisAtors = () => {
    return (
        <Wrapper>
            <Carousel/>
            <Menu/>
            <Grid/>
        </Wrapper>
    )
}

