import { GameSavingLoader } from '../GameSavingLoader';

describe('Tests for the GameSavingLoader class', () => {
  test('successful loading of save file with specific data', async () => {
    expect.assertions(3);
    const saving = await GameSavingLoader.load();
    expect(saving.id).toBe(9);
    expect(saving.created).toBe(1546300800);
    expect(saving.userInfo).toEqual({
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000
    });
  });
});
