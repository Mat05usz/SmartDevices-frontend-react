import fetchMock from "fetch-mock";
import { getMockDevices, findByID } from './MockDevices';

export default function setupMock() {
  fetchMock.get("https://api.com/devices", (url, opts) => {
      return getMockDevices();
  }, {
    delay: 500,
  })
  fetchMock.get("express:/devices/:id", (url, opt) => {
    return findByID(url.split('/').slice(-1)[0]);
  }, {
    delay: 500,
  });

}
