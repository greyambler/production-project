type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, addtional: string[] = []): string {
  return [
    cls,
    ...addtional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}

// classNames('remove-btn', mods:{hovered: false, selectable: true}, addtional: ['pdg']);
