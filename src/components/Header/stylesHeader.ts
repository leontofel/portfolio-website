import styled from "styled-components";
import { primaryColor } from "../../styles/variables";

const HeaderContainer = styled.header`
    background-color: ${primaryColor};
    padding: 1rem;
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    img {
        width: 15vw;
        height: 10vh;
        border-radius: 50%;
        object-fit: fill;
    }
    h1 {
        font-family: 'Silkscreen', cursive;
        font-size: 2rem;
    }
    button {
        border: none;
        background: ${primaryColor};
    }
`;

export { HeaderContainer }