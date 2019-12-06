import React from "react";
import styled from "styled-components";

export const TextsBox = styled.div`
  width: 80%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;

export const TitleCards = styled.text`
  color: black;
  font-size: 30px;
  font-weight: bold;
`;

export const Description = styled.text`
  color: gray;
  font-size: 20px;
`;

export const Link = styled.text`
  color: #E3872D;
  cursor: pointer;
  font-size: 20px;
`;


export const ServiceCards = [
  {
    Title_Text: 'Web Development',
    Desc_Text: 'Web development is the work involved in developing a web site for the Internet...',
    Link_Text: 'See More'
  },
  {
    Title_Text: 'Game Development',
    Desc_Text: 'Game development is the work involved in developing a web site for the Internet...',
    Link_Text: 'See More'
  },
  {
    Title_Text: 'VR Development',
    Desc_Text: 'Game development is the work involved in developing a web site for the Internet...',
    Link_Text: 'See More'
  }
]