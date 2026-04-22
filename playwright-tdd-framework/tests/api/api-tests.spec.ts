

import { test } from "@playwright/test";
import { apicommon } from "../../common/api/api-common";
import config from "../../config/config.json"; 
import testdata from "../../testdata/api/data.json";    

test.describe("API Tests", () => {
    let api: apicommon; 
  let reponame: any;

    test.beforeEach(async () => {   

        api = new apicommon();
        await api.init();
    });

    test("GET request to fetch user details", async () => {
        const data = testdata.duplicateRepo;
        await api.get(data.requestType,data.endpoint);
        await api.validateResponseStatus(data.expectedCode);
        await api.validatemessage(data.expectedStatusMessage);
        await api.validateResponseBody('message',data.expectedErrorMessage);
    });

    test.only("POST request to create a new repository", async () => {
        const data = testdata.validRepo;
        await api.get(data.requestType,data.endpoint,data.body);
        await api.validateResponseStatus(data.expectedCode);
        await api.validatemessage(data.expectedStatusMessage);
        reponame = data.body.name;
        await api.storedatafromresponse('validRepo', 'name', reponame);
    }); 
});