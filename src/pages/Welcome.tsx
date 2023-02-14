import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mainImage from '../img/main.jpg';
import { DefaultMotion, DelayMotion } from '../shares/Motion';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <DelayMotion>
          <p>Shoes,</p>
          <p>the smart choice.</p>
        </DelayMotion>

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
      </Container>
    </>
  );
};

export default WelcomePage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  figure img {
    height: 100%;
    width: 90%;
    margin: auto;
    display: block;
    opacity: 1;
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
    font-family: var(--font-Montserrat-Italic);
  }
`;
