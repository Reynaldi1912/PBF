import React ,{ Component  } from "react";
import { Stack, HStack, VStack , Box, Flex , Image , Badge, SimpleGrid, Button, Center , Text  , Input, FormControl, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const Menu = () =>{
    function currencyFormat(num) {
        return 'Rp.' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    const [products , setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
 
    const getProducts = async () => {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
    }    
    const handleCreate = async(e,idb,namab,hargab,qtyb) => {
        e.preventDefault();
        let data = {
          id: idb,
          nama:namab,
          harga:hargab,
          qty:1
        }
        const response = await axios.post("http://localhost:3002/keranjang",data);
        console.log("response",response) 
      }   

    
    return(
        <SimpleGrid columns='5' m='4'>
            {products.map((data =>(
                <Box key={data.id} maxW='300px' borderWidth='1px' borderRadius='lg' overflow='hidden' m='2'>
                    <Image boxSize='280px' objectFit='cover' src={data.gambar} />
                        
                        <Box p='4'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    New
                                </Badge>
                            </Box>

                            <Box mt='1'fontWeight='semibold'as='h4' lineHeight='tight' isTruncated >
                                {data.nama}
                            </Box>
                                
                            <Box>
                                {currencyFormat(data.harga)}
                            </Box>

                            <Box color='gray.100'>
                                <Text color='gray.500' isTruncated>
                                    Sisa {data.stok}
                                </Text>
                            </Box>
                                <Box mt='2'>
                                    <Center>
                                        <Button size='md' width='300px' id="buka-modal" colorScheme='green' variant='solid'
                                        onClick={(e)=>handleCreate(e,data.id,data.nama,data.harga,data.stok)}
                                        >
                                            Tambah Keranjang                                        
                                        </Button>
                                    </Center>
                                </Box>
                        </Box>
                    </Box>
                )))}
            </SimpleGrid>     
    )
}

export default Menu;