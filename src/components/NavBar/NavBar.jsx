import { Container } from '../../styles'
import { Logo } from './NavBarStyles'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <Container background="#262626" height="12vh" width="100%" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
        <Link to="/">
            <Logo>My Nivers</Logo>
        </Link>
    </Container>
);

export default NavBar;