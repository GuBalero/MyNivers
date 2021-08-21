import { useState, useEffect } from "react";
import Accordion from "./Accordion";
import { store } from 'react-notifications-component';

const AccordionContainer = () => {

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const [nivers, setNivers] = useState([]);

    useEffect(()=>{
        getNiversData()
    },[]);

    function getNiversData(){
        var niversData = JSON.parse(localStorage.getItem("Nivers"));
        
        if(niversData !== null){
            niversData = niversData.sort(function(a,b){
                return new Date(a.date) - new Date(b.date);
            });
        }

        setNivers(niversData !== null ? niversData : []);
    }

    function deleteNiver(id){
        var niversData = JSON.parse(localStorage.getItem("Nivers"))

        niversData.splice(niversData.indexOf(niversData.find(n => n.id === id)), 1);
        localStorage.setItem("Nivers", JSON.stringify([...niversData]))

        getNiversData()

        addNotification("Niver Removido!", "O niver foi removido com sucesso.", "danger")
    }

    function addNotification(title, message, type){
        store.addNotification({
            title: title,
            message: message,
            type: type,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
            }
          });
    }

    return <Accordion 
                meses={meses} 
                nivers={nivers}
                deleteNiver={deleteNiver}
            />;

}

export default AccordionContainer;