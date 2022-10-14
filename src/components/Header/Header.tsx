import { HeaderContainer } from "./stylesHeader";
import logo from '../../assets/logo/logo-sem-palavras.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'react-bootstrap/Image';


export default function Header() {





    return (
        <>
            <HeaderContainer>
            

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" active>
                            Sobre Nós
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Portfólio</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Contato</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h1>SparkInTech</h1>
                

            </HeaderContainer>
        </>
    );
}
// <Image src={logo} alt="logo da empresa" roundedCircle={true}  />