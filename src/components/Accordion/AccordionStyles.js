import styled from "styled-components";

export const AccordionBody = styled.div`
    background-color: #212121;
    width: 50%;
    max-height: 80%;
    border-radius: 5px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 0;
    }
`;

export const AccordionItem = styled.div`
    //background-color: red;
    border-bottom: ${props => props.border} #262626 solid;

    input{
        display: none;
    }

    input:checked ~ label{
        background-color: whitesmoke;
        color: #3c00ff;
    }

    input:checked ~ label .open{
        display: none;
    }

    input:checked ~ label .close{
        display: initial;
    }

    input:checked ~ section{
        max-height: 1000px;
        visibility: visible;
        top: initial;
    }
`;

export const AccordionItemHeader = styled.label`
    //background-color: blue;
    display: flex;
    cursor: pointer;
    font-family: 'Permanent Marker', cursive;
    color: whitesmoke;
    font-weight: 400;
    padding: 6px 15px 6px 15px;
    font-size: min(25px, 2vw);
    z-index: 20;
    justify-content: space-between;
    
    .icon{
        font-family: 'Poppins', sans-serif;
        transition: max-height 0.5s  ease;
    }

    .close{
        display: none;
    }

    :hover{
        background-color: #3c00ff;
        box-shadow: 0 0 20px #3c00cc;
    }
`;

export const AccordionItemContent = styled.section`
    display: flex;
    background-color: #262626;
    font-family: 'Poppins', sans-serif;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 0px;
    position: relative;
    top: -1000px;
    -webkit-transition: max-height 0.5s  ease;
    -moz-transition: max-height 0.5s  ease;
    -o-transition: max-height 0.5s  ease;
    -ms-transition: max-height 0.5s  ease;
    transition: max-height 0.5s  ease;
    visibility: hidden;
    padding: 0 10px;

    span{
        font-size: min(14px, 2vw);
        padding: 10px 0 10px 0;
    }
`;

export const Niver = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    z-index: 5;
`;

export const Infos = styled.div`
    display: flex;
    align-items: center;

    .date{
        display: flex;
        min-width: 60px;
    }
`;























//////////////////////////////ANTIGO/////////////////////////////////////
// export const AccordionItem = styled.li`
//     list-style-type: none;
//     font-family: 'Permanent Marker', cursive;
//     color: whitesmoke;

//     h1{
//         font-weight: 400;
//         padding: 6px 0 6px 15px;
//         font-size: min(25px, 2vw);
//     }

//     ${
//         (props) => {
//             if(props.border === true){
//                 return "border-bottom: 1px #262626 solid;"
//             }else{
//                 return "border-radius: 0 1% 1% 0;"
//             }
//         }
//     }

//     :hover{
//         cursor: pointer;
//         ${
//             (props) => {
//                 if(!props.active){
//                     return (
//                         "background-color: #3c00ff;"
//                         +"box-shadow: 0 0 20px #3c00cc;"
//                         +"color: whitesmoke;"
//                     )
//                 } 
//             }
//         }
//     }

//     ${
//         (props) => {
//             if(props.active === true){
//                 return (
//                      //"box-shadow: 0 0 20px #3c00cc;"
//                     "background-color: whitesmoke;"
//                     + "color: #3c00ff;"
//                 );
//             }
//         }
//     }
// `;

// export const AccordionContent = styled.div`
//     display: ${props => props.display};
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     font-family: 'Poppins', sans-serif;
//     background-color: #262626;
//     width: 100%;
//     max-height: 0px;
//     //height: 0px;
//     color: whitesmoke;
//     transition: max-height 0.5s  ease;
//     -webkit-transition: max-height 0.5s  ease;
//     -moz-transition: max-height 0.5s  ease;
//     -o-transition: max-height 0.5s  ease;
//     -ms-transition: max-height 0.5s  ease;
//     transition: max-height 0.5s  ease;

//     span{
//         font-size: min(14px, 2vw);
//         padding: 10px 0 10px 0;
//     }

    
// `;

// export const Niver = styled.div`
//     width: 100%;
    
// `;

// export const Infos = styled.div`
//     //background-color: red;
//     padding: 5px 15px 5px 15px;

//     span{
//         margin-right: 25px;
//     }
// `;