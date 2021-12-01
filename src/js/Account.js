const allAccounts = ['Alexandra', 'Petr', 'Ivan'];

export default class Account {
  constructor(nickname) {
    const index = allAccounts.findIndex((item) => item === nickname);
    if (index !== -1) {
      alert('Псевдоним занят, выберите другой');
      return false;
    }
    this.nickname = 'you';
    return true;
  }

  static getAll() {
    return allAccounts;
  }

  addAccount() {
    allAccounts.push(this.nickname);
  }
}
