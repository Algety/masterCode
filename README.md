# To the Moon and Back Trips

This website is designed for a fictional travel company, Travel Moon LTD, based 123 Moon Road, Space City, Solar System. It aims to engage more customers and boost sales for their exclusive trips to the Moon. The site contains a booking form to easily reserve a trip, a Traveller`s Guide page where visitors can explore detailed information about the trips, including accommodations, food options, and luggage policies, a reviews section showcasing testimonials from customers. 
There’s also a contact section for potential customers to get in touch with Travel Moon LTD for any queries or additional information.

This website has been created as the second Milestone project for Code Institute's Web Application Development Course. 

![image](https://github.com/user-attachments/assets/4f5ba325-4cce-4dc8-a133-7aa39d33b2eb)

### View the live website [here](https://algety.github.io/travel-space/index.html)
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
- engage more customers and boost sales for the trips to the Moon;
- build credibility and trust with potential and existing audience;
- increase brand visibility.
  
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
#### Returning Visitor
* As a returning visitor, I want to quickly find and access my account details to review past bookings and manage my preferences.
* As a returning visitor, I want to be able to easily navigate throughout the site to find relevant content. 
As a returning visitor, I want to access new testimonials or reviews from recent customers to reinforce my trust and confidence in the company.
* As a returning visitor, I want to find updated galleries of photos from recent trips to relive memories and get excited about planning my next trip.
* As a returning visitor, I want to leave a review on the site to share my experience and help other potential customers make informed decisions.

## Design
### Website Structure
The website consists of four pages: Home Page, Contact Page, Booking Page, and Confirmation Page. The default loading page is the Home Page. Each page has a navigation bar at the top and a footer at the bottom. The Home Page features sections designed to capture the visitor’s interest and attention with a front banner, followed by information about Moon trips. This page links to all other pages on the website via the Navigation Menu at the top. The Contact Page provides the company’s office address, phone number, email, social media links, and a map showing the office location. The Booking Page includes a reservation form where visitors can select trip dates and the number of travelers. The Confirmation Page informs the visitor if the booking was completed successfully, enhancing the user experience.
### Colour
To create a visually appealing and accessible website, two main colors with strong contrast were used — dark blue, associated with technology, space, and activity, and white, which together create a dynamic appearance for the site.
![image](https://github.com/user-attachments/assets/ffbc6fbd-2b61-4abb-88b0-a837e358e046)
### Fonts
The fonts used for this website are Gobold High Bold Italic for the logo, and supporting the logo style, for headings, and Navbar links; and Oswald for plain text and sub-headings. Both fonts are backed up with the Sans-Serif font family in case there are any issues with the imported fonts
### Images
Images with a similar color scheme, creating excitement, positive emotions, and a sci-fi feel, were chosen from free stock image websites.
### Interactive Links
Trough the footer, users can access the company social media links (Facebook, Instagramm and Twitter). Once these icons are clicked they are opened in a new tab.

## Features
There are several features on this site to help users get the most out of their visit to the site.  
### General
#### Navigation 
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
* Every link has been tested by hovering and clicking to ensure accessibility.
* Pages display correctly across all screen sizes and devices.
* Social media links function properly and open in new tabs.
* Images appear as expected on every page.
* Buttons are fully operational, directing users to their intended destinations.
### Validation
The booking form fields are validated to ensure required fields are filled and inputs are of the correct type.
### HTML and CSS Validation
The W3C Markup Validator and W3C CSS Validator services were used to validate the project's pages for syntax errors.
The screenshots below provide the results of testing.
#### HTML checks
![html-index-page](https://github.com/user-attachments/assets/8d43fbda-e318-499e-8a23-6f6343466861)
![html-contact-us-page](https://github.com/user-attachments/assets/ee33dec1-aaee-41f6-b538-86c31d46cb30)
![html-book-trip-page](https://github.com/user-attachments/assets/b6aba0c2-d762-4faf-bd27-69403e2c6cb0)
![html-success-page](https://github.com/user-attachments/assets/470a441c-d694-4756-8e3c-50b64ddc254b)
![image](https://github.com/user-attachments/assets/0288f93f-ad59-4f29-ada7-c6e4d474cf76)

#### CSS checks
![css-index-page](https://github.com/user-attachments/assets/f7796fb8-54a3-4a57-86bf-84eaed3410e8)
![css-contact-us-page](https://github.com/user-attachments/assets/014ecedf-8710-4ad0-ac2a-14486b1a3f71)
![css-book-trip-page](https://github.com/user-attachments/assets/614c48fc-7b62-48ec-9da2-d67545f8d385)
![css-success-page](https://github.com/user-attachments/assets/244abfa6-d3b8-47ce-9798-e1caabc3ed24)
![image](https://github.com/user-attachments/assets/45ad2747-8017-4d1f-af9d-57269eb69c4b)

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

![image](https://github.com/user-attachments/assets/d8136cbb-712c-401b-83a6-dd4c27a52bcd)
![image](https://github.com/user-attachments/assets/7a1dc127-131b-433e-ac53-e8b5428e4979)
![image](https://github.com/user-attachments/assets/908b9d04-cfc2-40a9-822a-4b50ed8a0c96)

![image](https://github.com/user-attachments/assets/6cf00740-928b-4c62-9c9c-6f224b273739)
![image](https://github.com/user-attachments/assets/65ee80d8-df79-4826-93ad-fb741069d43e)
![image](https://github.com/user-attachments/assets/6ee5975e-c3c2-48b4-9eb7-04c8d860f3ba)

### Performance Accessibility and SEO
Google Lighthouse was used to test Performance, Best Practices, Accessibility and SEO.
#### Desktop Results
![lighthouse-desktop-index-page](https://github.com/user-attachments/assets/9ba29b85-6e69-48b9-864c-c34c5b099294)
![lighthouse-desktop-contact-us-page](https://github.com/user-attachments/assets/afa81485-6808-48f2-97aa-aac32f349a5e)
![lighthouse-desktop-book-trip-page](https://github.com/user-attachments/assets/90d0c6f5-b8e4-4d1b-8b10-076758bebdde)
![lighthouse-desktop-success-page](https://github.com/user-attachments/assets/98b4be21-ca66-4617-b5d2-89311babf6cb)
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
4. Navigate down to the "GitHub Pages"
5. Click on the provided link. To open it in a new tab, right-click and select "Open in a new tab".
6. Under the "Source" section, click the drop-down menu labeled "None" and select "Main". Then, click "Save".
7. After saving, the page will refresh automatically. A link to the deployed website will be displayed.

## Forking the Project
1. Open [GitHub](https://github.com/) and log in.
2. Locate the needed GitHub repository and click on it.
3. Click the 'Fork' button to the top right of the page.
4. After clicking the button, the fork will appear in your repository.
   
## Credits
### Content
1. The icons - [Font Awesome](https://fontawesome.com/), [Google Fonts](https://fonts.google.com/)
2. The logo and favicon created with help [Logo Design](https://logodesign.ai/)
3. Gobolf Font - [CDN Fonts](https://www.cdnfonts.com/)
4. Favicon sized with [Favicon Io](https://favicon.io/favicon-converter/)
5. Free images - [Freepik](https://www.freepik.com/), [Pexel](https://www.pexels.com/)
### Code
1. Code samples have been adapted specifically for the site - [W3 Schools](https://www.w3schools.com/), [Stack Overflow](https://stackoverflow.com/), [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/).
