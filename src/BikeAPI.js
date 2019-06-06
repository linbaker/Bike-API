export class Bikes {
  getBikesByProximity(city, proximity) {

    return new Promise(function (resolve, reject) {
      debugger;
      let request = new XMLHttpRequest();
      let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${city}&distance=${proximity}&stolenness=proximity`;      
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);        
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.withCredentials = false;
      //request.setRequestHeader('Accept', 'application/json');
      // request.setRequestHeader('Access-Control-Allow-Credentials', 'include');
      request.send();
    });
  }
}