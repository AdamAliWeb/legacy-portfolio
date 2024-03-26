const headerSwingingAnimation = {
    initial: {
        y: "-100%",
    },
    animate: {
        y: 0,
    },
    transition: {
        duration: 0.5,
        delay: 2.5,
    },
};

const footerSwingingAnimation = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
    },
    transition: {
        duration: 0.5,
        delay: 2.5,
    },
};

const ufoSpawningAnimation = {
    initial: {
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,
        opacity: 0,
    },
    animate: {
        opacity: [1, 1, 1, 1, 1],
        scale: [1, 1.1, 1.2, 1.1, 1],
        rotate: [-10, -25, 40, 20, 0],
        x: [100, -20, 10, -15, 0],
        y: [-20, 10, 0, -10, 0],
    },
    transition: {
        duration: 3,
        ease: "linear",
        delay: 3,
    },
};

const cometScalingAnimation = {
    initial: {
        scale: 0,
        x: 200,
        y: -100,
    },
    animate: {
        scale: 1,
        x: 0,
        y: 0,
    },
    transition: {
        duration: 1.5,
        delay: 1,
    },
};

const mainPlanetScalingAnimation = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
    },
    transition: {
        duration: 1.5,
        delay: 1,
    },
};

const socialPlanetScalingAnimation = (delay) => ({
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
    },
    transition: {
        duration: 0.5,
        delay: delay,
        ease: "linear",
        times: [0, 1],
    },
});

const typewritterAnimation = (index, delay) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: index / 5 + delay },
});

const screensSwingingAnimation = (isOnLeftSide, delay) => ({
    initial: {
        transform: isOnLeftSide ? "translateX(-50%)" : "translateX(50%)",
        opacity: 0,
    },
    animate: { transform: "translateX(0)", opacity: 1 },
    transition: { duration: 1, delay },
});

const blackHoleInitialExpandingAnimation = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: [0, 0.25, 0.2, 0.5, 0.45, 0.75, 0.7, 1],
    },
    transition: {
        duration: 2.5,
    },
};

const textFadeInBlackHoleAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: [0, 0, 1],
    },
    transition: {
        duration: 4.5,
        times: [0, 0.8, 1],
    },
};

const rocketGoingUpAnimation = {
    initial: {
        y: "300%",
    },
    animate: {
        y: 0,
    },
    transition: {
        duration: 3,
    },
};

// Function Animations (for animations with custom values)
export {
    typewritterAnimation,
    screensSwingingAnimation,
    socialPlanetScalingAnimation,
};

// Object Animations (for constant animations)
export {
    headerSwingingAnimation,
    footerSwingingAnimation,
    ufoSpawningAnimation,
    mainPlanetScalingAnimation,
    cometScalingAnimation,
    blackHoleInitialExpandingAnimation,
    textFadeInBlackHoleAnimation,
    rocketGoingUpAnimation,
};
