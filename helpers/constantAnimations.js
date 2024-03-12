const ufoBounceAnimation = {
    initial: {
        rotate: -20,
    },
    animate: {
        x: [0, 2, 0, -2, 0],
        y: [0, -1, 0, 1, 0],
        rotate: [-20, -15, -20, -25, -20],
    },
    transition: {
        duration: 4,
        ease: "linear",
        repeat: Infinity,
    },
};

const mainPlanetRotationAnimation = {
    animate: {
        rotate: [0, -360],
    },
    transition: {
        duration: 100,
        ease: "linear",
        times: [0, 1],
        repeat: Infinity,
    },
};

const blackHoleRotationAnimation = {
    animate: {
        rotate: [0, -360],
    },
    transition: {
        duration: 25,
        ease: "linear",
        times: [0, 1],
        repeat: Infinity,
    },
};

const blackHoleSectionExpandingAnimation = (scaleSize, delay = 0) => ({
    animate: {
        scale: [1, scaleSize, 1],
    },
    transition: {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
        delay,
    },
});

const socialPlanetRotationAnimation = {
    animate: {
        rotate: [0, 360],
    },
    transition: {
        duration: 100,
        ease: "linear",
        times: [0, 1],
        repeat: Infinity,
    },
};

const rocketBounceAnimation = (bounceDuration) => ({
    animate: {
        x: [0, 5, 0, 5, 0],
    },
    transition: {
        ease: "linear",
        duration: bounceDuration,
        repeat: Infinity,
    },
});

const rocketFireAnimation = (scale, opacity, duration) => ({
    animate: {
        scaleY: [1, scale, 1],
        opacity: [1, opacity, 1],
    },
    transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
    },
});

const cometTrialAnimation = (opacity1, opacity2, scale1, scale2, duration) => ({
    initial: {
        opacity: opacity1,
        scale: 1,
    },
    animate: { opacity: [opacity1, opacity2], scale: [scale1, scale2] },
    transition: {
        duration,
        ease: "easeIn",
        repeat: Infinity,
    },
});

const cometMeteorAnimation = {
    initial: {
        x: 0,
        y: 0,
    },
    animate: {
        rotate: 360,
        x: [2, 2, 2, 0, -2, -2, -2, 0, 2, 2],
        y: [0, 0, 2, 2, 2, 0, -2, -2, -2, 0],
    },
    transition: {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
    },
};

const cometParticleAnimation = (x, y, delay) => ({
    initial: {
        x: -x,
        y: y,
    },
    animate: {
        x: [-x, 0, x],
        y: [y, 0, -y],
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
    },
    transition: {
        duration: 1.5,
        delay,
        ease: "linear",
        repeat: Infinity,
    },
});

export {
    ufoBounceAnimation,
    mainPlanetRotationAnimation,
    blackHoleRotationAnimation,
    blackHoleSectionExpandingAnimation,
    rocketBounceAnimation,
    rocketFireAnimation,
    socialPlanetRotationAnimation,
    cometTrialAnimation,
    cometMeteorAnimation,
    cometParticleAnimation,
};
