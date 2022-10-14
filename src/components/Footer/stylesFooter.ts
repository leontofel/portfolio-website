import styled from "styled-components";
import { primaryColor, tertiaryColor } from "../../styles/variables";

const FooterContainer = styled.footer`
    background-color: ${tertiaryColor};
    padding: 1rem;
    width: 100vw;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img {
        width: 25%;
        height: 45%;
        border-radius: 50%;
        
    }
    h5 {
        font-family: 'Noto Serif Telugu', serif;
        font-size: 1rem;
    }
    ul {
        display: flex;
        li {
            a {
                text-decoration: none;
                color: whitesmoke;
                margin: .2rem;
            }
        }
    }
`;

export { FooterContainer }