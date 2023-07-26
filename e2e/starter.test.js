import { by, device, element, expect } from 'detox';

const loginWith = async (userName, password) => {
  const username =  await element(by.id('Username'));
  await username.typeText(userName);
  const passWord = await element(by.id('Password'));
  await passWord.tap()
  await passWord.typeText(password);
  const loginBtn = await element(by.id('Login-button'));
  await loginBtn.tap();
  await loginBtn.tap();
}

const clearText = async (userName,password) => {
  const username =  await element(by.id('Username'));
  const passWord = await element(by.id('Password'));
  await username.clearText(userName);
  await passWord.clearText(password)
}


const loginWithWrongCredentials = async () => await loginWith('alex339', '9sdfhsakjf')
const loginWithWrongCredential = async () => await loginWith('taxomex471@mitigado.com', '9sdfhsakjf')
const loginWithRightCredentials = async () => await loginWith('taxomex471@mitigado.com', 'Test@123')

describe('App', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  // it('Splash', async () => {
  //   await element(by.text('hello'))
  // })

  it('Login with wrong credentials', async () => {
    await loginWithWrongCredentials();
    await clearText()
  });

  it('User doesnot exist', async () => {
    await loginWithWrongCredential();
    await clearText();
  })

  it('Login with right credentials', async () => {
    await loginWithRightCredentials();
    // await clearText();
  });

  it('Home Screen', async () => {
    const logoutBtn = await element(by.id('logout-btn'));
    logoutBtn.tap();
  });

});
