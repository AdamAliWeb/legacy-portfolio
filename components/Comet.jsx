import { useEffect } from "react";
import {
    cometMeteorAnimation,
    cometParticleAnimation,
    cometTrialAnimation,
} from "../helpers/constantAnimations";
import { cometScalingAnimation } from "../helpers/onceAnimations";
import "./Comet.scss";

import { motion } from "framer-motion";

export default function Comet({ wasAnimated, activateProperty }) {
    useEffect(() => {
        activateProperty("cometScaling");
    }, []);

    return (
        <motion.svg
            className={"comet"}
            {...(!wasAnimated.cometScaling ? cometScalingAnimation : {})}
            width={650}
            height={650}
            viewBox="0 0 684 685"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Comet">
                <motion.g
                    id="third-trails"
                    {...cometTrialAnimation(0.5, 0.1, 1, 0.7, 2)}
                >
                    <path
                        id="Vector"
                        d="M35.1026 425.09L78.9145 349.205L386.063 150.558L109.953 468.305L35.1026 425.09Z"
                        fill="#62BBC7"
                        stroke="black"
                        strokeWidth={3}
                    />
                    <path
                        id="Vector_2"
                        d="M35.1041 425.09L78.4792 349.962L475.362 486.108L110.711 468.741L35.1041 425.09Z"
                        fill="#62BBC7"
                        stroke="black"
                        strokeWidth={3}
                    />
                </motion.g>
                <motion.g
                    id="second-trails"
                    {...cometTrialAnimation(0.75, 0.25, 1, 0.8, 1.5)}
                >
                    <path
                        id="Vector_3"
                        d="M35.1036 425.09L78.8169 349.376L486.739 207.732L110.203 468.448L35.1036 425.09Z"
                        fill="#6DD1DE"
                        stroke="black"
                        strokeWidth={3}
                    />
                    <path
                        id="Vector_4"
                        d="M78.6232 349.713L534.153 385.89L110.54 468.643L35.1042 425.09L78.6232 349.713Z"
                        fill="#6DD1DE"
                        stroke="black"
                        strokeWidth={3}
                    />
                </motion.g>
                <motion.path
                    id="main-big-trail"
                    {...cometTrialAnimation(1, 0.5, 1, 0.9, 1)}
                    d="M35.1041 425.09L78.7406 349.509L669.823 253.8L110.406 468.566L35.1041 425.09Z"
                    fill="#7DF0FF"
                    stroke="black"
                    strokeWidth={3}
                />
                <motion.path
                    id="main-small-trail"
                    {...cometTrialAnimation(1, 1, 1, 0.9, 0.5)}
                    d="M34.4232 425.274L78.3891 349.122L353.625 339.13L110.297 469.079L34.4232 425.274Z"
                    fill="#C2F8FF"
                    stroke="black"
                    strokeWidth={2}
                />
                <motion.g id="meteor" {...cometMeteorAnimation}>
                    <path
                        id="Vector_5"
                        d="M140.61 442.349C123.333 472.274 85.159 482.572 55.3483 465.361C25.5376 448.149 15.3687 409.94 32.6458 380.016C49.9228 350.091 88.0972 339.793 117.908 357.004C147.719 374.215 157.887 412.424 140.61 442.349Z"
                        fill="#7DF0FF"
                        stroke="black"
                        strokeWidth={2}
                    />
                    <path
                        id="Vector_6"
                        d="M134.549 438.849C119.213 465.411 85.3262 474.554 58.8621 459.275C32.398 443.996 23.3725 410.078 38.7083 383.516C54.0442 356.953 87.9308 347.81 114.395 363.089C140.859 378.369 149.884 412.287 134.549 438.849Z"
                        fill="#5995C1"
                        stroke="black"
                    />
                    <g id="Vector_7">
                        <path
                            d="M97.7274 388.621C103.706 392.072 111.361 390.007 114.825 384.007C118.289 378.007 116.251 370.344 110.272 366.893C104.293 363.441 96.6386 365.507 93.1744 371.507C89.7103 377.507 91.7488 385.169 97.7274 388.621Z"
                            fill="#4B7EA3"
                        />
                        <path
                            d="M97.7274 388.621C103.706 392.072 111.361 390.007 114.825 384.007C118.289 378.007 116.251 370.344 110.272 366.893C104.293 363.441 96.6386 365.507 93.1744 371.507C89.7103 377.507 91.7488 385.169 97.7274 388.621Z"
                            stroke="black"
                        />
                    </g>
                    <path
                        id="Vector_8"
                        d="M112.33 379.667C109.833 383.992 104.32 385.476 100.018 382.992C95.7161 380.509 94.2447 374.992 96.7415 370.667C99.2383 366.343 104.752 364.858 109.054 367.342C113.355 369.826 114.827 375.343 112.33 379.667Z"
                        fill="#5995C1"
                        stroke="black"
                        strokeWidth={2}
                    />
                    <g id="Vector_9">
                        <path
                            d="M122.753 425.279C126.739 427.58 131.842 426.203 134.151 422.203C136.461 418.203 135.102 413.095 131.116 410.794C127.13 408.492 122.027 409.87 119.718 413.87C117.408 417.87 118.767 422.978 122.753 425.279Z"
                            fill="#4B7EA3"
                        />
                        <path
                            d="M122.753 425.279C126.739 427.58 131.842 426.203 134.151 422.203C136.461 418.203 135.102 413.095 131.116 410.794C127.13 408.492 122.027 409.87 119.718 413.87C117.408 417.87 118.767 422.978 122.753 425.279Z"
                            stroke="black"
                        />
                    </g>
                    <path
                        id="Vector_10"
                        d="M131.955 419.005C130.382 421.729 126.91 422.662 124.203 421.099C121.495 419.536 120.567 416.062 122.14 413.338C123.713 410.613 127.186 409.68 129.893 411.243C132.601 412.806 133.528 416.28 131.955 419.005Z"
                        fill="#5995C1"
                        stroke="black"
                        strokeWidth={2}
                    />
                    <g id="Vector_11">
                        <path
                            d="M77.1115 462.664C83.0901 466.116 90.745 464.05 94.2091 458.05C97.6733 452.05 95.6348 444.388 89.6561 440.936C83.6775 437.484 76.0226 439.55 72.5585 445.55C69.0944 451.55 71.1328 459.212 77.1115 462.664Z"
                            fill="#4B7EA3"
                        />
                        <path
                            d="M77.1115 462.664C83.0901 466.116 90.745 464.05 94.2091 458.05C97.6733 452.05 95.6348 444.388 89.6561 440.936C83.6775 437.484 76.0226 439.55 72.5585 445.55C69.0944 451.55 71.1328 459.212 77.1115 462.664Z"
                            stroke="black"
                        />
                    </g>
                    <path
                        id="Vector_12"
                        d="M92.4354 454.127C89.9386 458.452 84.425 459.936 80.1233 457.453C75.8216 454.969 74.3501 449.452 76.8469 445.127C79.3438 440.803 84.8573 439.319 89.159 441.802C93.4608 444.286 94.9322 449.803 92.4354 454.127Z"
                        fill="#5995C1"
                        stroke="black"
                        strokeWidth={2}
                    />
                    <g id="Vector_13">
                        <path
                            d="M53.3557 387.144C57.3415 389.446 62.4448 388.068 64.7542 384.068C67.0636 380.068 65.7046 374.96 61.7188 372.659C57.7331 370.358 52.6298 371.735 50.3204 375.735C48.011 379.735 49.37 384.843 53.3557 387.144Z"
                            fill="#4B7EA3"
                        />
                        <path
                            d="M53.3557 387.144C57.3415 389.446 62.4448 388.068 64.7542 384.068C67.0636 380.068 65.7046 374.96 61.7188 372.659C57.7331 370.358 52.6298 371.735 50.3204 375.735C48.011 379.735 49.37 384.843 53.3557 387.144Z"
                            stroke="black"
                        />
                    </g>
                    <path
                        id="Vector_14"
                        d="M62.5631 380.87C60.99 383.595 57.5177 384.528 54.8103 382.965C52.1029 381.402 51.175 377.928 52.7481 375.204C54.3211 372.479 57.7934 371.546 60.5008 373.109C63.2082 374.672 64.1361 378.146 62.5631 380.87Z"
                        fill="#5995C1"
                        stroke="black"
                        strokeWidth={2}
                    />
                    <g id="Vector_15">
                        <path
                            d="M56.3793 435.242C66.3438 440.995 79.1019 437.552 84.8754 427.552C90.6489 417.552 87.2515 404.782 77.2871 399.029C67.3227 393.276 54.5645 396.719 48.791 406.719C43.0175 416.719 46.4149 429.489 56.3793 435.242Z"
                            fill="#4B7EA3"
                        />
                        <path
                            d="M56.3793 435.242C66.3438 440.995 79.1019 437.552 84.8754 427.552C90.6489 417.552 87.2515 404.782 77.2871 399.029C67.3227 393.276 54.5645 396.719 48.791 406.719C43.0175 416.719 46.4149 429.489 56.3793 435.242Z"
                            stroke="black"
                        />
                    </g>
                    <path
                        id="Vector_16"
                        d="M81.0515 420.515C76.7071 428.039 67.111 430.625 59.6206 426.301C52.1303 421.976 49.5716 412.373 53.916 404.848C58.2604 397.323 67.8565 394.738 75.3469 399.062C82.8372 403.387 85.3959 412.99 81.0515 420.515Z"
                        fill="#5995C1"
                        stroke="black"
                        strokeWidth={2}
                    />
                </motion.g>
                <g id="particles">
                    <motion.path
                        id="small-particle-10"
                        {...cometParticleAnimation(100, 40, 0.2)}
                        d="M268.867 289.136L266.119 278.807L276.438 276.022L279.186 286.351L268.867 289.136Z"
                        fill="#C2F8FF"
                        stroke="black"
                    />
                    <motion.path
                        id="small-particle-9"
                        {...cometParticleAnimation(100, 40, 0.4)}
                        d="M287.804 236.805L277.486 239.589L274.744 229.264L285.057 226.476L287.804 236.805Z"
                        fill="#C2F8FF"
                        stroke="black"
                    />
                    <motion.path
                        id="small-particle-8"
                        {...cometParticleAnimation(100, 40, 0.6)}
                        d="M338.862 412.085L336.118 401.749L346.437 398.964L349.181 409.3L338.862 412.085Z"
                        fill="#C2F8FF"
                        stroke="black"
                    />
                    <motion.path
                        id="small-particle-7"
                        {...cometParticleAnimation(100, 40, 0.8)}
                        d="M273.983 460.439L271.235 450.11L281.554 447.325L284.302 457.654L273.983 460.439Z"
                        fill="#C2F8FF"
                        stroke="black"
                    />
                    <motion.path
                        id="small-particle-6"
                        {...cometParticleAnimation(100, 40, 1)}
                        d="M355.263 459.339L365.589 456.558L368.334 466.894L358.008 469.675L355.263 459.339Z"
                        fill="#C2F8FF"
                        stroke="black"
                    />
                    <motion.path
                        id="small-particle-5"
                        {...cometParticleAnimation(100, 40, 1.2)}
                        d="M476.914 360.65L474.17 350.314L484.489 347.529L487.233 357.865L476.914 360.65Z"
                        fill="#C2F8FF"
                        stroke="black"
                    />
                    <motion.path
                        id="small-particle-4"
                        {...cometParticleAnimation(100, 40, 1.4)}
                        d="M507.677 427.505L504.929 417.176L515.248 414.392L517.996 424.72L507.677 427.505Z"
                        fill="#C2F8FF"
                        stroke="black"
                    />
                    <motion.path
                        id="small-particle-3"
                        {...cometParticleAnimation(100, 40, 1.6)}
                        d="M507.478 244.026L504.73 233.697L515.049 230.913L517.797 241.242L507.478 244.026Z"
                        fill="#C2F8FF"
                        stroke="black"
                    />
                    <motion.path
                        id="small-particle-2"
                        {...cometParticleAnimation(100, 40, 1.8)}
                        d="M558.463 202.156L555.715 191.827L566.034 189.043L568.782 199.372L558.463 202.156Z"
                        fill="#C2F8FF"
                        stroke="black"
                    />
                    <motion.path
                        id="small-particle-1"
                        {...cometParticleAnimation(100, 40, 2)}
                        d="M468.428 186.404L458.109 189.189L455.361 178.86L465.68 176.075L468.428 186.404Z"
                        fill="#C2F8FF"
                        stroke="black"
                    />
                    <motion.path
                        id="hidden-small-particle"
                        style={{ visibility: "hidden" }}
                        // {...cometParticleAnimation(100, 40, 2)}
                        d="M468.428 186.404L458.109 189.189L455.361 178.86L465.68 176.075L468.428 186.404Z"
                        fill="#C2F8FF"
                        stroke="black"
                    />
                </g>
            </g>
        </motion.svg>
    );
}
