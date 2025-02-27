import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';

const MenuProfile = () => {
	const [userLogged, setUserLogged] = useState({});
	const [navBar, setNavBar] = useState(false);

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user');
		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser);
			setUserLogged(foundUser);
		}
	}, []);

	return (
		<Container>
			{userLogged.name === 'Admin' ? (
				<FontAwesomeIcon icon={faBuilding} size="lg" color={'gray'} />
			) : (
				<FontAwesomeIcon icon={faUser} size="lg" color={'gray'} />
			)}

			<NameUser> {userLogged.name} </NameUser>
			<FontAwesomeIcon
				icon={faCaretDown}
				size="lg"
				style={{ cursor: 'pointer' }}
				color={'gray'}
				onClick={() => setNavBar(true)}
			/>
			{navBar && <NavBar setNavBar={setNavBar} navBar={navBar} />}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;
`;

const NameUser = styled.span`
	display: none;
	@media (min-width: 768px) {
		display: block;
		text-transform: capitalize;
	}
`;

export default MenuProfile;
