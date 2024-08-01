import '@styles/other/svg.scss';

const getSvg = () => {
    const pizza = (fill = "var(--iconcolor)", height = 28, width = 26, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={fill} d="M10.631 4.00441C9.74042 3.94191 8.99432 4.55128 8.77557 5.35988L8.31464 7.09425H8.37714C15.2795 7.09425 20.8771 12.6919 20.8771 19.5943V19.6568L22.6115 19.1958C23.424 18.981 24.0295 18.231 23.967 17.3403C23.4748 10.1997 17.7717 4.4966 10.631 4.00441ZM19.6193 19.9927C19.6232 19.8599 19.6271 19.7271 19.6271 19.5943C19.6271 13.3794 14.592 8.34425 8.37714 8.34425C8.24432 8.34425 8.11151 8.34816 7.9787 8.35207L4.02167 23.1841C3.96307 23.3989 4.02557 23.6294 4.18182 23.7857C4.33807 23.9419 4.56854 24.0044 4.78339 23.9458L19.6193 19.9927ZM10.8771 12.0943C11.2087 12.0943 11.5266 12.2259 11.761 12.4604C11.9954 12.6948 12.1271 13.0127 12.1271 13.3443C12.1271 13.6758 11.9954 13.9937 11.761 14.2281C11.5266 14.4626 11.2087 14.5943 10.8771 14.5943C10.5456 14.5943 10.2277 14.4626 9.99325 14.2281C9.75883 13.9937 9.62714 13.6758 9.62714 13.3443C9.62714 13.0127 9.75883 12.6948 9.99325 12.4604C10.2277 12.2259 10.5456 12.0943 10.8771 12.0943ZM13.3771 17.0943C13.3771 16.7627 13.5088 16.4448 13.7433 16.2104C13.9777 15.976 14.2956 15.8443 14.6271 15.8443C14.9587 15.8443 15.2766 15.976 15.511 16.2104C15.7454 16.4448 15.8771 16.7627 15.8771 17.0943C15.8771 17.4258 15.7454 17.7437 15.511 17.9781C15.2766 18.2126 14.9587 18.3443 14.6271 18.3443C14.2956 18.3443 13.9777 18.2126 13.7433 17.9781C13.5088 17.7437 13.3771 17.4258 13.3771 17.0943ZM7.75214 18.9693C7.75214 18.6377 7.88383 18.3198 8.11825 18.0854C8.35267 17.851 8.67062 17.7193 9.00214 17.7193C9.33366 17.7193 9.6516 17.851 9.88602 18.0854C10.1204 18.3198 10.2521 18.6377 10.2521 18.9693C10.2521 19.3008 10.1204 19.6187 9.88602 19.8531C9.6516 20.0876 9.33366 20.2193 9.00214 20.2193C8.67062 20.2193 8.35267 20.0876 8.11825 19.8531C7.88383 19.6187 7.75214 19.3008 7.75214 18.9693Z" />
            </svg>)
    }
    const person = (fill = "var(--iconcolor)", height = 28, width = 28, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={fill} d="M14.0001 13.9998C12.7167 13.9998 11.6181 13.5429 10.7042 12.629C9.79036 11.7151 9.33341 10.6165 9.33341 9.33317C9.33341 8.04984 9.79036 6.95123 10.7042 6.03734C11.6181 5.12345 12.7167 4.6665 14.0001 4.6665C15.2834 4.6665 16.382 5.12345 17.2959 6.03734C18.2098 6.95123 18.6667 8.04984 18.6667 9.33317C18.6667 10.6165 18.2098 11.7151 17.2959 12.629C16.382 13.5429 15.2834 13.9998 14.0001 13.9998ZM4.66675 23.3332V20.0665C4.66675 19.4054 4.83708 18.7976 5.17775 18.243C5.51841 17.6884 5.9703 17.2657 6.53341 16.9748C7.73897 16.3721 8.96397 15.9198 10.2084 15.618C11.4529 15.3162 12.7167 15.1657 14.0001 15.1665C15.2834 15.1665 16.5473 15.3174 17.7917 15.6192C19.0362 15.9209 20.2612 16.3728 21.4667 16.9748C22.0306 17.2665 22.4829 17.6896 22.8236 18.2442C23.1642 18.7987 23.3342 19.4062 23.3334 20.0665V23.3332H4.66675Z" />
            </svg>)
    }
    const ticket = (fill = "var(--iconcolor)", height = 28, width = 28, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_456_13085)">
                    <path fill={fill} d="M8.93012 26.298L27.1675 15.8865C27.4362 15.7331 27.633 15.4792 27.7145 15.1808C27.796 14.8823 27.7557 14.5636 27.6022 14.2949L25.2886 10.2422L24.3838 10.7587C23.3747 11.3348 22.0446 11.1793 21.3139 10.2759C21.0985 10.0132 20.943 9.70676 20.8582 9.37783C20.7735 9.0489 20.7615 8.70544 20.8232 8.37141C20.8849 8.03739 21.0187 7.72085 21.2154 7.44389C21.412 7.16692 21.6667 6.93621 21.9617 6.76784L22.9749 6.18943L20.6613 2.13668C20.5079 1.86797 20.254 1.6712 19.9555 1.58966C19.657 1.50813 19.3384 1.5485 19.0697 1.70191L0.832309 12.1134C0.563594 12.2668 0.366825 12.5207 0.28529 12.8191C0.203754 13.1176 0.244132 13.4363 0.397537 13.705L2.7112 17.7577L3.72438 17.1793C4.01935 17.0109 4.34752 16.9088 4.68599 16.8803C5.02446 16.8518 5.36508 16.8975 5.68408 17.0142C6.00307 17.1309 6.29276 17.3158 6.53292 17.556C6.77308 17.7962 6.95794 18.0859 7.07458 18.4049C7.48105 19.4934 6.93877 20.7178 5.92963 21.2939L5.02486 21.8105L7.33852 25.8632C7.49192 26.1319 7.74579 26.3287 8.04427 26.4102C8.34276 26.4918 8.6614 26.4514 8.93012 26.298ZM12.121 8.3556L14.1474 7.19877L15.3042 9.22514L13.2778 10.382L12.121 8.3556ZM14.4347 12.4083L16.461 11.2515L17.6179 13.2779L15.5915 14.4347L14.4347 12.4083ZM16.7483 16.4611L18.7747 15.3043L19.9315 17.3306L17.9052 18.4875L16.7483 16.4611Z" />
                </g>
                <defs>
                    <clipPath id="clip0_456_13085">
                        <rect fill={fill} width="28" height="28" />
                    </clipPath>
                </defs>
            </svg>)
    }
    const pin = (fill = "var(--iconcolor)", height = 28, width = 28, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={fill} d="M19.9639 5.66869C16.4493 2.11044 10.7509 2.11044 7.23627 5.66869C6.4018 6.50775 5.73873 7.51004 5.28602 8.61663C4.83331 9.72322 4.6001 10.9118 4.6001 12.1125C4.6001 13.3131 4.83331 14.5017 5.28602 15.6083C5.73873 16.7149 6.4018 17.7172 7.23627 18.5562L13.5995 25L19.9639 18.5562C20.7984 17.7172 21.4615 16.7149 21.9142 15.6083C22.3669 14.5017 22.6001 13.3131 22.6001 12.1125C22.6001 10.9118 22.3669 9.72322 21.9142 8.61663C21.4615 7.51004 20.7984 6.50775 19.9639 5.66869ZM13.5995 15.1578C12.848 15.1578 12.1426 14.8567 11.6105 14.3102C11.0837 13.7668 10.7878 13.0306 10.7878 12.263C10.7878 11.4954 11.0837 10.7592 11.6105 10.2158C12.1415 9.66927 12.848 9.36822 13.5995 9.36822C14.3511 9.36822 15.0576 9.66927 15.5886 10.2158C16.1154 10.7592 16.4113 11.4954 16.4113 12.263C16.4113 13.0306 16.1154 13.7668 15.5886 14.3102C15.0576 14.8567 14.3511 15.1578 13.5995 15.1578Z" />
            </svg>)
    }
    const arrow_down = (fill = "var(--iconcolor)", height = 28, width = 28, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={fill} d="M13.9999 15.3677L19.7749 9.59266L21.4246 11.2423L13.9999 18.667L6.57523 11.2423L8.22606 9.59266L14.0011 15.3677L13.9999 15.3677Z" />
            </svg>)
    }
    const search = (fill = "var(--iconcolor)", height = 24, width = 24, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={fill} d="M15.1258 16.567C13.4914 17.8373 11.4344 18.4366 9.37388 18.2429C7.31332 18.0491 5.40403 17.0768 4.0348 15.5241C2.66556 13.9713 1.93933 11.9548 2.00397 9.88507C2.06861 7.81538 2.91927 5.84815 4.38273 4.38394C5.84619 2.91974 7.81242 2.06865 9.88106 2.00397C11.9497 1.9393 13.9652 2.6659 15.5172 4.03583C17.0692 5.40577 18.0409 7.31602 18.2346 9.37763C18.4283 11.4392 17.8293 13.4972 16.5596 15.1325L22 20.5553L20.556 22L15.136 16.567H15.1258ZM10.143 16.2415C10.9443 16.2415 11.7377 16.0836 12.4779 15.7768C13.2182 15.47 13.8908 15.0204 14.4573 14.4535C15.0239 13.8867 15.4733 13.2137 15.7799 12.4731C16.0866 11.7324 16.2444 10.9386 16.2444 10.137C16.2444 9.33535 16.0866 8.54155 15.7799 7.80092C15.4733 7.06029 15.0239 6.38734 14.4573 5.82049C13.8908 5.25364 13.2182 4.80399 12.4779 4.49721C11.7377 4.19043 10.9443 4.03254 10.143 4.03254C8.52485 4.03254 6.97294 4.67568 5.82872 5.82049C4.68449 6.9653 4.04167 8.51799 4.04167 10.137C4.04167 11.756 4.68449 13.3087 5.82872 14.4535C6.97294 15.5983 8.52485 16.2415 10.143 16.2415Z" />
            </svg>)
    }
    const cart = (fill = "var(--iconcolor)", height = 28, width = 29, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={fill} d="M20.186 20.2C19.1763 20.2 18.3594 21.055 18.3594 22.1C18.3594 23.145 19.1763 24 20.186 24C21.1957 24 22.0217 23.145 22.0217 22.1C22.0217 21.055 21.1957 20.2 20.186 20.2ZM11.0072 20.2C9.99758 20.2 9.18068 21.055 9.18068 22.1C9.18068 23.145 9.99758 24 11.0072 24C12.0169 24 12.843 23.145 12.843 22.1C12.843 21.055 12.0169 20.2 11.0072 20.2ZM11.0072 17.35L12.0169 15.45H18.8551C19.5435 15.45 20.1493 15.0605 20.4614 14.4715L24.5 6.9H9.36425L8.50145 5H5.5V6.9H7.33575L10.6401 14.1105L7.90483 19.25H22.0217V17.35H11.0072Z" />
            </svg>)
    }
    const arrow_line = (fill = "var(--iconcolor)", height = 16, width = 188, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 188 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_346_9690)">
                    <path d="M130.457 15.103L129.516 15.9961L121.209 8.00618L129.516 0.00436202L130.457 0.897423L123.066 8.00618L130.457 15.103Z" fill={fill} />
                    <path d="M119.43 15.103L118.489 15.9961L110.182 8.00618L118.489 0.00435916L119.43 0.89742L112.039 8.00618L119.43 15.103Z" fill={fill} />
                    <path d="M108.403 15.103L107.475 15.9961L99.1677 8.00618L107.475 0.00436107L108.403 0.897421L101.025 8.00618L108.403 15.103Z" fill={fill} />
                    <path d="M97.3887 15.103L96.4478 15.9961L88.1409 8.00618L96.4478 0.00436107L97.3887 0.897421L89.9979 8.00618L97.3887 15.103Z" fill={fill} />
                    <path d="M86.3618 15.103L85.4333 15.9961L77.1265 8.00618L85.4333 0.00435916L86.3618 0.89742L78.9834 8.00618L86.3618 15.103Z" fill={fill} />
                    <path d="M75.3473 15.103L74.4064 15.9961L66.0996 8.00618L74.4064 0.00436393L75.3473 0.897424L67.9566 8.00618L75.3473 15.103Z" fill={fill} />
                    <path d="M64.3203 15.103L63.3918 15.9961L55.085 8.00618L63.3918 0.00436584L64.3203 0.897426L56.942 8.00618L64.3203 15.103Z" fill={fill} />
                    <path d="M53.3059 15.103L52.365 15.9961L44.0582 8.00618L52.365 0.00436202L53.3059 0.897423L45.9152 8.00618L53.3059 15.103Z" fill={fill} />
                    <path d="M42.2789 15.103L41.3504 15.9961L33.0436 8.00618L41.3504 0.00436203L42.2789 0.897423L34.8882 8.00618L42.2789 15.103Z" fill={fill} />
                    <path d="M31.2645 15.103L30.336 15.9961L22.0292 8.00618L30.336 0.00436203L31.2645 0.897423L23.8861 8.00618L31.2645 15.103Z" fill={fill} />
                    <path d="M20.2499 15.103L19.3214 15.9961L11.0146 8.00618L19.3214 0.00436203L20.2499 0.897423L12.8715 8.00618L20.2499 15.103Z" fill={fill} />
                    <path d="M9.23535 15.103L8.30686 15.9961L-1.45603e-05 8.00618L8.30687 0.00436107L9.23535 0.897421L1.85696 8.00618L9.23535 15.103Z" fill={fill} />
                    <path d="M185.529 15.103L184.601 15.9961L176.294 8.00618L184.601 0.00436203L185.529 0.897423L178.151 8.00618L185.529 15.103Z" fill={fill} />
                    <path d="M174.515 15.103L173.586 15.9961L165.28 8.00618L173.586 0.00435916L174.515 0.89742L167.137 8.00618L174.515 15.103Z" fill={fill} />
                    <path d="M163.5 15.103L162.572 15.9961L154.265 8.00618L162.572 0.00436107L163.5 0.897421L156.122 8.00618L163.5 15.103Z" fill={fill} />
                    <path d="M152.486 15.103L151.557 15.9961L143.25 8.00618L151.557 0.00436203L152.486 0.897423L145.107 8.00618L152.486 15.103Z" fill={fill} />
                    <path d="M141.471 15.103L140.531 15.9961L132.236 8.00618L140.531 0.00436107L141.471 0.897421L134.081 8.00618L141.471 15.103Z" fill={fill} />
                </g>
                <defs>
                    <clipPath id="clip0_346_9690">
                        <rect width={width} height={height} fill="white" transform="translate(188 16) rotate(-180)" />
                    </clipPath>
                </defs>
            </svg>
        )
    }
    const productcard_border = (stroke = "var(--iconcolor)", height = 193, width = 324, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 324 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke={stroke} d="M323.134 45.3103V0H30.6588L0 29.7349V192H82.2433" />
            </svg>
        )
    }
    const circle = (stroke = "var(--iconcolor)", height = 10, width = 10, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.76709" y="0.5" width="8.73294" height="9" rx="4.36647" stroke={stroke} />
            </svg>
        )
    }
    const premium = (height = 24, width = 24, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_634_46622)">
                    <path d="M0.5 5.25V0.5H18.1779L23.5 5.46728V18.75V23.5H12H0.5V5.25Z" fill="#1B1B1B" stroke="#ED1C2F" />
                    <g clipPath="url(#clip1_634_46622)">
                        <path d="M18.1515 9.69688C18.5998 9.4426 18.9512 9.04707 19.1511 8.57201C19.3509 8.09695 19.3878 7.56911 19.2561 7.07086C19.1243 6.57261 18.8313 6.13199 18.4228 5.81779C18.0143 5.50358 17.5132 5.33346 16.9979 5.33399C16.4825 5.33451 15.9818 5.50564 15.5739 5.82068C15.1661 6.13571 14.874 6.57692 14.7432 7.07544C14.6125 7.57395 14.6505 8.10172 14.8513 8.57638C15.0521 9.05103 15.4043 9.44585 15.8531 9.69921L15.8415 9.72021C15.0773 11.315 14.0156 13.5994 12.3765 14.4569C11.0301 15.1604 9.09814 14.8069 7.66314 14.5432C7.64012 14.2169 7.52611 13.9036 7.33403 13.6388C7.14196 13.374 6.87951 13.1684 6.57648 13.0452C6.27345 12.922 5.94195 12.8862 5.61961 12.9419C5.29727 12.9976 4.99699 13.1425 4.75283 13.3602C4.50868 13.5779 4.33043 13.8597 4.23831 14.1735C4.14619 14.4874 4.14388 14.8208 4.23166 15.1359C4.31943 15.4511 4.49377 15.7353 4.73489 15.9563C4.97602 16.1774 5.27427 16.3264 5.59581 16.3865L9.03514 25.2649C9.2902 25.9231 9.73833 26.4888 10.3207 26.8877C10.903 27.2866 11.5924 27.5001 12.2983 27.5002H21.7016C22.4075 27.5001 23.0969 27.2866 23.6793 26.8877C24.2616 26.4888 24.7097 25.9231 24.9648 25.2649L28.403 16.3865C28.7225 16.3271 29.0191 16.1798 29.2597 15.9612C29.5002 15.7427 29.6751 15.4615 29.7648 15.1491C29.8545 14.8367 29.8554 14.5055 29.7675 14.1926C29.6796 13.8798 29.5063 13.5975 29.267 13.3776C29.0277 13.1577 28.7319 13.0087 28.4127 12.9475C28.0935 12.8862 27.7636 12.915 27.4599 13.0307C27.1562 13.1464 26.8907 13.3443 26.6931 13.6024C26.4956 13.8605 26.3738 14.1685 26.3415 14.4919C24.8726 14.682 22.9791 14.9247 21.6235 14.2165C20.017 13.3765 18.9401 11.2497 18.1515 9.69688Z" fill="#2F2F2F" />
                        <path d="M7.63319 6H9.15575L7.62882 9.59924H5L6.98253 6.33113C7.04303 6.23162 7.13594 6.14794 7.25085 6.08946C7.36576 6.03098 7.49814 6 7.63319 6ZM5.0524 10.799L9.43959 16.4222L7.58952 10.799H5.0524ZM9.09753 10.799L11.3246 17.5716C11.3641 17.6944 11.4517 17.803 11.5739 17.8805C11.696 17.958 11.8458 18 12 18C12.1542 18 12.304 17.958 12.4261 17.8805C12.5483 17.803 12.6359 17.6944 12.6754 17.5716L14.9083 10.799H9.09753ZM16.4163 10.799L14.5619 16.4198L18.9476 10.799H16.4148H16.4163ZM19 9.59924H16.3755L14.8472 6H16.3668C16.5021 5.99978 16.6348 6.03065 16.75 6.08914C16.8652 6.14763 16.9583 6.23143 17.0189 6.33113L19 9.59924ZM14.8341 9.59924H9.17176L10.6972 6H13.3028L14.8341 9.59924Z" fill="#ED1C2F" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_634_46622">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_634_46622">
                        <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                    </clipPath>
                </defs>
            </svg>)
    }
    const baked = (height = 24, width = 24, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_614_39538)">
                    <path d="M0.5 5.25V0.5H18.1779L23.5 5.46728V18.75V23.5H12H0.5V5.25Z" fill="#1B1B1B" stroke="#1D99D6" />
                    <path d="M7.5 5.25C6.90326 5.25 6.33097 5.48705 5.90901 5.90901C5.48705 6.33097 5.25 6.90326 5.25 7.5V9.5625H18.75V7.5C18.75 6.90326 18.5129 6.33097 18.091 5.90901C17.669 5.48705 17.0967 5.25 16.5 5.25H7.5ZM9.75 7.59375C9.75 7.79266 9.67098 7.98343 9.53033 8.12408C9.38968 8.26473 9.19891 8.34375 9 8.34375C8.80109 8.34375 8.61032 8.26473 8.46967 8.12408C8.32902 7.98343 8.25 7.79266 8.25 7.59375C8.25 7.39484 8.32902 7.20407 8.46967 7.06342C8.61032 6.92277 8.80109 6.84375 9 6.84375C9.19891 6.84375 9.38968 6.92277 9.53033 7.06342C9.67098 7.20407 9.75 7.39484 9.75 7.59375ZM12.75 7.59375C12.75 7.79266 12.671 7.98343 12.5303 8.12408C12.3897 8.26473 12.1989 8.34375 12 8.34375C11.8011 8.34375 11.6103 8.26473 11.4697 8.12408C11.329 7.98343 11.25 7.79266 11.25 7.59375C11.25 7.39484 11.329 7.20407 11.4697 7.06342C11.6103 6.92277 11.8011 6.84375 12 6.84375C12.1989 6.84375 12.3897 6.92277 12.5303 7.06342C12.671 7.20407 12.75 7.39484 12.75 7.59375ZM15 6.84375C15.1989 6.84375 15.3897 6.92277 15.5303 7.06342C15.671 7.20407 15.75 7.39484 15.75 7.59375C15.75 7.79266 15.671 7.98343 15.5303 8.12408C15.3897 8.26473 15.1989 8.34375 15 8.34375C14.8011 8.34375 14.6103 8.26473 14.4697 8.12408C14.329 7.98343 14.25 7.79266 14.25 7.59375C14.25 7.39484 14.329 7.20407 14.4697 7.06342C14.6103 6.92277 14.8011 6.84375 15 6.84375ZM5.25 10.5V16.5C5.25 17.0967 5.48705 17.669 5.90901 18.091C6.33097 18.5129 6.90326 18.75 7.5 18.75H16.5C17.0967 18.75 17.669 18.5129 18.091 18.091C18.5129 17.669 18.75 17.0967 18.75 16.5V10.5H5.25ZM7.78125 11.8125H16.2188C16.5814 11.8125 16.875 12.1065 16.875 12.4688V16.2188C16.875 16.3928 16.8059 16.5597 16.6828 16.6828C16.5597 16.8059 16.3928 16.875 16.2188 16.875H7.78125C7.6072 16.875 7.44028 16.8059 7.31721 16.6828C7.19414 16.5597 7.125 16.3928 7.125 16.2188V12.4688C7.125 12.1065 7.419 11.8125 7.78125 11.8125Z" fill="#1D99D6" />
                </g>
                <defs>
                    <clipPath id="clip0_614_39538">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>)
    }
    const fried = (height = 24, width = 24, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_614_39717)">
                    <path d="M0.5 5.25V0.5H18.1779L23.5 5.46728V18.75V23.5H12H0.5V5.25Z" fill="#1B1B1B" stroke="#F47921" />
                    <g clipPath="url(#clip1_614_39717)">
                        <path d="M12.2283 8.0563C12.2022 8.08673 12.1414 8.19977 12.0935 8.30846C11.9544 8.60845 11.9718 9.02148 12.137 9.47798C12.2109 9.68232 12.337 10.0345 12.4196 10.2606C12.6109 10.7823 12.6152 11.1562 12.4283 11.5127L12.3109 11.7388H12.737H13.1631L13.2804 11.5214C13.5109 11.0953 13.4804 10.7388 13.1326 9.85188C12.8587 9.1606 12.8022 8.87366 12.8718 8.55193C12.8978 8.41715 12.9674 8.2389 13.0239 8.15629L13.1283 7.99978H12.7022C12.4022 7.99978 12.2587 8.01717 12.2283 8.0563Z" fill="#F47921" />
                        <path d="M14.2671 8.11717C14.2149 8.17803 14.141 8.3389 14.1019 8.47367C14.0106 8.7954 14.0627 9.12148 14.3279 9.79536C14.7323 10.8258 14.741 11.0475 14.4019 11.704C14.3932 11.7257 14.5714 11.7388 14.7975 11.7388C15.2018 11.7388 15.2149 11.7344 15.2975 11.617C15.5931 11.1866 15.5757 10.7953 15.2236 9.89536C15.1105 9.60407 14.9888 9.2606 14.9584 9.13452C14.8844 8.82583 14.9236 8.47802 15.0627 8.2302C15.1236 8.12151 15.1757 8.02586 15.1757 8.01717C15.1757 8.00847 14.9931 7.99978 14.7671 7.99978C14.3758 7.99978 14.354 8.00413 14.2671 8.11717Z" fill="#F47921" />
                        <path d="M16.2801 8.22151C16.0627 8.65628 16.0888 8.99974 16.4018 9.79971C16.6583 10.4432 16.7105 10.6432 16.7105 10.9388C16.7149 11.2127 16.654 11.4127 16.5149 11.617L16.4323 11.7388H16.867H17.3018L17.4235 11.5301C17.5235 11.3649 17.5496 11.2605 17.5583 10.9953C17.5757 10.7084 17.5583 10.6127 17.4366 10.278C17.3627 10.0649 17.2322 9.70406 17.1496 9.47798C16.954 8.92583 16.9453 8.59106 17.1279 8.24325L17.2583 7.99978H16.8279H16.3931L16.2801 8.22151Z" fill="#F47921" />
                        <path d="M3.82258 10.0447C2.97331 10.3801 2.72674 11.433 3.34315 12.0852C3.53492 12.2855 3.74496 12.402 5.24716 13.1334C6.17862 13.5853 6.11036 13.5433 6.21081 13.5806C6.55782 13.7064 7.02355 13.6365 7.3386 13.4082L7.47102 13.3104L8.32942 13.6831C8.79972 13.8927 9.19696 14.0884 9.21065 14.121C9.22892 14.1536 9.26545 14.298 9.29741 14.4378C9.3248 14.5775 9.43895 14.885 9.54854 15.1179C9.88642 15.8307 10.5257 16.4456 11.2608 16.7484C11.8452 16.9907 11.9959 17 15.0642 17C16.8176 17 18.0184 16.9814 18.1965 16.9488C19.2375 16.781 20.1462 16.1056 20.5982 15.1738C20.8722 14.6055 20.9406 14.3399 20.9726 13.6784L21 13.1334H15.2651H9.53484L8.69926 12.77L7.86369 12.402L7.81347 12.169C7.74498 11.8709 7.55777 11.5401 7.37513 11.4097C7.30208 11.3538 6.63544 11.0137 5.90489 10.655C4.57678 10.0028 4.64445 10.0214 4.28831 10.0028C4.1011 9.99348 3.90933 10.0075 3.82258 10.0447Z" fill="#F47921" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_614_39717">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_614_39717">
                        <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                    </clipPath>
                </defs>
            </svg>
        )
    }
    const promocard_border = (stroke = "var(--iconcolor)", height = 254, width = 158, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 158 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M157 157V1H17.3949L1 16.4703V253H149" stroke={stroke} />
            </svg>
        )
    }
    const arrow = (fill = "var(--iconcolor)", height = 24, width = 24, customclass = "") => {
        return (
            <svg className={`custom-svg ${customclass}`} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={fill} fillRule="evenodd" clipRule="evenodd" d="M8.65685 19.0709L2.29289 12.7069C1.90237 12.3164 1.90237 11.6832 2.29289 11.2927L8.65686 4.92874C9.04738 4.53821 9.68055 4.53821 10.0711 4.92874C10.4616 5.31926 10.4616 5.95243 10.0711 6.34295L5.41421 10.9998L22 10.9998L22 12.9998L5.41421 12.9998L10.0711 17.6567C10.4616 18.0472 10.4616 18.6803 10.0711 19.0709C9.68054 19.4614 9.04738 19.4614 8.65685 19.0709Z" />
            </svg>)
    }

    return {
        pizza,
        person,
        ticket,
        pin,
        arrow_down,
        search,
        cart,
        arrow_line,
        productcard_border,
        circle,
        premium,
        baked,
        fried,
        promocard_border,
        arrow
    }
}
export default getSvg
