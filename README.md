# Code Breaker (Mastermind)

The Code Breaker game, also known as Mastermind or Master Mind, is a challenging logic and deductive game for two players. One player (the codemaker) sets a secret code of colored pegs, and the other player (the codebreaker) tries to guess it, receiving feedback on their guesses.

The game was invented in 1970 by Mordecai Meirowitz, an Israeli postmaster and telecommunications expert. It is based on a paper and pencil game called Bulls and Cows. The first computer adaptation was run in the 1960s on Cambridge University’s Titan computer system, where it was called MOO.

In this adaptation of the game, a pin code is randomly generated by the computer using 8 colors. A player can choose a difficulty level - easy (code of 4 pins) and medium (code of 5 pins). The colors of the pins in the code can duplicate. A player drags pins of 8 colors from the palette box to the answer box on the left. After the submit button is clicked, feedback for the attempt (red and yellow pins) is given in the feedback (clue) box on the right. Red pins indicate that a player has guessed a pin of the correct color and in the correct position, while yellow pins indicate a pin of the correct color but in the wrong position. The position of the feedback pins doesn’t indicate which of the pins in the answer box are guessed correctly.

This website has been created as the second Milestone project for Code Institute's Web Application Development Course. 

![image](![image](https://github.com/user-attachments/assets/102ca219-19ac-4c66-8e1e-8b2bf4bb5d9f)

### View the live website [here](https://algety.github.io/masterCode/)
***
## Table of content: 
* [Site Goals](#site-goals)
* [User Experience UX](#user-experience---ux)
    * [User stories](#user-stories)
* [Design](#design)
    * [Website Structure](#website-structure)
    * [Colour](#colour)
    * [Images](#images)
* [Features](#features)  
* [Future Features](#future-features)
* [Technologies Used](#technologies-used)
    * [Languages Used](#languages-used)
    * [Frameworks - Libraries - Programs Used](#frameworks---libraries---programs-used)
* [Testing](#testing)
    * [Functional testing](#functional-testing)
    * [Validation](#validation)
    * [HTML and CSS Validation](#html-and-css-validation)
        * [HTML checks](#html-checks)
        * [CSS checks](#css-checks)
    * [Responsiveness](#responsiveness)
    * [Performance Accessibility and SEO](#performance-accessibility-and-seo)
        * [Desktop Results](#desktop-results)
        * [Mobile Results](#mobile-results)
* [Deployment](#deployment)
* [Forking the Project](#forking-the-project)
* [Credits](#credits)
    * [Content](#content)
    * [Code](#code)
  

## Site Goals
The goals for this site are:
* Provide an engaging and challenging game.
* To improve logical deduction and problem-solving skills, to enhance players’ cognitive abilities and strategic thinking.
* Ensure accessibility and usability for all users.
  
To achieve the goals, the site should meet the following criteria:
* Intuitive and user-friendly interface.
* Clear and concise instructions.
* Adjustable difficulty levels: The site should offer different difficulty settings to cater to players with varying levels of expertise.
* Responsive design: The site should be fully functional and visually appealing on various devices and screen sizes, ensuring accessibility for all players.
* Immediate feedback on guesses: The game should provide clear and immediate feedback on players' guesses to help them improve and stay engaged.


## User Experience - UX
### User stories
#### A player
* As a user, I want to easily understand the main purpose about the site.
* As a user, I want to be able to easily navigate throughout the site to find relevant content.
* As a user, I want this website to be responsive to my device.
* As a player, I want to read the rules of the game to understand how to play and what the objectives are.
* As a player, I would like to set the difficulty level of the game so that I can choose a challenge that suits my skill level.
* As a player, I would like to see feedback on my guesses so that I can improve my strategy and get closer to cracking the code.
* As a player, I want to restart the game quickly so that I can try different strategies without delay.

## Design
### Structure
The site consists of a single page where modals are used for displaying rules, setting game difficulty, and providing user feedback messages. The visibility of the main game and the modals is managed by applying and removing a CSS 'hide' class via JavaScript functions linked to button event listeners.

![image](https://github.com/user-attachments/assets/fa95dcb5-9333-486d-921e-448bfd56a866)

The structure includes a main container with a control container and a game container. The control container features a header with the game's title and three buttons below it that open modal boxes. The modals' and game container`s content is dynamically updated using innerHTML based on the activated event listener. At this stage of development, the "Restart" button is disabled, with its functionality planned for future implementation.

Before the game begins, the game container displays an image of a vault and a message encouraging the player to start the game. Once the game starts, the game container shows a code box, a palette box, and a reasoning box. The code box contains the code, hidden under metal plates until the player guesses it correctly. When the code is cracked, the plates disappear to reveal the code.
The palette box presents 8 colored pins. The reasoning box comprises an answer box and a clue box. Players drag pins to the answer box to form their guess for the code. After submitting their guess, feedback is displayed in the clue box. If the guess is incorrect, a new answer box is added below for another attempt.

### Style and design
Considering the character of the game, the goal is to ensure players can focus intently on the gameplay while making the colored pins prominently visible. The overall style of the game interface is industrial and modern, with a rugged and functional design. The concrete-textured background gives it a sturdy and serious feel, appropriate for a logic and deductive game.

![tablet-screen](https://github.com/user-attachments/assets/bafdcb03-ce30-4f1e-8c05-5240a7601b0e)

### Colour
Shades of grey and metallic tones dominate the layout, creating a cohesive and focused appearance. These colours were picked to create a contrast of bright coloured pins against the muted background and also for the aim of following the industrial style. The yellow lightbulb icon next to the title adds a touch of brightness and symbolism for ideas or solutions.

![image]()

## Features
### Main container
The main container resembles a device or machine with elements like metal plates, screws, and a vault door, evoking a sense of machinery and a secure facility. The container includes the control container and the game container. The control container’s appearance remains constant throughout the game. The game container, however, displays a message and an image of a locked vault before the game starts, the game board during the game, and an image of an unlocked vault if the player wins.

![image](https://github.com/user-attachments/assets/dc8acf7e-0f89-421d-ae28-ab4605f38b98)
![image](https://github.com/user-attachments/assets/a8bd8abb-a0f2-4cec-8c32-748e04b3d907)

### Drag and drop elements
The palette box contains pegs of 8 colors which a player drags to an answer box below. The answer box contains drop zones where the colored pegs are placed. After the answer is submitted, the drop zones become disabled. After each unsuccessful guess, a new answer box is added for another try.

![image](https://github.com/user-attachments/assets/7f4870c0-dec5-4031-b9b1-c0914e5cf615)

### Modals
There are 3 modals used in the site: a modal for setting the difficulty of the game, activated by the "New game" button; a modal with instructions, activated by the "How to play" button; and a modal with a message to the player if they try to submit an incomplete answer code.

![image](https://github.com/user-attachments/assets/f31fc986-56c6-47e4-8204-0503b1a41339)
![image](https://github.com/user-attachments/assets/3e5e9fb7-cfb7-4cdf-b4b8-75c823d4b34a)
![image](https://github.com/user-attachments/assets/e793d4a6-227a-4897-8473-3337ba4c4b11)

## Future Features
1. Implement functionality for the Restart button.
2. Limit the number of tries.
3. Add a scrollbar to the reasoning box.

## Technologies Used
### Languages Used 
* [HTML5](https://www.w3schools.com/html/default.asp).
* [CSS3](https://www.w3schools.com/css/default.asp).
* [JS](https://www.w3schools.com/css/default.asp).
### Frameworks - Libraries - Programs Used
* [Bootstrap:](https://getbootstrap.com/)
   * Bootstrap was used to acheave responsiveness of the website. 
* [Google Fonts:](https://fonts.google.com/)
   * Some icons on the site were sourced from the Google Fonts collection.
* [Font Awesome:](https://fontawesome.com/)
    * Some icons on the site were sourced from Font Awesome. 
* [GitHub:](https://github.com/)
    * GitHub is used to store the project's code after being pushed from Git.
* [Image Resizer:](https://imageresizer.com/)
    * Image Resizer was used to modify and resize the images on the website.
* [Canva](https://canva.com)
    * Canva was used to create the design of the page layouts.
* [Favicon Io](https://favicon.io/favicon-converter/)
    * Logo Design was used to creat the favicon images.
 
## Testing
### Functional testing
* The game page displayis displayed correctly across all screen sizes and devices.
* Images appear as expected on the page and modals..
* Buttons are fully operational, directing users to their intended destinations.
* Code is generated and displayed correctly.
* Draggable elements and dropzones are functional.
* The player`s answer is checked and displayed in the clue box correctly.
* The modals are displayed correctly.
### HTML and CSS Validation
The W3C Markup Validator and W3C CSS Validator services were used to validate the project's pages for syntax errors.
The screenshots below provide the results of testing.
#### HTML checks
![html-index-page](...)

#### CSS checks
![css-index-page](...)

#### JavaScript checks
No errors were returned when passing through JSHint. The following metrics were returned:
There are 43 functions in this file. Function with the largest signature take 3 arguments, while the median is 1.
Largest function has 15 statements in it, while the median is 2. The most complex function has a cyclomatic complexity value of 4 while the median is 1.

### Responsiveness
The project was tested using the Chrome Developer Tools and Amiresponsive site to verify responsiveness of the site.
* Devices tested using the Google Developer Tools emulator:
    * iPhone XR
    * iPhone 12 Pro
    * iPhone 14 Pro Max
    * Pixel 7
    * Samsung Galaxy S8+
    * Samsung Galaxy S20 Ultra
    * iPad Mini
    * iPad Air
    * iPad Pro
    * Surface Pro 7
    * Surface Duo
    * Galaxy Z Fold 5
    * Asus Zenbook Fold
    * Samsung Galaxy A51/71
    * Nest Hub
    * Nest Hub Max
      
![image](https://github.com/user-attachments/assets/abff4a2f-0321-4a80-8b44-b082fc5527ac)
![alt text](image-4.png)
 
All the pages of the site are displayed correctly on different devices.

### Performance Accessibility and SEO
Google Lighthouse was used to test Performance, Best Practices, Accessibility and SEO.
#### Desktop Results
![lighthouse-desktop-index-page]()
![image](https://github.com/user-attachments/assets/e3a6a66a-5896-4b1c-a489-bcd3cef508be)


#### Mobile Results
![lighthouse-mobile-index-page]()

## Deployment
Development on [GitPod](https://gitpod.io/) with the Code Institute template, stored at [GitHub](https://github.com/).
The website development was created in the "main" branch. This branch was deployed using GitHub Pages.
This site was deployed by completing the following steps:

1. Open [GitHub](https://github.com/) and log in.
2. Locate the needed GitHub repository.
3. Navigate to the "Settings".
4. On the left-hand sidebar, in the Code and automation section, navigate down to the "Pages".
5. Click on the Page link.
6. On the page pick source to set to 'Deploy from Branch', select Main branch and set Folder to / (root).
7. After saving, the page will refresh automatically. A link to the deployed website will be displayed.

## Forking the Project
1. Open [GitHub](https://github.com/) and log in.
2. Locate the needed GitHub repository and click on it.
3. Click the 'Fork' button to the top right of the page.
4. After clicking the button, the fork will appear in your repository.
   
## Credits
### Content
1. The check icon for the submit button - [Font Awesome](https://fontawesome.com/), [Google Fonts](https://fonts.google.com/)
2. The game logo and favicon icon - [Flaticon](https://www.flaticon.com/)
3. Images edited, templates and layouts made in Canvas - [Canvas](https://www.canva.com/)
4. Favicon sized with [Favicon Io](https://favicon.io/favicon-converter/)
5. Free images - [Freepik](https://www.freepik.com/), [PNGTree](https://pngtree.com/)
6. Images resized with - [Image Resizer](https://imageresizer.com/)
### Code
1. Code samples have been adapted specifically for the site - [W3 Schools](https://www.w3schools.com/), [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/).
