import { Link } from "react-router-dom"
import { useState } from "react";
import styled from "styled-components";

const TextLink = ({ text, className, href }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <LinkContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <LinkItem
                to={`${href}`}
                className={`${isHovered ? "active" : ""}`}
            >
                {text}
                <Highlight className={`${isHovered ? "active" : ""} left`} />
                <Highlight className={`${isHovered ? "active" : ""} right`} />   
            </LinkItem>         
        </LinkContainer>
        
    )
};

const LinkContainer = styled.span`
    display: inline-flex;
    width: fit-content;
    position: relative;
`

const Highlight = styled.span`
    position: absolute;
    bottom: 6%;
    opacity: 0.6;
    width: 0%;
    height: 1px;
    transition: all ease 400ms;

    &.left {
        left: -3%;
        z-index: -1;
    }

    &.right {
        right: -3%;
        height: 93%;
        transition-delay: 150ms;
        border-radius: 3px 3px 0 0;
        z-index: -2;
    }

    &.active {
        width: 106%;

        &.left {
            background-color: var(--light-secondary);
        }

        &.right {
            background-color: var(--dark-shadow);
        }
    }

    @media (hover: none) {
        width: 106%;

        &.left {
            transition-delay: 400ms;
            background-color: var(--light-secondary);
        }

        &.right {
            transition-delay: 650ms;
            background-color: var(--dark-shadow);
        }
    }
`

const LinkItem = styled(Link)`
    font-size: inherit;
    font-weight: 400;
    transition: all ease 400ms;
    z-index: 2;

    &.active {
        color: var(--light-primary);
    }
`

export default TextLink;