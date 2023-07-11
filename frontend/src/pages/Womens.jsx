import React, { useEffect } from 'react'
import {Box, Heading, Input, Text} from '@chakra-ui/react'
import { Grid } from "@chakra-ui/react";
import CardSkeleton from "./CardSkeleton";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { getWomenProduct } from '../Redux/action';
import Productcard, { ProductCard } from "./Productcard";
import Paggination from './Paggination';
const Womens = () => {
    const dispatch=useDispatch()
    const { womensproducts, loading, error } = useSelector((state) => state.products);

    console.log('w',womensproducts);

    useEffect(()=>{
        dispatch(getWomenProduct)
    },[])
  return  loading ? (
    <><Box w='100%' display={'flex'} gap='40px'  > 
<Box w='30%'></Box>
        <Grid
        w='70%'
    
  mb='8'
  templateColumns={{
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  }}
  gap={2}
  rowGap={6}
  mt={6}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <CardSkeleton key={item} />
            ))}
        </Grid>
  </Box>
    </>
) : error ? (
    <h1>Something is wrong</h1>
) : (
    <>

<Box w='90%'  margin='auto' display={'flex'} gap='30px'  > 
<Box w='30%'>
<Box border='1px solid gray' h='400px' mt={6}>
{/* <Heading>FILTERS</Heading> */}
<Box>
<Heading></Heading>
<Box>
<Checkbox colorScheme='green' defaultChecked>
Checkbox
</Checkbox>
</Box>
</Box>
<Box></Box>
<Box></Box>
</Box>
</Box>
        <Grid
  w='70%'
    
            mb='8'
            templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
            }}
            gap={2}
            rowGap={6}
            mt={6}>
            {womensproducts?.map(
                (item, idx) =>
                    item.id !== "0z5ON4w" && (
                        <ProductCard key={item.id} {...item} />
                    )
            )}
        </Grid>
  </Box>
  <Paggination/>
    </>
);
}

export default Womens
