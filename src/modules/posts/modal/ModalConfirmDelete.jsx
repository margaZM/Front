import {
	ContainerModal,
	HeadModal,
	BodyModal,
	Backdrop,
} from '../../../assets/css/styledModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import iconError from '../../../assets/images/error-red.png';
import styled from 'styled-components';
import BaseButton from '../../../ui/BaseButton';

const ModalConfirmDelete = ({
	message,
	isOpenModal,
	setIsOpenModal,
	confirmDeletePost,
	currentPost,
}) => {
	const closeModal = () => {
		setIsOpenModal(false);
	};

	const deletePost = () => {
		confirmDeletePost(currentPost);
		setIsOpenModal(false);
	};

	return (
		<>
			{isOpenModal && (
				<Backdrop>
					<ContainerModal>
						<HeadModal>
							<button onClick={closeModal}>
								<FontAwesomeIcon icon={faTimes} />
							</button>
							<div>
								<img src={iconError} alt="icon" width="60px" />
							</div>
						</HeadModal>

						<BodyModal style={{ lineHeight: '2' }}>
							<p style={{ textAlign: 'center' }}> {message} </p>
						</BodyModal>
						<ContainerButtons>
							<div onClick={closeModal}>
								<BaseButton text={'CANCELAR'} />
							</div>
							<div onClick={deletePost}>
								<BaseButton text={'ELIMINAR'} />
							</div>
						</ContainerButtons>
					</ContainerModal>
				</Backdrop>
			)}
		</>
	);
};

const ContainerButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	& div {
		width: 100%;
	}
	& div:nth-child(1) {
		& button {
			background: #ececec;
			color: gray;
		}
	}
`;

export default ModalConfirmDelete;
