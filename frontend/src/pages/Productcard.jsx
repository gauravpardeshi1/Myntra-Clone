import React from "react";
import {
	Flex,
	Box,
	Badge,
	useColorModeValue,
	Code,
	Button,
	Image,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";




export function Rating({ rating, numReviews }) {
	return (
		<Box
			display='flex'
			alignItems='center'
			mt={numReviews === 1 ? "0.3rem" : "3"}>
			{Array(5)
				.fill("")
				.map((_, i) => {
					const roundedRating = Math.round(rating * 2) / 2;
					if (roundedRating - i >= 1) {
						return (
							<BsStarFill
								key={i + Math.random()}
								style={{ marginLeft: "1" }}
								// color={i < rating ? 'green.500' :"green.300"}
							/>
						);
					}
					if (roundedRating - i === 0.2) {
						return (
							<BsStarHalf
								key={i + Math.random()}
								style={{ marginLeft: "1" }}
							/>
						);
					}
					return (
						<BsStar
							key={i + Math.random()}
							style={{ marginLeft: "1" }}
						/>
					);
				})}
			<Box
				as='span'
				ml='2'
				color='gray.600'
				fontSize='sm'
				display={numReviews === 1 ? "none" : "flex"}>
				({numReviews})
			</Box>
		</Box>
	);
}
export function ProductCard({
	id,
	name,
	para,
	price,
	star_rating_percentage,
	media,
	brand_name,
	primary_categories,
	offers,
	rating,
	rating_count,
	image_url,
	rs
}) {
	const randomBolean = () => Math.random() >= 0.5;
	const navigate = useNavigate();
	// const { url } = media[0];
	return (
		<Flex alignItems='center' justifyContent='center'>
			<Box
				transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
				boxShadow={useColorModeValue("lg", "lg")}
				_hover={{
                    
					transform: "translateY(-5px)",
					transition: "all 0.2s ease-out",
					boxShadow: "0 10px 50px -20px #b0c4de",
                    cursor:'pointer'
                    
				}}
				w='60'
				bg={useColorModeValue("white", "root.blueGray")}
				maxW='xs'
				rounded='lg'
				shadow='lg'
				>
				<Box h='50%' roundedTop='lg'>
					<Image src={image_url} alt={name} roundedTop='lg' />
				</Box>
				<Box p='4'>
					<Box display='flex' alignItems='baseline'>
						{randomBolean() ? (
							<Badge
								rounded='full'
								fontSize='0.7em'
								// colorScheme='green'
								_dark={{ colorScheme: "green" }}
								colorScheme='red'>
								New
							</Badge>
						) : (
							<Badge
								rounded='full'
								fontSize='0.7em'
								_dark={{ colorScheme: "red" }}
								colorScheme='green'>
								Trending
							</Badge>
						)}
					</Box>
					<Flex
						mt='1'
						justifyContent='space-between'
						alignContent='center'
						alignItems={"center"}>
						<Box
							fontSize='md'
							fontWeight='semibold'
							as='h5'
							lineHeight='tight'
							isTruncated>
							{para}
						</Box>
						
					</Flex>
					<Flex justifyContent='space-between' alignContent='center'>
						<Rating rating={rating} numReviews={rating*50} />
						<Code
							fontSize='md'
							color={useColorModeValue("gray.800", "black")}
							mt='3'
							fontWeight='bold'
							bg={useColorModeValue("yellow.100", "yellow.200")}
							letterSpacing={0}>
							₹{rs}
						</Code>
					</Flex>
					<Button
						w='full'
						mt='3'
						colorScheme={useColorModeValue("red", "red")}
                        position={'none'}
						onClick={() => navigate(`/products/${id}`)}>
						More Details
					</Button>
				</Box>
			</Box>
		</Flex>
	);
}