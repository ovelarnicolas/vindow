export default interface Hotel {
  place_id: string;
  name: string;
}

export interface HotelRequest {
  query: string;
}

export interface HotelResponse {
  // data: ServerData;
  candidates: Hotel[];
  status: string;
}

export interface ServerData {
  candidates: Hotel[];
  status: string;
}
