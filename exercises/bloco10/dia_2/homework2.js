const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

describe('valida possíveis retornos para o input de diferentes ids em finUserById', () => {
  it('valida retorno válido para findUserById(4)', async () => {
    const data = await findUserById(4);
    expect(data).toEqual({ name: 'Mark' });
  });
  it('valida retorno válido para findUserById(5)', async () => {
    const data = await findUserById(5);
    expect(data).toEqual({ name: 'Paul' });
  });
  it('valida retorno inválido para findUserById(6)', async () => {
    try {
      await findUserById(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    }
  })
})

describe('valida possíveis retornos para o input de diferentes ids em finUserById', () => {
  it('valida retorno válido para findUserById(4)', () => {
    expect.assertions(1);
    return findUserById(4).then((data) => { 
      expect(data).toEqual({ name: 'Mark' });
    })});
  it('valida retorno válido para findUserById(5)', () => {
    expect.assertions(1)
    return findUserById(5).then((data) => {
      expect(data).toEqual({ name: 'Paul' })
    })});
  it('valida retorno inválido para findUserById(6)', () => {
    expect.assertions(1)
    return findUserById(6).catch((error) => {expect(error).toEqual({ error: 'User with 6 not found.' })
  })});
});