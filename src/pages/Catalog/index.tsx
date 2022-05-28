import ProductCard from 'componentes/ProductCard';
import Search from 'componentes/Search';

const Catalog = () => {
  return (
    <div className="container my-4">
        <div>
          <Search />
        </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <ProductCard text="Audi Supra TT" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi"/>
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard text="Camaro" description="Camaro é um carro muito bonito"/>
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard text="Ferrari" description="Ferrari design italiano"/>
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard text="Corvete" description="Clássico mais amado do mundo"/>
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard text="Brasilia" description="Pra você que curte velocidade e emoção"/>
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard text="Fusca" description="Compacto mais famoso do Brasil"/>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
