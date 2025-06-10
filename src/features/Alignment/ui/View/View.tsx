import {coloredWord} from '../../../../common/utils/coloredWords';

type Props = {
    value: string
    withColors: boolean
}

export const View = ({withColors, value}: Props) => {

    const colored = value.split('').map((letter, index) => {
        const color = coloredWord(letter)

        return (
            <span key={index} style={{color: color ?? 'inherit'}}>
        {letter}
      </span>
        );
    });

    return (
        <div>
            {withColors ? colored : value}
        </div>
    );
}