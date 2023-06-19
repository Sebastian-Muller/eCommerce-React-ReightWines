import styled from "styled-components";






const Contactos = () => {
  return (

    <ContactoContainer>
        <FondoColor>
              <InputContainer >
                    <Titulo>Contacto</Titulo>
                    <Input type="text" placeholder="Nombre"/>
                    <Input type="text" placeholder="E-mail"/>
                    <Input type="text" placeholder="Asunto"/>
                    <Textarea type="text" placeholder="Consulta"/>
                </InputContainer>
                <ButtonContainer>
                  <Button>Enviar</Button>
                </ButtonContainer>
        </FondoColor>       
      </ContactoContainer>


  )
}

export default Contactos

const ContactoContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`


const FondoColor = styled.div`
width: 80vw;
height: 90vh;
background: rgb(239,132, 86);
box-shadow: 0 3px 5px 0 rgba(31, 38, 135, 0.37);
border-radius: 10px;
border-color: aqua;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: rgb(0, 0, 0);
backdrop-filter: blur(8.5px);
gap: 15px;


@media screen and (min-width: 768px){
  gap: 5px;
}
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 80%;
width: 100%;
gap: 15px;
font-family: var(--text-font);
`;

const Titulo = styled.h1`
  color: rgb(241,243, 232);
  font-size: 3.5rem;
  font-weight: bold;
  font-family:  var(--title-font);
`

const Input = styled.input`
background: rgb(251, 243, 232);
box-shadow: 0 3px 5px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
width: 80%;
height: 6rem;
padding: 1.5rem;
border: none;
outline: none;
color: rgb(0, 0, 0, 100%);
font-size: 1.5rem;
font-weight: 100;

&:focus{
    display: inline-block;
    box-shadow: 0 0 0 0.2rem rgb(255, 255, 255);
    border-radius: 1rem;
}
&::placeholder{
    color: rgb(0, 0, 0, 50%);
    font-weight: 100;
    font-size: 1.5rem;
}
`

const Textarea = styled.textarea`
background:  rgb(251, 243, 232);
box-shadow: 0 3px 5px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
width: 80%;
height: 36rem;
padding: 1.5rem;
border: none;
outline: none;
color: rgb(0, 0, 0, 100%);
font-size: 1.5rem;
font-weight: 100;

&:focus{
    display: inline-block;
    box-shadow: 0 0 0 0.2rem rgb(255, 255, 255);
    border-radius: 1rem;
}
&::placeholder{
    color: rgb(0, 0, 0, 50%);
    font-weight: 100;
    font-size: 1.5rem;
}
`

const ButtonContainer = styled.div`
margin: 1rem 0 2 rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
font-family: var(--text-font);
padding-top: 5%;

@media screen and (min-width: 1200px){
  padding-top: 3%;
}
`;

const Button = styled.button`
background: rgb(251, 243, 232);
text-transform: uppercase;
font-family: var(--text-font);
letter-spacing: 0.2rem;
width: 45%;
height: 5rem;
border: none;
color: rgb(37,40,39);
border-radius: 2rem;
box-shadow: 0 3px 5px 0 rgba(31, 38, 135, 0.37);
cursor: pointer;


@media screen and (min-width: 1200px){
  width: 30%;
}
`