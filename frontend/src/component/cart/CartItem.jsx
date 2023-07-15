import {
	CloseButton,
	Flex,
	Link,
	Select,
	useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { deleteToCart } from "../../Redux/action";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const QuantitySelect = (props) => {

	
	return (
		<Select
			maxW='64px'
			aria-label='Select quantity'
			focusBorderColor={useColorModeValue("blue.500", "blue.200")}
			{...props}>
			<option value='1'>1</option>
			<option value='2'>2</option>
			<option value='3'>3</option>
			<option value='4'>4</option>
		</Select>
	);
};

export const CartItem = (props) => {
	const [update,setupdate]=useState(false)
	const {
		isGiftWrapping,
		image_url,
		id,
		para,
		rs,
		brand,
		title,
		image,
		currency,
		price,
		onChangeQuantity
	
	} = props;
	const dispatch=useDispatch()
	const onClickDelete=(id)=>{
		dispatch(deleteToCart(id))
		setupdate(!update)
		window.location.reload()
	}

	useEffect(()=>{
		

	},[update])
	
	return (
		<Flex
			direction={{
				base: "column",
				md: "row",
			}}
			justify='space-between'
			align='center'>
			<CartProductMeta
				name={para}
				description={brand}
				image={image_url}
				isGiftWrapping={isGiftWrapping}
			/>

			{/* Desktop */}
			<Flex
				width='full'
				justify='space-between'
				display={{
					base: "none",
					md: "flex",
				}}>
				<QuantitySelect
					// value={1}
					onChange={(e) => {
						console.log('q',+e.target.value);
					}}
				/>
				<PriceTag price={rs || price}  />
				<CloseButton
					aria-label={`Delete ${para} from cart`}
					onClick={()=>onClickDelete(id)}
				/>
			</Flex>

			{/* Mobile */}
			<Flex
				mt='4'
				align='center'
				width='full'
				justify='space-between'
				display={{
					base: "flex",
					md: "none",
				}}>
				<Link onClick={()=>onClickDelete(id)} fontSize='sm' textDecor='underline'>
					Delete
				</Link>
				<QuantitySelect
					// value={1}
					onChange={(e) => {
						console.log('q',+e.target.value);
					}}
				/>
				<PriceTag
					price={rs || price}
					currency={currency}
					salePrice={rs || price * 0.8}
				/>
			</Flex>
		</Flex>
	);
};
