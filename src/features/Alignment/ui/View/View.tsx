import { Box } from '@mui/material';
import { coloredLetter } from '../../../../common/utils/coloredWords';

const CHUNK_SIZE = 3;

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

type Props = {
    value1: string;
    value2: string;
};

export const AlignedView = ({ value1, value2 }: Props) => {
    const commonSx = {
        fontSize: 'var(--font-size-secondary)',
        fontWeight: 'var(--font-weight)',
        width: '24px',
        height: '32px',
        lineHeight: '32px',
        display: 'inline-block',
        textAlign: 'center',
        borderRadius: '4px',
    };

    const chunks1 = chunkArray(value1.split(''), CHUNK_SIZE);
    const chunks2 = chunkArray(value2.split(''), CHUNK_SIZE);

    const maxBlocks = Math.max(chunks1.length, chunks2.length);
    const rows = [];

    for (let i = 0; i < maxBlocks; i++) {
        if (i < chunks1.length) {
            const startIndex = i * CHUNK_SIZE;
            rows.push(
                <Box key={`v1-${i}`} sx={{ display: 'flex', gap: '4px' }}>
                    {chunks1[i].map((letter, idx) => (
                        <Box key={startIndex + idx} component="span" sx={{ ...commonSx, color: coloredLetter(letter) ?? 'inherit' }}>
                            {letter}
                        </Box>
                    ))}
                </Box>
            );
        }

        if (i < chunks2.length) {
            const startIndex = i * CHUNK_SIZE;
            rows.push(
                <Box key={`v2-${i}`} sx={{ display: 'flex', gap: '4px' }}>
                    {chunks2[i].map((letter, idx) => {
                        const globalIndex = startIndex + idx;
                        const isDifferent = value1[globalIndex] !== letter;
                        return (
                            <Box
                                key={globalIndex}
                                component="span"
                                sx={{...commonSx, backgroundColor: isDifferent ? 'var(--color-shadow)' : 'transparent',}}>
                                {letter}
                            </Box>
                        );
                    })}
                </Box>
            );
        }
    }

    return <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>{rows}</Box>;
};