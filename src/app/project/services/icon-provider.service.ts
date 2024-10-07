import { Injectable } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { faCoffee, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faConnectdevelop, faJava, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconProviderService {

  private icons: { [key: string]: IconDefinition } = {
    coffee: faCoffee,
    user: faUser,
    home: faHome,
    angular: faAngular,
    react: faReact,
    python: faPython,
    java: faJava,
    nodejs: faNodeJs,
    devops: faConnectdevelop
    // Add more icons as needed
  };

  constructor() {
    // Add all icons to the library
    library.add(...Object.values(this.icons));
  }

  getIcon(iconName: string): IconDefinition {
    return this.icons[iconName] || null;
  }
}
