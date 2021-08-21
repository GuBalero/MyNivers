import { Link } from 'react-router-dom';
import AccordionContainer from '../components/Accordion/AccordionContainer'
import NavBar from '../components/NavBar/NavBar'
import { Button, Container, GroupButtons} from '../styles'

const Home = () => (
    <>
        <NavBar/>
        <Container background="#1d1d1d" height="88vh" width="100%">
            <AccordionContainer position="rigth"/>
            
            <GroupButtons style={{marginTop: "20px"}}> 
                <Link to="/register">
                    <Button color="default" size="bg">ADICIONAR NIVER</Button>
                </Link>
            </GroupButtons>
        </Container>
    </>
);

export default Home;