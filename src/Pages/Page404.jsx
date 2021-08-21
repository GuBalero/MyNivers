import NavBar from '../components/NavBar/NavBar'
import { Container } from '../styles'; 

const Page404 = () => (
    <>
        <NavBar/>
        <Container background="#1d1d1d" height="88vh" width="100%">
            <h1>Página não encontrada</h1>
        </Container>
    </>
);

export default Page404;