import { Flex , Box , Image, Center , SimpleGrid ,Text ,Stack, HStack, Circle, Square, VStack} from '@chakra-ui/react'
import React from 'react'


const ProfileProps = (props) => {
    return(
        <div>
            <Flex color='white'>
            <Square bg='blue.500' size='400px' flex="1">
                    <VStack >
                        <Text fontWeight='30p' fontSize='4xl'>
                            Quotes
                        </Text>
                        <Text maxW="400px">{props.quotes}</Text>
                    </VStack>
                </Square>
                <Square flex='1' bg='yellow.700'>
                    <Center>
                        <Image src='https://bit.ly/dan-abramov' borderRadius="full" objectFit='cover' alt='Dan Abramov' />
                    </Center>
                </Square>
            </Flex>

            <Flex color='white'>
            <Box flex='1' bg="red.100"></Box>
            <Square bg='white' size='300px' flex="3" p='10'>
                <Center>
                    <VStack>
                        <Text fontWeight='30p' fontSize='4xl' color="black">
                            About
                        </Text>
                        <Text color="black" maxW='500px' textAlign='center'>{props.biodata}</Text>
                    </VStack>
                </Center>
            </Square>
            <Box flex='1' bg="red.100"></Box>
            </Flex>

        <Flex color='white'>
            <Square bg='red.900' size='400px' flex="1">
                <Center>
                    <Image src='https://media.istockphoto.com/vectors/working-at-home-vector-flat-style-illustration-online-career-space-vector-id1241710727?b=1&k=20&m=1241710727&s=170667a&w=0&h=TH-n9JrD1BFzemwari9VgBtx6dVmNnm3KrYhLEtx0B4=' maxH="300px" borderRadius="3xl" objectFit='cover' alt='Dan Abramov' />
                </Center>
            </Square>
            <Square flex='1' bg='red.500'>
                <VStack>
                <Text fontWeight='30p' fontSize='4xl'>
                    SKILL
                </Text>
                <Text maxW='200px' textAlign='center'>
                    {props.skill}
                </Text>
                </VStack>
            </Square>
        </Flex>
     </div>
    )
}

export default ProfileProps