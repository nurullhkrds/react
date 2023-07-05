import React, { useState } from "react";
import { Menu, Segment, Icon, Button, Label } from "semantic-ui-react";
import "../App.css";
import { useSelector } from "react-redux";


function Navbar() {
  const { quantity, total } = useSelector((store) => store.cart);
  const [isBucket, setIsBucket] = useState(false);

  const { cartItems } = useSelector((store) => store.cart);

  const handleBucket = () => {
    setIsBucket(!isBucket);
  };
  return (
    <>
    <div>
      <Segment className="diVV" inverted>
        <Menu
          style={{ justifyContent: "revert" }}
          inverted
          pointing
          secondary
          className="menu"
        >
          <div>
            <div>
              <Menu.Item style={{ position: "relative" }} name="Apple" />
              <Icon
                style={{ position: "absolute", bottom: "45px", left: "10px" }}
                name="apple"
              />
            </div>
          </div>
        </Menu>

        <div>
          <Button style={{ borderRadius: "15px" }} primary>
            Seçimleri Temizle
          </Button>

          <Button
            onClick={handleBucket}
            labelPosition="y"
            style={{ color: "white", marginLeft: "50px" }}
          >
            <Icon className="iconQualitity" name="shopping basket" />
            <div className="qualitity">
              <p>{quantity}</p>
            </div>
          </Button>
        </div>
      </Segment>
      <div className="labelTotal">
        <Label className="label">
          <Icon name="dollar" />
          Total:{total}
        </Label>
      </div>
      
    </div>
    <div style={{marginLeft:"1100px",marginTop:"28px"}}>
    {isBucket ? (
      <Menu vertical>
        {cartItems.map((item) => {
          return (
            <Menu.Item name="inbox">
              <Label color="teal">{item.quantity}</Label>
              {item.title}
            </Menu.Item>
          );
        })}
      </Menu>
    ) : null}
    </div>
    </>
  );
}

export default Navbar;
