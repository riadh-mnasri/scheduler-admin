import {Header} from './header';

export class Job {
  constructor(public id?: string,
              public headers: Array<Header>= [],
              public payload?: string) {
  }
}
