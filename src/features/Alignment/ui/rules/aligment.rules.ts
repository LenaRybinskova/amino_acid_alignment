export const alignmentRules = {
    required: 'required',
    pattern: {
        value: /^[ARNDCEQGHILKMFPSTWYV-]+$/,
        message: 'можно добавить только " ARNDCEQGHILKMFPSTWYV- "символы без пробелов',
    },
}