import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Footer1>
        <footer>
          <div>
            <h3>Shoes Shop</h3>
            <h3>Fasion Shoes Collection</h3>
          </div>

          <h6>
            <span>소개</span> | <span>운영 정책</span> |{' '}
            <span>개인정보 처리 및 취급방침</span>
          </h6>

          <h6>Copyright © Shoes Shop All Rights Reserved</h6>
        </footer>
      </Footer1>
    </>
  );
};

export default Footer;

const Footer1 = styled.footer`
  margin-top: 10px;
  width: 100%;
  padding: 3px;
  padding-bottom: 4px;
  padding-left: 10px;
  @media screen and (min-width: 768px) {
    padding-left: 24px;
  }

  &::before {
    content: '';
    display: block;
    margin-bottom: 2px;
    height: 1px;
    width: 95%;
    background-color: #e5e5e5;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: -1.5rem;
    font-family: var(--font-Lobster);
  }

  h6 {
    margin-top: 3rem;
    font-size: 0.8rem;
  }
`;
