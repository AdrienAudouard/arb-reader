import { Tbody, Td, Text, Tooltip, Tr } from '@chakra-ui/react';

import { useLabels } from '../../context/labels/labels-context';
import { LabelsList } from '../../context/labels/labels-state';

import { LabelsTableItem } from './labels-table-item';

export function LabelsTableBody({
  labels,

  selectedLanguages,
}: {
  labels: LabelsList;
  selectedLanguages: string[];
}) {
  const { languagesList } = useLabels();
  return (
    <Tbody>
      {Object.keys(labels).map((label) => {
        const labelTraduction = labels![label];
        const missingLabels = languagesList.find(
          (language) => labelTraduction[language] === undefined,
        );
        return (
          <Tr key={`row${label}`}>
            <Td>
              <Tooltip
                label={missingLabels && 'One of the translations is missing'}
              >
                <Text fontSize='sm' as='b' color={missingLabels && 'orange'}>
                  {label}
                </Text>
              </Tooltip>
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
