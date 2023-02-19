import { Tbody, Td, Text, Tr } from '@chakra-ui/react';

import { useLabels } from '../../context/labels/labels-context';

import { LabelsTableItem } from './labels-table-item';

export function LabelsTableBody({
  size,
  page,
  selectedLanguages,
}: {
  selectedLanguages: string[];
  size: number;
  page: number;
}) {
  const { labels } = useLabels();

  const startIndex = page * size;
  const labelsKeys = Object.keys(labels ?? {}).slice(
    startIndex,
    startIndex + size,
  );

  return (
    <Tbody>
      {labelsKeys.map((label) => {
        const labelTraduction = labels![label];
        return (
          <Tr key={`row${label}`}>
            <Td>
              <Text fontSize='sm' as='b'>
                {label}
              </Text>
            </Td>

            <LabelsTableItem
              key={label}
              labelKey={label}
              label={labelTraduction}
              selectedLanguages={selectedLanguages}
            />
          </Tr>
        );
      })}
    </Tbody>
  );
}
