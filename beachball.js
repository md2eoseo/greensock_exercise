"use strict";

import { gsap } from "gsap";

const ball = document.querySelector(".ball");
gsap.to(ball, { translateX: 400, duration: 2 });
gsap.to(ball, { rotate: 200, duration: 2 });
gsap.to(ball, { delay: 2, scale: 0, translateY: "5vw", duration: 1 });
