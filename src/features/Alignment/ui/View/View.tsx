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
            <span
                key={index}
                style={{ color: color ?? 'inherit', marginRight: '0.25em' }}
            >
      {letter}
    </span>
        );
    });

    const highlightedShadow = () => {
        if (!shadowValue || !highlightDifferences) {
            // если нет shadowValue или флага - просто возвращаем plain string
            return value;
        }

        return value.split('').map((letter, index) => {
            const isDifferent = letter !== shadowValue[index];
            const color = coloredLetter(letter);
            return (
                <span
                    key={index}
                    style={{
                        color: color ?? 'inherit',
                        backgroundColor: isDifferent ? 'yellow' : 'transparent',
                        padding: '0 2px',
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
}