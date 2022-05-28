import styled from 'styled-components';

const Backdrop = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.7);
	padding: 40px;
	z-index: 99999999999;
	display: grid;
	align-items: center;
	justify-items: center;
`;

const ContainerModal = styled.div`
	z-index: 2;
	background: white;
	width: 380px;
	min-height: 350px;
	height: auto;
	border-radius: 5px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: space-between;
`;

const HeadModal = styled.div`
	display: flex;
	flex-direction: column;

	div {
		text-align: center;
	}

	button {
		width: 30px;
		font-size: 22px;
		align-self: flex-end;
		background: transparent;
		border: none;
		cursor: pointer;
	}
`;

const BodyModal = styled.div`
	padding-top: 1rem;
	min-height: 60%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;

	& h2 {
		font-size: 1.5rem;
		font-weight: bold;
	}
	& p {
		font-size: 1.2rem;
		margin-top: 1rem;
	}
`;

export { Backdrop, ContainerModal, HeadModal, BodyModal };
