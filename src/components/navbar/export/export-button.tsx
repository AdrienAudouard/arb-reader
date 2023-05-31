import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from '@chakra-ui/react';

import { useLabels } from '../../../context/labels/labels-context';
import { labelsToJson } from '../../../utils/labels-to-json';

export function ExportButton() {
  const { languagesList, labels } = useLabels();
  const toast = useToast();
  const handleExport = (language: string) => {
    try {
      const labelsToExport = labelsToJson(labels!, language);

      const element = document.createElement('a');
      const file = new Blob([labelsToExport], {
        type: 'application/json',
      });
      element.href = URL.createObjectURL(file);
      element.download = language;
      document.body.appendChild(element);
      element.click();

      toast({
        containerStyle: {
          position: 'absolute',
          top: '50px',
        },
        description: 'Exported successfully',
        duration: 5000,
        isClosable: true,
        position: 'top',
        status: 'success',
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      toast({
        containerStyle: {
          position: 'absolute',
          top: '50px',
        },
        description: 'Oops, something went wrong!',
        duration: 5000,
        isClosable: true,
        position: 'top',
        status: 'error',
      });
    }
  };

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        colorScheme='cyan'
        size='sm'
        variant='ghost'
        rightIcon={<ChevronDownIcon />}
      >
        Export
      </MenuButton>
      <MenuList>
        {languagesList.map((language) => (
          <MenuItem key={language} onClick={() => handleExport(language)}>
            {language}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
