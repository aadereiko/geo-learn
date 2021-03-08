import styled from 'styled-components';
import { APP_COLORS } from '../../shared';

export const MainWrapperElement = styled.div`
  background-color: ${APP_COLORS.backgroundColor};
  width: 100%;
  height: 100%;
`;

export const ContentWrapperElement = styled.div`
  margin-left: 5%;
  width: 90%;
  padding: 1rem;
  margin-top: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  min-height: calc(100% - 57px - 1rem);
`;
