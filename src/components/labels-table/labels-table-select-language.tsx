import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useCallback } from 'react';

import { useLabels } from '../../context/labels/labels-context';

export function LabelsTableSelectLanguages({
  selectedLanguages,
  onChange,
}: {
  selectedLanguages: string[];
  onChange: (value: string[]) => void;
}) {
  const { languagesList } = useLabels();

  const checkboxValueChange = useCallback(
    (selected: boolean, language: string) => {
      const updatedLanguages = [...selectedLanguages];
      if (selected) {
        updatedLanguages.push(language);
        onChange(Array.from(new Set(updatedLanguages)));
        return;
      }

      const index = updatedLanguages.indexOf(language);
      updatedLanguages.splice(index, 1);
      onChange(updatedLanguages);
    },
    [languagesList, selectedLanguages],
  );

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        colorScheme='teal'
        size='sm'
        variant='outline'
        rightIcon={<ChevronDownIcon />}
      >
        Languages
      </MenuButton>
      <MenuList>
        {languagesList.map((language) => (
          <MenuItem key={language}>
            <Checkbox
              key={`check${language}`}
              isChecked={selectedLanguages.includes(language)}
              onChange={(event) => {
                checkboxValueChange(event.currentTarget.checked, language);
              }}
            >
              {language}
            </Checkbox>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
