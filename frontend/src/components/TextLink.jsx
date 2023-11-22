import { Link } from "react-router-dom"
import { useState } from "react";
import styled from "styled-components";

const TextLink = ({ text, location}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <LinkContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <LinkItem
                to={`/${location}`}
                className={`${isHovered ? "active" : ""}`}
            >
                {text}
            </LinkItem>
            <Highlight className={`${isHovered ? "active" : ""} left`} />
            <Highlight className={`${isHovered ? "active" : ""} right`} />

            
        </LinkContainer>
        
    )
};

const LinkContainer = styled.div`
    display: inline-flex;
    width: fit-content;
    position: relative;
`

const Highlight = styled.div`
    position: absolute;
    opacity: 0.5;
    width: 0%;
    height: 1.5rem;
    transition: all ease 400ms;

    &.left {
        justify-self: flex-start;
        align-self: flex-start;
        left: -0.25rem;
    }

    &.left.active {
        width: 102%;
        background-color: var(--tertiary-accent-color);
    }

    &.right {
        justify-self: flex-end;
        align-self: flex-end;
        right: -0.25rem;
        transition: all ease 650ms;
    }

    &.right.active {
        width: 102%;
        background-color: var(--hover-shadow);
    }
`

const LinkItem = styled(Link)`
    font-weight: 400;
    z-index: 10;
    transition: all ease 400ms;

    &.active {
        color: var(--primary-color);
    }
`

export default TextLink;