import React from 'react'
import {IoEye} from "react-icons/io5"
import Axios from 'axios'

import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export function Table() {
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    
    <main className='w-11/12 mx-auto mt-4 bg-white rounded-lg bg-opacity-90 bg-clip-padding backdrop-blur' >
      
      <Button onClick={onOpen}>Open Modal</Button>

      <div className="title font-bold bg-gray-300 p-5">
        <h1>Tabela Exemplo</h1>
      </div>

      
      <div className="table-container p-5">
        <div className="filters">

        </div>

        <table className='w-full table-auto text-black rounded-md mb-3' >
          <thead className='text-black border-b border-b-slate-300'>
            <tr>
              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nome</th>
              <th className="text-center py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              <th className="text-center py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Data</th>
              <th className="text-center py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Ação</th>
            </tr>
          </thead>

          <tbody id="myTable">
       
          </tbody>
        </table> 

      </div>

      

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Teste
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </main>
  )
}

// Lista de usuários


window.onload = () => {
  let my_array = []
  Axios.post('https://iml-scrum-server.herokuapp.com/displayForms')
  .then((response)=>{

    my_array = response['data']
    console.log(my_array)
    const table = document.getElementById('myTable')

    table.innerHTML = ''
    // Listar todos os usuários

    for(let i = 0; i < my_array.length; i++){

        var row = `<tr class="border-b border-b-slate-300">
                    <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">${my_array[i].colaborador}</td>
                    <td class="px-2 py-3 border-b border-gray-200 bg-white text-center text-sm">${my_array[i].colaborador_email}</td>
                    <td class="px-2 py-3 border-b border-gray-200 bg-white text-center text-sm">${my_array[i].data.substring(0,10)}</td>
                    <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm"><div class="container-view flex justify-center"><button type="button" class="chakra-button css-taj3dd" >Visualizar</button></div></td>
                  </tr>`
        table.innerHTML += row   
      }
  })

  
  
  
  
       
  }
