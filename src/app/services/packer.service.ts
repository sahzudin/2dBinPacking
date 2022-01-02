import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class PackerService {

  defaultConfig: PackerConfig = {
    width: 316,
    height: 275,
    depth: 112,
    padding: 2,
    algorithm: Algorithm.BRUTE_FORCE,
    limit: false,
    pallete_count: 0,
    item_depth: 15
  }

  config: BehaviorSubject<PackerConfig> = new BehaviorSubject(this.defaultConfig);
  config$ : Observable<PackerConfig> = this.config.asObservable();

  constructor(
    private notificationService: NotificationsService
  ) { }

  updateConfig(data: PackerConfig){
    let config: PackerConfig = {
      width: data.width,
      height: data.height,
      depth: data.depth,
      padding: data.padding,
      algorithm: Algorithm.BRUTE_FORCE,
      limit: data.limit,
      pallete_count: data.pallete_count,
      item_depth: data.item_depth
    }

    this.config.next(config)
    this.notificationService.showSuccess("Konfiguracija primjenjena")
  }

}

export interface PackerConfig{
  width: number,
  height: number,
  depth: number,
  padding: number,
  algorithm: Algorithm,
  limit: boolean,
  pallete_count: number,
  item_depth: number
}

export enum Algorithm{
  MAX_WIDTH,
  LONGEST_SIDE,
  MAX_AREA,
  BRUTE_FORCE
}
