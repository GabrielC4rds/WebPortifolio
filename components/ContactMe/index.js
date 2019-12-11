import React from "react";
import styled from "styled-components";
import {ContactTags} from "../../props/contactTags";

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
  width: 40%;
  height: 70%;
  background: yellow;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 45px;
`;

const TextDesc = styled.div`
  width: 30%;
  height: 30%;
  background: red;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Content = styled.div`
  background: cyan;
  width: 90%;
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column1 = styled.div`
  background: blue;
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Column2 = styled.div`
  background: brown;
  width: 45%;
  height: 100%;
`;

const ContentTitle = styled.div`
  background: yellow;
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  p{
    font-size: 27px;
    font-weight: 550;
  }
`;

const ContentSubtitle = styled.div`
  background: red;
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const TextsTags = styled.div`
  background: #9c3bf3;
  width: 100%;
  height: 20%;
  p{
    font-size: 15px;
    span{
      font-weight: bold;
    }
  }
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
      <Content>
        <Column1>
          <ContentTitle>
            <p>Get in Touch</p>
          </ContentTitle>
          <ContentSubtitle>
            {ContactTags.map((res) =>
              <TextsTags>
                <p>
                  <span>{res.Title}: </span>
                  {res.Desc}
                </p>
              </TextsTags>
            )}
          </ContentSubtitle>
        </Column1>
        <Column2></Column2>
      </Content>
    </Main>
  );
}