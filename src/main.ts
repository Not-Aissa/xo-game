import dom from "./ts/helpers/classes/Dom";
import { Button, Span } from "./ts/types/elements";

const counterButton = dom.select<Button>("#counter_btn");
const counterElm = dom.select<Span>("#count");

let count = 0;

window.addEventListener("load", () => {
  updateCount();
});

counterButton.addEventListener("click", increaseCount);

function increaseCount(): number {
  count += 1;

  updateCount();

  return count;
}

function updateCount(): void {
  counterElm.textContent = `${count}`;
}
