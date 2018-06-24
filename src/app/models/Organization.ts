// The fields are named the same way they need to be in the http request, so no hate for not following the convention
export interface Organization {
  id: String;
  user_id: String | string;
  organization_id: String | string;
  event_ids: [String | string];
  campaign_ids: [String | string];
  organization_name: String | string;
  organization_description: String | string;
}
