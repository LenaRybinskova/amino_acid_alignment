type Props = {
    value: string
    withColors: boolean
}

export const View = ({withColors, value}: Props) => {

    return (
        <div>{value}</div>
    )

}