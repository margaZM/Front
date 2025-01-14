import { logout } from '../../../stores/AccessTokenStore';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = ({ setNavBar }) => {
	const user = JSON.parse(localStorage.getItem('user'));
	const closeNavBar = () => {
		setNavBar(false);
	};

	return (
		<nav>
			<Nav onClick={closeNavBar}>
				<span>¡Bienvenido!</span>
				<span>{user?.name}</span>
				{user?.name === 'Admin' && <Link to="/statistics">Estadísticas</Link>}
				<a onClick={logout}>Salir</a>
			</Nav>
		</nav>
	);
};

const Nav = styled.div`
	width: 180px;
	height: auto;
	background: white;
	z-index: 100;
	position: fixed;
	top: 0;
	right: 0;
	padding-top: 1rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	& span {
		padding: 0.7rem;
		display: block;
		text-transform: capitalize;
	}
	& a {
		display: block;
		padding: 0.7rem;
		color: black;
		cursor: pointer;
		text-decoration: none;

		&:hover {
			background: #e5e5e5;
		}
	}
`;

export default NavBar;
