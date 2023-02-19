export type LabelDetails = {
  label: string;
  variables: string[] | undefined;
};

export type LabelL10n = { [key: string]: LabelDetails };
export type LabelsList = { [key: string]: LabelL10n };

export type LabelsState = {
  labels: LabelsList | undefined;
  languagesList: string[];
  openFile: (file: File) => void;
};
