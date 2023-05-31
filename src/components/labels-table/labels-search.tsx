import { Input } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  onSearchChange: (value: string) => void;
};

export function LabelsSearch({ onSearchChange }: Props) {
  const [value, setValue] = useState('');
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event?.target.value ?? '');
    },
    [],
  );

  useEffect(() => {
    onSearchChange(value);
  }, [value]);

  return (
    <Input
      variant='outline'
      placeholder='Search key or label'
      value={value}
      width='300px'
      onChange={handleChange}
    />
  );
}
