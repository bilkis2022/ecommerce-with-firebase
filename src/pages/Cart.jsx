import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Cart = () => {
  const [inventory, set_inventory] = useState([]);
  const [product, set_product] = useState([]);
  // const [data, setData]=useState([])

  const data = [];
  let get_p = JSON.parse(localStorage.getItem("cart"));
  // console.log(get_p);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        const data = res.data;
        // console.log(data)
        set_inventory(data.products);
        
      } catch (e) {
        console.log(e);
      }
    };
    return ()=> fetchData();

    
  }, []);
  
for (let i = 0; i < get_p.length; i++) {
      let find = inventory.find((element) => get_p[i].id === element.id);
      if(find !== undefined){
        find.quantity = get_p[i]?.qty;
        data.push(find);
      }
      
    }

    const delete_item = (id)=>{
      console.log('dlt');
      let gg = JSON.parse(localStorage.getItem('cart'))
      gg = gg.filter(item=>{
       return item.id !== id;
      })

      localStorage.setItem('cart', JSON.stringify(gg))
    }

  console.log(data);

  return (
    <div>
      <div>
        {data?.map((items, index) => (
          <div key={index}>
            <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={items?.thumbnail}
            
          />
          <Card.Body>
            <Card.Title>
            
              {items?.title}
            </Card.Title>
            <Card.Title>Brand: </Card.Title>

            <Card.Text>Price:{Math.ceil((items.price - items.discountPercentage)* items.quantity) } </Card.Text>
            

            <Button
              variant="primary">
            
              -
            </Button>
            {
              items.quantity
            }
            <Button
              variant="primary">
            
              +
            </Button>

            <Card.Text onClick={()=>delete_item()}>Delete it</Card.Text>
          </Card.Body>
        </Card>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Cart;
