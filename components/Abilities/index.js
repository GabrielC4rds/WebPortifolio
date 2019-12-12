import React from "react";
import styled from "styled-components";
import {
  GraphicTag,
  TitleTag,
  GraphicTexts,
  PercentText,
  GraphicScales,
  GraphicCards,
} from "../../props/graphicTags";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


const Main = styled.div`
  width: 100%; 
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #f7f7f7;

`;

const Texts = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

const Title = styled.text`
  font-size: 26px;
  color: black;
  font-weight: 510;
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
                    <PercentText>{res.PercentNumber}%</PercentText>
                  </GraphicTexts>
                  <GraphicScales>
                    <Progress 
                    percent={res.PercentNumber}
                    status="default"
                    theme = {{
                      default: {
                        color: 'black',
                        symbol: ''
                      }
                    }}
                    />
                  </GraphicScales>
                </GraphicTag>
              )
            })
          }
        </Graphics>
      </Main>
    );

}
