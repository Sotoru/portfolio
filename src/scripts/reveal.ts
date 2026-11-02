import { animate } from "motion/mini";
import { inView, spring, stagger } from "motion";

// Ingresso dal basso, una volta sola per elemento. Gli elementi che entrano nello stesso frame partono in sequenza.
const root = document.documentElement;
if (root.classList.contains("reveal")) {
  root.dataset.motion = "on";
  let coda: Element[] = [];
  const entra = () => {
    animate(
      coda,
      { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0)"] },
      { type: spring, visualDuration: 0.5, bounce: 0, delay: stagger(0.06) },
    );
    coda = [];
  };
  inView(
    "[data-reveal]",
    (el) => {
      if (!coda.length) requestAnimationFrame(entra);
      coda.push(el);
    },
    { margin: "0px 0px -8% 0px" },
  );
}
