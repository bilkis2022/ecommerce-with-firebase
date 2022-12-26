import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Cart = () => {
  const [inventory, set_inventory] = useState([])
  const [product, set_product] = useState([]);

  useEffect(() => {
    const get_all_products = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            const data =  res.data
            set_inventory(data.products.slice(0, 6))
            console.log('get', res.data);
            console.log(data);
        } 
        catch (e) {
            console.log(e);
        }
        
    }
    return () => get_all_products()
  
}, [])

  useEffect(() => {
    const get_p = JSON.parse(localStorage.getItem("cart"));
    console.log(get_p);
    set_product([...get_p]);
  }, []);

  console.log("gg", product);

  return (
    <div>
      <div>
        {/* {
          product.map((items, index)=>(

          ))
        } */}
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={items.thumbnail}
            onClick={() => navigate(`/product-details/${items.id}`)}
          />
          <Card.Body>
            <Card.Title
              onClick={() => navigate(`/product-details/${items.id}`)}
            >
              {" "}
              {items.title}
            </Card.Title>
            <Card.Title>Brand: {items.brand}</Card.Title>

            <Card.Text>Price: {items.price}</Card.Text>
            <Card.Text>Discount: {items.discountPercentage}</Card.Text>
            <Card.Text>Rating: {items.rating}</Card.Text>

            <Button
              variant="primary"
              onClick={() => navigate(`/product-details/${items.id}`)}
            >
              view details
            </Button>
          </Card.Body>
        </Card> */}
      </div>
    </div>
  );
};

export default Cart;
