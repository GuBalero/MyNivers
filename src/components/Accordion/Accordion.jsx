import { Button, GroupButtons } from "../../styles";
import { AccordionBody, AccordionItem, AccordionItemContent, AccordionItemHeader, Niver, Infos} from "./AccordionStyles";
import { Link } from "react-router-dom";

const Accordion = ({meses, nivers, deleteNiver}) => {
    
    return (
        <AccordionBody>
            {meses.map((mes, index) => ( 
                <AccordionItem key={mes} border={index !== meses.length-1 ? "1px" : "0px"}>
                    <input id={mes} type='checkbox' />
                    <AccordionItemHeader htmlFor={mes}>
                        <span>{mes}</span>
                        <span className="icon open">+</span>
                        <span className="icon close">&times;</span>
                    </AccordionItemHeader>
                    <AccordionItemContent>
                        {
                            nivers.length > 0 && nivers.filter(n => new Date(n.date).getMonth() === index).length > 0

                            ? nivers.filter(n => new Date(n.date).getMonth() === index).map((niver)=>(
                                <Niver key = {niver.id}>
                                    
                                    <Infos background="#f00" width="100%">
                                        <div className="date">
                                            <span>
                                                {new Date(niver.date).getDate() <= 9 ? "0"+new Date(niver.date).getDate() : new Date(niver.date).getDate()}
                                                /
                                                {new Date(niver.date).getMonth() < 9 ? "0"+(new Date(niver.date).getMonth()+1) : new Date(niver.date).getMonth()+1}
                                            </span>
                                        </div>
                                        <span>{niver.name}</span>
                                    </Infos>

                                    <GroupButtons>
                                        <Link to={`/edit/${niver.id}`}>
                                            <Button color="warning">
                                                EDITAR
                                            </Button>
                                        </Link>
                                        <Button color="danger" onClick={() => deleteNiver(niver.id)}>
                                            EXCLUIR
                                        </Button>
                                    </GroupButtons>

                                </Niver>
                            ))

                            : <span>Sem aniversários neste mês</span>
                            
                        } 
                    </AccordionItemContent>
                </AccordionItem>
            ))}
        </AccordionBody>
    )
};

export default Accordion;