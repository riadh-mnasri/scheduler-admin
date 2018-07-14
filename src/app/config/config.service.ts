import { HttpClient } from '@angular/common/http';

export class ConfigService {
  constructor(private http: HttpClient) { }

  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }

}
