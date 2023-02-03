import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { DispatchType } from '../store/store';
import { getAllProductApi } from '../store/productSlice';
import { motion } from 'framer-motion';
import mainImage from '../img/main.jpg';
import useMediaQuery from '../hooks/useMediaQuery';
import { DefaultMotion, DelayMotion } from '../shares/Motion';

const WelcomePage = () => {
	const dispatch: DispatchType = useDispatch();
	const navigate = useNavigate();
	const getAllProductByApi = () => {
		dispatch(getAllProductApi());
	};

	useEffect(() => {
		getAllProductByApi();
	}, []);

	const isAboveMediumScreens = useMediaQuery('(min-width:1200px)');

	return (
		<>
			<Container>
				<DelayMotion>
					<p>Shoes,</p>
					<p>the smart choice.</p>
				</DelayMotion>
				{isAboveMediumScreens && (
					<DefaultMotion>
						<figure>
							<img
								src={mainImage}
								alt="main"
								onClick={() => {
									navigate('/main');
								}}
							></img>
						</figure>
					</DefaultMotion>
				)}
			</Container>
		</>
	);
};

export default WelcomePage;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 4rem;

	figure img {
		height: 100%;
		width: 90%;
		margin: auto;
		display: block;
		opacity: 1;
		border-radius: 50px;
		cursor: pointer;
		-webkit-transition: 0.2s ease-in-out;
		transition: 0.2s ease-in-out;
	}

	figure:hover img {
		opacity: 0.6;
	}

	p {
		font-size: 5rem;
		margin: 5rem;
		font-family: 'AlfaSlabOne-Regular';
	}
`;
