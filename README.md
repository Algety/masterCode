# To the Moon and Back Trips

The Code Breaker game, also known as Mastermind or Master Mind, is a challenging logic and deductive game for two players. One player (the codemaker) sets a secret code of colored pegs, and the other player (the codebreaker) tries to guess it, receiving feedback on their guesses.

The game was invented in 1970 by Mordecai Meirowitz, an Israeli postmaster and telecommunications expert. It is based on a paper and pencil game called Bulls and Cows. The first computer adaptation was run in the 1960s on Cambridge University’s Titan computer system, where it was called MOO.

In this adaptation of the game, a pin code is randomly generated by the computer using 8 colors. A player can choose a difficulty level - easy (code of 4 pins) and medium (code of 5 pins). The colors of the pins in the code can duplicate. A player drags pins of 8 colors from the palette box to the answer box on the left. After the submit button is clicked, feedback for the attempt (red and yellow pins) is given in the feedback (clue) box on the right. Red pins indicate that a player has guessed a pin of the correct color and in the correct position, while yellow pins indicate a pin of the correct color but in the wrong position. The position of the feedback pins doesn’t indicate which of the pins in the answer box are guessed correctly.

This website has been created as the second Milestone project for Code Institute's Web Application Development Course. 

![image]()

### View the live website [here](https://algety.github.io/masterCode/)
***
## Table of content: 
* [Site Goals](#site-goals)
* [User Experience UX](#user-experience---ux)
    * [User stories](#user-stories)
* [Design](#design)
    * [Website Structure](#website-structure)
    * [Colour](#colour)
    * [Fonts](#fonts)
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

  
To achieve the goals, the site should meet the following criteria:
- Entice potential customers with captivating visuals and engaging descriptions.
- Build credibility and trust by sharing customer testimonials and endorsements, and providing detailed information about the trip.
- Provide an easy-to-use option for reserving a trip.

## User Experience - UX
### User stories
#### New Visitor
* As a new visitor, I would like to learn more about flights to the Moon to understand if I want to experience this trip.
* As a new visitor, I want to be able to easily navigate throughout the site to find relevant content.
* As a new visitor, I would like to know more about the company providing the trips to decide if I can trust them.
* As a new visitor, I would like to read testimonials to understand if these trips are worth trying.
* As a new visitor, I want to be able to easily contact the company for more information.
* As a new visitor, I would like to see pictures from the trips to evaluate what the experience can offer me.
* As a new visitor, I would like to be able to easily reserve a trip.

## Design
### Website Structure
The website consists 

### Style and design
Considering the character of the game, the goal is to ensure players can focus intently on the gameplay while making the colored pins prominently visible. The overall style of the game interface is industrial and modern, with a rugged and functional design. The concrete-textured background gives it a sturdy and serious feel, appropriate for a logic and deductive game.
![tablet-screen](https://github.com/user-attachments/assets/bafdcb03-ce30-4f1e-8c05-5240a7601b0e)


### Colour
Shades of grey and metallic tones dominate the layout, creating a cohesive and focused appearance. These colours were picked to create a contrast of bright coloured pins against the muted background and also for the aim of following the industrial style. The yellow lightbulb icon next to the title adds a touch of brightness and symbolism for ideas or solutions.

![image]()
### Images


## Features
### General
#### 
Each page has a Navigation bar section. This section is at the top of each page and is fixed allowing to navigate between pages without the need to scroll back to the top. The navigation bar contains a 'Book Now' button, highlighted in a contrasting color to be easily noticeable, directing the user to the Booking page.
![image](https://github.com/user-attachments/assets/19618722-d9f5-4742-a7d7-e91203431eab)
![image](https://github.com/user-attachments/assets/95d6c766-259b-4541-aa45-8217601bdc7c)
![image](https://github.com/user-attachments/assets/42bd9281-9b90-49ee-af62-d46df6d70bd8)
#### Footer:  
Each page also has a footer element. This contains links to the company`s social media pages, i.e Facebook and Instagram, Twitter. All of these icons, when clicked, will open in a new tab.  
![image](https://github.com/user-attachments/assets/8452f870-0693-4655-b543-41e285c0242b)

### Home page
The Home page contains the header and footer features mentioned above.  
#### Main Section:
In the main section of the Home page, there is a main image (front banner) followed by an introductory section containing information about Moon trips, and Book Now button, which navigates a user to the booking form.
![image](https://github.com/user-attachments/assets/c91cab8b-b77b-4065-bd3c-32f878589dec)
### Booking page
The booking page contains a booking form where the visitor can choose the dates of a trip and the number of travelers. All the fields of the form, apart from a text field for a message, are required and input is validated for the type of data. If the form is submitted successfully, the user is directed to the confirmation page.
![image](https://github.com/user-attachments/assets/5bbaf507-d43c-4a9f-bfca-471af4d77c7b)
### Confirmation page
A message on the confirmation page informs the user about the successful submission, enhancing the user experience.
![image](https://github.com/user-attachments/assets/7a40c858-6005-4b80-869f-3d47c0bee493)
### Traveller`s Guide page
Containes the essential information about the trip: duration, accommodation, dining, luggage, safety, and activities.
![image](https://github.com/user-attachments/assets/fa6b3ee9-e764-4a2d-86a7-3dee37098405)

## Future Features
To meet the needs of the business and visitors/customers of the site, the following features are planned to be implemented:
* A gallery of pictures from the latest trips, giving visitors an understanding of what to expect and inspiring a desire to take the trip.
* Testimonials with portrait photos of customers to assure visitors of the site of the safety and quality of the journey, and the credibility of the company.

## Technologies Used
### Languages Used 
* [HTML5](https://www.w3schools.com/html/default.asp).
* [CSS3](https://www.w3schools.com/css/default.asp).
### Frameworks - Libraries - Programs Used
* [Bootstrap:](https://getbootstrap.com/)
   * Bootstrap was used to acheave responsiveness of the website. 
* [Google Fonts:](https://fonts.google.com/)
   * Some icons on the site were sourced from the Google Fonts collection.
* [Font Awesome:](https://fontawesome.com/)
    * Some icons on the site were sourced from Font Awesome.
* [CDN Fonts:](https://www.cdnfonts.com/)
    * CDN Fonts library was used to import the 'Gobold' font throughout css. 
* [GitHub:](https://github.com/)
    * GitHub is used to store the project's code after being pushed from Git.
* [Image Resizer:](https://imageresizer.com/)
    * Image Resizer was used to modify and resize the images on the website.
* [Canva](https://canva.com)
    * Canva was used to create the design of the page layouts.
* [Logo Design](https://logodesign.ai/)
    * Logo Design was used to creat the image logo.
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
The project was tested using the Chrome Developer Tools to verify responsiveness of the site.
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
 
      
All the pages of the site are displayed correctly on different devices.

![image](...)

![image](...)

### Performance Accessibility and SEO
Google Lighthouse was used to test Performance, Best Practices, Accessibility and SEO.
#### Desktop Results
![lighthouse-desktop-index-page]()
![image](https://github.com/user-attachments/assets/e3a6a66a-5896-4b1c-a489-bcd3cef508be)


#### Mobile Results
![lighthouse-mobile-index-page](https://github.com/user-attachments/assets/7d164ab3-e9fd-4a75-b4cd-596f3ec0a371)
![lighthouse-mobile-contact-us-page](https://github.com/user-attachments/assets/50ff2700-a7ec-459f-a59b-0d544b921cae)
![lighthouse-mobile-book-trip-page](https://github.com/user-attachments/assets/d48520ca-72fb-40ac-9207-1cddd0840296)
![lighthouse-mobile-success-page](https://github.com/user-attachments/assets/0dff1843-21bb-462a-ac34-4b283a241079)
![image](https://github.com/user-attachments/assets/1ba80b2c-fd5d-4f76-8b20-87c7538c885a)



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
