import React from "react";
import styled from "styled-components";

import { 
  ServiceCards,
  TextsBox,
  TitleCards,
  Description,
  Link
} from "../../props/serviceCards";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 10vh 5vw;
  background: #fff;
`;

const TitleDiv = styled.div`
  width: 90%;
  height: 15%;
`;

const Title = styled.text`
  font-size: 40px;
  font-weight: bold;
  span{
    color: #4484CE;
  }
`;

const Underline = styled.div`
  background: #4484CE;
  width: 5vw;
  margin-top: 10px;
  height: 2.5px;
`;

const ContentDiv = styled.div`
  width: 90%;
  height: 60%;
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ServiceCard = styled.div`
  width: 30%;
  height: 100%;
  box-shadow: 0 0 20px rgba(0,0,0,.1);
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
`;



export default function index(props) {
  return (
    <div>
      <Main>
        <TitleDiv>
          <Title>Quality <span>Services</span></Title>
          <Underline/>
        </TitleDiv>
        <ContentDiv>
        {ServiceCards.map((res) => {
              return(
                <ServiceCard>
                  <TextsBox>
                    <TitleCards>{res.Title_Text}</TitleCards>
                    <Description>{res.Desc_Text}</Description>
                    <Link href={res.Link_Link}>{res.Link_Text}</Link>
                  </TextsBox>
                </ServiceCard>
              )
            })}
        </ContentDiv>
      </Main>
    </div>
  );
}