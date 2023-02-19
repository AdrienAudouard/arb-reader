import { Box, Highlight, HStack, Tag, Td, Text } from '@chakra-ui/react';

import { LabelL10n } from '../../context/labels/labels-state';

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
        const labelDetails = label[language];
        const variables = labelDetails.variables?.map((e) => `{${e}}`) ?? [];
        const isLast = index === selectedLanguages.length - 1;
        return (
          <Box
            key={labelKey + language}
            paddingBottom={isLast ? undefined : '4'}
          >
            <HStack>
              <Box>
                <Tag>{language}</Tag>
              </Box>
              &nbsp;
              <Box flex='1'>
                <Text fontSize='sm' display='inline-block'>
                  <Highlight query={variables} styles={{ color: 'teal.300' }}>
                    {labelDetails.label}
                  </Highlight>
                </Text>
              </Box>
            </HStack>
          </Box>
        );
      })}
    </Td>
  );
}
