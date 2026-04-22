
import{test,expect} from '@playwright/test';

test.describe("Group-1 tests", async()=>{

    test("Group-1 test1" , async()=>{
    console.log("Group-1 and Test-1 is executing......")

    });

   test("Group-1 Test-2" ,async()=>{
    console.log("Group-1 and Test2 is Executing..........")

   });

   test.beforeAll(async() =>{
    console.log("*** this run once before all test case ....")
});

test.afterAll(async()  =>{
    console.log("*** this run once After all test case ....")
});

test.beforeEach(async() =>{ 
    console.log("this run once before all test case ....")
});

test.afterEach(async() =>{ 
    console.log(" this run once After all test case ....")
});

});


test.describe("Group-2 tests", async()=>{

    test("Group-2 test1" , async()=>{
    console.log("Group-2 and Test-1 is executing......")

    });

   test("Group-2 Test-2" ,async()=>{
    console.log("Group-2npx  and Test2 is Executing..........")

   });

});