import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Menu from "./Menu";

const Hamburger = () => {
    const [isActive, setIsActive] = useState(false);

    const burgerLayer = {
        rest: {
            transition: {
                duration: 0.25,
                type: "tween",
                ease: "easeIn",
            },
            margin: "5px"
        },
        hover: {
            transition: {
                duration: 0.075,
                type: "tween",
                ease: "easeOut"
            },
            margin: "7px"
        }
    };

    const clickHandler = () => {
        setIsActive(!isActive);
    };
    
    return (
        <HamburgerWrapper
            onClick={clickHandler}
            as={motion.button}
            initial="rest"
            whileHover="hover"
        >
            {[0, 1, 2].map((index) => (
                <HamburgerLayer
                    as={motion.div}
                    key={index}
                    className="burgerLayer"
                    isActive={isActive}
                    variants={burgerLayer}
                />
            ))}
            {isActive && (
                <Menu />                   
            )}
        </HamburgerWrapper>
    )
};

const HamburgerWrapper = styled(motion.button)`
    position: absolute;
    top: 3%;
    right: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    z-index: 10;
`

const HamburgerLayer = styled(motion.div)`
    width: 50px;
    height: 1px;
    z-index: 15;
    background-color: ${props => (props.isActive ? "var(--dark-secondary)" : "var(--light-secondary)")};
`

export default Hamburger;