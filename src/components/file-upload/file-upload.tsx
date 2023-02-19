import { Button, VStack } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';

import { useLabels } from '../../context/labels/labels-context';

function FileUpload({
  px = '32',
  py = '16',
  size = 'md',
}: {
  px: string;
  py: string;
  size: string;
}) {
  const { openFile } = useLabels();
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement> | undefined) => {
    const fileUploaded = event!.target.files![0];
    openFile(fileUploaded);
  };

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const borderRadius = Math.max(
    4,
    Math.min(parseInt(px, 10), parseInt(py, 10)),
  );
  return (
    <VStack verticalAlign='center' height='100vh' justifyContent='center'>
      <Button
        colorScheme='teal'
        variant='outline'
        px={px}
        py={py}
        size={size}
        borderRadius={borderRadius}
        onClick={handleClick}
      >
        Upload ARB file
      </Button>
      <input
        type='file'
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </VStack>
  );
}

export default FileUpload;
