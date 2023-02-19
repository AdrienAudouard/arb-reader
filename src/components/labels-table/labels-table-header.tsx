import { Th, Thead, Tr } from '@chakra-ui/react';

export function LabelsTableHeader() {
  return (
    <Thead position='sticky' top={0}>
      <Tr>
        <Th bg='gray.800'>Key</Th>
        <Th bg='gray.800'>Label</Th>
      </Tr>
    </Thead>
  );
}
