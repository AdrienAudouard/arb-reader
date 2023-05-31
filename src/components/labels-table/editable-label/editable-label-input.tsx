import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
  onCancel: () => void;
  onChange: (value: string) => void;
  label: string;
};
export function EditableLabelInput({ onCancel, onChange, label }: Props) {
  const [value, setValue] = useState(label);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target.value ?? '');
  };

  const handleOnClick = () => {
    onChange(value);
  };

  return (
    <InputGroup size='md'>
      <Input
        pr='7rem'
        placeholder='Update label'
        value={value}
        onChange={handleChange}
      />
      <InputRightElement width='7rem'>
        <Button
          h='1.75rem'
          size='sm'
          colorScheme='green'
          marginRight={2}
          onClick={handleOnClick}
        >
          <CheckIcon />
        </Button>
        <Button h='1.75rem' size='sm' colorScheme='red' onClick={onCancel}>
          <CloseIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
