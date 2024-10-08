import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration {
  // The list of sitemap URLs of the websites you want to crawl. The list can include a maximum of `3` sitemap URLs.
  siteMaps?: Array<string>;
}

export function kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "siteMaps",
      "The list of sitemap URLs of the websites you want to crawl. The list can include a maximum of `3` sitemap URLs.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
