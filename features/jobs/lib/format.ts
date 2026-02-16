export function formatGeo(geo: string, max = 3) {
    const parts = geo
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

    if (parts.length <= max) return geo.trim();
    return `${parts.slice(0, max).join(", ")}, …`;
}