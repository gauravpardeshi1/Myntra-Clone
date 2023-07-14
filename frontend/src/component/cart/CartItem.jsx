import {
	CloseButton,
	Flex,
	Link,
	Select,
	useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
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
	const {
		isGiftWrapping,
		name,
		_id,
		title,
		image,
		currency,
		price,
		onChangeQuantity,
		onClickDelete,
	} = props;
		
	return (
		<Flex
			direction={{
				base: "column",
				md: "row",
			}}
			justify='space-between'
			align='center'>
			<CartProductMeta
				name={title}
				description={_id}
				image={'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'}
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
						onChangeQuantity?.(+e.currentTarget.value);
					}}
				/>
				<PriceTag price={999}  />
				<CloseButton
					aria-label={`Delete ${title} from cart`}
					onClick={onClickDelete}
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
				<Link fontSize='sm' textDecor='underline'>
					Delete
				</Link>
				<QuantitySelect
					// value={1}
					onChange={(e) => {
						onChangeQuantity?.(+e.currentTarget.value);
					}}
				/>
				<PriceTag
					price={price}
					currency={currency}
					salePrice={price * 0.8}
				/>
			</Flex>
		</Flex>
	);
};
