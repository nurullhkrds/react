import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct,updateProduct } from "../../Api";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FieldArray, Formik } from "formik";
import { validationUpdate } from "./Validation";   
import { message } from 'antd';

function ProductEdit() {
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(
    ["admin:product", product_id],
    () => fetchProduct(product_id)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  const handleSubmit = async(values,bag) => {
    message.loading({content:"Loading...",key:"product_update"})

    try{
      await updateProduct(values,product_id);
      message.success({
        content:"The product succesfully updated",
        key:"product_update",
        duration:2,
      })

    }
    catch(e){
      message.error("The product does not updated")
    }


  };

  return (
    <main>
      <Text fontSize={"3xl"}>Edit</Text>

      <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          price: data.price,
          photos: data.photos,
        }}
        validationSchema={validationUpdate}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          touched,
          errors,
          values,
          isSubmitting,
        }) => (
          <>
            <Box>
              <Box>
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel> Title </FormLabel>
                    <Input
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      disabled={isSubmitting}
                      isInvalid={touched.title&& errors.title}
                    />
                  </FormControl>

                  <FormControl mt={"4"}>
                    <FormLabel> Description </FormLabel>
                    <Textarea
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      disabled={isSubmitting}
                      isInvalid={touched.description&& errors.description}

                    />
                  </FormControl>

                  <FormControl mt={"4"}>
                    <FormLabel> Price </FormLabel>
                    <Input
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      disabled={isSubmitting}
                      isInvalid={touched.price&& errors.price}

                    />
                  </FormControl>

                  <FormControl mt={"4"}>
                    <FormLabel> Photos </FormLabel>
                    <FieldArray
                      name="photos"
                      render={(arrayHelpers) => (
                        <div>
                          {values.photos &&
                            values.photos.map((photo, index) => (
                              <div key={index}>
                                <Input
                                  width={"3xl"}
                                  name={`photos.${index}`}
                                  value={photo}
                                  disabled={isSubmitting}
                                  onChange={handleChange}
                                />
                                <Button
                                  ml={"4"}
                                  type="button"
                                  colorScheme="red"
                                  onClick={() => arrayHelpers.remove(index)}

                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                            <Button mt={"5"} onClick={()=>arrayHelpers.push("")}>Add a photo</Button>
                        </div>
                      )}
                    />
                  </FormControl>

                  <Button colorScheme="green" mt={"5"} width={"full"} type="submit" isLoading={isSubmitting}>Update</Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </main>
  );
}

export default ProductEdit;
