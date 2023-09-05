import React from 'react'
import Card from '../../components/Card'
import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProductList } from '../../Api';

function Products() {
    
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
      } = useInfiniteQuery(['products'], fetchProductList, 
      {
        getNextPageParam: (lastGroup, allGroups) => {
            const morePagesExist=lastGroup?.length===12;

            if(!morePagesExist){
                return;
            }
            return allGroups.length+1
        }
      })

  if (status==="loading") return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  return (
    <div>
        <Grid templateColumns={"repeat(3,1fr)"} gap={"4"}>
            {
                data.pages.map((group,i)=>{
               
                  return   <React.Fragment key={i}>
                        {
                          
                            group.map((item)=>{
                                return <Box w={"100%"} key={item._id}>
                                     <Card item={item} />
                                </Box>
                            })
                        }

                    </React.Fragment>
                })
            }

        


        </Grid>
        <Flex mt={"5"} justifyContent={"center"}>
        <Button
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </Button>
      </Flex>
        
    </div>
  )
}

export default Products