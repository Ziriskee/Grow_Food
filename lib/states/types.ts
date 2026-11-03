export type AgroZone =
  | "North West"
  | "North East"
  | "North Central"
  | "South West"
  | "South East"
  | "South South";

export type NigerianState = {
  slug: string;
  name: string;
  capital: string;
  zone: AgroZone;
  climate: string;
  soil: string;
  plantingWindow: string;
  waterNote: string;
  farmingNote: string;
};
