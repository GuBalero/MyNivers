import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import { store } from 'react-notifications-component';

const FormContainer = () => {
    const { id } = useParams();
    
    const [date, setDate] = useState();
    const [name, setName] = useState();
    
    var newNiver = {
        "id": 0,
        "name": "",
        "date": ""
    }

    useEffect(() => {
        if(id){
            var user = JSON.parse(localStorage.getItem("Nivers")).find(n => n.id+"" === id);

            setDate(new Date(user.date))
            setName(user.name)
           
        }
    }, [id])


    function changeName (e){
        setName(e.target.value)
    }

    function clearForm(){
        setName()
        setDate()

        document.getElementById("name").value = ""
    }

    function addNiver(e){
        e.preventDefault();

        var nivers = JSON.parse(localStorage.getItem("Nivers"))
        let maxId = 0;

        newNiver.id = maxId;
        newNiver.name = name;
        newNiver.date = date;

        if(nivers !== null){
            nivers.forEach((n) => {
                if(n.id >= maxId)maxId= n.id + 1;
            })
            
            newNiver.id = maxId
            localStorage.setItem("Nivers", JSON.stringify([...nivers, newNiver]))
        }else{
            localStorage.setItem("Nivers", JSON.stringify([newNiver]))
        }

        clearForm()
        addNotification("Niver Adicionado!", "O niver foi adicionado com sucesso.", "success")
    }

    function editNiver(e){
        e.preventDefault();

        var niversData = JSON.parse(localStorage.getItem("Nivers"));
        
        var user = niversData.find(n => n.id+"" === id);
        user.name = name;
        user.date = date;
        
        localStorage.setItem("Nivers", JSON.stringify([...niversData]))

        addNotification("Niver Alterado!", "O niver foi alterado com sucesso.", "warning")
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

    return <Form date={date} setDate={setDate} name={name} changeName={changeName} editNiver={editNiver} addNiver={addNiver} id={id}/>
}

export default FormContainer;