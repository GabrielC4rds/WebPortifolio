import React from "react";
import styled from "styled-components";

const MainFooterHolder = styled.div`
  width: 100%;
  margin-top: 35px;
`;

const FooterContent = styled.div`
  width: 100%;
  padding: 15px 0;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const LogoColumn = styled.div`
  width: 35%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 180px;
    margin-bottom: 15px;
  }
  p,
  h4 {
    margin-bottom: 0;
  }
  p {
    font-size: 12px;
  }
  @media (max-width: 950px) {
    width: 30%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const ContactColumn = styled.div`
  width: 25%;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  h3 {
    align-self: center;
    text-align: center;
  }
  img {
    width: 20px;
    margin-right: 10px;
  }
  p,
  h5 {
    margin-bottom: 0;
  }
  p {
    font-size: 12px;
  }
  @media (max-width: 950px) {
    width: 30%;
  }
  @media (max-width: 750px) {
    width: 45%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  @media (max-width: 500px) {
    align-self: center;
  }
`;

const NewsletterColumn = styled.div`
  width: 30%;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  h3 {
    align-self: center;
    text-align: center;
  }
  p,
  h5 {
    margin-bottom: 0;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
  @media (max-width: 950px) {
    width: 40%;
  }
  @media (max-width: 750px) {
    width: 45%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const NewsletterCaption = styled.div``;

const NewsletterSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 30px;
    margin-right: 5px;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Divider = styled.div`
  width: 10%;
  height: 2px;
  background: #454545;
  margin: 7px 0;
`;

const Copyright = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 12px;
  color: #454545;
  text-align: center;
  border-top: 1px solid #cacaca;
`;

export default function MainFooter() {
  return (
    <div>
      <MainFooterHolder>
        <FooterContent>
          <LogoColumn>
            <img src="./static/sanar.png" />
            <h4>Atendimento</h4>
            <Divider />
            <p>SEG. A SEX / 09h - 18h</p>
          </LogoColumn>
          <ContactColumn>
            <h3>Entre em Contato :)</h3>
            <ContactItem>
              <img src="./static/location.png" />
              <div>
                <h5>Endereco:</h5>
                <p>R. Alceu Amoroso Lima, 172 - Salvador Office & Pool, 3° andar -
              Caminho das árvores, CEP 41820-770, Salvador - BA - Brasil</p>
              </div>
            </ContactItem>
            <ContactItem>
              <img src="./static/phone.png" />
              <div>
                <h5>Telefone:</h5>
                <p>+55 (71) 3052-4831</p>
              </div>
            </ContactItem>
          </ContactColumn>
          <NewsletterColumn>
            <h3>Se Inscreva no nosso newsletter!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit leo nec ex gravida, id placerat leo fringilla. Aenean
              cursus leo arcu.
            </p>
            <NewsletterCaption>...</NewsletterCaption>
            <NewsletterSocial>
              <img src="./static/twitter.png" />
              <img src="./static/faceboom.png" />
              <img src="./static/instagram.png" />
              <img src="./static/whatsapp.png" />
              <img src="./static/youtube.png" />
            </NewsletterSocial>
          </NewsletterColumn>
        </FooterContent>
      </MainFooterHolder>
      <Copyright>
        © 2018 - TODOS OS DIREITOS RESERVADOS - EDITORA SANAR LTDA - ME. CNPJ:
        18.990.682/0001-92
      </Copyright>
    </div>
  );
}
