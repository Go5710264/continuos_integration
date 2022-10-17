import loadUser from '../loadUser';
import httpGet from '../http';
// подключение заглушки httpGet
jest.mock('../http');

beforeEach(() => { // сбрасывание изначальных данных
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({})); // httpGet должен вернуть строку
  loadUser(1);
  expect(httpGet).toBeCalledWith('http://server:8080/users/1'); // httpGet должна быть вызвана с параметром сервера
});
