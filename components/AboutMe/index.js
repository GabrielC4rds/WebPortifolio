import React from "react";
import styled from "styled-components";
import {
  Tag1,
  Tag2,
  Block, 
  TagIcon, 
  BlockTexts,
  BlockTitle
  } from '../../props/tags';

import { AllBtn, Btn } from '../../props/linkButtons';
import Typical from 'react-typical';

//Styled Div
const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiniContent = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const VerticalContent1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BorderIndex = styled.div`
  border: 10px solid black;
  width: 26%;
  height: 70%;
  z-index: -2;
  position: absolute;
`;

const Photo = styled.div`
  background: blue;
  width: 60%;
  height: 85%;
  margin-right: 5vw; 
  margin-bottom: 50px;
  z-index: -1;
  position: relative;

`;


const VerticalContent2 = styled.div`
  width: 55%;
  height: 100%;
`;

const Title = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

`;

const DescriptionBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Description = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TagBox = styled.div`
  height: 100%;
  width: 49%;
`;

const Buttons = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;  
`;

//Styled Text

const TitleText = styled.text`
  font-size: 26px;
  color: black;
  font-weight: 510;
  span{
    color: #4484CE;
  }
`;

const DescriptionText = styled.text`
  font-size: 18px;
  color: gray;
  text-align: justify;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    color: #4484CE;
    font-weight: bold;
  }
`;


export default function index(props) {
  return (
    <Main>
      <MiniContent>
        <VerticalContent1>
          <BorderIndex/>
          <Photo/>
        </VerticalContent1>
        <VerticalContent2>
          <Title>
            <TitleText>
              <p>I'm Gabriel Cardoso and 
                <span>
                  <Typical
                    steps={[' Programmer', 2000, ' Freelancer', 2000, ' Game Dev', 2000]}
                    loop={Infinity}
                    wait={1000}
                    wrapper="span"
                  />
                </span>
              </p>
            </TitleText>
          </Title>
          <DescriptionBox>
            <Description>
              <DescriptionText>
                <p>Hi! My name is <span>Gabriel Cardoso</span>.
                I am a Web Developer,
                and I'm very passionate and dedicated to my work.
                With 2 years experience as a professional Web 
                developer, I have acquired the skills and knowledge 
                necessary to make your project a success. I enjoy every
                step of the design process, from discussion and collaboration.
                </p>
              </DescriptionText>
            </Description>
            <Description>
              <TagBox>
                {Tag1.map((res) => {
                  return (
                    <Block>
                       <TagIcon src={`./static/icons/${res.icon}`}/>
                       <BlockTexts>
                         <BlockTitle>
                          <p>{res.textTitle}</p>
                         </BlockTitle>
                        <p>{res.textDesc}</p>
                      </BlockTexts>  
                    </Block>
                  )
                })}
              </TagBox>
              <TagBox>
                {Tag2.map((res) => {
                    return (
                      <Block>
                        <TagIcon src={`./static/icons/${res.icon}`}/>
                        <BlockTexts>
                          <BlockTitle>
                            <p>{res.textTitle}</p>
                          </BlockTitle>
                          <p>{res.textDesc}</p>
                        </BlockTexts>  
                      </Block>
                    )
                  })}
              </TagBox>
            </Description>
          </DescriptionBox>
          <Buttons>
            <AllBtn href={Btn.Linkedin_link}>
                <p>{Btn.Linkedin_text}</p>
            </AllBtn>
            <AllBtn href={Btn.Github_link}>
                <p>{Btn.Github_text}</p>
            </AllBtn>
          </Buttons>
        </VerticalContent2>
      </MiniContent>
    </Main>
  );
}