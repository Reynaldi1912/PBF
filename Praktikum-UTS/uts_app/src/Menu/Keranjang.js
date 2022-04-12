import React ,{ Component  } from "react";
import { Stack, HStack, VStack , Box, Flex , Image , Badge, SimpleGrid, Button, Center , Text  , Input, FormControl, TableContainer, Table, Thead, Tr, Th, Tbody, Tfoot, Td, Spacer, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, useEventListener} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate , useParams } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import fireDB from '../firebase'



const Keranjang = () =>{

    function currencyFormat(num) {
        return 'Rp.' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    let hargaTotal=0;
    const [keranjang , setKeranjang] = useState([]);
    useEffect(() => {
        getKeranjang();
    }, []);
 
    const getKeranjang = async () => {
        const response = await axios.get('http://localhost:3002/keranjang');
        setKeranjang(response.data);
    }
    const deleteKeranjang = async (id) => {
        await axios.delete(`http://localhost:3002/keranjang/${id}`);
        getKeranjang();
    }
    keranjang.map((data =>(
        hargaTotal = hargaTotal + (data.harga*data.qty)
    )))

    
    const handleUpdatePlus = async(e,idb , namab , hargab , qtyb) => {
        e.preventDefault();
        let data = {
          id: idb,
          nama:namab,
          harga:hargab,
          qty:qtyb+1
        }
        const response = await axios.put(`http://localhost:3002/keranjang/${idb}`,data);
        console.log("response",response) 
        getKeranjang();
      }   
      const handleUpdateMin = async(e,idb , namab , hargab , qtyb) => {
        e.preventDefault();
        let data;
        if(qtyb > 1 ){
            data = {
            id: idb,
            nama:namab,
            harga:hargab,
            qty:qtyb-1
            }
        }else{
            await axios.delete(`http://localhost:3002/keranjang/${idb}`);
            getKeranjang();
        }
        const response = await axios.put(`http://localhost:3002/keranjang/${idb}`,data);
        console.log("response",response) 
        getKeranjang();
      }   



    return(
        <Flex>
                <Box width='100%' mt='10'>
                    <Center>
                    <TableContainer>
                    <Table size='md'>
                        <Thead>
                        <Tr>
                            <Th>Nama Barang</Th>
                            <Th>Harga</Th>
                            <Th isNumeric>QTY</Th>
                            <Th isNumeric>Sub Total</Th>
                            <Th>Action</Th>

                        </Tr>
                        </Thead>
                        <Tbody>
                        {keranjang.map((data =>(
                            <Tr>
                                <Td key={data.id}>{data.nama}</Td>
                                <Td>{currencyFormat(data.harga)}</Td>
                                <Td isNumeric>
                                    {data.qty}
                                </Td>
                                <Td>{currencyFormat(data.harga*data.qty)}</Td>
                                <Td >
                                    <Flex>
                                        <Box pr='4'>
                                            <i className="fa fa-trash" onClick={ () => deleteKeranjang(data.id)}></i>
                                        </Box>
                                        <Box pr='4'>
                                            <i key={data.id} className="fa fa-plus" onClick={(e)=>handleUpdatePlus(e,data.id,data.nama,data.harga,data.qty)}></i>
                                        </Box>
                                        <Box>
                                            <i key={data.id} className="fa fa-minus" onClick={(e)=>handleUpdateMin(e,data.id,data.nama,data.harga,data.qty)}></i>
                                        </Box>
                                    </Flex>
                                </Td>
                            </Tr>
                        )))}
                        </Tbody>
                        <Tfoot>
                        <Tr>
                            <Th isNumeric>Total Keseluruhan</Th>
                            <Th></Th>
                            <Th></Th>
                            
                            <Th>{currencyFormat(hargaTotal)}</Th>
                        </Tr>
                        </Tfoot>
                    </Table>
                    </TableContainer>
                    
                    </Center>                  
                </Box>
        </Flex>
    )
}
export default Keranjang;