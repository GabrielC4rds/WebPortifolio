import React from "react";
import styled from "styled-components";
import {ContactTags} from "../../props/contactTags";
import { AllBtn } from '../../props/linkButtons';

const Main = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TitleDiv = styled.div`
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
  width: 60vw;
  height: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const TextTitle = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 45px;
`;

const TextDesc = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Content = styled.div`
  width: 90%;
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column1 = styled.div`
  width: 45%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;



const ContentTitle = styled.div`
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
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const TextsTags = styled.div`
  width: 100%;
  height: 20%;
  p{
    font-size: 15px;
    span{
      font-weight: bold;
    }
  }
`;

const Column2 = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputTag = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #000;
  :focus{
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
  }
`;

const AreaTag = styled.textarea`
  width: 100%;
  height: 35%;
  border: none;
  background: transparent;
  border-bottom: 1px solid #000;
  :focus{
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
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
        <Column2>
          <InputTag placeholder="Name"/>
          <InputTag placeholder="Email"/>
          <InputTag placeholder="Subject"/>
          <AreaTag placeholder="Message"/>
          <AllBtn>Send Message</AllBtn>
        </Column2>
      </Content>
    </Main>
  );
}