import { useState } from 'react';
import styled from 'styled-components';
import Header from '../modules/Header/sections/Header';
import Categories from '../modules/posts/components/Categories';
import SectionFeatured from '../modules/posts/sections/SectionFeatured';
import GlobalStyle from '../assets/css/globalStyles';
import BannerMujer from '../assets/images/banners_mujer.svg';
import BannerHombre from '../assets/images/banners_hombres.svg';
import BannerNiños from '../assets/images/banner_niños.svg';
import SectionPosts from '../modules/posts/sections/SectionPosts';
import { Provider } from 'react-redux';
import store from '../stores/index';

const HomePage = () => {
	const [category, setCategory] = useState('');
	const [search, setSearch] = useState('');
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isEdit, setIsEdit] = useState(false);

	return (
		<Provider store={store}>
			<GridLayout>
				<GlobalStyle />
				<Header
					setSearch={setSearch}
					search={search}
					setIsOpenModal={setIsOpenModal}
					setIsEdit={setIsEdit}
					origin={'posts'}
				/>
				<Categories setCategory={setCategory} />
				<Posts>
					<SectionFeatured />
					<SectionPosts
						category={category}
						search={search}
						setIsOpenModal={setIsOpenModal}
						isOpenModal={isOpenModal}
						setIsEdit={setIsEdit}
						isEdit={isEdit}
					/>
				</Posts>
				<Banners>
					<img src={BannerMujer} alt="banner_mujer" />
					<img src={BannerHombre} alt="banner_hombre" />
					<img src={BannerNiños} alt="banner_niños" />
				</Banners>
			</GridLayout>
		</Provider>
	);
};

const GridLayout = styled.div`
	display: grid;
	grid-template-areas:
		'header header header'
		'. . .'
		'. categories .'
		'. . .'
		'. posts .';
	grid-template-rows: 8vh 8vh 25vh 2vh 65vh;
	grid-template-columns: 1% 97% 2%;
	@media (min-width: 768px) {
		grid-template-columns: 2% 20% 5% 46% 5% 20% 2%;
		grid-template-areas:
			'header header header header header header header'
			'. . . . . . .'
			'. categories . posts . banners .';
		grid-template-rows: 10vh 5vh 85vh;
	}
`;

const Posts = styled.div`
	grid-area: posts;
`;

const Banners = styled.div`
	grid-area: banners;
	display: none;
	@media (min-width: 768px) {
		display: flex;
		gap: 2rem;
		flex-direction: column;
	}
`;

export default HomePage;
