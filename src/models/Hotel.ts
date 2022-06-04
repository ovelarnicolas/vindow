export default interface Hotel {
  place_id: string;
  name: string;
}

export interface HotelRequest {
  query: string;
}

export interface HotelResponse {
  candidates: Hotel[];
  status: string;
}
