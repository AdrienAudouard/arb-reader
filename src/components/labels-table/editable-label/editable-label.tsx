import { InfoIcon } from '@chakra-ui/icons';
import { Button, Flex, Highlight, Text, Tooltip } from '@chakra-ui/react';
import { useState } from 'react';

import { useLabels } from '../../../context/labels/labels-context';
import { LabelL10n } from '../../../context/labels/labels-state';

import { EditableLabelInput } from './editable-label-input';

type Props = {
  label: LabelL10n;
  language: string;
  labelKey: string;
};
export function EditableLabel({ label, language, labelKey }: Props) {
  const { updateLabel } = useLabels();
  const [isEditing, setIsEditing] = useState(false);

  const labelDetails = label[language];
  const variables = labelDetails.variables?.map((e) => `{${e}}`) ?? [];

  const handleLabelChange = (value: string) => {
    setIsEditing(false);
    updateLabel(labelKey, language, value);
  };

  return isEditing ? (
    <EditableLabelInput
      onChange={handleLabelChange}
      onCancel={() => setIsEditing(false)}
      label={labelDetails.label}
    />
  ) : (
    <Flex justifyContent='space-between'>
      <Tooltip label='Click to edit' flex='1'>
        <Button variant='ghost'>
          <Text
            fontSize='sm'
            onClick={() => setIsEditing(true)}
            overflow='auto'
          >
            <Highlight query={variables} styles={{ color: 'teal.300' }}>
              {labelDetails.label}
            </Highlight>
          </Text>
        </Button>
      </Tooltip>
      <Button size='sm'>
        <InfoIcon />
      </Button>
    </Flex>
  );
}
