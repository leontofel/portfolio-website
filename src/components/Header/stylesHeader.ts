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
    .typing-header {
  width: 10.5ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
`;

export { HeaderContainer }