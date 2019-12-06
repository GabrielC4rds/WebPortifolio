import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background: url(./static/BannerOpacity.png) no-repeat center center/ auto 100%;
  width: 100%;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Information = styled.div`
  width: 40vw;
  height: 45vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const ProfileCircle = styled.div`
  background: #fff;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsideCircle = styled.div`
  background: black;
  width: 145px;
  height: 145px;
  border-radius: 50%;
`;

const Texts = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Name = styled.text`
  font-size: 25px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  color: #fff;
`;

const SwitchText = styled.text`
  font-size: 65px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  // color: #F5AE51;
  color: #4484CE;
`;



const Arrow = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 105%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function index() {
  return (
    <div>
      <Main>
        <Information>
          <ProfileCircle>
            <InsideCircle>
            </InsideCircle>
          </ProfileCircle>
          <Texts>
            <Name>GABRIEL CARDOSO</Name>
            <SwitchText>PROGRAMER</SwitchText>
          </Texts>
        </Information>
        <Arrow> 
          <img src="./static/arrow.png"/>
        </Arrow>
      </Main>
    </div>
  );
}