import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from '../../Api';
import { Box, Button, Text } from '@chakra-ui/react';
import moment from 'moment'
import ReactImageGallery from 'react-image-gallery';
import { BasketContext } from '../../contexts/BasketContext';
import '../../App.css'

function ProductDetails() {

  const {addBasket,removeBasket}=useContext(BasketContext)
    const {productId} =useParams();

    const { isLoading, error, data } = useQuery(['products',productId], () =>
    fetchProduct(productId)
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(productId)
  const images=data.photos.map((url)=>({original:url}))

  return (
    <main >

      <Box className='boxCard' margin={"10"}>
        <Box>
        <ReactImageGallery  items={images}  />
        </Box>
        <Box className='secondBox'>
        <Text as={"h2"} fontSize={"2xl"} >{data.title}</Text>
        <Text >{moment(data.createdAt).format("DD/MM/YYYY")} </Text>

        <p>{data.description}</p>

        </Box>
        <Box style={{display:"flex", flexDirection:"column",justifyContent:"space-around"}}>
        <Button style={{marginBottom:"10px"}} onClick={()=>{addBasket(data)}} colorScheme='green'>Add to basket</Button>
        <Button colorScheme='red' onClick={()=>{removeBasket(data._id)}}>Remove to basket</Button>


        </Box>


        


        
      </Box>


    </main>
  )
}

export default ProductDetails