import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Product_details = () => {
    const [product, set_product] = useState([]);
    const { id } = useParams();
    const [quantity, set_quantity] = useState(1);

    useEffect(() => {
      
        const get_product = async() => {

            try {
                const res = await axios.get(`https://dummyjson.com/products/${id}`)
                const data = res.data
                set_product(data)
                console.log('data', res);
            } 
            catch (e) {
                console.log(e);
            }
        }
        return () => get_product()
    }, [])
    
  return (
    <div>
        <div>
           
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={product.thumbnail}  />
                        <Card.Body>
                            <Card.Title > {product.title}</Card.Title>
                            <Card.Title>Brand: {product.brand}</Card.Title>
                            
                            <Card.Text>
                            Description: {product.description}
                            </Card.Text>
                            <Card.Text>
                              Price: {product.price}
                            </Card.Text>
                            <Card.Text>
                              Discount: {product.discountPercentage}
                            </Card.Text>
                            <Card.Text>
                              Rating: {product.rating}
                            </Card.Text>
                            <Card.Text>
                              stock: {product.stock}
                            </Card.Text>
                            

                            <Button variant="primary" onClick={()=>set_quantity(quantity - 1)}>-</Button>
                            {quantity}
                            <Button variant="primary" onClick={()=>set_quantity(quantity + 1)}>+</Button>
                        </Card.Body>
                    </Card>
                
        </div>
    </div>
  )
}

export default Product_details