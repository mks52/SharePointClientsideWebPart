import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './JqueryWebPart.module.scss';
import * as strings from 'JqueryWebPartStrings';
import MyAccordionTemplate from './MyAccordionTemplate';
import * as jQuery from 'jquery';
import 'jqueryui';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as twttr from 'twitter';
export interface IJqueryWebPartProps {
  description: string;
  twitter: string;
}

export default class JqueryWebPartWebPart extends BaseClientSideWebPart<IJqueryWebPartProps> {

  public constructor() {
    super();

    SPComponentLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
  }
  
  public render(): void {
    this.domElement.innerHTML =  `
    <head>
    <style>
    #tabs-5{
      font-size: 14px;
      height:600px;
      width:400px;
    }
    .ui-widget-header {
       background:#b9cd6d;
       border: 1px solid #b9cd6d;
       color: #FFFFFF;
       font-weight: bold;
    }
  </style>
  </head>
  
  <body>
    <div id = "tabs-5">
       <ul>
          <li><a href = "#tabs-6">Tab 1</a></li>
          <li><a href = "#tabs-7">Tab 2</a></li>
          <li><a href = "#tabs-8">Tab 3</a></li>
       </ul>
       <div id = "tabs-6">
          <iframe src="https://instawidget.net/v/user/${escape(this.properties.description)}" id="link-3cc5f2196484f7b08e50f35826c3d72e2c8b256b4d213e27d153a4094141813e"
          scrolling="auto" frameborder="0" style="border:none; overflow:hidden; width:600px; height:430px; background: white; float:left;" -ms-zoom: 0.75;
                  -moz-transform: scale(0.75);
                  -moz-transform-origin: 0 0;
                  -o-transform: scale(0.75);
                  -o-transform-origin: 0 0;
                  -webkit-transform: scale(0.75);
                  -webkit-transform-origin: 0 0; allowTransparency="true">
          </iframe>
              
          
       </div>
       <div id = "tabs-7">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTestPage-139126046717319%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
       </div>
       <div id = "tabs-8">
          <p>
          <a class="twitter-timeline" href="https://twitter.com/${escape(this.properties.twitter)}">Tweets by doshidev</a> 
          
          
          </p>
          <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat.
          </p>
       </div>
    </div>
    </body>
  `;

    const accordionOptions: JQueryUI.AccordionOptions = {
      animate: true,
      collapsible: false,
      icons: {
        header: 'ui-icon-circle-arrow-e',
        activeHeader: 'ui-icon-circle-arrow-s'
      }
    };

    const tabOptions: JQueryUI.TabsOptions = {
      heightStyle:"fill",
      collapsible:false,
      hide:"slideUp"

    };
    //jQuery('.accordion', this.domElement).accordion(accordionOptions);
    jQuery('#tabs-5',this.domElement).tabs(tabOptions);
    twttr.widgets.load();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Instagram ID:'
                }),
                PropertyPaneTextField('twitter', {
                  label: 'Twitter ID:'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
