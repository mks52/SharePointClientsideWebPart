import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './DdHelloWorldWebPart.module.scss';
import * as strings from 'DdHelloWorldWebPartStrings';
import MockHttpClient from './MockHttpClient';
import {SPHttpClient, SPHttpClientResponse} from '@microsoft/sp-http';
import {Environment, EnvironmentType} from '@microsoft/sp-core-library';
import 'jqueryui';
import * as $ from 'jquery';
import {SPComponentLoader} from '@microsoft/sp-loader';
import * as twttr from 'twitter';
//var twttr: any = require('twitter');
//var $: any = require('jquery');

export interface IDdHelloWorldWebPartProps {
  twitter: string;
  facebook: string;
}

export interface ISPLists {
  value: ISPList[];
}

export interface ISPList {
  Title: string,
  Id: string,
  AlternateThumbnailUrl: {
    Description: string,
    Url: string
  },
  VideoSetDescription: string
}


export default class DdHelloWorldWebPartWebPart extends BaseClientSideWebPart<IDdHelloWorldWebPartProps> {
  


  

  public constructor() {
    super();
    SPComponentLoader.loadCss('https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
  }

  public render(): void {
    
    
    this.domElement.innerHTML = `
    <div class="${styles.ddHelloWorld}">
      <div class="${styles.container}">
        <div style="width:550px" id="tabs">
          <ul>
            <li><a href="#tabs-1">Twitter</a></li>
            <li><a href="#tabs-2">Facebook</a></li>
          </ul>
          <div id="tabs-1">
            <a class='twitter-timeline' href='https://twitter.com/${escape(this.properties.twitter)}?ref_src=twsrc%5Etfw'>&nbsp;</a>
          </div>
          <div id="tabs-2">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${escape(this.properties.facebook)}&tabs=timeline&width=500&height=800&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="500" height="800" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
          </div>
          
        </div> 
      </div>
    </div>`;
    
    twttr.widgets.load();
    
    $(function() {
      $("#tabs").tabs();
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('twitter', {
                  label: "Twitter Account Name"
                }),
                PropertyPaneTextField('facebook', {
                  label: 'Facebook Page Name'
                })
                
              ]
            }
          ]
        }
      ]
    };
  }
}
