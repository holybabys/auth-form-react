import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 40px 0px;
  display: flex;
  justify-content: center;
`;

const Logo = styled.a`
  text-decoration: none;
  color: #000000;
  cursor: pointer;
`;

const TextLogo = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 78px;
`;

const Content = styled.main`
  min-height: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Header>
      <Logo href="/">
        <TextLogo>
          ONLY.
        </TextLogo>
      </Logo>
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
);

export default MainLayout;
