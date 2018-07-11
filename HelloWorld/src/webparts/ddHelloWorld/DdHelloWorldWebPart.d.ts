import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'jqueryui';
export interface IDdHelloWorldWebPartProps {
    description: string;
    test: string;
    test1: boolean;
    test2: string;
    test3: boolean;
}
export interface ISPLists {
    value: ISPList[];
}
export interface ISPList {
    Title: string;
    Id: string;
}
export default class DdHelloWorldWebPartWebPart extends BaseClientSideWebPart<IDdHelloWorldWebPartProps> {
    private _renderListAsync();
    private _renderList(items);
    private _getListData();
    private _getMockListData();
    constructor();
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
