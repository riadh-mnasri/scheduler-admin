import {ConfigService} from './config.service';
import {Config} from './config';

export class ConfigComponent {
  config: { jobsUrl: string; textfile: string; };

  constructor(private configService: ConfigService) { }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        jobsUrl: data['jobsUrl'],
        textfile:  data['textfile']
      });
  }

}
