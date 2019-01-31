class Helper {
  static baseurl() {
    return "https://api.foursquare.com/v2";
  }
  static auth() {
    const keys = {
      client_id: "T4HOLQQFAJKSS2G3AB50XOMOBEZJIE3JRX5HNEKNYVCZKHR4",
      client_secret: "WASFM5UAJLKPWC15WX4P20C1CUAF4RTI5FHKUH104ZYDYUG1",
      v: "20181124"
    };
    return Object.keys(keys)
      .map(key => `${key}=${keys[key]}`)
      .join("&");
  }
  static urlBuilder(urlPrams) {
    if (!urlPrams) {
      return "";
    }
    return Object.keys(urlPrams)
      .map(key => `${key}=${urlPrams[key]}`)
      .join("&");
  }
  static headers() {
    return {
      Accept: "application/json"
    };
  }
  static simpleFetch(endPoint, method, urlPrams) {
    let requestData = {
      method,
      headers: Helper.headers()
    };
    return fetch(
      `${Helper.baseurl()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
        urlPrams
      )}`,
      requestData
    ).then(res => res.json());
  }
}
export default class SquareAPI {
  static search(urlPrams) {
    return Helper.simpleFetch("/venues/search", "GET", urlPrams);
  }
  static getVenueDetails(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
  }
  static getVenuePhotos(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
  }
}
