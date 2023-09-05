import React, { useMemo } from 'react'

import {useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import { deleteProduct, fetchAllProducts, fetchProductList } from '../../Api';
import {Popconfirm, Table} from 'antd'
import { Flex, Text,Button } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';


function Products() {
  const queryClient=useQueryClient()


  const { isLoading, error, data } = useQuery(["admin:products"], () =>
  fetchAllProducts()
  );
  const deletedMutation=useMutation(deleteProduct,{
    onSuccess:()=>queryClient.invalidateQueries('admin:products')
  })

  const columns=useMemo(()=>{
    return [
      {
        title:"Title",
        dataIndex:"title",
        key:"title",
  
      }
      ,
      {
        title:"Price",
        dataIndex:"price",
        key:"price",
  
      }
      ,
      {
        title:"Created At",
        dataIndex:"createdAt",
        key:"createdAt",
  
      },
      {
        title:'Action',
        key:'action',
        render:(text,record)=>(
          <>
            <Link to={`/admin/products/${record._id}`} >Edit</Link>
            <Popconfirm
              title="Are you sure ?"
              onConfirm={()=>{
                deletedMutation.mutate(record._id,{
                  onSuccess:()=>{
                    console.log("Succes");
                  }
                })
              }}
              onCancel={()=>console.log("iptal edildi")}
              okText="Yes"
              cancelText="No"
              placement='left'
            >
              <a href='#' style={{marginLeft:"10px"}}>Delete</a>
            </Popconfirm>
          </>
        )
      }
    ]
      
    
  },[])


  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;


console.log(data);


  return (
    <div>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Text fontSize={"3xl"} p={"5"}>Products</Text>


      <Link to={"addproduct"}>
       <Button colorScheme='green'>Add</Button>



      </Link>


      </Flex>


      <Table dataSource={data} columns={columns} rowKey={"_id"}/>
      
    </div>
  )
}

export default Products