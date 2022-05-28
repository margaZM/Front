import styled from 'styled-components';
import {
	faThumbsUp,
	faCommentAlt,
	faThumbsDown,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PostStatistics = ({ post }) => {
	return (
		<ContainerPost>
			<ImgPost src={post.pictureUrl} alt="imagen-producto" />
			<div>
				<Flex>
					<FontAwesomeIcon icon={faThumbsUp} size="lg" color={'gray'} />
					<p> {post.likeCount} </p>
				</Flex>
				<Flex>
					<FontAwesomeIcon icon={faThumbsDown} size="lg" color={'gray'} />
					<p> {post.dislikeCount} </p>
				</Flex>
			</div>
		</ContainerPost>
	);
};

const ContainerPost = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const ImgPost = styled.img`
	width: 170px;
	height: 200px;
	border-radius: 10px;
`;

const Flex = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.15rem;
`;
