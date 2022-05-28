import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { FormGroup, IconCheck } from '../assets/css/styledForm';

const InputSearch = ({ setSearch, search }) => {
	const handleSearch = (e) => {
		setSearch(e.target.value.toLowerCase());
	};

	return (
		<ContainerInputSearch>
			<FormGroup>
				<div>
					<InputElement type="search" onKeyUp={handleSearch} placeholder="Buscar...." />
					{!search && <IconCheck icon={faSearch} style={{ color: 'gray' }} />}
				</div>
			</FormGroup>
		</ContainerInputSearch>
	);
};

const ContainerInputSearch = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InputElement = styled.input`
	width: 100%;
	border-radius: 30px;
	max-height: 40px;
	height: 40px;
	background: #f5f5f5;
	border: none;
	padding: 0 10px;
	min-width: 300px;

	&:focus {
		border: 2px solid #6aa5ea;
		outline: none;
		box-shadow: 3px 0px 30px rgba(163, 163 163 0.4);
	}
`;

export default InputSearch;
