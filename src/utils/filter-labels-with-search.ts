import { LabelsList } from '../context/labels/labels-state';

export function filterLabelsWithSearch(
  labels: LabelsList,
  search: string,
): LabelsList {
  const labelsToDisplay: LabelsList = {};
  Object.keys(labels ?? {})
    .filter((labelKey) => {
      const label = labels[labelKey];

      if (labelKey.includes(search)) {
        return true;
      }

      const labelsIncludesSearch = Object.keys(label).find(
        (language) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          label[language].label.includes(search) ||
          label[language].originalLabel.includes(search),
      );

      return labelsIncludesSearch;
    })
    .forEach((labelKey) => {
      labelsToDisplay[labelKey] = labels[labelKey];
    });

  return labelsToDisplay;
}
