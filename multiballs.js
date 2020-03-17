"use strict";

import { gsap } from "gsap";

const ball = document.querySelectorAll(".ball");
let height = 80;
let bounce_duration = 2;
let scale_duration = 0.1;

gsap.from(ball, { y: `-${height}vh`, duration: bounce_duration });
gsap.to(ball, {
  delay: bounce_duration,
  scaleX: 1.5,
  scaleY: 0.5,
  duration: scale_duration
});
gsap.to(ball, {
  delay: bounce_duration + scale_duration,
  scaleX: 1,
  scaleY: 1,
  duration: scale_duration
});
gsap.to(ball, {
  delay: bounce_duration + scale_duration + scale_duration,
  translateY: `-${height}vh`,
  duration: bounce_duration
});
