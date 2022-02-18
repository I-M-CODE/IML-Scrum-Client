import React from 'react';

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
} from '@chakra-ui/react';

export function ModalTable(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if(props.tipo==2){
    return(
      <>
        <Button onClick={onOpen}>Abrir Formulário (Semanal)</Button>
  
        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInBottom"
          size={'xl'}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Resposta do(a): {props.Colaborador}</ModalHeader>
            <ModalCloseButton /><hr/>
            <ModalBody pb={2}>Como foi sua semana? <br/>R: {props.input1}</ModalBody><hr/>
            <ModalBody pb={2}>Qual(is) projetos você desenvolveu durante essa semana? <br/>R:{props.input2}</ModalBody><hr/>
            <ModalBody pb={2}>Qual foi a melhor parte dessa semana? <br/>R: {props.input3}</ModalBody><hr/>
            <ModalBody pb={2}>E a pior? (Em questão de gosto e/ou dificuldade) <br/>R: {props.input4}</ModalBody><hr/>
            <ModalBody pb={2}>Qual são seus planos para a próxima semana? <br/>R: {props.input5}</ModalBody><hr/>
            <ModalBody pb={2}>E as metas? <br/>R: {props.input6}</ModalBody><hr/>
            <ModalBody pb={2}>Como está o planejamento em relação a prazos? <br/>R: {props.input7}</ModalBody><hr/>
            <ModalBody pb={2}>Você possuí algum descontentamento com os projetos desenvolvidos? <br/>R: {props.input8}</ModalBody><hr/>
            <ModalBody pb={2}>Possuí algum aviso/observação em relação a próxima semana no qual precisamos saber? <br/>R: {props.input9}</ModalBody><hr/>
            <ModalBody pb={2}>Necessita de alguma coisa do resto da equipe? <br/>R: {props.input10}</ModalBody><hr/>

  
            <ModalFooter>
              <Button onClick={onClose} colorScheme="red">
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }else{

    return (
      <>
        <Button onClick={onOpen}>Abrir Formulário (Diário)</Button>
        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInBottom"
          size={'xl'}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.Colaborador}</ModalHeader>
            <ModalCloseButton /><hr/>
            <ModalBody pb={2}>O que você fez ontem? <br/>R: {props.input1}</ModalBody><hr/>
            <ModalBody pb={2}>O que vai fazer hoje? <br/>R: {props.input2}</ModalBody><hr/>
            <ModalBody pb={2}>Tem algo no qual podemos te ajudar? <br/>R: {props.input3}</ModalBody><hr/>
  
            <ModalFooter>
              <Button onClick={onClose} colorScheme="red">
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  
}
