"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockHttpClient = /** @class */ (function () {
    function MockHttpClient() {
    }
    MockHttpClient.get = function (restUrl, options) {
        return new Promise(function (resolve) {
            resolve(MockHttpClient._items);
        });
    };
    MockHttpClient._items = [{ Title: 'Mock List', Id: '1' },
        { Title: 'Mock List 2', Id: '2' },
        { Title: 'Mock List 3', Id: '3' }];
    return MockHttpClient;
}());
exports.default = MockHttpClient;
//# sourceMappingURL=MockHttpClient.js.map