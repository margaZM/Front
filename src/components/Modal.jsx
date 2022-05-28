import {
	ContainerModal,
	HeadModal,
	BodyModal,
	Backdrop,
} from '../assets/css/styledModal';
import Button from '../ui/BaseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import iconSucces from '../assets/images/check-green.png';
import iconError from '../assets/images/error-red.png';

const Modal = ({ title, message, type, isOpenModal, setIsOpenModal, toHome }) => {
	const closeModal = () => {
		setIsOpenModal(false);
		toHome && toHome();
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
								<img
									src={type === 'success' ? iconSucces : iconError}
									alt="icon"
									width="60px"
								/>
							</div>
						</HeadModal>
						<BodyModal>
							<h2> {title} </h2>
							<p> {message} </p>
						</BodyModal>
						<div onClick={closeModal}>
							<Button text={'ENTIENDO'} />
						</div>
					</ContainerModal>
				</Backdrop>
			)}
		</>
	);
};

export default Modal;
