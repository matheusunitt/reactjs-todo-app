import React from 'react';

import {
  Container,
  Wrapper,
  Main,
} from './styles';

import NavBar from '../NavBar';
import Footer from '../Footer';

import Todos from '../../containers/Todos';

const Layout = () => (
  <Container>
    <NavBar />
    <Wrapper>
      <Main>
        <Todos />
      </Main>
      <Footer />
    </Wrapper>
  </Container>
);

export default Layout;