export type LabelDetails = {
  label: string;
  originalLabel: string;
  variables: string[] | undefined;
};

export type LabelL10n = { [key: string]: LabelDetails };
export type LabelsList = { [key: string]: LabelL10n };

export type LabelsState = {
  labels: LabelsList | undefined;
  languagesList: string[];
  openFile: (file: File) => void;
  updateLabel: (labelKey: string, language: string, value: string) => void;
};
