/** Stagger delay helper for ScrollReveal list items (ms) */
export function scrollStagger(index: number, step = 85, base = 0) {
  return base + index * step;
}
