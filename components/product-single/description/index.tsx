type ProductDescriptionType = {
  show: boolean;
  desc: string;
}

const Description = ({ show, desc }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>{desc}</p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>{desc}</p>
      </div>
    </section>
  );
};
  
export default Description;
    