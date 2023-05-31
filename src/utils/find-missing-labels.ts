import { LabelsList } from '../context/labels/labels-state';

/// Return all the labels that are missing a translation
export function findMissingLabels(
  labels: LabelsList,
  languagesList: string[],
): LabelsList {
  const labelsToDisplay: LabelsList = {};
  Object.keys(labels ?? {}).forEach((label) => {
    const missingLabels = languagesList.find(
      (language) => labels![label][language] === undefined,
    );

    if (missingLabels) {
      labelsToDisplay[label] = labels![label];
    }
  });

  return labelsToDisplay;
}
