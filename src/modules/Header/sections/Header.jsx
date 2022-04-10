import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LogoImg from '../../../assets/images/logo.png';
import LogoMobileImg from '../../../assets/images/logomobile.svg';
import InputSearch from '../../../ui/InputSearch';
import MenuProfile from '../components/MenuProfile';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ setSearch, search, setIsOpenModal, setIsEdit, origin }) => {
	const [openIconSearch, setOpenIconSearch] = useState(false);

	const redirectTo = () => {
		window.location.assign('/');
	};
	const user = JSON.parse(localStorage.getItem('user'));

	const openModal = () => {
		setIsEdit(false);
		setIsOpenModal(true);
	};
	const getIconSearch = () => {
		setOpenIconSearch(true);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setOpenIconSearch(false);
			}
		};
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<HeaderElement isHide={openIconSearch}>
			<Logo src={LogoImg} alt="logo" onClick={redirectTo} />
			<LogoMobile
				isHide={openIconSearch}
				src={LogoMobileImg}
				onClick={redirectTo}
				alt="logo"
			/>
			{origin !== 'statistics' ? (
				<ShowInputSearch>
					<InputSearch setSearch={setSearch} search={search} />
				</ShowInputSearch>
			) : (
				<div></div>
			)}
			{!openIconSearch ? (
				<IconSearchMobile onClick={getIconSearch}>
					<FontAwesomeIcon icon={faSearch} size="lg" color={'gray'} />
				</IconSearchMobile>
			) : (
				<div></div>
			)}

			<Menu isHide={openIconSearch}>
				{origin !== 'statistics' && user?.name === 'Admin' && (
					<button onClick={openModal}>
						<FontAwesomeIcon icon={faPlus} size="lg" color={'white'} />
					</button>
				)}
				<MenuProfile />
			</Menu>
			{openIconSearch && (
				<ContainerInputSearch>
					<InputSearch setSearch={setSearch} search={search} />
				</ContainerInputSearch>
			)}
		</HeaderElement>
	);
};

const HeaderElement = styled.div`
	z-index: 99999;
	min-width: 99vw;
	max-width: 99vw;
	position: fixed;
	display: grid;
	/* display: ${(props) => (props.isHide ? 'none' : 'grid')}; */
	grid-template-columns: 1fr 40px 120px;
	grid-template-columns: ${(props) => (props.isHide ? '1fr' : '1fr 40px 120px')};
	align-items: center;
	background: white;
	grid-area: header;
	padding: 1rem;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	& button {
		background: linear-gradient(90deg, #073992 1.89%, #00628f 98.36%);
		height: 35px;
		width: 35px;
		height: 35px;
		border: none;
		border-radius: 50%;
		cursor: pointer;
	}
`;

const Logo = styled.img`
	display: none;
	cursor: pointer;
	@media (min-width: 768px) {
		display: block;
	}
`;

const LogoMobile = styled.img`
	display: ${(props) => (props.isHide ? 'none' : 'block')};
	cursor: pointer;
	@media (min-width: 768px) {
		display: none;
	}
`;

const IconSearchMobile = styled.div`
	display: grid;
	justify-content: center;
	cursor: pointer;
	@media (min-width: 768px) {
		display: none;
	}
`;

const Menu = styled.div`
	display: ${(props) => (props.isHide ? 'none' : 'flex')};
	justify-content: flex-end;
	gap: 1.5rem;
`;

const ShowInputSearch = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: block;
	}
`;

const ContainerInputSearch = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
`;

export default Header;
