import {Button} from '@mui/material';


type Props = {
    disabled?: boolean,
    title: string
}


export const Btn = ({disabled, title}: Props) => {
    return (
        <Button type="submit" variant="contained" size="large"
                disabled={disabled} sx={{mt: 2}}>
            {title}
        </Button>
    )
}


