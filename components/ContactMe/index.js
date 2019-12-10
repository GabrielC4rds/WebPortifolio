import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background: gray;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TitleDiv = styled.div`
  background: green;
  width: 90%;
  height: 15vh;
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  background: #4484CE;
  height: 100%;
  width: 10px;
`;

const Texts = styled.div`
  background: pink;
  width: 60vw;
  height: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const TextTitle = styled.div`
  width: 30%;
  height: 70%;
  background: yellow;
`;

const TextDesc = styled.div`
  width: 30%;
  height: 30%;
  background: red;
`;

const Content = styled.div`
  background: cyan;
  width: 90%;
  height: 60vh;
`;

export default function index(props) {
  return (
    <Main>
      <TitleDiv>
        <Box/>
        <Texts>
          <TextTitle>
            <p>CONTACT ME</p>
          </TextTitle>
          <TextDesc>
            <p>Get in touch with me</p>
          </TextDesc>
        </Texts>
      </TitleDiv>
      <Content></Content>
    </Main>
  );
}