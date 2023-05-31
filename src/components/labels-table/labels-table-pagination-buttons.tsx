import { Button, HStack, Text } from '@chakra-ui/react';

export function LabelsTablePaginationButton({
  size,
  numberOfItems,
  page,
  onChange,
}: {
  size: number;
  page: number;
  numberOfItems: number;
  onChange: (value: number) => void;
}) {
  const numberOfPages = Math.ceil(numberOfItems / size);
  const nbOfButton = Math.min(numberOfPages, 6);

  const buttons = [];

  const start = Math.max(0, page - 2);
  const stop = Math.min(start + 6, numberOfPages);
  for (let i = start; i < stop; i += 1) {
    buttons.push(
      <Button
        key={i}
        colorScheme='cyan'
        size='xs'
        onClick={() => onChange(i)}
        variant={i !== page ? 'solid' : 'outline'}
      >
        {i + 1}
      </Button>,
    );
  }

  if (nbOfButton < numberOfPages) {
    buttons.splice(3, 0, <Text key='...'>...</Text>);
  }

  const nextClick = () => {
    onChange(Math.min(page + 1, numberOfPages - 1));
  };

  const previousClick = () => {
    onChange(Math.max(page - 1, 0));
  };

  return (
    <HStack>
      <Button colorScheme='cyan' size='xs' onClick={previousClick}>
        Previous
      </Button>
      {buttons}
      <Button colorScheme='cyan' size='xs' onClick={nextClick}>
        Next
      </Button>
    </HStack>
  );
}
