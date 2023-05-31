import { LabelsList } from '../context/labels/labels-state';

export function labelsToJson(labels: LabelsList, language: string): string {
  const json: { [key: string]: any } = {};

  Object.keys(labels).forEach((labelKey) => {
    const label = labels[labelKey];
    const labelDetails = label[language];

    if (!labelDetails) {
      return;
    }

    json[labelKey] = labelDetails.label;
    if ((labelDetails.variables?.length ?? 0) >= 1) {
      json[`@${labelKey}`] = {};
      const placeholders: { [key: string]: any } = {};

      labelDetails.variables!.forEach((variable) => {
        placeholders[variable] = {};
      });

      json[`@${labelKey}`].placeholders = placeholders;
    }
  });

  return JSON.stringify(json, null, 1);
}
