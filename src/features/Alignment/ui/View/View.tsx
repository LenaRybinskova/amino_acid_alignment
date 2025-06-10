import {coloredLetter} from '../../../../common/utils/coloredWords';

type Props = {
    value: string
    withColors: boolean
    shadowValue?: string
    highlightDifferences?: boolean
}

export const View = ({withColors, value, shadowValue, highlightDifferences}: Props) => {

    const colored = value.split('').map((letter, index) => {
        const color = coloredLetter(letter);

        return (
            <span key={index} style={{ color: color ?? 'inherit', marginRight: '0.25em' }}>
                {letter}
            </span>
        );
    });

    const highlightedShadow = () => {
        if (!shadowValue || !highlightDifferences) {
            return value;
        }

        return value.split('').map((letter, index) => {
            const isDifferent = letter !== shadowValue[index];
            return (
                <span
                    key={index}
                    style={{
                        backgroundColor: isDifferent ? 'red' : 'transparent',
                        marginRight: '0.25em',
                    }}
                >
                    {letter}
                </span>
            );
        });
    };

    return (
        <div>
            {withColors ? colored : highlightedShadow()}
        </div>
    );
};