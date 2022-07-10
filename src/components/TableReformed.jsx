import React, {useEffect, useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,  
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import { ModalTable } from "./Modal";

import {HamburgerIcon} from '@chakra-ui/icons'

export function TableReformed(props){
  const navigate = useNavigate()

  const { isOpen, onToggle } = useDisclosure();
  
  const [array, setArray] = useState([])

  useEffect(() => {
    async function getItems(){
      await Axios.post('https://iml-scrum-server.vercel.app/api/server/displayForms')
        .then((response)=>{
        setArray(response.data)
      })
    }
    getItems()
  }, [])

  return (
    <Flex flexDirection={"column"}>
      {/* Header */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="teal.500"
        color="white"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            I'm Labs
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={onToggle}>
          <HamburgerIcon/>
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Text>Tabela Scrum</Text>
        </Stack>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            Logout
          </Button>
        </Box>

      </Flex>

      {/* Table */}
      <Box overflow="auto">
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th >Data</Th>
              <Th isNumeric>Ação</Th>
            </Tr>
          </Thead>

          <Tbody id="tableBody">
              { array.map( (item) => (
                <Tr key={item.id}>
                 <Td>{item.colaborador}</Td>
                 <Td>{item.colaborador_email}</Td>
                 <Td>{item.data.replace('T', ' ').replace('.000Z', '')}</Td>
                 <Td isNumeric><ModalTable Colaborador={item.colaborador} tipo={item.tipo} 
                   colaborador_email = {item.colaborador_email}
                   input1={item.input1}
                   input2={item.input2}
                   input3={item.input3}
                   input4={item.input4}
                   input5={item.input5}
                   input6={item.input6}
                   input7={item.input7}
                   input8={item.input8}
                   input9={item.input9}
                   input10={item.input10}
                 /></Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>

    </Flex>  
  );
}