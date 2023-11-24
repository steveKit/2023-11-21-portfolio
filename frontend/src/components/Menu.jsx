import styled from "styled-components";
import TextLink from "./TextLink";
const Menu = () => {
    const navItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Portfolio",
            href: "/portfolio",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ];

    return (
        <MenuContainer>
            <BlurMask />
            <MenuWrapper>
                <TextWrapper>
                    <NavTitle>Navigation</NavTitle>
                    {
                        navItems.map(({ title, href }, index) => (
                            <TextLink
                                key={index}
                                title={`${title}`}
                                href={`${href}`}
                                linkClass={'menu'}
                            />
                        ))                    
                    }
                    <Footer>steve@stevekittredge.com</Footer>
                </TextWrapper>
            </MenuWrapper>
        </MenuContainer>           
    )
};

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`

const BlurMask = styled.div`

`

const MenuWrapper = styled.div`
    font-size: 2.6rem;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 0;
    height: 100vh;
    width: 33vw;
    min-width: 330px;
    background-color: var(--light-secondary);
    /* box-shadow: ; */
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 27vh;
`

const NavTitle = styled.h2`
    position: absolute;
    top: 17vh;
    text-align: left;
    width: 100%;
    margin: 0 0 0 5%;
`

const Footer = styled.h2`
    position: absolute;
    bottom: 6vh;
    text-align: left;
    border-bottom: none;
    margin: 0 0 0 5%;
`

export default Menu;