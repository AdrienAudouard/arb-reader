import { LabelsList } from '../context/labels/labels-state';

/// Return all the labels that are missing a translation
export function findMissingLabels(
  labels: LabelsList,
  languagesList: string[],
): LabelsList {
  const labelsToDisplay: LabelsList = {};
  console.log(labels);
  Object.keys(labels ?? {}).forEach((label) => {
    if (label === 'accept') {
      // eslint-disable-next-line no-debugger
      // debugger;
    }
    const missingLabels = languagesList.find(
      (language) => labels![label][language] === undefined,
    );
    console.log('missingLabels', missingLabels);
    if (missingLabels) {
      console.log('missing label', label, missingLabels);
      labelsToDisplay[label] = labels![label];
    }
  });

  return labelsToDisplay;
}
