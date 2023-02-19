import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <footer>
          <div>
            <h2>Shoes Shop</h2>
            <h2>Fasion Shoes Collection</h2>
          </div>

          <h6>
            <span>소개</span> | <span>운영 정책</span> |{' '}
            <span>개인정보 처리 및 취급방침</span>
          </h6>

          <h6>Copyright © Shoes Shop All Rights Reserved</h6>
        </footer>
      </FooterWrapper>
    </>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  margin-left: 1rem;

  &::before {
    content: '';
    display: block;
    margin-bottom: 1rem;
    height: 1px;
    width: 95%;
    background-color: #e5e5e5;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h6 {
    margin: 3rem 0;
    font-size: 0.8rem;
  }
`;
