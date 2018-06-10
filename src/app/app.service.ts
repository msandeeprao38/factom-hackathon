import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable({
  providedIn: 'root'
})

export class AppService {

  chainsUrl = 'https://factom-java-dot-ntm-dev-202213.appspot.com/chain/getall';
  createChainUrl = 'https://channel-service-dot-ntm-dev-202213.appspot.com/createChain';
  usersUrl = 'https://factom-java-dot-ntm-dev-202213.appspot.com/member/getall';
  createCaseUrl = 'https://factom-java-dot-ntm-dev-202213.appspot.com/chain/create_case';


constructor(private httpClient: HttpClient) { }

createChain(data) {
  return this.httpClient.post(this.createChainUrl, data, httpOptions);
}

getUsers() {
  return this.httpClient.get(this.usersUrl, httpOptions);
}

getChains() {
  return this.httpClient.get(this.chainsUrl, httpOptions);
}

addUsers(users) {
  return this.httpClient.post(this.usersUrl, users, httpOptions);
}

createCase(data) {
  return this.httpClient.post(this.createCaseUrl, data, httpOptions);
}

}
