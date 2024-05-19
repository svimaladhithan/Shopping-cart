import React from "react";

const Card = ({ products, cartItems, setCartItems }) => {
  const valueInc = (index) => {
    setCartItems([...cartItems, index]);
  };
  const valueDec = (index) => {
    setCartItems(cartItems.filter((ele) => ele !== index));
  };

  return (
    <>
      {products.map((element, index) => {
        return (
          <div className="col mb-5">
            <div className="card h-100">
            {element.sale && (
              <div
                class="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                Sale
              </div>
            )}
            <img
              className="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="... "
            />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{element.title}</h5>
                {element.rating && (
                  <p className="star">
                    <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                    <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                    <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                    <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                    <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                  </p>
                )}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="text-muted">
                    <s>{element?.oldPrice}</s>&nbsp;
                  </div>
                  {element.price}
                </div>
              </div>
            </div>

            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                {cartItems.includes(index) ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => valueDec(index)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => valueInc(index)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
