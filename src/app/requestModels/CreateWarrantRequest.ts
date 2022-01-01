import { Timestamp } from "rxjs/internal/operators/timestamp";

export interface CreateWarrantRequest{
    items: string,
    created_at: number
}

export interface CreateItemRequest{
  width: number,
  height: number
}
