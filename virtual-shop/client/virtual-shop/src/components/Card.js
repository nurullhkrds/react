import React, { useContext } from "react";
import { Box, Image, Button, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from 'moment'
import { BasketContext } from "../contexts/BasketContext";

function Card({item}) {
  const {basket,addBasket}=useContext(BasketContext)

  function handleAdd(){
    addBasket(item)


  }
  return (
    <main >
      <Box borderWidth={"25px"} borderRadius={"lg"} overflow={"hidden"} p={"5"}>
        <Link to={`/product/${item._id}`}>
          <Image src={item.photos[0]} loading="lazy" style={{height:"250px",width:"350px"}} />
          <Box p={"6"}>
            <Box display={"plex"} alignItems={"baseline"}>
              {moment(item.createdAt).format('DD/MM/YYYY')}
            </Box>
            <Box mt={"1"} fontWeight={"semibold"} as="h4" lineHeight={"tight"}>
                {item.title}
            </Box>
            <Divider/>
            <Box style={{}}>{item.price} <span><strong style={{fontSize:"20px"}}>TL</strong></span> </Box>
          </Box>
        </Link>
        <Button onClick={handleAdd} colorScheme="green">Sepete Ekle</Button>
      </Box>
    </main>
  );
}

export default Card;
