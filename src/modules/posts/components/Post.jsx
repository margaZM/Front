import { useState } from 'react';
import styled from 'styled-components';
import LogoPost from '../../../assets/images/logomobile.svg';
import {
	faEdit,
	faThumbsUp as fasThumbsUp,
	faThumbsDown as fasThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import {
	faThumbsUp,
	faCommentAlt,
	faTrashAlt,
	faThumbsDown,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TAGS } from '../../../constants.js/tags';
import { formatDate } from '../../../helpers/FormatDate';

import { setUpdatePost } from '../../../stores/slices/posts';
import { reactToPost } from '../../../services/PostService';
import { useDispatch } from 'react-redux';

const Post = ({
	post,
	handleDeletePost,
	handleNewComment,
	handleEditPost,
	origin,
	totalComments,
}) => {
	const [like, setLike] = useState(false);
	const [disLike, setDisLike] = useState(false);

	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('user'));

	const postLike = (post) => {
		if (like === false) {
			setLike(true);
			setDisLike(false);
			const data = {
				postId: post.id,
				reactionType: 1,
			};

			reactToPost(data).then((response) => {
				dispatch(
					setUpdatePost({
						...post,
						userReaction: response.reactionType,
						likeCount: post.likeCount + 1,
						dislikeCount: post.dislikeCount - 1,
					}),
				);
			});
		} else {
			setLike(false);
			const data = {
				postId: post.id,
				reactionType: 0,
			};

			reactToPost(data).then((response) => {
				dispatch(
					setUpdatePost({
						...post,
						userReaction: response.reactionType,
					}),
				);
			});
		}
	};

	const postDisLike = (post) => {
		console.log(post);

		if (disLike === false) {
			setDisLike(true);
			setLike(false);
			const data = {
				postId: post.id,
				reactionType: 2,
			};

			reactToPost(data).then((response) => {
				dispatch(
					setUpdatePost({
						...post,
						userReaction: response.reactionType,
						dislikeCount: post.dislikeCount + 1,
						likeCount: post.likeCount - 1,
					}),
				);
			});
		} else {
			setDisLike(false);
			const data = {
				postId: post.id,
				reactionType: 0,
			};

			reactToPost(data).then((response) => {
				dispatch(
					setUpdatePost({
						...post,
						userReaction: response.reactionType,
					}),
				);
			});
		}
	};

	return (
		<ContainerPost origin={origin}>
			<HeaderPost>
				<DatePost>
					<img src={LogoPost} alt="logo_fashion_like" />
					<div>
						<h3>Fashion Like</h3>
						<span>{formatDate(post.creationDate)}</span>
					</div>
				</DatePost>
				<TagCategory
					color={TAGS.map(
						(tag) => tag.value === post.tags[post.tags.length - 1] && tag.color,
					)}
				>
					{post.tags[post.tags.length - 1]}
				</TagCategory>
			</HeaderPost>
			<DescriptionPost>{post.description}</DescriptionPost>
			<ImgPost src={post.pictureUrl} alt="imagen-producto" origin={origin} />
			<Flex>
				<Flex>
					{
						<Icons>
							{user.name !== 'Admin' ? (
								<FontAwesomeIcon
									icon={
										like && post.userReaction == 1 && user?.name === 'Admin'
											? fasThumbsUp
											: faThumbsUp
									}
									size="lg"
									color={post.userReaction === 1 ? '#00628f' : 'gray'}
									onClick={() => postLike(post)}
								/>
							) : (
								<FontAwesomeIcon
									icon={like || post.userReaction == 1 ? fasThumbsUp : faThumbsUp}
									size="lg"
									color={post.userReaction === 1 ? '#00628f' : 'gray'}
								/>
							)}

							<span>{post.likeCount > 0 && post.likeCount}</span>
						</Icons>
					}
					{
						<Icons>
							{user.name !== 'Admin' ? (
								<FontAwesomeIcon
									icon={disLike || post.userReaction == 2 ? fasThumbsDown : faThumbsDown}
									size="lg"
									color={post.userReaction === 2 ? '#00628f' : 'gray'}
									onClick={() => postDisLike(post)}
								/>
							) : (
								<FontAwesomeIcon
									icon={disLike || post.userReaction == 2 ? fasThumbsDown : faThumbsDown}
									size="lg"
									color={post.userReaction === 2 ? '#00628f' : 'gray'}
								/>
							)}
							<span>{post.dislikeCount > 0 && post.dislikeCount}</span>
						</Icons>
					}
					{origin === 'post' && (
						<Icons>
							<FontAwesomeIcon
								icon={faCommentAlt}
								size="lg"
								color={'gray'}
								onClick={() => handleNewComment(post.id)}
							/>
							<span>{totalComments}</span>
						</Icons>
					)}
				</Flex>
				<Flex>
					{origin === 'post' && user?.name === 'Admin' && (
						<FontAwesomeIcon
							icon={faEdit}
							size="lg"
							color={'gray'}
							onClick={() => handleEditPost(post)}
						/>
					)}

					{origin === 'post' && user?.name === 'Admin' && (
						<FontAwesomeIcon
							icon={faTrashAlt}
							size="lg"
							color={'gray'}
							id={post.id}
							values={post.id}
							onClick={() => handleDeletePost(post)}
						/>
					)}
				</Flex>
			</Flex>
		</ContainerPost>
	);
};

const ContainerPost = styled.div`
	padding: 1rem 1.5rem;
	background: #ffffff;
	border-radius: 10px;
	max-width: 99vw;
	margin: 0.5rem 0rem;
	max-height: ${(props) => (props.origin === 'comments' ? '500px' : 'auto')};
	@media (min-width: 1120px) {
		margin: 0.5rem 1.5rem;
	}
`;

const HeaderPost = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.25rem;
`;

const DatePost = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	& span {
		color: gray;
	}
`;

const TagCategory = styled.span`
	border: solid 2px ${(props) => props.color};
	padding: 0.2rem;
	border-radius: 5px;
`;

const ImgPost = styled.img`
	width: 100%;
	height: auto;
	max-height: 60vh;
	margin-bottom: 1.25rem;

	@media (min-width: 768px) {
		max-height: ${(props) => (props.origin === 'comments' ? '250px' : '50vh')};
	}
	@media (min-width: 1024px) {
		max-height: ${(props) => (props.origin === 'comments' ? '250px' : '60vh')};
	}
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
	cursor: pointer;
	@media (min-width: 1120px) {
		gap: 3rem;
	}
`;

const DescriptionPost = styled.p`
	margin: 0.5rem 0;
	line-height: 1.5;
`;

const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 0.2rem;
	color: gray;
`;

export default Post;
