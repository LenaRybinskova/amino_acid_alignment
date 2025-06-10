import React from 'react';
import {Alignment} from '../features/Alignment/ui/Alignment';
import {Box} from '@mui/material';


export const App = () => {
    return (
        <Box sx={{width: '100%', paddingTop: '30px', paddingX: '16px'}}>
            <Alignment/>;
        </Box>
    )
};