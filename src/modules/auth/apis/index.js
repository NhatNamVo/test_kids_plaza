import authData from '../../../fake-data/auth/index.json';

const awaitFunc = (callback) => {
  setTimeout(() => {
    callback?.();
  }, 2000);
};

export const loginAsync = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    awaitFunc(() => {
      try {
        const account = authData.find(account => account.email === email);
  
        if (!account) {
          resolve({ messageErrors: 'Email không tồn tại' });
          return;
        }
  
        if (account?.password != password) {
          resolve({ messageErrors: 'Mật khẩu không đúng' });
          return;
        }
  
        resolve({ data: account, })
      } catch(error) {
        throw reject(error)
      }
    })
  })
};

export const registerAsync = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    awaitFunc(() => {
      try {
        const account = authData.find(account => account.email === email);
  
        if (account) {
          resolve({ messageErrors: 'Email đã tồn tại' });
          return;
        }

        resolve({ data: {email, password, kidCoin: 0, name: ''}, })
      } catch(error) {
        throw reject(error)
      }
    })
  })
};
