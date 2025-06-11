import {Input} from 'common/components/Input/Input';
import {useForm} from 'react-hook-form';
import {Box, Paper, Stack, Typography} from '@mui/material';
import {Btn} from 'common/components/Button/Button';
import {alignmentRules} from './rules/aligment.rules'
import {useState} from 'react';
import {AlignedView} from '../ui/View/View';

export type FormValue = {
    acid_1: string
    acid_2: string
}

export const Alignment = () => {
    const [values, setValues] = useState<FormValue | null>(null)

    const {control, handleSubmit, formState: {isValid}, watch} = useForm<FormValue>({mode: 'onChange'})

    const onSubmit = (data: FormValue) => {
        console.log('Данные формы:', data)
        setValues(data)
    }

    const acid1 = watch('acid_1') || ''
    const acid2 = watch('acid_2') || ''
    const fieldEqual = acid1.length === acid2.length

    return (
        <>
            <Paper elevation={2} sx={{ mb: 4,}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Выравнивание аминокислотных последовательностей
                </Typography>
            </Paper>

            <Paper elevation={1} sx={{ mb: 4, backgroundColor: '#f8f9fa'}}>
                <Typography variant="h6" gutterBottom sx={{color: "var(--color-background-paper-primary)", fontWeight: 500, fontSize: 'inherit'}}>
                    Пример последовательностей:
                </Typography>
                <Stack spacing={1}>
                    <Box>AQGHIL</Box>
                    <Box>NNNNLL</Box>
                </Stack>
            </Paper>

            <Paper elevation={2} sx={{mb: 4, mt: 6}}>
                <Typography variant="h5" gutterBottom sx={{fontWeight: 500, mb: 3,}}>
                    Введите последовательности
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3}>

                        <Input name="acid_1" control={control} label="Введите первую последовательность"
                               rules={alignmentRules}/>

                        <Input name="acid_2" control={control} label="Введите вторую последовательность"
                               rules={alignmentRules}/>

                        {!fieldEqual && <span>длина последовательностей не совпадает</span>}

                        <Btn title={'Произвести выравнивание'} disabled={!isValid || !fieldEqual}/>

                    </Stack>
                </form>
            </Paper>

            {values && <AlignedView value1={values['acid_1']} value2={values['acid_2']}/>}
        </>
    )
}