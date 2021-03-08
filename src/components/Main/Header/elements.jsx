import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { APP_COLORS } from '../../../shared';

export const HeaderElement = styled(Navbar)`
  background-color: ${APP_COLORS.backgroundDarkColor};
  .navbar-nav a.nav-link {
    color: white;

    &:hover {
      color: white;
    }
  }

  .navbar-brand {
    color: ${APP_COLORS.orange};
    font-weight: 400;

    &:hover {
      color: ${APP_COLORS.orange};
    }
  }
`;
