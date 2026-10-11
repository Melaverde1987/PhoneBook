import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { Header, Logo } from './NavBar.styled';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Logo>
        <NavLink to="/">PhoneBook</NavLink>
      </Logo>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
