require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it("Verifies if character's name is Wonder Woman", async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });

  it("Verifies if it returns error when no parameter is passed", async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  })

  it('Verifies if it returns `Invalid id` when passed non existent parameter', async () => {
    const response = await fetchCharacter('any parameter');
    expect(response).toBe('Invalid id');
  })

  it('Verifies if fetch is called with the right endpoint', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  })
});