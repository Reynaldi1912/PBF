import { Flex , Box , Image, Center , SimpleGrid ,Text ,Stack,VStack, HStack, Circle, Square, Button,Link} from '@chakra-ui/react'
import React from 'react'
import jumbotron from '../image/LandingPage.png'


function Home(){
    return(
        <Flex mt='100px'>
            <Square size='400px' flex="1" >
            <VStack>
                <Text fontSize='6xl' mb='5' fontWeight='bold' maxW='360px'>
                    E-Commerce
                </Text>
                <Text maxWidth='550px' textAlign='center' mt='10'>
                    Mulai Belanja Kebutuhan Elektronik Anda Seperti Laptop dengan berbagai Merk dan dengan Garansi yang nyata
                </Text>
                <Center>
                    <Link href='/products'>
                        <Button mt='10' bg='blue.500'>
                            Mulai Belanja
                        </Button>
                    </Link>
                </Center>
                </VStack>
            </Square>
            <Square flex='1'>
                <Image src={jumbotron} maxH="300px" borderRadius="3xl" objectFit='cover' alt='Dan Abramov' />
            </Square>
        </Flex>
    )
}

export default Home