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
    const storage = await this.storage.create();
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
  public async get(key: string) {
    this._storage = await this.storage.create();
    const val = await this._storage?.get(key);
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
