import { LabelsList } from '../context/labels/labels-state';

export function updateLabels(
  labels: LabelsList,
  fileContent: string,
  fileName: string,
): LabelsList {
  const cloned = JSON.parse(JSON.stringify(labels));
  const labelsObject = JSON.parse(fileContent!);

  Object.keys(labelsObject)
    .filter((key) => !key.startsWith('@'))
    .forEach((key: string) => {
      if (!cloned[key]) {
        cloned[key] = {};
      }

      cloned[key][fileName] = {
        label: labelsObject[key],
        originalLabel: labelsObject[key],
      };

      if (labelsObject[`@${key}`]?.placeholders) {
        cloned[key][fileName].variables = Object.keys(
          labelsObject[`@${key}`]?.placeholders,
        );
      }
    });

  return cloned;
}
