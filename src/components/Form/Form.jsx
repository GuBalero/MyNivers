import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import portugues from 'date-fns/locale/pt-BR';

import { Button, Container, GroupButtons } from "../../styles";
import { FormItens, Icon, InputControl } from "./FormStyles";
import imgIcon from '../../images/bolo.png'
import { Link } from "react-router-dom";


const Form = ({date, setDate, name, changeName, addNiver, editNiver, id}) => {
    
    registerLocale('pt-BR', portugues)

    return(
        <Container background="#212121" display="block" borderRadius="5px" style={{maxHeight: "100%"}}>
            <Icon src={imgIcon}/>
            <Container width="100%">
                <FormItens onSubmit={id ? editNiver : addNiver}>
                    <h1>New Niver</h1>

                    <InputControl>
                        <label htmlFor="name">Nome</label>
                        <input 
                            type="text" 
                            placeholder="Digite o nome" 
                            id="name" 
                            autoComplete="off" 
                            required 
                            onChange={changeName} 
                            value={name}
                        />
                    </InputControl>

                    <InputControl>
                        <label htmlFor="date">Data de Aniversário</label>
                        <DatePicker 
                            selected={date} 
                            onChange={(dateSelect) => setDate(dateSelect)} 
                            dateFormat="dd/MM"
                            placeholderText="Selecione uma data"
                            showMonthDropdown={true}
                            locale="pt-BR"
                            className="date"
                            isClearable
                            id="date"
                            required
                            autoComplete="off"
                            />
                    </InputControl>

                    <br/><br/>

                    <GroupButtons>
                        <Link to="/">
                            <Button color="default" type="button"> CANCELAR</Button>
                        </Link>
                        <Button color="success" type="submit"> {id ? "EDITAR" : "CADASTRAR"}</Button>
                    </GroupButtons>
                </FormItens>
                
            </Container>
        </Container>
    )
};

export default Form;