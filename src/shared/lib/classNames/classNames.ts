export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
    cls: string,
    mods: Mods = {},
    addtional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...addtional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}

// classNames('remove-btn', mods:{hovered: false, selectable: true}, addtional: ['pdg']);
