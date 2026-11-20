import { renderToString } from "react-dom/server";
import Portfolio from "./Portfolio";

export function render(): string {
  return renderToString(<Portfolio />);
}
