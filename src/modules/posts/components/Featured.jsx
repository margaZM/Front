import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Featured = ({ post }) => {
	return (
		<Container>
			<img src={post.pictureUrl} alt="post-image" key={post.pictureUrl} />
			<Likes>
				<FontAwesomeIcon icon={faThumbsUp} size="lg" color={'#00628F'} />
				<span>{post.likeCount}</span>
			</Likes>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
`;

const Likes = styled.div`
	position: absolute;
	right: 8px;
	bottom: 16px;
	background: rgba(255, 255, 255, 0.9);
	padding: 0.2rem 0.7rem;
	border-radius: 10px;
	font-size: 1.2rem;
	font-weight: bold;
`;

export default Featured;
