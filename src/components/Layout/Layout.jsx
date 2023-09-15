import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import {
  Container,
  Navigation,
  LinkContainer,
  StyledNavLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation>
          <LinkContainer>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </LinkContainer>
        </Navigation>
      </header>

      <main>
        <Suspense
          fallback={
            <Oval
              height={60}
              width={60}
              color="#f2ab26"
              wrapperStyle={{}}
              wrapperClass="loaderMargin"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#f2ab26"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </Container>
  );
};

export default Layout;
