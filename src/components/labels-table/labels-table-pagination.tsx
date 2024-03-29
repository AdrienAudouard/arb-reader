import { Box, HStack, Select, Text } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

import { LabelsList } from '../../context/labels/labels-state';

export function LabelsTablePagination({
  onChange,
  labels,
}: {
  onChange: (value: number) => void;
  labels: LabelsList;
}) {
  const nbOfLabels = Object.keys(labels ?? {}).length;
  const handleChange = (event: ChangeEvent<HTMLSelectElement> | undefined) => {
    const value = event?.target.value;
    onChange(Number(value));
  };

  return (
    <HStack>
      <Text>Show </Text>
      <Box width='100px'>
        <Select size='sm' onChange={handleChange} defaultValue='25'>
          <option value='10'>10</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
          <option value={Object.keys(labels!).length}>
            {Object.keys(labels!).length}
          </option>
        </Select>
      </Box>
      <Text>&nbsp;labels ({nbOfLabels} labels)</Text>
    </HStack>
  );
}
