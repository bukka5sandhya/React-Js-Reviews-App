In this project, let's build a Reviews App by applying the concepts we have learned till now.

Refer to the image below:

![image](https://github.com/bukka5sandhya/React-Js-Reviews-App/assets/133884532/3a14357b-5217-41cf-86da-f2a1d2a195bd)

https://assets.ccbp.in/frontend/content/react-js/reviews-app-output-v2.gif

Design Files

Click to view

Extra Small (Size < 576px), Small (Size >= 576px)

Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)

Set Up Instructions

Click to view

Download dependencies by running npm install

Start up the app using npm start

Completion Instructions

Functionality to be added

The app must have the following functionalities

When the left arrow is clicked, then the previous review details should be displayed

When the right arrow is clicked, then the next review details should be displayed

If the review that is being displayed is the first in the list of reviews

There should not be any state change when the left arrow is clicked

If the review that is being displayed is the last in the list of reviews

There should not be any state change when the right arrow is clicked

The ReviewsCarousel component receives the reviewsList as a prop. It consists of a list of review objects with the following properties in each review object

Key	Data Type

imgUrl	String

username	String

companyName	String

description	String

Implementation Files

Use these files to complete the implementation:

src/components/ReviewsCarousel/index.js

src/components/ReviewsCarousel/index.css

Quick Tips

Click to view

You can use the cursor CSS property to specify the mouse cursor to be displayed when pointing over an element

cursor:pointer;

![image](https://github.com/bukka5sandhya/React-Js-Reviews-App/assets/133884532/172530c3-c67b-4442-85d4-a530f9b0ad2c)

You can use the below outline CSS property for buttons and input elements to remove the highlighting when the elements are clicked

outline: none;

Important Note
Click to view

The following instructions are required for the tests to pass

The button to check the previous review should have the data-testid attribute with value as leftArrow

The button to check the next review should have the data-testid attribute with value as rightArrow

The profile images should have the alt as the value of the key username from each review object provided

Resources

Image URLs

https://assets.ccbp.in/frontend/react-js/reviews-bg.png

https://assets.ccbp.in/frontend/react-js/left-arrow-img.png alt should be left arrow

https://assets.ccbp.in/frontend/react-js/right-arrow-img.png alt should be right arrow

Colors

Hex: #ffffff

Hex: #171f46

Font-families

Things to Keep in Mind

All components you implement should go in the src/components directory.

Don't change the component folder names as those are the files being imported into the tests.

Do not remove the pre-filled code

Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
