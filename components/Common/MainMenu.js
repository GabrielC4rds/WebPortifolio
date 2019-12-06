import React, { useState, useEffect } from "react";
import styled from "styled-components";
import withSizes from "react-sizes";
import { Menu, Dropdown, Icon } from "antd";

const mapSizesToProps = ({ width, height }) => ({
  ScreenWidth: width,
  ScreenHeight: height
});

const MainMenuHolder = styled.div`
  width: 100%;
`;

const MenuContent = styled.div`
  width: 100%;
  padding: 15px 15px;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 200px;
  }
  ul {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 0px;
  }
  ul li a{
    color: inherit;
    text-decoration: none;
  }
  ul li {
    margin-right: 15px;
    text-transform: uppercase;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    font-family: "Open Sans", sans-serif !important;
    :after {
      content: "";
      width: 0%;
      height: 2px;
      background: #0e996d;
      transition: all 0.3s ease;
      position: absolute;
      left: 50%;
      bottom: -6px;
      transform: translateX(-50%);
    }
    :hover :after {
      width: 100%;
    }
    :last-child :after {
      display: none !important;
    }
  }
  @media (max-width: 900px) {
    .ant-dropdown,
    .ant-dropdown-menu {
      width: 100vw !important;
      position: absolute !important;
      left: 0 !important;
      top: 80px !important;
    }
    .ant-dropdown-menu-item > a,
    .ant-dropdown-menu-submenu-title > a {
      font-size: 18px !important;
      text-align: center !important;
      padding: 10px 0 !important;
      font-family: "Open Sans", sans-serif !important;
    }
    .anticon {
      font-size: 28px !important;
      color: #0e996d !important;
    }
  }
`;

const AlreadyStudent = styled.button`
  background: transparent;
  border: 1px solid #000;
  border-radius: 30px;
  padding: 7px 30px;
  transition: all 0.4s ease;
  :hover {
    background: #0e996d;
    box-shadow: 0px 9px 45px #0e996d40;
    color: #fff;
    border: 1px solid #0e996d;
    cursor: pointer;
  }
`;

const menu = (
  <Menu>
    {/* <Menu.Item key="0">
      <a href="https://www.sanarmed.com/residenciamedica/">Home</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.sanarmed.com/residenciamedica/#courses">Cursos</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="https://www.sanarmed.com/residenciamedica/quem-somos/">
        Quem Somos
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="https://www.sanarmed.com/residenciamedica/duvidas/">Dúvidas</a>
    </Menu.Item>
    <Menu.Item key="4">
      <a href="https://www.sanarmed.com/ciclos-da-medicina/residencia-medica">
        Conteúdos
      </a>
    </Menu.Item>
    <Menu.Item key="5">
      <a href="https://aluno.sanarresidenciamedica.com.br/#/entrar">
        Já Sou Aluno
      </a>
    </Menu.Item> */}
  </Menu>
);

function MainMenu({ ScreenWidth, ScreenHeight }) {
  const [ScreenDimensions, setScreenDimensions] = useState({
    width: ScreenWidth,
    height: ScreenHeight
  });

  useEffect(() => {
    setScreenDimensions({ width: ScreenWidth, height: ScreenHeight });
  }, [ScreenWidth, ScreenHeight]);

  return (
    <MainMenuHolder>
      <MenuContent>
        <img src="./static/logo.png" />
        {ScreenDimensions.width <= 900 ? (
          <Dropdown overlay={menu} trigger={["click"]}>
            <a className="ant-dropdown-link" href="#">
              <Icon type="menu" />
            </a>
          </Dropdown>
        ) : (
          <ul>
            <li>
              <a href="https://www.sanarmed.com/residenciamedica/">Home</a>
            </li>
            <li>
              <a href="https://www.sanarmed.com/residenciamedica/#courses">
                Cursos
              </a>
            </li>
            <li>
              <a href="https://www.sanarmed.com/residenciamedica/quem-somos/">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="https://www.sanarmed.com/residenciamedica/duvidas/">
                Dúvidas
              </a>
            </li>
            <li>
              <a href="https://www.sanarmed.com/ciclos-da-medicina/residencia-medica">
                Conteúdos
              </a>
            </li>
            <li>
              <AlreadyStudent>
                <a href="https://aluno.sanarresidenciamedica.com.br/#/entrar">
                  Já sou Aluno
                </a>
              </AlreadyStudent>
            </li>
          </ul>
        )}
      </MenuContent>
    </MainMenuHolder>
  );
}

export default withSizes(mapSizesToProps)(MainMenu);
