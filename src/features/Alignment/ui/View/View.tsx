import {Box} from '@mui/material';
import {coloredLetter} from '../../../../common/utils/coloredWords';

type Props = {
    value: string
    withColors: boolean
    shadowValue?: string
    highlightDifferences?: boolean
}

export const View = ({withColors, value, shadowValue, highlightDifferences}: Props) => {
    const commonSx = {
        fontSize: "var(--font-size-secondary)",
        fontWeight: "var(--font-weight)",
        width: '24px',
        height: '32px',
        lineHeight: '32px',
        display: 'inline-block',
        textAlign: 'center',
        borderRadius: '4px',
    };

    const colored = value.split('').map((letter, index) => {
        const color = coloredLetter(letter);
        return (
            <Box key={index} component="span" sx={{...commonSx, color: color ?? 'inherit',}}>
                {letter}
            </Box>
        );
    });

    const highlightedShadow = () => {
        if (!shadowValue || !highlightDifferences) {
            return value;
        }

        return value.split('').map((letter, index) => {
            const isDifferent = letter !== shadowValue[index];
            return (
                <Box key={index} component="span" sx={{...commonSx,
                    backgroundColor: isDifferent ? 'var(--color-shadow)' : 'transparent'}}>
                    {letter}
                </Box>
            );
        });
    };

    return (
        <Box sx={{display: 'flex', gap: '4px', }}>
            {withColors ? colored : highlightedShadow()}
        </Box>
    );
}