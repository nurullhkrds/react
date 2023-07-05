import React ,{useState}from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import "../Item.css"
import { increase,decrease } from "../control/cartSlice";
import { useDispatch } from "react-redux";


function Item(props) {
  const{id,title,price,quantity,img}=props;
  const handleDcrement=(id)=>{
    dispatch(decrease(id))

  }
  const handleIncrement=(id)=>{
    dispatch(increase(id))

  }
 
 


    const dispatch=useDispatch();
  return (
    <div>
      <Card style={{margin:"25px"}}>
        <Image style={{height:"400px"}} src={props.img} wrapped ui={false} />
        

        <Card.Content>
          <Card.Header>{title}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <div className="divBtn">
            <div>
              <p>
                {props.price} <i>$</i>
              </p>
            </div>
            <div>
              <Button onClick={()=>handleDcrement(id)} labelPosition="yess">
                <Icon name="minus" />
              </Button>
              <Button  onClick={()=>handleIncrement(id)}
              labelPosition="yess">
                <Icon name="plus" />
              </Button>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Item;
