"use strict";

import { gsap } from "gsap";

const ball = document.querySelector(".ball");
const timeline = gsap.timeline({ repeat: 2, repeatDelay: 1 });

timeline.to(ball, { translateX: 400, rotate: 200, duration: 2 });
timeline.to(ball, { scale: 0, translateY: "5vw", duration: 1 });
