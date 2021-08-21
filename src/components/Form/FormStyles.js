import styled from "styled-components";

export const Icon = styled.img`
    height: min(100px, 12vw);
    width: min(100px, 12vw);
    margin-top: max(-50px, -6vw);
`;

export const FormItens = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    h1{
        font-family: 'Permanent Marker', cursive;
        letter-spacing: 2px;
        margin-bottom: 5%;
    }

    padding-bottom: 15px;
`;

export const InputControl = styled.div`
    font-family: 'Poppins', sans-serif;
    margin: 15px 15px;
    text-align: left;

    label{
        font-size: 12px;
        color: #3c00ff;
    }

    input{
        padding-left: 10px;
        width: calc(100% - 10px);
        text-align: left;
        font-family: 'Poppins', sans-serif;
        font-size: min(17px, 2vw);
        background-color: transparent;
        border-bottom: 2px #3c00ff solid;
        color: whitesmoke;
        outline: none;
        border-radius: 0px;
        transition: border-color 0.2s ease;
    }

    input:not(:placeholder-shown), input:focus{
        border-color: #3c00ff;
    }

    .date{
        cursor: pointer;
    }
`;