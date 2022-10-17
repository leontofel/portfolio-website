import { Link } from "react-router-dom";
import appImage from '../../../../assets/imgs/imgapp.png';
import Image from 'react-bootstrap/Image';
import styled from "styled-components";

export default function CardToPortfolio() {

    const CardToPortfolioContainer = styled.section`
        padding-top: 2rem;
        margin: 0 auto;
        width: 80vw;
        height: 50vh;
        a {
            font-size: 2rem;
            text-decoration: none;
            color: whitesmoke;
            margin-bottom: 3rem;
        }
    `;
    return(
        <>
        <CardToPortfolioContainer>

          <Link to="/portfolio">
            <p>Confira nossos produtos</p>
        <Image src={appImage} alt="aplicativos feitos pela empresa" fluid={true} />
            </Link>  
        </CardToPortfolioContainer>
        </>
    );
}