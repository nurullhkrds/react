import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchOrder } from "../../Api";
import { Table, TableCaption, Tbody, Text, Th, Thead ,Tr,Td} from "@chakra-ui/react";
function Orders() {
  const { isLoading, error, data } = useQuery(["admin:orders"], () =>
    fetchOrder()
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;


  return (
    <main>
      <Text fontSize={'5xl'}>Orders</Text>

      <Table variant={"simple"}>
				<TableCaption>Lorem ipsum dolor sit amet.</TableCaption>
				<Thead>
					<Tr>
						<Th>Customer</Th>
						<Th>Address</Th>
						<Th isNumeric>Items</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data.map((item) => (
						<Tr key={item._id}>
							<Td>{item.user.email}</Td>
							<Td>{item.adress}</Td>
							<Td isNumeric>{item.items.length}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>

 
    </main>
  );
}

export default Orders;
