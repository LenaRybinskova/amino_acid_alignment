import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import TextField from "@mui/material/TextField";
import {Box} from '@mui/material';

type Props<T extends FieldValues> = {
    name: Path<T>;
    control: Control<T>;
    label: string;
    rules?: any
    placeholder?: string;
    type?: string;
};

export const Input = <T extends FieldValues>({name, control, label, placeholder, type = "text", rules,}: Props<T>) => {

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <Box sx={{ width: '100%' }}>
                <TextField
                    {...field}
                    label={label}
                    placeholder={placeholder}
                    type={type}
                    error={!!error}
                    helperText={error?.message}
                    fullWidth
                    variant="outlined"
                />
                </Box>
            )}
        />
    );
};
