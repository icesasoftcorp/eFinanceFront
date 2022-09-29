/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  /**
   * Initializes the storage
   */
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }

  /**
   * Stores the key of the storage
   *
   * @param key
   * @param value
   */
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  /**
   * Gets the value of a stored key
   *
   * @param key
   * @returns stored value
   */
  public get(key: string) {
    let val: any;
    this._storage.get(key).then(value => {
      val = value;
    }).catch(err => {
      console.log(err);
    });
    return val;
  }

  /**
   * Removes key from storage
   *
   * @param key
   */
  public remove(key: string) {
    this._storage.remove(key);
  }
}
