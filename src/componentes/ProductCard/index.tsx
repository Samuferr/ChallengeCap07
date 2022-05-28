import './styles.css'
import CarCard from '../../assets/images/car-card.png';
import ButtonIcon from 'componentes/ButtonIcon';

type Props = {
    text: string;
    description: string;
}

const ProductCard = ({text, description} : Props) => {
    return (
       <div className="base-card product-card">
           <div className="card-top-container">
               <img src={CarCard} alt="Nome do Produto" className="rounded mx-auto d-block"/>
           </div>
           <div className="card-bottom-container">
               <h1>{text}</h1>
               <p>{description}</p>
           </div>
           <div className="button-card ">
               <ButtonIcon />
           </div>
       </div>
    );
}

export default ProductCard;