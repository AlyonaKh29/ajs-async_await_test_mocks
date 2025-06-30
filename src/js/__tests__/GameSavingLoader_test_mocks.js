import { GameSavingLoader } from '../GameSavingLoader';
import { read } from '../reader';

jest.mock('../reader');

describe('Tests for the GameSavingLoader class', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Error reading file', async () => {
    read.mockRejectedValue(new Error('Reading error'));
    await expect(GameSavingLoader.load()).rejects.toThrow('Reading error');
    expect(read).toHaveBeenCalled();
  });
});
