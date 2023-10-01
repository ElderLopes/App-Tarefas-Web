import styled from 'styled-components';
import Modal from "react-modal";

// Container principal
export const Container = styled.div`
  background-color: #F0F2F5;
  width: 100%; 
  height: 100vh;
  @media (max-width: 768px) {

 
  display: flex;
  flex-direction: column;

  }

`;

// Container responsivo para cabeçalho
export const ContainerHead = styled.div`
width: 100%;
height: 57px;
box-shadow: 0px 1px 7px 0px #95959540;
background-color: #ffffff;
display: flex;
align-items: center;
`;

export const Image = styled.img`
width: 29px;
margin-left: 29px;
`;

export const H1 = styled.h1`
margin-left: 15px;
font-family: Inter;
font-size: 14px;
font-weight: 400;
color: #455A64;
`;

export const Input = styled.input`
margin-left: 25px;
margin-right: 5px;
width: 60%;
height: 28px; 
border: 1px solid #D9D9D9; 
box-shadow: 1px 1px 3px 0px #00000040;
border-radius: 3px;
padding: 4px 8px; 
font-family: Inter;
font-size: 14px;
color: #9A9A9A;
outline: none; 
`;

export const SearchIconWrapper = styled.div`
color: #9E9E9E;
margin-left: -29px;
margin-top: 5px;
`;
export const ClearIconWrapper = styled.div`
color: #9E9E9E;
margin-left: auto;
margin-right: 5px;
`;
export const ContainerCreateTasks = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: baseline;
    
`;
export const TAskWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
width: 80%;
`;
export const InputTaskTitle = styled.input`

position: relative;
padding: 15px;
width: 50%;
font-family: Inter;
font-size: 14px;
font-weight: 700;
line-height: 17px;
text-align: left;
color: #333333;
border-radius: 10px 10px 0 0;
border: 1px solid #D9D9D9;
border-bottom: 0px;
box-shadow: 1px 1px 3px 0px #00000040;

`;

export const InputTaskNote = styled.textarea`
padding: 15px;
width: 50%;
min-height: 100px; 
font-family: Inter;
font-size: 13px;
font-weight: 400;
line-height: 16px;
text-align: left;
color: #50656E;
border-radius: 0 0 10px 10px;
border: 1px solid #D9D9D9;
box-shadow: 1px 1px 3px 0px #00000040;
resize: vertical; 
`;

export const StarIconWrapper = styled.div`

position: absolute;
right:31% ; 
top: 13%;  
`;

export const Button = styled.button``;

export const ContainerFavoriteTask = styled.div`
padding:20px;
background: #F0F2F5;
/* display: flex; */
P{
    padding: 10px;
}
`;

export const TaskFavotite = styled.div`
display: flex;
    flex-direction: row;
    padding: 15px;
    justify-content: space-around;
`;

export const LabelStyled = styled.label`

display: flex;
  flex-direction: column;
  align-items: flex-start; 
  text-align: left; 
  justify-content: space-between; 
  width: 100%; 
`;
export const TitleAndImageWrapper = styled.div`
    position: relative;
display: flex;
  align-items: center;
width: 100%;
`;
export const TaskTitleStyled = styled.label`
margin-right: auto;
padding: 15px;
width: 45%;
font-family: Inter;
font-size: 14px;
font-weight: 700;
line-height: 17px;
text-align: left;
color: #333333;
border-radius: 10px 10px 0 0;
border: 1px solid #D9D9D9;
border-bottom: 0px;
box-shadow: 1px 1px 3px 0px #00000040;
`;
export const FavoriteImage = styled.img`
position: absolute;
    right: 45%;
width:15px;

`;
export const TaskNoteStyled = styled.label`
padding: 15px;
width: 45%;
min-height: 100px;
font-family: Inter;
font-size: 14px;
font-weight: 700;
line-height: 17px;
text-align: left;
color: #333333;
border-radius: 0 0 10px 10px ;
border: 1px solid #D9D9D9;
border-bottom: 0px;
box-shadow: 1px 1px 3px 0px #00000040;
resize: vertical; 
background: #F0F2F5;
`;
export const EditTask = styled.img`
width:15px;
margin-left: 5px;

`;
export const EditColorImage = styled.img`
width:15px;
margin-left: 10px;
`;

export const WrapperEditImg = styled.div`
display:flex;
margin-top: -20px;
`;

export const ContainerAllFavoriteTask = styled.div`
   padding:20px;
background: #F0F2F5;
/* display: flex; */
P{
    padding: 10px;
}
`;

export const ContainerTask = styled.div`

`;

export const customModalStyles = {
  content: {
    width: "60%",
    maxHeight: "80%",
    margin: "auto",
    display: "flex", // Adicione o estilo display flex ao modal
    flexDirection: "column", // Define a direção da flexbox para coluna
    alignItems: "center", // Centraliza o conteúdo verticalmente
  },
};

export const CustomModal = styled(Modal)`
  /* Estilos adicionais para o Modal */
  background-color: #fff; /* Cor de fundo do modal */
  border-radius: 8px; /* Borda arredondada */
  padding: 20px; /* Preenchimento interno */
`;