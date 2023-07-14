import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Input, Radio, RadioGroup, Select, Stack, Text } from '@chakra-ui/react'
import { Grid } from "@chakra-ui/react";
import CardSkeleton from "./CardSkeleton";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { getWomenProduct, getfunitureProduct } from '../Redux/action';
import Productcard, { ProductCard } from "./Productcard";
import Paggination from './Paggination';
const Funiture = () => {
    const [page, setpage] = useState(1)
    const [order, setorder] =useState('')
   
    const dispatch = useDispatch()
    const { funitureData, loading, error } = useSelector((state) => state.products);

   
     

    useEffect(() => {
        dispatch(getfunitureProduct(page,order))
    }, [page,order])
 console.log('o',order)
    return loading ? (
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
            <Box w='90%' margin='auto' display="flex" justifyContent="space-between" mt='30px' padding='10px'>
                <Stack direction='row'><Text fontSize={24} color='gray' fontWeight={500} _hover={{ cursor: 'pointer', color: 'red.400' }}>Home/</Text><Text fontSize={24} color='gray' fontWeight={500} _hover={{ cursor: 'pointer', color: 'red.400' }}>Furniture Products </Text></Stack>
                <Box w='20%'><Select _hover={{ cursor: 'pointer', color: 'blue.500' }} placeholder='sort by : Recommended'>

                    <option value='option1'>Recommended</option>
                    <option value='option2'>What's New</option>
                    <option value='option3'>Popularity</option>
                    <option value='option1'>Best Descount</option>
                    <option value='option2'>Price :low to high</option>
                    <option value='option3'>Price :high to low</option>
                </Select></Box>

            </Box>
            <Box w='90%' margin='auto' display={'flex'} justifyContent={'space-between'} mt={'10px'}>
                <Box w='25%'>
                    <Box w='100%' boxShadow='rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' h='auto' mt={6} padding='20px'  >
                        {/* <Heading>FILTERS</Heading> */}
                        <Heading fontSize={20} textAlign={'left'}>FILTERS</Heading>
                        <Box mt='20px'>
                            <Text textAlign={'left'} fontSize={18} fontWeight={500} >Price</Text>
                             <RadioGroup onChange={setorder} value={order}>
      <Stack direction='column' mt='10px'>
        <Radio value='asc'>Low To High</Radio>
        <Radio value='desc'>High To Low</Radio>
        
      </Stack>
    </RadioGroup>

                        </Box>
                        <Box mt='20px'>
                            <Text textAlign={'left'} fontSize={18} fontWeight={500}>Brands</Text>
                            <Stack spacing={1} direction='column' mt='10px'>
                                <Checkbox colorScheme='pink' defaultChecked>Puma</Checkbox>
                                <Checkbox colorScheme='pink' defaultChecked>Arrabi</Checkbox>
                                <Checkbox colorScheme='pink' defaultChecked>Dreamscape</Checkbox>
                                <Checkbox colorScheme='pink' defaultChecked>Florida</Checkbox>
                                <Checkbox colorScheme='pink' defaultChecked>Home Ecstasy</Checkbox>
                                <Checkbox colorScheme='pink' defaultChecked>KLOTTHE</Checkbox>
                                <Checkbox colorScheme='pink' defaultChecked>ELEVANTO</Checkbox>
                                <Checkbox colorScheme='pink' defaultChecked>JAIPUR FABRIC</Checkbox>
                                <Checkbox colorScheme='pink' defaultChecked>DREAM WEAVERZ</Checkbox>
                                <Checkbox colorScheme='pink' defaultChecked>Rajasthan Decor</Checkbox>
                                <Checkbox colorScheme='pink' defaultChecked>SEJ By Nisha Gupta</Checkbox>


                            </Stack>
                        </Box>
                        <Box mt='20px'>
                            <Text textAlign={'left'} fontSize={18} fontWeight={500}>Rating</Text>
                            <Stack spacing={1} direction='column' mt='10px'>
                                <Checkbox colorScheme='pink' defaultChecked>Low To High</Checkbox>
                                <Checkbox colorScheme='pink' defaultChecked>High To Low</Checkbox>
                            </Stack>
                        </Box>
                        <Box>
                            <Heading></Heading>

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
                    {funitureData?.map(
                        (item, idx) =>
                            item.id !== "0z5ON4w" && (
                                <ProductCard key={item.id} {...item} />
                            )
                    )}
                </Grid>
            </Box>
            <Box w='71%' display={'flex'} justifyContent={'space-between'}>
                <Box></Box>
                <Box mt='20px' display='flex' gap='15px' mb='20px'>
                    <Button background={'orange.300'} color='white' onClick={() => setpage(page - 1)} isDisabled={page == 1}>Pre</Button>
                    <Button>{page}</Button>
                    <Button background={'orange.300'} color='white' onClick={() => setpage(page + 1)} isDisabled={page == 4}>Next</Button></Box>

            </Box>
        </>
    );
}

export default Funiture
