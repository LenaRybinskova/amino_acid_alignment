import React from 'react';
import {Alignment} from '../features/Alignment/ui/Alignment';
import {Box, Container} from '@mui/material';


export const App = () => {
    return (
        <Container sx={{width: '100%'}}>
            <Alignment/>;
        </Container>
    )
};