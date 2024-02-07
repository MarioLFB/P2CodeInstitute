# FlashFacts
(Developer: Mario Borges)

<h2 align="center"><img src="docs\amiresponsivep2.png"></h2>

[View the live project here.](https://mariolfb.github.io/P2CodeInstitute/)

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requrements and Expectations](#user-requrements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Tools](#tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [JSHint](#JSHint)
    6. [Device testing](#performing-tests-on-various-devices)
    7. [Browser compatibility](#browser-compatability)
    8. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)

## Project Goals 

### User Goals
- The primary objective of the website is to entertain and challenge users through a Quiz focused on general knowledge. By engaging in this interactive experience, users can enhance their logical thinking skills while gaining knowledge on a variety of subjects.
- Users will grasp the significance of the Quiz Game as a tool for promoting mental exercise. Beyond mere entertainment, the quiz serves as a cognitive workout, encouraging users to think critically and expand their intellectual capabilities.
- Facilitating user experience is a core goal, ensuring that users can effortlessly and intuitively access the quiz. The website design prioritizes clarity and objectivity, enabling users to find their way to the quiz promptly. The emphasis is on creating an interactive pathway that enhances user satisfaction and encourages active participation.

### Site Owner Goals
- Boost engagement and grow the user base with an entertaining Quiz on general knowledge. Attract individuals seeking intellectual stimulation, fostering continuous website traffic and participation.
- Establish the site as a top cognitive fitness platform, highlighting the Quiz Game's role in mental exercise. Position it as the go-to destination for enhancing logical thinking skills and enjoying an intellectually stimulating experience.
- Enhance user interaction and retention with a seamless, intuitive experience. Provide clear quiz navigation, user-friendly interfaces, and features encouraging users to return. Create an environment that keeps users coming back for more quizzes.

## User Experience

### Target Audience
- Individuals seeking an engaging and challenging quiz experience on general knowledge.
- Enthusiasts looking for an interactive environment for intellectual stimulation through quizzes.
- Groups and organizations interested in incorporating a quiz as an educational or entertainment tool.

### User Requirements and Expectations
- Quick and easy location of relevant information about available quizzes.
- Quality content presentation and visually appealing design adaptable to different screen sizes.
- Concise and easily readable content for a quick understanding of the topics covered in the quizzes.
- Accessibility, ensuring that all users can fully enjoy the general knowledge quiz platform.
- The user can contact the Quiz Developer directly via text message

### User Stories

#### First-time User 
1. First time accessing, the User has clear information on the purpose of the Website.
2. First time accessing, the User has an interactive experience where the name is requested for access.
3. First time accessing, the User finds a direct link to the Quiz.
4. First time accessing, the user is able to view logo and the navigation bar at the top of the website with their respective links (Home and Quiz?).
5. First time accessing, the user has the ability to complete and understand the Quiz, as well as interact with features such as the Score, Displayed Name, and Restarting the Quiz.

#### Returning User
6. Returning to the Website, the User can access the quiz again.
7. Returning to the Website, the User can find additional information such as who developed the Quiz.
8. Returning to the Website, the User can find a brief explanation of the Quiz's functionality in terms of cognitive enhancement.
.. Returning to the Website, the User can contact the Quiz Developer through a text message located on the Contact Us Page.
.. Returning to the Website, the User can find reviews from other users in looping mode, where every 8 seconds a different message is displayed automatically.

#### Site Owner
9. As the Owner, it is expected that the User has a clear understanding of the purpose of the Website.
10. As the Owner, it is expected that the User has quick access to the Quiz.
11. As the Owner, it is expected that the User completes the Quiz.
12. As the Owner, it is expected that the User accesses the additional information which has a brief explanation about the use of the Quiz.

## Design

### Design Choices
The website was created with the aim of providing a clean and direct visual experience to the content. It was constructed with large and prominent text fonts, in order to attract the user's attention. With reduced elements, and strong color, the user has an objective design experience focused on the main theme, which is the interaction with the Quiz.

#### Colour Scheme
- The primary colors used in the project are Moderate red (#BA4C4C) and Dark Brown (#3f1d1d).
<img src="docs\color\quizsitecolors.png">

#### Fonts
- The fonts used on the website are:
'Anton'
'Concert One'
'Passion One'
'Playfair Display'
- In case of any issues, the fallback font is a 'sans-serif'.

### Structure
The website Structure:
- Cover Page: Image logo, introductory Title, Interactivity for user name input, and a button to start the quiz.
- Main Page with the Quiz content: Website Name Logo, navigation menu (Home and Quiz?), quiz game section (score information, user name, and restart button), and
Footer with Developer's Name Information.
- Information Page (Quiz?): Navigation menu (Home and Quiz?) followed by informative text on the theme "Mental Agility", and Footer with Developer's Name Information.
- Contact Us: The first container contains a message form connected with EmailJS using the API method, and the second container contains an image loop related to User Reviews.
- Page 404: Page with a central container displaying the message "404 PAGE NOT FOUND".

#### Wireframes
<details><summary>Cover Page</summary>
<img src="docs\wireframe\coverpage.png">
</details>

<details><summary>Main Page</summary>
<img src="docs\wireframe\mainpage.png">
</details>

<details><summary>Informative Page</summary>
<img src="docs\wireframe\informativepage.png">
</details>

<details><summary>Contact Us</summary>
<img src="docs\wireframe\contactus.png">
</details>

<details><summary>Page 404</summary>
<img src="docs\wireframe\page404.png">
</details>

## Technologies Used

### Languages
- HTML
- CSS
- Java Script

### Tools
1. Google Fonts: [Link](https://fonts.google.com/)
3. Ideogram: [Link](https://ideogram.ai/)
4. GitHub: [Link](https://github.com/)
5. Draw.io: [Link](https://https://app.diagrams.net/)
6. Color Hex: [Link](https://color-hex.org/)
7. EmailJS: [Link](https://emailjs.com/)

## Features
Consists of 4 pages (Cover Page, Main Page, Informative Page, and Contact Us), an additional 404 error page, and 14 features.

### Cover Page

- Image Logo and Main Text Slogan
The Logo is the first thing visible when accessing the Cover Page, providing visual information to the user about the purpose of the Website, which is the Quiz. The Main Text Slogan reinforces the site's purpose to persuade the User to access the Quiz.
- User stories covered: 1 and 9
<details><summary>Image Logo and Main Text Slogan</summary>
<img src="docs\features\logo_slogantext.png">
</details>

- User's input name
Brings interactivity to the user. The user's name will be displayed on the main page of the Quiz.
The name must be filled in mandatory for access to the Quiz.
- User stories covered: 2 and 6
<details><summary>Input Name</summary>
<img src="docs\features\input_username.png">
</details>
<details><summary>Name request</summary>
<img src="docs\features\name_required.png">
</details>

- Start Quiz Button
Button that takes you directly to the Main Page of the Quiz.
- User stories covered: 3, 6 and 10
<details><summary>Quiz Button</summary>
<img src="docs\features\btn_startquiz.png">
</details>

### Main Page

- Logo and Navigation Bar
At the top of the website, the first thing seen by the user is the Logo and the Navigation Bar with the 'Home' link and the informative page 'Quiz?'
- User stories covered: 4
<details><summary>Logo</summary>
<img src="docs\features\logotext.png">
</details>
<details><summary>Nav Bar</summary>
<img src="docs\features\navbar.png">
</details>

- Quiz: Questions and Answers
The user indeed has the main experience, which is the Interactive Quiz. The question is displayed, followed by 4 answer options for the user to choose from.
- User stories covered: 5 and 11
<details><summary>Quiz</summary>
<img src="docs\features\quiz.png">
</details>

- Score Container
The user has the score displayed interactively.
- User stories covered: 5
<details><summary>Score Container</summary>
<img src="docs\features\score_container.png">
</details>

- User Name Container
The User Name Container displays the mandatory provided name on the Cover Page.
- User stories covered: 5 and 2
<details><summary>User Name Container</summary>
<img src="docs\features\username_container.png">
</details>

- Restart Button
The Restart Button allows the user to interactively restart the Quiz at any time.
- User stories covered: 5
<details><summary>Restart Button</summary>
<img src="docs\features\restart_btn.png">
</details>

- Final Message: "Quiz Finished"
Informs the user of the quiz completion with an interactive message and final score.
- User stories covered: 5
<details><summary>Final Message</summary>
<img src="docs\features\quizfinished.png">
</details>

- Footer 
The footer provides the user information about the Quiz developer's name.
- User stories covered: 7
<details><summary>Footer</summary>
<img src="docs\features\footer.png">
</details>

### Quiz? Page

- Informational text
The informational Text aims to provide the user with additional information about the importance and reasons why the Quiz can aid in cognitive and mental development.
- User stories covered: 8 and 12
<details><summary>Informational Text</summary>
<img src="docs\features\informativetext.png">
</details>

### Contact US
- Message Form
In the first container, a message form created using EmailJS is found. It allows direct contact between the User and the Developer through a text message which is forwarded to the designated email. The form consists of: Name, Email, Message, and Send Button (Send Email).
- User stories covered: .. and ..
<details><summary>Form</summary>
<img src="docs\features\form.png">
</details>

- User Reviews
Displayed to the user in an automatic carousel format, a review every 8 seconds in a loop.
- User stories covered: .. and ..
<details><summary>Reviews</summary>
<img src="docs\features\reviewsloop.png">
</details>

### 404 Page
- 404 Page Image
 404 page indicates that the requested URL was not found on the server. Its purpose is to inform the user of the error and often includes navigation options or a search feature to help find the desired content. Customization aims to improve the user experience despite the encountered error.
- User stories covered: .. and ..
<details><summary>404 Page</summary>
<img src="docs\features\page404.png">
</details>

## Validation

### HTML Validation
The W3C Validator is employed for validating web documents, and all HTML tests were executed with significant performance.
<details><summary>Cover Page</summary>
<img src="docs\tests\index_w3_validator.png">
</details>
<details><summary>Main Page</summary>
<img src="docs\tests\puzzle_w3_validator.png">
</details>
<details><summary>Informative Page(Quiz?)</summary>
<img src="docs\tests\quiz_w3_validator.png">
</details>
<details><summary>Contact Us</summary>
<img src="docs\tests\contactus_w3_validator.png">
</details>
<details><summary>404 Page</summary>
<img src="docs\tests\page404_w3_validator.png">
</details>

### CSS Validation
The CSS Validation Service is used to check the validity of CSS code, and the test was conducted with no reported errors.
<details><summary>style.css</summary>
<img src="docs\tests\w3c_validation.png">
</details>
<details><summary>contactus.css</summary>
<img src="docs\tests\contactus_w3_validator.png">
</details>

### Accessibility
The WAVE Web Accessibility Evaluation tool is used to assess web accessibility and identify potential issues, with all tests reported without problems.
<details><summary>Cover Page</summary>
<img src="docs\tests\wave_index.png">
</details>
<details><summary>Main Page</summary>
<img src="docs\tests\wave_puzzle.png">
</details>
<details><summary>Informative Page</summary>
<img src="docs\tests\wave_informative.png">
</details>
<details><summary>Contact Us</summary>
<img src="docs\tests\wave_contactus.png">
</details>
<details><summary>404 Page</summary>
<img src="docs\tests\wave_page404.png">
</details>

### Performance
The Lighthouse report is utilized to evaluate web page performance, and all tests were conducted with significant performance.
<details><summary>Cover Page</summary>
<img src="docs\tests\lighthouse_index.png">
</details>
<details><summary>Main Page</summary>
<img src="docs\tests\lighthouse_mainpage.png">
</details>
<details><summary>Informative Page</summary>
<img src="docs\tests\lighthouse_informativepage.png">
</details>
<details><summary>Contact Us</summary>
<img src="docs\tests\lighthouse_contactus.png">
</details>
<details><summary>404 Page</summary>
<img src="docs\tests\lighthouse_page404.png">
</details>

### JSHint
Both files, script.js and script2.js, had a satisfactory result in JSHint validation:
<details><summary>puzzle.js</summary>
<img src="docs\tests\jshint_file1.png">
</details>
<details><summary>coverpage.js</summary>
<img src="docs\tests\jshint_file2.png">
</details>

### Performing tests on various devices 
The website underwent testing on the subsequent devices:
- Iphone 15 Pro Max
- Iphone 14 
- Samsung Galaxy S23

The website was tested across various devices using Google Chrome Developer Tools.

### Browser compatability
The website underwent testing on the subsequent web browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Egde

### Testing user stories
1. First time accessing, the user has clear information on the purpose of the Website.
- Feature: Image Logo and Main Text Slogan
- Action: Informs the user about the purpose of the website. Contains a logo and text with the content.
- Expected Result: The user initially understands that the website is about a Quiz.
- Result: Operates as intended 
<details><summary>Test User 1</summary>
<img src="docs\testing_user_stories\testuser1.png">
</details>

2. First time accessing, the User has an interactive experience where the name is requested for access.
- Feature: User's input name
- Action: Allows users to input their names to personalize their experience.
- Expected Result: Users must mandatorily input their name within the designated container.
- Result: Operates as intended 
<details><summary>Test User 2</summary>
<img src="docs\testing_user_stories\testuser2.png">
</details>

3. First time accessing, the User finds a direct link to the Quiz.
- Feature: Start Quiz Button
- Action: After entering their name, the user finds a button below to start the Quiz.
- Expected Result: The user clicks the button and is taken to the main page where the Quiz is located.
- Result: Operates as intended 
<details><summary>Test User 3</summary>
<img src="docs\testing_user_stories\testuser3.png">
</details>

4. First time accessing, the user is able to view logo and the navigation bar at the top of the website with their respective links (Home and Quiz?).
- Feature: Navigation Bar (Home and Quiz?)
- Action: At the top of the website, the user finds the navigation bar on the main page.
- Expected Result: The user accesses the Home and 'Quiz?' links.
- Result: Operates as intended 
<details><summary>Test User 4</summary>
<img src="docs\testing_user_stories\testuser4.png">
</details>

5. First time accessing, the user has the ability to complete and understand the Quiz, as well as interact with features such as the Score, Displayed Name, and Restarting the Quiz.
- Feature: Question, Answer Options, Score Container, User Name Container, and Restart Button.
- Action: The user initiates the quiz by selecting answers; experiences interactivity through the Score Container; interacts visually with the displayed name in the User Name Container; and can restart the Quiz at any time.
- Expected Result: The user has access to all functionalities of the Quiz.
- Result: Operates as intended 
<details><summary>Test User 5</summary>
<img src="docs\testing_user_stories\testuser5.png">
</details>

6. Returning to the Website, the User can access the quiz again.
- Feature: Initial page with User Name input and Start Quiz.
- Action: The user repeats the action, enters the name mandatory, and clicks the button to start the Quiz.
- Expected Result: The user enters the name and then clicks the button to access the Quiz.
- Result: Operates as intended 
<details><summary>Test User 6</summary>
<img src="docs\testing_user_stories\testuser6.png">
</details>

7. Returning to the Website, the User can find additional information such as who developed the Quiz.
- Feature: Footer
- Action: The user, scrolling down to the bottom of the main page, will find information about the Quiz Developer.
- Expected Result: The user reads the Footer area and finds information about the Quiz Developer.
- Result: Operates as intended 
<details><summary>Test User 7</summary>
<img src="docs\testing_user_stories\testuser7.png">
</details>

8. Returning to the Website, the User can find a brief explanation of the Quiz's functionality in terms of cognitive enhancement.
- Feature: Quiz? link
- Action: The user is taken to the Information Page once they click on the 'Quiz' link in the Navigation Bar.
- Expected Result: The user accesses the Quiz? Page, finding additional information about the usability of the Quiz.
- Result: Operates as intended 
<details><summary>Test User 8</summary>
<img src="docs\testing_user_stories\testuser8.png">
</details>

9. As the Owner, it is expected that the User has a clear understanding of the purpose of the Website.
- Feature: Cover Page
- Action: As mentioned, the user, upon accessing the Cover Page, understands that the website is a quiz.
- Expected Result: The user quickly understands that the site is a Quiz.
- Result: Operates as intended 
<details><summary>Test User 9</summary>
<img src="docs\testing_user_stories\testuser9.png">
</details>

10. As the Owner, it is expected that the User has quick access to the Quiz.
- Feature: User Name and Start Quiz Button
- Action: Few obstacles; on the Cover Page only the name is required, and clicking the Start Quiz button grants access to the Quiz.
- Expected Result: The user quickly fills in the name and accesses the quiz immediately after clicking the Start Quiz button.
- Result: Operates as intended 
<details><summary>Test User 10</summary>
<img src="docs\testing_user_stories\testuser10.png">
</details>

11. As the Owner, it is expected that the User completes the Quiz.
- Feature: Final Message: "Quiz Finished"
- Action: The user answers the 10 questions of the Quiz and receives the final message 'Quiz Finished' along with the Final Score.
- Expected Result: The user receives a message of "Quiz Finished" and the total score at the end of the Quiz.
- Result: Operates as intended 
<details><summary>Test User 11</summary>
<img src="docs\testing_user_stories\testuser11.png">
</details>

12. As the Owner, it is expected that the User accesses the additional information which has a brief explanation about the use of the Quiz.
- Feature: Information Text ('Quiz?' Page)
- Action: The user clicks on the 'Quiz?' link and immediately gains access to the informative text regarding the usability of the Quiz.
- Expected Result: The user gains a clear understanding of the importance of the quiz for cognitive and mental development.
- Result: Operates as intended 
<details><summary>Test User 12</summary>
<img src="docs\testing_user_stories\testuser12.png">
</details>

## Bugs
1. Bug: Clicking on an alternative increases the score even if the answer is incorrect.
Fix: Added a check to ensure that the score is incremented only for correct answers.
2. Bug: The final quiz message always displays the score as 0, regardless of correct answers given.
Fix: Adjusted the final score calculation to accurately reflect correct answers.
3. Bug: After restarting the quiz, the alternatives remain hidden.
Fix: Added code to re-display alternatives upon restarting the quiz.

##   Deployment
The deployment of the website occurred through the utilization of GitHub Pages, involving the following procedures:
1. Access the Settings tab within the GitHub repository.
2. Choose the Pages option from the menu on the left.
3. Set the source branch to 'master.'
4. Following an automatic refresh of the webpage, a banner will appear at the top indicating: "Your site is live at https://mariolfb.github.io/P2CodeInstitute/.

To fork the repository, proceed with the following steps:
1. Visit the GitHub repository.
2. Click on the "Fork" button located in the upper-right corner.

To clone the repository, follow these steps:

1. Visit the GitHub repository.
2. Above the list of files, find the "Code" button and click on it.
3. Choose your preferred cloning method - HTTPS, SSH, or Github CLI - and click the copy button to copy the URL to your clipboard.
4. Open Git Bash.
5. Navigate to the directory where you want the cloned repository to be located.
6. Type "git clone" and paste the copied URL from the clipboard (e.g., $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY).
7. Press Enter to create your local clone.

## Credits
- The Logo used were artificially created. The Ideogram website was the tool used for the generation the Logo.
- All codes were created individually, privately and personally. I utilized the guidance and modules provided by the Code Institute with the intention of avoiding external interference, putting into practice all the content covered only by the course up to this point.
- The project was supervised and guided by Mentor Mo Shami.