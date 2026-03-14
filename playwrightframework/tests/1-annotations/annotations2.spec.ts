
import{test,expect} from '@playwright/test';

//test.only() =>it will execute only paticular test case by skipping all other test cases
//test.skip() =>it will skip the particular test case execute all other test cases
//test.fail() =>I'm expecting a paticular test case to be failed highlight with test case
//test.fixme() =>I am sure this test case is not working. please ignore even if it is fixed
//test.slow() =>playwright will consider that there are loading issue and it may facing slowness


test.describe("Group-1 tests", async()=>{

    test("Group-1 test1" , async()=>{
    console.log("Group-1 and Test-1 is executing......")

    });

   test.skip("Group-1 Test-2" ,async()=>{
    console.log("Group-1 and Test2 is Executing..........")

   });

   test.fail("Group-1 test3" , async()=>{
    console.log("Group-1 and Test-1 is executing......")

    });

   test.fixme("Group-1 Test-5" ,async()=>{
    console.log("Group-1 and Test2 is Executing..........")

   });

   test("Group-1 Test-4" ,async()=>{
   test.slow();
    console.log("Group-1 and Test2 is Executing..........")
      await new Promise(resolve => setTimeout(resolve,40000));
   });

});