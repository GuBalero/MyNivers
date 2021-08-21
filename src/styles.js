import styled from 'styled-components'

const colorsType = new Map();
colorsType.set('warning', "#fec107")
colorsType.set('success', "#188754")
colorsType.set('danger', "#dc3546")
colorsType.set('default', "#555")

const buttonSizes = new Map();
buttonSizes.set("sm", "5px 10px")
buttonSizes.set("bg", "10px 30px")

export const Container = styled.div`
    display: ${props => props.display ? props.display : "flex"};
    background-color: ${props => props.background};
    width: ${props => props.width };
    height: ${props => props.height};
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.boxShadow != null ? props.direction : "column"};
    box-shadow: ${props => props.boxShadow};
    color: white;
    border-radius: ${props => props.borderRadius};
    text-align: center;
`;

export const GroupButtons = styled.div`
    //background-color: green;
    float: ${props => props.position};
`;

export const Button = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: min(14px, 1vw);
    border: 3px solid;
    background-color: transparent;
    padding: ${props => props.size ? buttonSizes.get(props.size) : buttonSizes.get("sm")};
    border-radius: 0px;
    cursor: pointer;
    letter-spacing: -0.4px;
    margin: 0 5px;
    color: whitesmoke;
    border-color: #555;
    transition: all 0.15s ease;
    word-spacing: 3px;

    :hover{
        background-color: ${props => colorsType.get(props.color)};
        border-color: ${props => colorsType.get(props.color)};
        box-shadow: 0 0 20px ${props => colorsType.get(props.color)};
        color: ${props => props.color === "warning" ? "#555" : "whitesmoke"};
    }
`;