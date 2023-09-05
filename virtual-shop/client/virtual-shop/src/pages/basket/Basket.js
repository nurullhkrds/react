import React, { useContext, useRef, useState } from "react";
import {
  Alert,
  AlertIcon,
  CardBody,
  Image,
  Heading,
  Text,
  Stack,
  Card,
  Button,
  Divider,
  ButtonGroup,
  CardFooter,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { BasketContext } from "../../contexts/BasketContext";
import "../../styles/Basket.css";
import { postOrder } from "../../Api";

function Basket() {
  const { basket, removeBasket ,emptyBasket} = useContext(BasketContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [address, setAddress] = useState("");

  function removeItem(e) {
    let id = e.target.id;
    removeBasket(id);
  }
  const handleSubmit =async () => {
    const itemIds=basket.map((item)=>item._id)
    const input={
      address,
      items:JSON.stringify(itemIds),
    }

    const response=await postOrder(input);
    emptyBasket();
    onClose();

  }
  return (
    <div>
      {
     
      basket.length < 1 ? (
        <Alert status="info">
          <AlertIcon />
          The product is not in the basket!
        </Alert>
      ) : (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-end"}} >
             <div>
           <Button width={"150px"}  onClick={onOpen} colorScheme="green">
             buy
           </Button>
         </div>
        <Grid  templateColumns="repeat(1, 2fr)" gap={6}>
          {basket.map((item, key) => {
            return (
              <>
              <div style={{height:"300px",padding:"85px"}}>

             
                <GridItem   key={key}>
                  <Card style={{display:"flex"}}   >
                    <CardBody  style={{display:"flex"}} >
                      <Image
                      style={{width:"100px"}}

                        src={item.photos[0]}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Stack marginLeft={"15px"}  mt="6" spacing="3">
                        <Heading size="md">{item.title}</Heading>
                        <Text>{item.description}</Text>
                        <Text color="blue.600" fontSize="2xl">
                          {item.price}
                          <span>
                            <strong> TL</strong>
                          </span>
                        </Text>
                      </Stack>
                        
                    <CardFooter>
                      <ButtonGroup spacing="125">
                        <Button
                          id={item._id}
                          onClick={removeItem}
                          variant="solid"
                          colorScheme="red"
                        >
                          Remove
                        </Button>

                        <Modal
                          initialFocusRef={initialRef}
                          isOpen={isOpen}
                          onClose={onClose}
                        >
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>Order</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                              <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Textarea
                                  ref={initialRef}
                                  placeholder="Address"
                                  value={address}
                                  onChange={(e) => {
                                    setAddress(e.target.value);
                                  }}
                                />
                              </FormControl>
                            </ModalBody>

                            <ModalFooter>
                              <Button
                                onClick={handleSubmit}
                                colorScheme="blue"
                                mr={3}
                              >
                                Save
                              </Button>
                              <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </ButtonGroup>
                    </CardFooter>
                    </CardBody>
                
                  </Card>
                </GridItem>
                </div>
              </>
            );
          })}
       
        </Grid>
        
         </div>
         
      
      )}
      
     
    </div>
  );
}

export default Basket;
