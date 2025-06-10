import {Input} from '../../../common/components/Input/Input';
import {useForm} from 'react-hook-form';
import {Box, Button} from '@mui/material';

export type FormValue = {
    acid_1: string
    acid_2: string
}

export const Alignment = () => {

    const {control, handleSubmit, formState: {errors, isValid}, watch} = useForm<FormValue>({mode: 'onChange'})

    const onSubmit = (data: FormValue) => {
        console.log('Данные формы:', data)
    }

    const acid1Lenght = watch('acid_1') || ''
    const acid2Lenght = watch('acid_2') || ''


        return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <Input
                    name="acid_1"
                    control={control}
                    label="acid_1"
                    placeholder="Введите последовательность"
                    rules={{
                        required: 'Email обязателен',
                        pattern: {
                            value: /^[ARNDCEQGHILKMFPSTWYV-]+$/,
                            message: 'можно добавить только ARNDCEQGHILKMFPSTWYV- символы',
                        },
                    }}
                />

                <Input
                    name="acid_2"
                    control={control}
                    label="acid_2"
                    placeholder="Введите последовательность"
                    rules={{
                        required: 'Email обязателен',
                        pattern: {
                            value: /^[ARNDCEQGHILKMFPSTWYV-]+$/,
                            message: 'можно добавить только ARNDCEQGHILKMFPSTWYV- символы',
                        },
                    }}
                />

                <span></span>

                <Button type="submit" variant="contained" size="large"
                        disabled={!isValid || acid1Lenght !== acid2Lenght} sx={{mt: 2}}>
                    Отправить
                </Button>
            </Box>
        </form>
    )
}