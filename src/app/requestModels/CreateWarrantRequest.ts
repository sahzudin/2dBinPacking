import { Timestamp } from "rxjs/internal/operators/timestamp";

export interface CreateWarrantRequest{
    name: string
    items: string,
    created_at: number
}

export interface CreateItemRequest{
  width: number,
  height: number
}

export interface CreatePalleteRequest{
  height: number,
  width: number,
  depth: number
}
