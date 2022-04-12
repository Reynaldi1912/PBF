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
    MenuGroup,
    Menu, MenuButton,MenuItem,MenuList , Link
} from '@chakra-ui/react';
import theme from './Theme'



import {
    HamburgerIcon,
    CloseIcon,
    SunIcon,
    MoonIcon,
    ChevronDownIcon
} from '@chakra-ui/icons';
import Navbar from './Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';


<ColorModeScript initialColorMode={theme.config.initialColorMode} />

const Header = () => {
    
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box p='2' boxShadow='xl'>
            <Flex>
            <Box>
                <Link href='/'>
                    <Button colorScheme='teal' variant='ghost'>
                        <FontAwesomeIcon icon={faHome} /><Text pl='4'>E-Commerce</Text>
                    </Button>
                </Link>
            </Box>
            <Spacer/>
            <Navbar/>
                <Box>
                   <Wrap>
                       <Center>
                        <Box>
                            <Button mr='2' onClick={toggleColorMode}>
                                {colorMode === 'light' ? <FontAwesomeIcon icon={faLightbulb} /> : <FontAwesomeIcon icon={faLightbulb} />}
                            </Button>
                        </Box>

                            <Menu isLazy>
                                <MenuButton>
                                    <WrapItem>
                                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                    </WrapItem>
                                </MenuButton>
                                <MenuList>
                                    <MenuGroup title='Reynaldi Ramadhani Eka Purnomo'>
                                    <Link href='/about'>
                                        <MenuItem>
                                                About
                                        </MenuItem>
                                    </Link>
                                    </MenuGroup>
                                </MenuList>
                            </Menu>
                        </Center>
                   </Wrap>
                </Box>
            </Flex>
        </Box>
    );
}

export default Header;