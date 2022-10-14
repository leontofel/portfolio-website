
import { Link } from 'react-router-dom';
import img from '../../../../assets/imgs/img4.jpg';
import styled from 'styled-components';

export default function TecnologiesCard() {

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        
        position: relative;
        img {
            width: 100vw;
            height: 50vh;
        }
        a {
            margin: 1rem;
            font-size: 2rem;
            color: inherit;
            text-decoration: none;
            text-shadow: 2px 2px 2px 0px black;
            position: absolute;
            top: 40%;
        }
    `;
    return(
        <>
        
            <Container>
                <img src={img} alt="tech stack" />
                <Link to='/about'>Venha conferir as tecnologias utilizadas</Link>
            </Container>
        
        </>
    );
}