import styled from "styled-components";
import { useState } from "react";
const Hamburger = () => {
    const [isHovered, setIsHovered] = useState(false);

    const clickHandler = () => {

    }

    return (
        <HamburgerWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={clickHandler()}
        >
            <HamburgerLayer />
            <HamburgerLayer className={`${isHovered ? "active" : ""}`} />
            <HamburgerLayer />
        </HamburgerWrapper>
    )
};

const HamburgerWrapper = styled.button`
    position: absolute;
    right: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
`

const HamburgerLayer = styled.div`
    width: 50px;
    height: 1px;
    background-color: var(--primary-accent-color);
    margin: 5px;
    transition: all 200ms;

    &.active {
        margin: 10px 5px;
    }
`

export default Hamburger;