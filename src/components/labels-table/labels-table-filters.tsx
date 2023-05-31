import { Checkbox, Tooltip } from '@chakra-ui/react';

type Props = {
  onShowOnlyMissingChange: (value: boolean) => void;
};

export function LabelsTableFilter({ onShowOnlyMissingChange }: Props) {
  return (
    <Tooltip label='If selected display only the missing translations'>
      <Checkbox
        onChange={(event) => {
          onShowOnlyMissingChange(event.currentTarget.checked);
        }}
      >
        Only missing
      </Checkbox>
    </Tooltip>
  );
}
