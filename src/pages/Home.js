import { Helmet } from 'react-helmet';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeMain>
        <h1>Welcome to your phonebook</h1>
      </HomeMain>
    </>
  );
}

const HomeMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
  }
`;
