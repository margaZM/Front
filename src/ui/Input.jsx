import styled from 'styled-components';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import {
	Label,
	InputElement,
	FormGroup,
	IconCheck,
	MessageError,
	IconEye,
} from '../assets/css/styledForm';

const InputGroup = styled.div`
	margin-bottom: 25px;
`;

const Input = ({
	id,
	label,
	type,
	name,
	message,
	value,
	onChange,
	onBlur,
	onFocus,
	isvalid,
	disabled,
	autofocus,
	iconCheck = true,
	origin,
	statePassword,
	showPassword,
}) => {
	return (
		<InputGroup>
			<Label htmlFor={name}>{label}</Label>
			<FormGroup>
				<InputElement
					id={id}
					type={type}
					name={name}
					onChange={onChange}
					onBlur={onBlur}
					onFocus={onFocus}
					value={value}
					disabled={disabled}
					autoFocus={autofocus}
				/>
				{iconCheck && origin !== 'password' && (
					<IconCheck icon={faCheckCircle} isvalid={isvalid} />
				)}
				{origin === 'password' && (
					<IconEye icon={statePassword ? faEyeSlash : faEye} onClick={showPassword} />
				)}
			</FormGroup>
			<MessageError>{message}</MessageError>
		</InputGroup>
	);
};

export default Input;
