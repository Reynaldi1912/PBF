import {
    Box,
    Flex,
    Button,
    Text,
    IconButton,
    Avatar,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
    HStack,
    Spacer,
    Wrap,
    WrapItem,
    Center,
    ColorModeScript,
    Link
} from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBasketShopping , faHighlighter, faHome, faLightbulb, faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return(
        <Flex pt='1'>
            <Box>
                <Link href='/products'>
                    <Button colorScheme='teal' variant='ghost'>
                        <FontAwesomeIcon icon={faBagShopping} />                                        
                    </Button>
                </Link>
            </Box>
            <Box>
                <Link href='/checkout'>
                    <Button colorScheme='teal' variant='ghost'>
                     <FontAwesomeIcon icon={faShoppingCart} />                    
                    </Button>
                </Link>
            </Box>
        </Flex>
    )
}

export default Navbar;