const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function execute() {
  // Happy birthday, sweetie!
  gsap.to("#intro", { opacity: 1, duration: 1 });

  await sleep(4000);

  // Fade out
  gsap.to("#intro", { opacity: 0, duration: 1 });

  await sleep(1500);

  // Fade page 2 in
  document.getElementById("page-1").classList.add("d-none");
  document.getElementById("page-2").classList.remove("d-none");

  gsap.to("#page-2", { opacity: 1, duration: 1.5, ease: "power1.in" });

  await sleep(5000);

  // Fade first slide out
  gsap.to("#page-2-slide-1", { opacity: 0, duration: 1.5 });

  await sleep(2000);

  // Fade second slide in
  gsap.to("#page-2-slide-2", { opacity: 1, duration: 1.5, ease: "power1.in" });
  gsap.to(".earth", { opacity: 1, scale: 1, duration: 20 });

  await sleep(6000);

  // Fade second slide out
  gsap.to("#page-2-slide-2", { opacity: 0, duration: 1.5 });

  await sleep(2000);

  // Fade third slide in
  gsap.to("#page-2-slide-3", { opacity: 1, duration: 1.5, ease: "power1.in" });

  await sleep(6000);

  // Fade third slide out
  gsap.to("#page-2-slide-3", { opacity: 0, duration: 1.5 });

  await sleep(2000);

  // Fade fourth slide in
  gsap.to("#page-2-slide-4", { opacity: 1, duration: 1.5, ease: "power1.in" });

  await sleep(6000);

  gsap.to("#page-2", { opacity: 0, duration: 2 });

  await sleep(2500);

  // Fade page 3 in
  document.getElementById("page-2").classList.add("d-none");
  document.getElementById("page-3").classList.remove("d-none");

  gsap.to("#page-3", { opacity: 1, duration: 1.5, ease: "power1.in" });

  await sleep(5000);

  gsap.to("#text", { opacity: 0, duration: 1 });

  await sleep(2000);

  document.getElementById("text").innerText = "I love you";
  gsap.to("#text", { opacity: 1, duration: 1 });

  await sleep(5000);

  gsap.to("#text", { opacity: 0, duration: 1 });

  await sleep(2000);

  document.getElementById("text").innerText = "Happy birthday :)";
  gsap.to("#text", { opacity: 1, duration: 1 });
}

execute();
