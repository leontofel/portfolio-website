import styled from 'styled-components';
import contactImg from '../../../../assets/imgs/contact.jpg';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

export default function ContactLink() {

    const ContactLinkContainer = styled.section`
        font-size: 1.5rem;
        position: relative;
        a {
            text-decoration: none;
            
        }
        p {
            position: absolute;
            bottom: 10%;
            right: 5%;
            color: black;
            

        }

    `;

    return (
        <>
            <ContactLinkContainer>
                <Link to='/contact'> 
                <p>
                    Está esperando o quê?
                    <br/>
                    Entre em contato
                </p>
                <Image src={contactImg} alt="entre em contato" fluid={true} />
                </Link>
            </ContactLinkContainer>
        </>
    );
}