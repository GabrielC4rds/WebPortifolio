import styled from "styled-components";

export const GraphicTag = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GraphicTexts = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;

export const TitleTag = styled.text`
  font-size: 15px;
  color: black;
  span{
    font-weight: bold;
  }
`;

export const PercentText = styled.text`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

export const GraphicScales = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-start;
`;

export const PercentBar = styled.div`
  background: black;
  width: 100%;
  height: 5px;
  border-radius: 1px;
`;

export const GraphicCards = [
  {
    Title: 'Unity',
    Desc: ' - 3 years of experience',
    PercentNumber: '95%'
  },
  {
    Title: 'Javascript',
    Desc: ' - 2 years of experience',
    PercentNumber: '70%'
  },
  {
    Title: 'React',
    Desc: ' - 2 years of experience',
    PercentNumber: '85%'
  },
  {
    Title: 'C#',
    Desc: ' - 3 years of experience',
    PercentNumber: '90%'
  }
]