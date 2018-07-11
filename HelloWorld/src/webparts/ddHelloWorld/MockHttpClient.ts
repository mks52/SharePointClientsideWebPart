import {ISPList} from './DdHelloWorldWebPart';


export default class MockHttpClient {
    private static _items: ISPList[] = [{Title: 'Title', Id: '1', AlternateThumbnailUrl:{Description: "Thumbnail url1", Url: "Thunmbnail url2"}, VideoSetDescription: "Video description does "}];
    public static get(restUrl: string, options?: any): Promise<ISPList[]> {
        return new Promise<ISPList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}