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
  width: 100%; 
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Texts = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

const Title = styled.text`
  font-size: 27px;
  color: black;
  padding-bottom: 5vh;
`;

const Desc = styled.text`
  font-size: 17px;
  color: black;
`;

const Graphics = styled.div`
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
            {GraphicCards.map((res) => {
              return(
                <GraphicTag>
                  <GraphicTexts>
                    <TitleTag>
                      <span>{res.Title}</span> 
                      {res.Desc}
                    </TitleTag>
                    <PercentText>{res.PercentNumber}</PercentText>
                  </GraphicTexts>
                  <GraphicScales>
                    <PercentBar></PercentBar>
                  </GraphicScales>
                </GraphicTag>
              )
            })
          }
        </Graphics>
      </Main>
    );

}
