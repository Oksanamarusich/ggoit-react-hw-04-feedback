import styled from "styled-components";

export const Button = styled.button`
margin-right:40px;
padding:8px;

width: 100px;
border-radius: 10px;
border: 1px solid rgba(0,255,0);
background-color: rgba(0,255,0,0.5);
color: #2e2f42;
cursor:pointer;

&:hover{
 background-color: rgba(135,206,235,0.5);   
}
`

export const ButtonContainer = styled.ul`
display:flex;

`
export const ListItem = styled.ul`
list-style: none;
`