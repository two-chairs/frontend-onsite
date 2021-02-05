import React from 'react';
import styled from 'styled-components';
import colors from './_constants/colors';
import Blog from './app/blog/components/Blog';

function App() {
  return (
    <PageContainer>
      <Blog />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  background: ${colors.tan};
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  padding: 0;
`;

export default App;
