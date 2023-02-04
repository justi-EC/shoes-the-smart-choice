import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Cart } from '@styled-icons/ionicons-outline/Cart';
import { User } from '@styled-icons/boxicons-regular/User';

const Header = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	function toggleMenuOpen() {
		setIsOpen(!isOpen);
	}
	return (
		<HeaderStyle>
			<HeaderOverlay open={isOpen} onClick={toggleMenuOpen} />
			<h1 onClick={() => navigate('/')}>Shoes Shop</h1>
			<header>
				<HeaderMenu open={isOpen}>
					<NavLink to="/main">메인 화면</NavLink>
					<NavLink to="/itemall">전체 상품</NavLink>
					<NavLink to="/login">
						<User width={35} height={35} />
					</NavLink>
					<NavLink to="/cart">
						<Cart width={40} height={40} />
					</NavLink>
				</HeaderMenu>
			</header>
		</HeaderStyle>
	);
};

const HeaderStyle = styled.div`
	position: fixed;
	z-index: 97;
	top: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 5rem;
	padding: 0 1rem;
	background-color: #fff;
	font-size: 1.5rem;

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		display: none;
		font-family: var(--font-Lobster);

		@media screen and (min-width: 768px) {
			display: block;
			font-size: 1.5rem;
			cursor: pointer;
		}
	}
`;

const HeaderOverlay = styled.div<any>`
	position: fixed;
	z-index: 98;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(21, 21, 21, 0.5);
	visibility: hidden;
	opacity: 0;
	transition: 0.3s;

	${(props: any) =>
		props.open &&
		css`
			visibility: visible;
			opacity: 1;
		`}

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const HeaderMenu = styled.div<any>`
	position: fixed;
	z-index: 99;
	top: 0;
	right: 0;
	translate: 100% 0;
	width: 14rem;
	height: 100%;
	padding: 1.25rem;
	display: flex;
	gap: 1.5rem;
	flex-direction: column;
	align-items: flex-start;
	background-color: #fff;
	visibility: hidden;
	transition: 0.3s;

	${(props) =>
		props.open &&
		css`
			translate: 0 0;
			visibility: visible;
		`}

	@media screen and (min-width: 700px) {
		position: relative;
		top: 0;
		right: 0;
		translate: 0 0;
		width: auto;
		background-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		visibility: visible;
	}
`;

const NavLink = styled(Link)`
	margin-top: 2rem;
	margin-left: 1rem;
	color: black;
	text-decoration: none;
	display: flex;
	align-items: center;

	@media screen and (min-width: 700px) {
		margin-top: 0;
	}

	&:hover {
		border-bottom: 2px solid #3d3d3d;
	}

	span {
		font-size: 2rem;
		margin-right: 1rem;

		@media screen and (min-width: 700px) {
			display: none;
		}
	}
`;

export default Header;
