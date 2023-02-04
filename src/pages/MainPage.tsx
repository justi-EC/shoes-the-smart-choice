import styled from 'styled-components';
import bannerImg from '../img/main_img.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';
import Item from '../components/Item';
import { ProductModel } from '../shares/Type';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import CollectionList from '../components/CollectionList';
import LoadingSpinner from '../shares/LoadingSpinner';

interface CustomItemType extends Array<ProductModel> {}

const MainPage = () => {
	const ref = useRef<HTMLSpanElement>(null);
	const { arrProduct } = useSelector((state: RootState) => state.product);
	const isPending = useSelector((state: RootState) => state.product.isPending);

	let todayItem: CustomItemType = [];
	for (let i = 0; i < 10; i++) {
		const random = arrProduct[Math.floor(Math.random() * arrProduct.length)];
		if (todayItem.indexOf(random) === -1) {
			todayItem.push(random);
			i++;
		}
	}

	const scrollToElement = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<Banner onClick={scrollToElement}>
				<span>Shoes,</span>
				<span>the</span>
				<span>smart choice.</span>
				<span> </span>
			</Banner>
			<Menu>
				<span ref={ref}>추천상품</span>
				<span>{`>`}</span>
			</Menu>
			{!isPending && (
				<GridItem>
					<Swiper
						modules={[Navigation]}
						spaceBetween={30}
						slidesPerView={1}
						navigation
						breakpoints={{
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
					>
						{todayItem.map((item: ProductModel) => {
							return (
								<SwiperSlide>
									<Item product={item} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</GridItem>
			)}
			{isPending && <LoadingSpinner />}
			<CollectionList />
		</>
	);
};

export default MainPage;

const Banner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 80%;
	height: 60vh;
	margin: 5rem auto 0;
	padding-bottom: 16px;
	cursor: pointer;
	color: #828282;
	font-size: 2.5rem;
	background-image: url(${bannerImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50%;
	font-family: 'AlfaSlabOne-Regular';

	@keyframes fadeInDown {
		0% {
			opacity: 0;
			transform: translate3d(0, -100%, 0);
		}
		to {
			opacity: 1;
			transform: translateZ(0);
		}
	}

	> span:first-child {
		margin-top: 4rem;
		margin-left: 10%;
		animation: fadeInDown 1s;
	}
	> span:nth-child(2) {
		margin-left: 15%;
		animation: fadeInDown 2s;
	}
	> span:nth-child(3) {
		margin-left: 20%;
		animation: fadeInDown 3s;
	}
	> span:last-child {
		font-size: 3rem;
		margin: 4rem auto 0;
		cursor: pointer;
	}
`;

export const GridItem = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: center;
	align-items: center;
	width: 70%;
	margin: 0 auto;

	.swiper-wrapper,
	.swiper-slide {
		width: 400px;

		@media screen and (min-width: 768px) {
			width: 700px;
		}

		@media screen and (min-width: 1024px) {
			width: 1250px;
		}
	}

	@media screen and (max-width: 700px) {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
`;

export const Menu = styled.div`
	position: relative;
	width: 80%;
	margin: 0 auto;
	margin-top: 8rem;
	padding: 6px 16px;
	font-size: 24px;
	border-bottom: 2px solid #3d3d3d;
	text-align: left;

	> span:last-child {
		position: absolute;
		right: 0;
	}

	@media screen and (max-width: 700px) {
		font-size: 18px;
	}
`;
