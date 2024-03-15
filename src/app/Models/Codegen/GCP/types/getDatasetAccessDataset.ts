import { getDatasetAccessDatasetDataset } from "./getDatasetAccessDatasetDataset";

export interface getDatasetAccessDataset {
  // The dataset this entry applies to
  Datasets?: Array<getDatasetAccessDatasetDataset>;

  /*
Which resources in the dataset this entry applies to. Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS
*/
  TargetTypes?: Array<string>;
}
