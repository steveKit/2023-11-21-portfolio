import styled from "styled-components";
import TextLink from "./TextLink";
const Menu = () => {
    const menuItems = [
        ["About", "about"],
        ["Portfolio", "portfolio"],
        ["Contact", "contact"]
    ];

    return (
        <MenuContainer>
            <BlurMask />
            <MenuWrapper>
                <TextLink text={'About'} href={'/about'} />
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
    font-size: 3rem;
    position: absolute;
    right: 0;
    height: 100%;
    width: 50%;
    background-color: var(--light-secondary);
    border-radius: 30% / 100% 0 0 100%;
    /* box-shadow: ; */
`

export default Menu;