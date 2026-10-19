import type { Scene, VisualOptions } from "./types";
import { esc } from "./visual-primitives";
import { renderFoundation } from "./visuals-foundation";
import { renderAction } from "./visuals-action";

export function renderVisual(scene: Scene, o: VisualOptions) {
  let body = renderFoundation(scene.visual, o) || renderAction(scene.visual, o);
  if (o.settled)
    body = body
      .replace(/<circle\b[^>]*class="request-dot"[^>]*>[\s\S]*?<\/circle>/g, "")
      .replace(/<animate(?:Motion|Transform)?\b[^>]*\/>/g, "");
  return `<svg class="bank-visual${o.settled ? " settled" : ""}" viewBox="0 0 1100 360" role="img" aria-label="${esc(scene.title + " " + scene.emphasis)}"><title>${esc(scene.title + " " + scene.emphasis)}</title>${body}</svg>`;
}
