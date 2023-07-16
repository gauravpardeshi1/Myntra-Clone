import React, { useEffect, useState } from 'react'
import Banner from '../component/Slider'
import { Box, Text, Image, Button, background, Center, Heading, SimpleGrid } from "@chakra-ui/react"
import axios from 'axios'
const Home = () => {
    const [deals, setdeals] = useState([])
    const [Exclusive, setExclusive] = useState([])
    const [top, settop] = useState([])
    const [category, setcategory] = useState([])
    const [topdealse, settopdealse] = useState([])

 

    const getdata = () => {
        axios.get(`http://localhost:8080/Deals`)
            .then((res) => setdeals(res.data))
            axios.get(`http://localhost:8080/ExclusiveBrands`)
            .then((res) => setExclusive(res.data))
            axios.get(`http://localhost:8080/top`)
            .then((res) => settop(res.data))
            axios.get(`http://localhost:8080/category`)
            .then((res) => setcategory(res.data))
            axios.get(`http://localhost:8080/topdeals`)
            .then((res) => settopdealse(res.data))
    }
    //console.log(deals);
    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
            <Banner />
            <Center>
                <Box padding='20px' mt='40px'>
                    <Heading fontWeight={600} mb='50px'  >DEALS OF THE DAY</Heading>

                    <Box >
                        <SimpleGrid columns={{ base:2, sm: 2, md: 3, lg: 7 }} gap='10px'>
                            {deals.map((e) => <Image src={e.image_url} _hover={{ transform: "scale(0.95)", transition: "all .5s", cursor: "pointer" }} />)}
                        </SimpleGrid>

                    </Box>
                </Box>
                
            </Center>
            <Center>
                <Box padding='20px' mt='40px' >
                    <Heading fontWeight={600} mb='50px'  >EXCLUSIVE BRANDS</Heading>

                    <Box >
                        <SimpleGrid columns={{  base:2, sm: 2,md: 3, lg: 8 }} gap='10px'>
                            {Exclusive.map((e) => <Image src={e.image_url} _hover={{ transform: "scale(0.95)", transition: "all .5s", cursor: "pointer" }} />)}
                        </SimpleGrid>

                    </Box>
                </Box>
                
            </Center>
            <Center>
                <Box padding='20px' mt='40px' >
                    <Heading fontWeight={600} mb='50px'  >TOP PICKS</Heading>

                    <Box >
                        <SimpleGrid columns={{ base:2, sm: 2,md: 3, lg: 7 }} gap='10px'>
                            {top.map((e) => <Image src={e.image_url} _hover={{ transform: "scale(0.95)", transition: "all .5s", cursor: "pointer" }} />)}
                        </SimpleGrid>

                    </Box>
                </Box>
                
            </Center>
            <Center>
                <Box padding='20px' mt='40px' >
                    <Heading fontWeight={600} mb='50px' color='#E91058' >CATEGORIES TO BAG</Heading>

                    <Box >
                        <SimpleGrid columns={{ base:2, sm: 2, md: 3, lg: 8 }} gap='10px'>
                            {category.map((e) => <Image src={e.image_url} _hover={{ transform: "scale(0.95)", transition: "all .5s", cursor: "pointer" }} />)}
                        </SimpleGrid>

                    </Box>
                </Box>
                
            </Center>
            <Center>
                <Box padding='20px' mt='40px' >
                    <Heading fontWeight={600} mb='50px' color='#7C5763' >DEALS ON TOP BRANDS</Heading>

                    <Box >
                        <SimpleGrid columns={{  base:2, sm: 2,md: 3, lg: 8 }} gap='10px'>
                            {topdealse.map((e) => <Image src={e.image_url} _hover={{ transform: "scale(0.95)", transition: "all .5s", cursor: "pointer" }} />)}
                        </SimpleGrid>

                    </Box>
                </Box>
                
            </Center>
        </>
    )
}

export default Home
