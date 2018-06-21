// The fields are named the same way they need to be in the http request, so no hate for not following the convention
export interface Organization {
  user_id: String;
  organization_id: String;
  event_ids: [String];
  campaign_ids: [String];
  organization_name: String;
  organization_description: String;
}
