import React from "react";
import styled from "styled-components";
import {
  GraphicTag,
  TitleTag,
  GraphicTexts,
  PercentText,
  GraphicScales,
  PercentBar,
  GraphicCards,
} from "../../props/graphicTags";
const Main = styled.div`
  background: green;
  width: 100%; 
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Texts = styled.div`
  background: blue;
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

const Title = styled.text`
  font-size: 27px;
  color: black;
`;

const Desc = styled.text`
  font-size: 17px;
  color: black;
`;

const Graphics = styled.div`
  background: red;
  width: 50%;
  height: 70%;
`;

export default function index(props) {
  return (
      <Main>
        <Texts>
          <Title>Some About my Abilities</Title>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum 
            has been the industry. Lorem Ipsum has been the industry's standard dummy text since. 
            Lorem Ipsum is simply.
          </Desc>
        </Texts>
        <Graphics>
          <GraphicTag>
            {GraphicCards.map((res) => {
              <>
                <GraphicTexts>
                  <TitleTag><span>res.Title</span> res.Desc</TitleTag>
                  <PercentText>95%</PercentText>
                </GraphicTexts>
                <GraphicScales>
                  <PercentBar></PercentBar>
                </GraphicScales>
                </>
            })
          }
          </GraphicTag>
        </Graphics>
      </Main>
    );

}
