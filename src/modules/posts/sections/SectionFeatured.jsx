import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Featured from '../components/Featured';
import { getAllPosts } from '../../../stores/slices/posts';
import { useDispatch, useSelector } from 'react-redux';

const SectionFeatured = () => {
	const dispatch = useDispatch();

	let { posts } = useSelector((state) => state.posts);
	const getFiveFeaturedPosts = [...posts]
		.sort((a, b) => b.likeCount - a.likeCount)
		.slice(0, 5);

	useEffect(() => {
		dispatch(getAllPosts());
	}, [dispatch]);
	console.log(posts);

	return (
		<Container>
			<Title title={'Destacados'} />
			<Divider />
			<FeaturedDiv>
				{getFiveFeaturedPosts.length > 0 &&
					getFiveFeaturedPosts.map(
						(post) => post.likeCount > 0 && <Featured post={post} key={post.id} />,
					)}
			</FeaturedDiv>
		</Container>
	);
};

const Container = styled.div`
	padding: 1rem 1.5rem;
	margin-bottom: 1rem;
	& div {
		display: flex;
		gap: 0.7rem;
		align-items: center;
	}
`;

const Divider = styled.div`
	width: 125px;
	height: 1.12px;
	background: #354a62;
	margin: 1rem 0;
`;

const FeaturedDiv = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	margin-bottom: 1rem;
	overflow: auto;
	& img {
		min-width: 200px;
		max-width: 200px;
		height: 200px;
		border-radius: 10px;
		margin-bottom: 0.5rem;
	}
	&::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar:horizontal {
		height: 8px;
		background: #ececec;
		border-radius: 30px;
	}
	&::-webkit-scrollbar-track {
		background: #ececec;
		border-radius: 30px;
	}
	&::-webkit-scrollbar-thumb {
		background: #ccd7e0;
		border-radius: 30px;
	}
`;

export default SectionFeatured;
