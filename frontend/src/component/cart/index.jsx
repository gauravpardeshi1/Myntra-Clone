import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Box,
	Flex,
	Heading,
	HStack,
	Stack,
	useColorModeValue as mode,
	Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { toast } from "react-toastify";


const CartIndex = () => {

	const [quantity, setQuantity] = React.useState(1);
	const dispatch = useDispatch();
	const handleDelete = (id) => {
	
		
	
		toast.success("Product deleted from cart");
	};
	useEffect(() => {
		document.title = "cart page";
	
	}, []);

	 const cartData = [
		{
		  id: '1',
		  price: 39.99,
		  currency: 'GBP',
		  name: 'Ferragamo bag',
		  description: 'Tan, 40mm',
		  quantity: 3,
		  imageUrl:
			'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
		},
		{
		  id: '2',
		  price: 39.99,
		  currency: 'GBP',
		  name: 'Bamboo Tan',
		  description: 'Tan, 40mm',
		  quantity: 3,
		  imageUrl:
			'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
		},
		{
		  id: '3',
		  price: 39.99,
		  currency: 'GBP',
		  name: 'Yeezy Sneakers',
		  description: 'Tan, 40mm',
		  quantity: 3,
		  imageUrl:
			'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
		},
	  ]
  
	return (
		<Box
			maxW={{
				base: "3xl",
				lg: "7xl",
			}}
			mx='auto'
			px={{
				base: "4",
				md: "8",
				lg: "12",
			}}
			py={{
				base: "6",
				md: "8",
				lg: "12",
			}}>
			<Stack
				direction={{
					base: "column",
					lg: "row",
				}}
				align={{
					lg: "flex-start",
				}}
				spacing={{
					base: "8",
					md: "16",
				}}>
				<Stack
					spacing={{
						base: "8",
						md: "10",
					}}
					flex='2'>
					<Heading fontSize='2xl' fontWeight={700} color={'teal'}>
						Shopping Cart ({cartData.length} items)
					</Heading>
					{!cartData.length && (
						<Image src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png' />
					)}
					<Stack spacing='6'>
						{cartData.map((item, idx) => (
							<CartItem
								key={idx}
								{...item}
								
								
							/>
						))}
					</Stack>
				</Stack>

				<Flex direction='column' align='center' flex='1'>
					<CartOrderSummary  cart={cartData} />
					<HStack mt='6' fontWeight='semibold'>
						<p>or</p>
						<Link
							color={mode("blue.500", "blue.200")}
							to='/product'>
							Continue shopping
						</Link>
					</HStack>
				</Flex>
			</Stack>
		</Box>
	);
};

export default CartIndex;
