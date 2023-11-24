import { Link } from "react-router-dom"
import { useState } from "react";
import styled from "styled-components";

const TextLink = ({ title, href, linkClass }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <LinkContainer
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}           
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <LinkItem
                to={`${href}`}
                className={`${isHovered ? "active" : ""} ${linkClass}`}
            >
                {title}
                <Highlight className={`${isHovered ? "active" : ""} ${linkClass} left`} />
                <Highlight className={`${isHovered ? "active" : ""} ${linkClass} right`} />   
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

    &.inBody {
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
            transition-delay: 125ms;
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
    }

    &.menu {
        position: absolute;
        bottom: 0.2rem;
        width: 0%;
        height: 100%;
        border-radius: 5px;
        transition: all ease 400ms;

        &.left {
            opacity: 0.1;
            left: 0;
            z-index: -2;
        }

        &.right {
            opacity: 0.1;
            right: 0;
            transition-delay: 125ms;
            z-index: -1;
        }

        &.active {
            width: 100%;

            &.left {
                background-color: var(--accent);
            }

            &.right {
                background-color: var(--accent);
            }
        }
    }
`

const LinkItem = styled(Link)`
    font-size: inherit;
    font-weight: 400;
    left: 0;
    text-align: center;
    width: fit-content;
    transition: all ease 400ms;
    overflow: none;
    z-index: 2;

    &.active {
        color: var(--light-primary);
    }

    &.menu {
        text-align: left;
        color: var(--dark-shadow);
        padding: 3vh 4rem;
        width: 18vw;

        &.active {
            transition-delay: 100ms;
            color: var(--light-accent);
        }
    }
`

export default TextLink;