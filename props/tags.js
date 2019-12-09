import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TagIcon = styled.img`
  width: 1.5vw;
  height: 3vh;
`;

export const BlockTexts = styled.div`
  font-size: 14px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-left: 5px;
  color: Black;
  font-weight: bold;
  p:nth-child(2){
    color: #6f6f6f;
    font-weight: normal;
  }
`;

export const BlockTitle = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-left: 5px;
`;



export const Tag1 = [
  {
    icon: 'gift.png',
    textTitle: 'Birthday:',
    textDesc: '02.05.1999'
  },
  {
    icon: 'location-point.png',
    textTitle: 'Location:',
    textDesc: 'Petrópolis, Brasil'
  },
  {
    icon: 'email.png',
    textTitle: 'Mail:',
    textDesc: 'gabxd4@gmail.com'
  },
  {
    icon: 'open-book.png',
    textTitle: 'Study:',
    textDesc: 'Level Up Academy'
  }
]

export const Tag2 = [
  {
    icon: 'calendar.png',
    textTitle: 'Age:',
    textDesc: '20'
  },
  {
    icon: 'console.png',
    textTitle: 'Interest:',
    textDesc: 'Games, Rock'
  },
  {
    icon: 'graduation-cap.png',
    textTitle: 'Degree:',
    textDesc: 'Junior'
  },
  {
    icon: 'phone-call.png',
    textTitle: 'Phone:',
    textDesc: '+55 024 981890310'
  }
]
