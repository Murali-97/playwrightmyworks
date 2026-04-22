import { expect, request } from "@playwright/test";
import config from "../../config/config.json"; 
import data from "../../testdata/api/data.json";


export class apicommon{

    private requestContext: any;
    private request: any;   

    async init(){

      this.requestContext = await request.newContext({
            baseURL: config.api.baseurl,
            extraHTTPHeaders: {
                'Authorization': config.api.token
            }
        });
    }

    async get(requestype: string, endpoint: string, requestbody?: any)  {
        let response: any;

        switch (requestype.toLowerCase()) {
            case 'get':
                response = await this.requestContext.get(endpoint);
                break;
            case 'post':
                response = await this.requestContext.post(endpoint, { data: requestbody });
                break;
            case 'put':
                response = await this.requestContext.put(endpoint, { data: requestbody });
                break;
            case 'delete':
                response = await this.requestContext.delete(endpoint);
                break;
            default:
                throw new Error(`Unsupported request type: ${requestype}`);
        }

        if (!response) {
            throw new Error(`API call returned undefined response for ${requestype} ${endpoint}`);
        }

        this.request = response;

        try {
            const bodyText = await this.request.text();
            console.log(bodyText);
        } catch (err) {
            console.warn('Unable to read response text:', err);
        }
    }


    async validateResponseStatus(expectedStatus: number) {
        const actualStatus = this.request.status();  
        console.log(`Actual Status: ${actualStatus}, Expected Status: ${expectedStatus}`);     
        await expect(actualStatus).toBe(expectedStatus);
    }

    async validateResponseBody(expectedBody: any) { 
        const actualBody = await this.request.json();
        console.log(`Actual Body: ${JSON.stringify(actualBody)}, Expected Body: ${JSON.stringify(expectedBody)}`);
        await expect(actualBody).toEqual(expectedBody);     
        }
         
        async validatemessage(expectedMessage: string) {
            const actualMessage = await this.request.json();
            console.log(`Actual Message: ${JSON.stringify(actualMessage)}, Expected Message: ${expectedMessage}`);
            await expect(actualMessage.message).toBe(expectedMessage);     
        }

        async validateheader(headerName: string, expectedValue: string) {
            const actualValue = this.request.headers()[headerName.toLowerCase()];
            console.log(`Actual Header Value: ${actualValue}, Expected Header Value: ${expectedValue}`);
            await expect(actualValue).toBe(expectedValue);     
        }
    async validatecookie(cookieName: string, expectedValue: string) {
        const cookies = await this.requestContext.cookies();
        const cookie = cookies.find((c: { name: string; }) => c.name === cookieName);
        const actualValue = cookie ? cookie.value : null;
        console.log(`Actual Cookie Value: ${actualValue}, Expected Cookie Value: ${expectedValue}`);
        await expect(actualValue).toBe(expectedValue);     
    } 
    
    async storedatafromresponse(objectname: any, key: string, value: any) {
     const actualBody = await this.request.json();
   const valuetostore =  actualBody[key];
   data[objectname][key] = valuetostore;

    }
}