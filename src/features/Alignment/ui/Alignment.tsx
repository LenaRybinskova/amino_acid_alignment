import {Input} from '../../../common/components/Input/Input';
import {useForm} from 'react-hook-form';
import {Box, Paper, Stack, Typography} from '@mui/material';
import {Btn} from '../../../common/components/Button/Button';
import {alignmentRules} from './rules/aligment.rules'
import {useState} from 'react';
import {View} from '../ui/View/View';

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

    return (<>
            <Paper elevation={2} sx={{p: 3, mb: 4, borderRadius: 2}}>
                <Typography variant="h4" component="h1" gutterBottom
                            sx={{fontWeight: 600, color: '#1e1e1e', textAlign: 'center',}}>
                    Выравнивание аминокислотных последовательностей
                </Typography>

            </Paper>

            <Paper elevation={1} sx={{p: 3, mb: 4, borderRadius: 2, backgroundColor: '#f8f9fa'}}>
                <Typography variant="h6" gutterBottom sx={{color: '#495057', fontWeight: 500}}>
                    Пример последовательностей:
                </Typography>
                <Stack spacing={1}>
                    <Box>AQGHIL</Box>
                    <Box>NNNNLL</Box>
                </Stack>
            </Paper>

            <Paper elevation={2} sx={{p: 4, mb: 4, borderRadius: 2, mt: 6}}>
                <Typography variant="h5" gutterBottom sx={{fontWeight: 500, color: '#1e1e1e', mb: 3,}}>
                    Введите последовательности
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3}>

                        <Input name="acid_1" control={control} label="Введите первую последовательность" rules={alignmentRules}/>

                        <Input name="acid_2" control={control} label="Введите вторую последовательность" rules={alignmentRules}/>

                        {!fieldEqual && <span>длина последовательностей не совпадает</span>}

                        <Btn title={'Произвести выравнивание'} disabled={!isValid || !fieldEqual}/>

                    </Stack>
                </form>
            </Paper>

        {values && (
            <Paper elevation={1} sx={{p: 3, mb: 4, borderRadius: 2, backgroundColor: '#e7f3ee'}}>
                <Typography variant="h6" gutterBottom sx={{color: '#495057', fontWeight: 500}}>
                    Результат выравнивания
                </Typography>

                <Stack spacing={1}>
                    <Box>
                        <View value={values["acid_1"]} withColors={true} />
                    </Box>
                    <Box>
                        <View value={values["acid_2"]} withColors={false} highlightDifferences={true} shadowValue={values["acid_1"]}/>
                    </Box>
                </Stack>
            </Paper>)}
        </>
    )
}