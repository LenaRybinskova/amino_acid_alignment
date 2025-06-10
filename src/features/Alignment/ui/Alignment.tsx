import {Input} from '../../../common/components/Input/Input';
import {useForm} from 'react-hook-form';
import {Box} from '@mui/material';
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
            <div> Пример последовательностей:</div>
            <br/>
            <div>AAAAAA</div>
            <div>GGGGGG</div>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Input
                        name="acid_1"
                        control={control}
                        label="Введите первую последовательность"
                        rules={alignmentRules}
                    />

                    <Input
                        name="acid_2"
                        control={control}
                        label="Введите вторую последовательность"
                        rules={alignmentRules}
                    />

                    {!fieldEqual && <span>длина последовательностей не совпадает</span>}

                    <Btn title={'Произвести выравнивание'} disabled={!isValid || !fieldEqual}/>

                </Box>
            </form>

            {values && (
                <>
                    <View value={values['acid_1']} withColors={true}/>
                    <View value={values['acid_2']} withColors={false} highlightDifferences={true} shadowValue={values['acid_1']}/>
                </>
            )}

        </>
    )
}