import React from "react";
import {  useMutation, useQueryClient} from "@tanstack/react-query";
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
import { addProduct } from "../../Api";

function AddProduct() {
    const queryClient=useQueryClient()
    const mutation=useMutation(addProduct,{
        onSuccess:()=>queryClient.invalidateQueries("admin:products")
    })


  
  const handleSubmit = async(values,bag) => {
    message.loading({content:"Loading...",key:"product_update"})

    const convertValues={
        ...values,
        photos:JSON.stringify(values.photos)
    }
    mutation.mutate(convertValues,{
        onSuccess:()=>{
            console.log("succes");
            message.success({
                content:"The product succesfully updated",
                key:"product_update",
                duration:2,
              })
        }
    });
  

  };

  return (
    <main>
      <Text mt={"8"} mb={"8"} fontSize={"3xl"}>Add Product</Text>

      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          photos: [],
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

                  <Button colorScheme="green" mt={"5"} width={"full"} type="submit" isLoading={isSubmitting}>Save</Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </main>
  );
}

export default AddProduct;
