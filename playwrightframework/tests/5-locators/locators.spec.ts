

//1.getByRole();

//syntax: page.getByRole(role, Option);

//eg: page.getByRole('link', {name:'Gmail'});

//-------------------------

//role='textbox' for text box
//role='button' for button
//role='link' for hyperlink
//role='combobox' for dropdown
//role='checkbox' for checkbox
//role='radio' for radiobutton
//role='switch' for toggle button
//role='textbox' for text box
//role='heading' for heading
//role='list' for list
//role='listitem' for listitem


//2.getBlabel

//syntax: getBylabel('label-text-value');
// <label class="form-label" id="dateOfBirth-label">Date of Birth</label>
//page.getBylabel('Date of Birth');

//3.getByPlaceholder():  placeholder attribute value of the element
//Syntax : page.getByPlaceholder('placeholder-text-value');
//Example Html : <input type="text" placeholder="Enter your name">
//Locator : page.getByPlaceholder('Enter your name');


//4.getByText(): text content of the element
//Syntax : page.getByText('text-content-value');
//Example Html : <button>Submit</button>
//Locator : page.getByText('Submit');

//5.getByAltText(): alt attribute value of the element
//Syntax : page.getByAltText('alt-text-value');
//Example Html : <img src="logo.png" alt="Company Logo">
//Locator : page.getByAltText('Company Logo');

//6.getByTitle(): title attribute value of the element
//Syntax : page.getByTitle('title-text-value');
//Example Html : <a href="#" title="Home Page">Home</a>
//Locator : page.getByTitle('Home Page');

//7.getByTestId(): data-testid attribute value of the element
//Syntax : page.getByTestId('test-id-value');
//Example Html : <div data-testid="user-profile">User Profile</div>
//Locator : page.getByTestId('user-profile');

//8.locator() : locator method will be used to locate the element by using CSS selector or XPath. 




