import { Box, Center, Flex, Tag, Td } from '@chakra-ui/react';

import { LabelL10n } from '../../context/labels/labels-state';

import { EditableLabel } from './editable-label/editable-label';

export function LabelsTableItem({
  label,
  labelKey,
  selectedLanguages,
}: {
  label: LabelL10n;
  selectedLanguages: string[];
  labelKey: string;
}) {
  return (
    <Td
      textOverflow='ellipsis'
      overflow='hidden'
      wordBreak='break-word'
      whiteSpace='normal'
    >
      {selectedLanguages.map((language, index) => {
        const isLast = index === selectedLanguages.length - 1;
        return (
          <Box
            key={labelKey + language}
            paddingBottom={isLast ? undefined : '4'}
          >
            <Flex>
              <Center>
                <Tag wordBreak='keep-all'>{language}</Tag>
              </Center>
              &nbsp;
              <Box flex='1' overflow='hidden'>
                <EditableLabel
                  label={label}
                  labelKey={labelKey}
                  language={language}
                />
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Td>
  );
}
