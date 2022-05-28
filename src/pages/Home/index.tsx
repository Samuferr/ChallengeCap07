import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import './styles.css';
import ButtonIcon from 'componentes/ButtonIcon';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-image-container">
          <MainImage />
        </div>
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
        </div>
        <div className="home-content-container">
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="home-card-catalogo">
        <NavLink to="/products">
        <ButtonIcon />
        </NavLink>
        <div className="home-content-card-catalog">
          <p>Começe agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
