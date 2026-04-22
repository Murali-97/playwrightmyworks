

import{test,expect} from '@playwright/test';


test.describe("Group-1 tests",{tag:'@regular'},async()=>{

    test("Group-1 test1" ,{tag:'@smoke'}, async()=>{
    console.log("Group-1 and Test-1 is executing......")

    });

   test("Group-1 Test-2" , {tag:'@sanity'},async()=>{
    console.log("Group-1 and Test2 is Executing..........")

   });

});


test.describe("Group-2 tests", async()=>{

    test("Group-2 test1" ,{tag:'@regression'}, async()=>{
    console.log("Group-2 and Test-1 is executing......")

    });

   test("Group-2 Test-2" ,{tag:['@smoke','@regression']},async()=>{
    console.log("Group-2npx  and Test2 is Executing..........")

   });

});
