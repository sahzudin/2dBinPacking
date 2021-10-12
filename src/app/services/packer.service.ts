import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackerService {

  defaultConfig: PackerConfig = {
    width: 400,
    height: 400,
    padding: 20,
    algorithm: Algorithm.MAX_WIDTH
  }

  config: BehaviorSubject<PackerConfig> = new BehaviorSubject(this.defaultConfig);
  config$ : Observable<PackerConfig> = this.config.asObservable();

  constructor() { }

  updateConfig(config: PackerConfig){
    this.config.next(config)
  }

}

export interface PackerConfig{
  width: number,
  height: number,
  padding: number,
  algorithm: Algorithm
}

export enum Algorithm{
  MAX_WIDTH,
  LONGEST_SIDE,
  MAX_AREA
}
