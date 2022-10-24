
import { Link } from 'react-router-dom';
import img from '../../../../assets/imgs/img4.jpg';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

export default function TecnologiesCard() {

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        
        position: relative;
        img {
            width: 100vw;
            height: 50vh;
            object-fit: cover;
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
                <Image src={img} alt="tech stack" fluid={true} />
                <Link to='/about'>Venha conferir as tecnologias utilizadas</Link>
            </Container>
        
        </>
    );
}