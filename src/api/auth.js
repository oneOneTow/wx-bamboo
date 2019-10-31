import {get,post} from '../request'
import config from '../config'

const loginUrl = "/mp/auth/account/login/" + config.appid;
const fetchUserUrl = "/auth/account/user/" + config.appid;

export function login(code) {
    return get(loginUrl, {"code":code});
}

export function fetchUser(signature, rawData, encryptedData, iv) {
    data = {
        "signature": signature,
        "rawData": rawData,
        "encryptedData": encryptedData,
        "iv": iv
    }
    return get(fetchUserUrl,data);
}