import { motion } from "framer-motion";
import { socialPlanetScalingAnimation } from "../../helpers/onceAnimations";
import { socialPlanetRotationAnimation } from "../../helpers/constantAnimations";

export default function InstagramPlanetSVG({
    socialPlanetsScaling,
    scaleDelay,
}) {
    return (
        <svg
            width={242}
            height={242}
            viewBox="0 0 242 242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.g
                id="Instagram"
                {...(!socialPlanetsScaling
                    ? socialPlanetScalingAnimation(scaleDelay)
                    : {})}
            >
                <motion.g
                    id="social-planet-instagram"
                    {...socialPlanetRotationAnimation}
                >
                    <path
                        id="Vector"
                        d="M109.476 0.598648C15.7297 9.49131 -34.7228 121.166 27.3739 197.44C56.0613 232.824 103.975 250.322 151.212 238.143C176.515 231.622 198.381 217.139 213.986 198.304C282.04 116.423 217.929 -9.75072 109.476 0.598648Z"
                        fill="url(#paint0_radial_531_427)"
                    />
                    <g id="Group">
                        <path
                            id="Vector_2"
                            d="M211.752 143.363C211.87 142.794 211.987 142.208 212.087 141.639L211.752 143.363ZM211.752 143.363C211.384 145.188 210.949 146.997 210.463 148.772L211.752 143.363ZM211.102 141.465L211.104 141.457C211.965 136.786 212.479 131.982 212.595 127.097C212.612 126.309 212.628 125.533 212.628 124.759C212.628 123.783 212.611 122.823 212.578 121.812L212.578 121.81C212.379 115.448 211.534 109.254 210.094 103.275C209.232 99.713 208.172 96.2349 206.913 92.8574C204.76 87.0769 202.043 81.5774 198.829 76.4085C195.135 70.4794 190.778 65.013 185.874 60.0925C169.307 43.5109 146.415 33.2427 121.12 33.2427C116.282 33.2427 111.511 33.6237 106.873 34.3525C95.9399 36.0751 85.6535 39.7189 76.3606 44.9362C70.7543 48.0947 65.5103 51.8315 60.7115 56.0479L60.7086 56.0508L60.6985 56.0605L60.6983 56.0606C60.6964 56.0625 60.6887 56.0697 60.6788 56.0786L60.6787 56.0787C60.6773 56.0799 60.6748 56.0822 60.6711 56.0854M211.102 141.465L34.9453 93.9331C35.7405 91.7134 36.6182 89.5279 37.5781 87.393M211.102 141.465C211.005 142.02 210.89 142.595 210.773 143.162L210.772 143.165M211.102 141.465L210.772 143.165M60.6711 56.0854C60.6643 56.0914 60.6539 56.1004 60.6414 56.1105C60.6339 56.1167 60.6089 56.1369 60.5749 56.1601C60.547 56.1785 60.4949 56.2094 60.4709 56.2222C60.2477 56.3058 60.0111 56.3342 60.0111 55.3342L60.672 56.0847C60.6717 56.0849 60.6714 56.0852 60.6711 56.0854ZM60.6711 56.0854C53.7295 62.1983 47.7332 69.3208 42.9133 77.2537L42.9115 77.2566C40.9258 80.4997 39.1533 83.8949 37.5781 87.393M37.5781 87.393C37.5782 87.3929 37.5783 87.3927 37.5783 87.3926L36.6665 86.9825L37.5781 87.393ZM210.772 143.165C210.409 144.967 209.979 146.753 209.498 148.508L209.497 148.513M210.772 143.165L209.497 148.513M209.497 148.513C207.857 154.641 205.588 160.52 202.772 166.069L202.771 166.071M209.497 148.513L202.771 166.071M202.771 166.071C201.878 167.84 200.918 169.578 199.908 171.285C199.809 171.449 199.711 171.613 199.615 171.775C199.36 172.203 199.11 172.623 198.848 173.039L198.847 173.041M202.771 166.071L198.847 173.041M198.847 173.041C197.818 174.684 196.742 176.306 195.619 177.858L195.615 177.864M198.847 173.041L195.615 177.864M195.615 177.864C193.363 181.026 190.912 184.024 188.277 186.874C184.168 191.314 179.629 195.339 174.726 198.883L174.725 198.884M195.615 177.864L174.725 198.884M174.725 198.884C170.881 201.667 166.806 204.168 162.533 206.337L162.533 206.338M174.725 198.884L162.533 206.338M162.533 206.338C150.093 212.665 136.014 216.226 121.103 216.226C118.867 216.226 116.631 216.143 114.429 215.978L114.426 215.977M162.533 206.338L114.426 215.977M114.426 215.977C103.178 215.166 92.4943 212.317 82.7377 207.812C74.6866 204.085 67.2653 199.232 60.6891 193.435L60.6886 193.434M114.426 215.977L60.6886 193.434M60.6886 193.434C55.5698 188.929 50.9642 183.86 46.9548 178.327M60.6886 193.434L46.9548 178.327M46.9548 178.327C37.9928 165.953 32.0629 151.262 30.2242 135.312C29.8268 131.851 29.6279 128.322 29.6279 124.743C29.6279 122.008 29.744 119.291 29.9758 116.624C30.6716 108.724 32.3776 101.122 34.945 93.934L46.9548 178.327Z"
                            fill="url(#paint1_radial_531_427)"
                            stroke="black"
                            strokeWidth={2}
                        />
                        <g id="Group_2">
                            <path
                                id="Vector_3"
                                d="M103.879 70.0373C78.51 63.7152 57.7832 69.199 44.7501 74.9913C52.7267 62.9727 63.4795 52.955 76.1113 45.8356C88.1753 45.1119 97.9251 49.0624 105.403 52.4281C113.901 56.2543 124.321 59.4011 132.926 60.4978C137.219 61.0449 141.139 61.0926 144.166 60.411C147.177 59.7329 149.578 58.2546 150.258 55.5441L150.258 55.5436C150.955 52.7617 150.877 50.3937 149.86 48.3999C148.848 46.4141 146.994 44.9747 144.509 43.858C139.597 41.6503 131.699 40.4868 121.164 39.1377L121.163 39.1376C114.122 38.2411 110.45 36.5704 108.598 34.9272C112.665 34.3737 116.818 34.0967 121.037 34.0967C146.061 34.0967 168.739 44.1364 185.253 60.396C182.16 69.1978 173.24 74.3999 159.358 76.0322C145.199 77.6969 126.184 75.5923 103.879 70.0373ZM103.879 70.0373L103.637 71.0076M103.879 70.0373L103.637 71.0076M103.637 71.0076C77.5988 64.5187 56.5127 70.6005 43.7381 76.5504L186.399 60.1233C180.236 79.5476 148.35 82.1431 103.637 71.0076Z"
                                fill="url(#paint2_linear_531_427)"
                                stroke="black"
                                strokeWidth={2}
                            />
                            <path
                                id="Vector_4"
                                d="M199.259 78.1279C202.071 82.76 204.483 87.6666 206.447 92.8002C188.57 107.649 168.388 112.865 147.417 113.73C129.946 114.45 111.999 112.15 94.3989 109.895C90.6163 109.411 86.8499 108.928 83.1076 108.478C54.4013 105.023 38.2661 110.507 30.2071 115.112C30.9759 108.156 32.5262 101.423 34.7753 95.0296C58.485 90.1037 73.8941 92.3235 115.223 98.277C117.056 98.541 118.94 98.8124 120.877 99.0908C164.214 105.323 189.559 87.232 199.259 78.1279Z"
                                fill="url(#paint3_linear_531_427)"
                                stroke="black"
                                strokeWidth={2}
                            />
                            <path
                                id="Vector_5"
                                d="M105.971 167.861L105.971 167.861C119.373 165.721 132.247 167.594 141.751 170.931C146.506 172.601 150.379 174.623 153.041 176.658C154.372 177.676 155.374 178.677 156.035 179.613C156.699 180.554 156.979 181.371 156.979 182.044C156.979 182.373 156.911 182.608 156.81 182.789C156.707 182.971 156.539 183.153 156.259 183.33C155.666 183.705 154.676 183.994 153.159 184.185C150.782 184.484 147.491 184.506 143.243 184.536C142.087 184.544 140.86 184.552 139.561 184.567C127.5 184.704 109.749 185.385 87.0868 191.376C77.992 193.776 68.8854 194.335 60.4547 193.362C44.1302 178.951 33.0289 158.817 30.3063 136.106C44.1001 118.871 68.0972 119.679 91.911 127.749L91.9115 127.749C106.368 132.641 118.423 135.379 131.255 135.789C144.082 136.199 157.628 134.282 175.068 129.933L175.069 129.932C195.002 124.954 206.38 126.291 212.34 128.23C212.183 133.078 211.636 137.833 210.744 142.461C203.721 140.767 194.274 141.557 177.142 148.617L177.523 149.542L177.141 148.617C164.751 153.724 156.077 155.305 146.419 154.64C138.042 154.063 128.915 151.801 115.942 148.586C113.834 148.063 111.624 147.516 109.3 146.946C92.6501 142.866 80.7943 142.699 73.1773 144.511C69.3704 145.416 66.5545 146.832 64.7457 148.569C62.9182 150.325 62.1085 152.43 62.4395 154.568C63.0648 158.608 67.2794 163.01 74.4704 165.838C81.7337 168.695 92.2448 170.051 105.971 167.861Z"
                                fill="url(#paint4_linear_531_427)"
                                stroke="black"
                                strokeWidth={2}
                            />
                            <path
                                id="Vector_6"
                                d="M190.539 165.847C194.89 165.954 198.96 166.693 201.978 167.418C198.494 174.048 194.204 180.195 189.243 185.744C188.334 183.785 186.617 182.159 184.747 180.777C182.966 179.462 180.895 178.266 178.998 177.17C178.323 176.78 177.67 176.403 177.06 176.037C175.874 175.326 174.847 174.661 174.062 174.014C173.259 173.353 172.817 172.796 172.651 172.334C172.516 171.962 172.528 171.567 172.921 171.026C173.356 170.427 174.239 169.695 175.82 168.842C180.299 166.427 185.564 165.723 190.539 165.847Z"
                                fill="url(#paint5_linear_531_427)"
                                stroke="black"
                                strokeWidth={2}
                            />
                            <path
                                id="Vector_7"
                                d="M112.621 200.315C136.911 192.852 160.039 196.72 172.849 200.174C169.601 202.412 166.198 204.442 162.668 206.243C152.463 204.732 138.608 205.04 123.319 211.995C119.967 213.508 116.902 214.83 114.109 215.977C104.016 215.222 94.3808 212.835 85.4688 209.081C88.1794 208.393 90.9659 207.484 94.3116 206.348C95.0928 206.083 95.9052 205.805 96.7554 205.514C100.899 204.097 105.938 202.373 112.621 200.315Z"
                                fill="url(#paint6_linear_531_427)"
                                stroke="black"
                                strokeWidth={2}
                            />
                            <path
                                id="Vector_8"
                                d="M82.023 150.534L82.0242 150.534C86.1298 150.02 91.0997 151.175 94.9263 152.952C96.8355 153.839 98.3917 154.849 99.387 155.82C100.44 156.847 100.607 157.559 100.499 157.94C100.455 158.091 100.291 158.353 99.8105 158.676C99.3433 158.991 98.6762 159.297 97.8293 159.572C96.1398 160.122 93.8996 160.502 91.5386 160.668C89.1822 160.834 86.7569 160.783 84.7074 160.499C82.6005 160.206 81.0894 159.692 80.3732 159.081C78.634 157.586 77.6379 155.513 77.7521 153.862C77.807 153.068 78.1142 152.363 78.7359 151.801C79.3713 151.226 80.4081 150.735 82.023 150.534Z"
                                fill="url(#paint7_linear_531_427)"
                                stroke="black"
                                strokeWidth={2}
                            />
                            <path
                                id="Vector_9"
                                d="M137.07 52.4953L137.068 52.4975C137.069 52.4966 137.07 52.4958 137.07 52.4953C137.071 52.4945 137.071 52.4942 137.071 52.4941C137.071 52.4937 137.019 52.5457 136.844 52.6139C136.654 52.6884 136.38 52.7581 136.012 52.8103C135.275 52.9146 134.285 52.9323 133.108 52.8621C130.762 52.7221 127.817 52.2421 124.975 51.5414C122.125 50.8387 119.445 49.9306 117.604 48.9609C116.675 48.4711 116.036 48.0053 115.685 47.6009C115.344 47.2092 115.398 47.043 115.422 46.9815C115.73 46.1694 116.24 45.6883 116.942 45.3837C117.689 45.0597 118.681 44.9263 119.921 44.9263C121.115 44.9263 122.441 45.0475 123.879 45.1789C123.927 45.1833 123.975 45.1877 124.023 45.1921C125.496 45.3267 127.07 45.4663 128.621 45.4663C134.817 45.4663 137.133 46.9614 137.862 48.2704C138.585 49.5682 138.055 51.2753 137.07 52.4953Z"
                                fill="url(#paint8_linear_531_427)"
                                stroke="black"
                                strokeWidth={2}
                            />
                            <path
                                id="Vector_10"
                                d="M200.742 108.447C203.927 106.767 207.514 105.565 210.098 104.821C211.314 110.118 212.061 115.571 212.303 121.168C207.798 120.807 203.045 120.069 199.417 119.02C197.442 118.449 195.875 117.807 194.864 117.129C193.808 116.421 193.672 115.907 193.729 115.597L193.73 115.596C193.982 114.22 194.791 112.923 196.041 111.706C197.291 110.489 198.933 109.401 200.742 108.447Z"
                                fill="url(#paint9_linear_531_427)"
                                stroke="black"
                                strokeWidth={2}
                            />
                            <g id="Vector_11">
                                <mask
                                    id="path-11-inside-1_531_427"
                                    fill="white"
                                >
                                    <path d="M196.513 183.183L197.199 181.375C196.831 182.362 196.596 182.982 196.513 183.183Z" />
                                </mask>
                                <path
                                    d="M196.513 183.183L197.199 181.375C196.831 182.362 196.596 182.982 196.513 183.183Z"
                                    fill="url(#paint10_linear_531_427)"
                                />
                                <path
                                    d="M196.513 183.183L194.643 182.473L198.359 183.952L196.513 183.183ZM197.199 181.375L199.073 182.073L195.329 180.665L197.199 181.375ZM198.382 183.893L199.069 182.084L195.329 180.665L194.643 182.473L198.382 183.893ZM195.325 180.676C194.949 181.685 194.732 182.257 194.667 182.414L198.359 183.952C198.461 183.707 198.713 183.04 199.073 182.073L195.325 180.676Z"
                                    fill="black"
                                    mask="url(#path-11-inside-1_531_427)"
                                />
                            </g>
                        </g>
                        <path
                            id="Vector_12"
                            opacity={0.45}
                            d="M163.003 207.229C167.323 205.035 171.443 202.507 175.328 199.694C180.285 196.11 184.874 192.041 189.027 187.554M163.003 207.229L189.027 187.554M163.003 207.229C150.426 213.626 136.191 217.226 121.119 217.226M163.003 207.229L121.119 217.226M189.027 187.554L188.293 186.874C188.293 186.874 188.293 186.875 188.293 186.875M189.027 187.554L188.293 186.875M188.293 186.875C190.475 184.514 192.532 182.052 194.453 179.479C174.239 179.531 144.762 170.538 110.017 132.788L110.017 132.787C80.7769 100.998 55.8341 90.2803 37.2985 88.0593C36.4535 89.982 35.6746 91.944 34.9618 93.9335C32.3942 101.122 30.6882 108.724 29.9924 116.625C29.7606 119.291 29.6445 122.008 29.6445 124.743C29.6445 128.323 29.8435 131.851 30.2409 135.312C32.8911 158.383 44.1378 178.856 60.7051 193.434L60.7058 193.434C67.2817 199.231 74.7027 204.085 82.7535 207.811M188.293 186.875L82.7535 207.811M82.7535 207.811L82.3343 208.719L82.7544 207.812C82.7541 207.812 82.7538 207.812 82.7535 207.811ZM121.119 217.226C118.859 217.226 116.598 217.142 114.371 216.975L121.119 217.226Z"
                            fill="url(#paint11_linear_531_427)"
                            stroke="black"
                            strokeWidth={2}
                        />
                        <path
                            id="Vector_13"
                            opacity={0.75}
                            d="M205.733 120.83C203.161 99.4684 193.661 76.9565 169.293 61.0772C124.552 31.9107 86.8012 41.6953 69.5373 49.197C71.7497 47.6804 74.0317 46.2579 76.3771 44.9365C85.6701 39.719 95.9567 36.0752 106.89 34.3525C111.528 33.6237 116.299 33.2427 121.137 33.2427C146.432 33.2427 169.324 43.5109 185.891 60.0924C190.795 65.013 195.152 70.4794 198.846 76.4085C202.06 81.5774 204.777 87.0769 206.93 92.8574C208.189 96.2349 209.249 99.713 210.111 103.275C211.551 109.251 212.396 115.444 212.595 121.803C212.595 121.805 212.595 121.808 212.595 121.81L212.597 121.923C212.613 122.899 212.628 123.822 212.628 124.759C212.628 125.533 212.612 126.309 212.595 127.097C212.48 131.952 211.972 136.726 211.12 141.37L203.796 160.911C205.991 149.761 207.507 135.561 205.733 120.83Z"
                            fill="url(#paint12_linear_531_427)"
                            stroke="black"
                            strokeWidth={2}
                        />
                    </g>
                </motion.g>
                <path
                    id="social-logo-instagram"
                    d="M121.012 93.3102C105.688 93.3102 93.3284 105.673 93.3284 121C93.3284 136.327 105.688 148.69 121.012 148.69C136.336 148.69 148.696 136.327 148.696 121C148.696 105.673 136.336 93.3102 121.012 93.3102ZM121.012 139.002C111.11 139.002 103.014 130.929 103.014 121C103.014 111.071 111.085 102.998 121.012 102.998C130.939 102.998 139.01 111.071 139.01 121C139.01 130.929 130.915 139.002 121.012 139.002ZM156.285 92.1775C156.285 95.7683 153.394 98.6361 149.828 98.6361C146.238 98.6361 143.371 95.7442 143.371 92.1775C143.371 88.6108 146.262 85.719 149.828 85.719C153.394 85.719 156.285 88.6108 156.285 92.1775ZM174.621 98.7325C174.211 90.0809 172.235 82.4174 165.899 76.1034C159.586 69.7895 151.924 67.8133 143.275 67.3796C134.36 66.8735 107.64 66.8735 98.7254 67.3796C90.0998 67.7892 82.438 69.7654 76.1014 76.0793C69.7648 82.3933 67.8132 90.0568 67.3795 98.7084C66.8735 107.625 66.8735 134.351 67.3795 143.268C67.7891 151.919 69.7648 159.583 76.1014 165.897C82.438 172.211 90.0757 174.187 98.7254 174.62C107.64 175.127 134.36 175.127 143.275 174.62C151.924 174.211 159.586 172.235 165.899 165.897C172.211 159.583 174.187 151.919 174.621 143.268C175.126 134.351 175.126 107.649 174.621 98.7325ZM163.104 152.835C161.224 157.558 157.586 161.197 152.84 163.101C145.732 165.921 128.867 165.27 121.012 165.27C113.158 165.27 96.2678 165.897 89.1843 163.101C84.4619 161.221 80.8238 157.582 78.9204 152.835C76.1014 145.726 76.7519 128.856 76.7519 121C76.7519 113.144 76.1255 96.2503 78.9204 89.1651C80.7997 84.4417 84.4378 80.8027 89.1843 78.8989C96.2919 76.0793 113.158 76.73 121.012 76.73C128.867 76.73 145.756 76.1034 152.84 78.8989C157.562 80.7786 161.2 84.4176 163.104 89.1651C165.923 96.2744 165.272 113.144 165.272 121C165.272 128.856 165.923 145.75 163.104 152.835Z"
                    fill="black"
                />
            </motion.g>
            <defs>
                <radialGradient
                    id="paint0_radial_531_427"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(120.999 120.998) scale(111.962 112.053)"
                >
                    <stop stopColor="#FFD1B8" />
                    <stop offset={1} stopColor="#FFD8D3" stopOpacity={0} />
                </radialGradient>
                <radialGradient
                    id="paint1_radial_531_427"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(116.239 63.5642) scale(138.573 138.561)"
                >
                    <stop stopColor="#FFB56F" />
                    <stop offset={1} stopColor="#FB367E" />
                </radialGradient>
                <linearGradient
                    id="paint2_linear_531_427"
                    x1={141.597}
                    y1={253.368}
                    x2={96.7226}
                    y2={-49.3578}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0386F" />
                    <stop offset={1} stopColor="#C93890" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_531_427"
                    x1={140.333}
                    y1={253.556}
                    x2={95.4585}
                    y2={-49.1708}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0386F" />
                    <stop offset={1} stopColor="#C93890" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_531_427"
                    x1={139.373}
                    y1={253.698}
                    x2={94.4982}
                    y2={-49.0283}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0386F" />
                    <stop offset={1} stopColor="#C93890" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_531_427"
                    x1={198.703}
                    y1={244.903}
                    x2={153.828}
                    y2={-57.825}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0386F" />
                    <stop offset={1} stopColor="#C93890" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint6_linear_531_427"
                    x1={136.113}
                    y1={254.181}
                    x2={91.2391}
                    y2={-48.5445}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0386F" />
                    <stop offset={1} stopColor="#C93890" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint7_linear_531_427"
                    x1={104.382}
                    y1={258.885}
                    x2={59.5073}
                    y2={-43.841}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0386F" />
                    <stop offset={1} stopColor="#C93890" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint8_linear_531_427"
                    x1={156.884}
                    y1={251.102}
                    x2={112.009}
                    y2={-51.6245}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0386F" />
                    <stop offset={1} stopColor="#C93890" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint9_linear_531_427"
                    x1={221.498}
                    y1={241.524}
                    x2={176.623}
                    y2={-61.2024}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0386F" />
                    <stop offset={1} stopColor="#C93890" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint10_linear_531_427"
                    x1={205.98}
                    y1={243.828}
                    x2={161.1}
                    y2={-58.9134}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0386F" />
                    <stop offset={1} stopColor="#C93890" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint11_linear_531_427"
                    x1={85.6139}
                    y1={187.112}
                    x2={135.888}
                    y2={98.7555}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#CA1B6A" />
                    <stop offset={1} stopColor="#CA1B6A" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient
                    id="paint12_linear_531_427"
                    x1={194.767}
                    y1={37.6309}
                    x2={142.541}
                    y2={101.293}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFB8B1" />
                    <stop offset={1} stopColor="#FFC4B1" stopOpacity={0.1} />
                </linearGradient>
            </defs>
        </svg>
    );
}
