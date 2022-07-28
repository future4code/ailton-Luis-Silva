import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"paulinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
        
      />
      <Post
        nomeUsuario={"zé"}
        fotoUsuario={"https://picsum.photos/51/50"}
        fotoPost={"https://picsum.photos/208/150"}
              />

              <Post
        nomeUsuario={"Labenu"}
        fotoUsuario={"https://picsum.photos/57/50"}
        fotoPost={"https://picsum.photos/207/150"}
              />
    </MainContainer>
  );
}

