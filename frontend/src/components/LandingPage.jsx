import styled from "styled-components";
import TextLink from "./Navigation/TextLink";
const LandingPage = () => {


    return (
        <Wrapper>
            <TextContainer>
                <IntroText>
                    Hello, my name is Steve Kittredge.
                </IntroText>
                <TextBody>
                    <p>I'm a full-stack web developer</p>
                    <p>available remotely from Calgary, Alberta.</p>
                    <p>Check out my <TextLink
                                        title={'recent projects'}
                                        href={'/portfolio'}
                                        linkClass={'inBody'}
                                    />
                        .
                    </p>
                    <p>Contact me <TextLink title={'here'} href={'/contact'} linkClass={'inBody'} />.</p>
                </TextBody>
            </TextContainer>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 100vw;
    height: 100vh;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`

const IntroText = styled.h1`
    
`

const TextBody = styled.div`

`

export default LandingPage;