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

  createParentChainUrl = 'https://factom-java-dot-ntm-dev-202213.appspot.com/case/register';
  chainsUrl = 'https://factom-java-dot-ntm-dev-202213.appspot.com/chain/getall';
  createChainUrl = 'https://chain-service-dot-ntm-dev-202213.appspot.com/createChain';
  usersUrl = 'https://factom-java-dot-ntm-dev-202213.appspot.com/member/getall';
  authUserUrl = 'https://factom-java-dot-ntm-dev-202213.appspot.com/chain/auth_user';
  signPayloadUrl = 'https://factom-java-dot-ntm-dev-202213.appspot.com/chain/getsignedpayload';
  addEntryUrl = 'https://factom-java-dot-ntm-dev-202213.appspot.com/chain/addentry';
  verifyPayloadUrl = 'https://factom-java-dot-ntm-dev-202213.appspot.com/verification/verifysign';
  caseId;


constructor(private httpClient: HttpClient) { }

setCaseId(caseId) {
  this.caseId = caseId;
}

getCaseId() {
  return this.caseId;
}

createParentChain() {
  return this.httpClient.post(this.createParentChainUrl, httpOptions);
}

createChain(data) {
  return this.httpClient.post(this.createChainUrl, data, httpOptions);
}

getUsers() {
  return this.httpClient.get(this.usersUrl, httpOptions);
}

getChains(caseId) {
  return this.httpClient.post(this.chainsUrl, caseId, httpOptions);
}

addUsers(users) {
  return this.httpClient.post(this.authUserUrl, users, httpOptions);
}

signPayload(data) {
  return this.httpClient.post(this.signPayloadUrl, data, httpOptions);
}

verifyPayload(data) {
  return this.httpClient.post(this.verifyPayloadUrl, data, httpOptions);
}

addEntry(data) {
  return this.httpClient.post(this.addEntryUrl, data, httpOptions);
}

}
