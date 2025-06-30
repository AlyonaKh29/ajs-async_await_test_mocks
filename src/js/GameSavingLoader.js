import { read } from './reader';
import { json } from './parser'
import { GameSaving } from './GameSaving';

export class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    return new Promise(resolve => {
      const parsedData = JSON.parse(value);
      const savedGame = new GameSaving(parsedData);
      resolve(savedGame);
    })
  }
}
