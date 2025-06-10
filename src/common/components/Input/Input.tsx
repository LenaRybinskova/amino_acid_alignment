/*
import TextField from '@mui/material/TextField';
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {FormValue} from '../../../features/Alignment/ui/Alignment';

type Props <T extends FormValue>= {
    name: keyof T & string;
    control: Control<T>;
    label: string
    rules?: any
    placeholder?: string
    type?: string
}

export const Input = <T extends Record<string, any>>({name, control, label, placeholder, type = 'text', rules,}: Props<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
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
            )}
        />
    );
};*/


import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import TextField from "@mui/material/TextField";

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
            )}
        />
    );
};
