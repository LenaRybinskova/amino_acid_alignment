export const coloredLetter = (letter: string): string | undefined => {
    const c = letter.toUpperCase();
    if (c === 'C') return 'var(--color-cysteine)';
    if ('AILMFWYVP'.includes(c)) return 'var(--color-hydrophobic)';
    if (c === 'G') return 'var(--color-glycine)';
    if ('DE'.includes(c)) return 'var(--color-negative-charge)';
    if ('KR'.includes(c)) return 'var(--color-positive-charge)';
    if ('STHQN'.includes(c)) return 'var(--color-polar-uncharged)';
    return undefined;
};