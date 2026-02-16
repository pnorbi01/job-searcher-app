export function decodeHtmlEntities(input: string): string {
    if (!input) return input;

    const named: Record<string, string> = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        nbsp: " ",
    };

    const decodeOnce = (str: string) =>
        str
            .replace(/&([a-zA-Z]+);?/g, (m, nameRaw) => {
                const name = String(nameRaw).toLowerCase();
                return named[name] ?? m;
            })
            .replace(/&#(\d+);?/g, (_m, num) => {
                const n = Number(num);
                return Number.isFinite(n) ? String.fromCodePoint(n) : _m;
            })
            .replace(/&#x([0-9a-fA-F]+);?/g, (_m, hex) => {
                const n = parseInt(hex, 16);
                return Number.isFinite(n) ? String.fromCodePoint(n) : _m;
            })
            .replace(/\u00A0/g, " ");

    let prev = input;
    for (let i = 0; i < 3; i++) {
        const next = decodeOnce(prev);
        if (next === prev) break;
        prev = next;
    }

    return prev;
}

export function decodeIfString(value: unknown): string | undefined {
    return typeof value === "string" ? decodeHtmlEntities(value) : undefined;
}