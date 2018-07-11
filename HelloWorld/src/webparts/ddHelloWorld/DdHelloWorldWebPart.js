"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var DdHelloWorldWebPart_module_scss_1 = require("./DdHelloWorldWebPart.module.scss");
var strings = require("DdHelloWorldWebPartStrings");
var MockHttpClient_1 = require("./MockHttpClient");
var sp_http_1 = require("@microsoft/sp-http");
var sp_core_library_2 = require("@microsoft/sp-core-library");
require("jqueryui");
var sp_loader_1 = require("@microsoft/sp-loader");
var twttr = require('twitter');
var DdHelloWorldWebPartWebPart = /** @class */ (function (_super) {
    __extends(DdHelloWorldWebPartWebPart, _super);
    function DdHelloWorldWebPartWebPart() {
        var _this = _super.call(this) || this;
        sp_loader_1.SPComponentLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smothness/jquery-ui.css');
        return _this;
    }
    DdHelloWorldWebPartWebPart.prototype._renderListAsync = function () {
        var _this = this;
        //Local environment
        if (sp_core_library_2.Environment.type === sp_core_library_2.EnvironmentType.Local) {
            this._getMockListData().then(function (response) {
                _this._renderList(response.value);
            });
        }
        else if (sp_core_library_2.Environment.type === sp_core_library_2.EnvironmentType.SharePoint || sp_core_library_2.EnvironmentType.ClassicSharePoint) {
            this._getListData().then(function (response) {
                _this._renderList(response.value);
            });
        }
    };
    DdHelloWorldWebPartWebPart.prototype._renderList = function (items) {
        var html = '';
        items.forEach(function (item) {
            html += "\n        <ul class=\"" + DdHelloWorldWebPart_module_scss_1.default.list + "\">\n          <li class=\"" + DdHelloWorldWebPart_module_scss_1.default.listItem + "\">\n            <span class=\"ms-font-1\">" + item.Title + "</span>\n          </li>\n        </ul>";
        });
        var listContainer = this.domElement.querySelector('#spListContainer');
        listContainer.innerHTML = html;
    };
    DdHelloWorldWebPartWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists?$filter=Hidden eq false", sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    DdHelloWorldWebPartWebPart.prototype._getMockListData = function () {
        return MockHttpClient_1.default.get(this.context.pageContext.web.absoluteUrl)
            .then(function (data) {
            var listData = { value: data };
            return listData;
        });
    };
    DdHelloWorldWebPartWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n    <div class=\"" + DdHelloWorldWebPart_module_scss_1.default.ddHelloWorld + "\">\n      <div style='width:1000px'; class=\"" + DdHelloWorldWebPart_module_scss_1.default.container + "\">\n        <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + DdHelloWorldWebPart_module_scss_1.default.row + "\">\n          <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n            <span class=\"ms-font-xl ms-fontColor-white\">Welcome to SharePoint!</span>\n            <p class=\"ms-font-l ms-fontColor-white\">Customize SharePoint experiences using Web Parts.</p>\n            <p class=\"ms-font-l ms-fontColor-white\">" + sp_lodash_subset_1.escape(this.properties.description) + "</p>\n            <p class=\"ms-font-l ms-fontColor-white\">Loading from " + sp_lodash_subset_1.escape(this.context.pageContext.web.title) + "</p>\n            <a href=\"https://aka.ms/spfx\" class=\"" + DdHelloWorldWebPart_module_scss_1.default.button + "\">\n              <span class=\"" + DdHelloWorldWebPart_module_scss_1.default.label + "\">Learn more</span>\n            </a>\n            <div style='height:300px;'>&nbsp;</div>\n          </div>\n        </div>\n      </div>  \n      <div id=\"spListContainer\" />\n      <div id=\"tabs\">\n        <ul>\n          <li><a href=\"#tabs-1\">Nunc tincidunt</a></li>\n          <li><a href=\"#tabs-2\">Proin dolor</a></li>\n          <li><a href=\"#tabs-3\">Aenean lacinia</a></li>\n        </ul>\n        <div id=\"tabs-1\">\n          <p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>\n        </div>\n        <div id=\"tabs-2\">\n          <p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>\n        </div>\n        <div id=\"tabs-3\">\n          <p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>\n          <p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>\n        </div>\n      </div>\n      </div>";
        var html = "<a class='twitter-timeline' href='https://twitter.com/NetatWork_corp?ref_src=twsrc%5Etfw'>Tweets by NetatWork_corp</a>";
        this.domElement.innerHTML = this.domElement.innerHTML + html;
        //twttr.widgets.load();
        $(function () {
            $("#tabs").tabs();
        });
        //this._renderListAsync(); 
    };
    Object.defineProperty(DdHelloWorldWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    DdHelloWorldWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('test', {
                                    label: 'Multi-line Text Field',
                                    multiline: true
                                }),
                                sp_webpart_base_1.PropertyPaneCheckbox('test1', {
                                    text: 'Checkbox'
                                }),
                                sp_webpart_base_1.PropertyPaneDropdown('test2', {
                                    label: 'Dropdown',
                                    options: [
                                        { key: '1', text: 'One' },
                                        { key: '2', text: 'Two' },
                                        { key: '3', text: 'Three' },
                                        { key: '4', text: 'Four' }
                                    ]
                                }),
                                sp_webpart_base_1.PropertyPaneToggle('test3', {
                                    label: 'Toggle',
                                    onText: 'On',
                                    offText: 'Off'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return DdHelloWorldWebPartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = DdHelloWorldWebPartWebPart;
//# sourceMappingURL=DdHelloWorldWebPart.js.map