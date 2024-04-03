const fadeUpObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("translate-y-0", "opacity-100");
      entry.target.classList.remove("translate-y-10", "opacity-0");
    }
  });
});

const fadeUpElements = document.querySelectorAll(".fade-up");
fadeUpElements.forEach((element) => {
  fadeUpObserver.observe(element);
});

const fadeRightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("translate-x-0", "opacity-100");
      entry.target.classList.remove("-translate-x-10", "opacity-0");
    }
  });
});

const fadeRightElements = document.querySelectorAll(".fade-right");
fadeRightElements.forEach((element) => {
  fadeRightObserver.observe(element);
});

const fadeLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("translate-x-0", "opacity-100");
      entry.target.classList.remove("translate-x-10", "opacity-0");
    }
  });
});

const fadeLeftElements = document.querySelectorAll(".fade-left");
fadeLeftElements.forEach((element) => {
  fadeLeftObserver.observe(element);
});

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100");
      entry.target.classList.remove("opacity-0");
    }
  });
});

const fadeInElements = document.querySelectorAll(".fade-in");
fadeInElements.forEach((element) => {
  fadeInObserver.observe(element);
});

const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("w-[calc(50%+5rem)]");
      entry.target.classList.remove("w-[calc(50%+65rem)]");
    }
  });
});

const slideElements = document.querySelectorAll(".slide");
slideElements.forEach((element) => {
  slideObserver.observe(element);
});
