import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { updateLabels } from '../../utils/update-labels';

import { LabelsList, LabelsState } from './labels-state';

const LabelsContext = createContext({} as LabelsState);

export const LabelsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [labels, setLabels] = useState<LabelsList | undefined>(undefined);
  const [languagesList, setLanguagesList] = useState<string[]>([]);

  const openFile = useCallback(
    (file: File) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const text = e?.target?.result as string;
        const updatedLabels = updateLabels(labels ?? {}, text!, file.name);

        setLabels(updatedLabels);
        setLanguagesList(Array.from(new Set([...languagesList, file.name])));
      };

      reader.readAsText(file);
    },
    [labels, setLabels],
  );

  const contextValue = useMemo(
    () => ({
      labels,
      openFile,
      languagesList,
    }),
    [labels, openFile, languagesList],
  );

  return (
    <LabelsContext.Provider value={contextValue}>
      {children}
    </LabelsContext.Provider>
  );
};

export const useLabels = () => {
  const labelsContext = useContext(LabelsContext);

  return labelsContext;
};
