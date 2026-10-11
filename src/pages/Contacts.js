import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { BallTriangle } from 'react-loader-spinner';
import { fetchContacts } from 'redux/contacts/api';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>My contacts</title>
      </Helmet>

      <main>
        <FlexContainer>
          <Card>
            <Filter />
            {isLoading && !error && (
              <BallTriangle
                height={100}
                width={100}
                radius={5}
                color={theme.colors.primary500}
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{
                  position: 'fixed',
                  zIndex: 2,
                  left: 0,
                  right: 0,
                  marginInline: 'auto',
                  width: 'fit-content',
                }}
                visible={true}
              />
            )}
            <ContactList />
          </Card>
          <ContactForm />
        </FlexContainer>
      </main>
    </>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: 24px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radii.sm};
  flex-basis: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: calc(65% - ${({ theme }) => theme.spacing.md});
  }
`;
