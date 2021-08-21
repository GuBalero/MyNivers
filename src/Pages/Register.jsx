import { Container } from '../styles'
import NavBar  from '../components/NavBar/NavBar'
import FormContainer from '../components/Form/FormContainer';

const Register = () => (
    <>
        <NavBar/>
        <Container height="88vh" background="#1d1d1d">
            <FormContainer/>
        </Container>
    </>
);

export default Register;