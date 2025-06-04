Kiran Kumar Challa's Portfolio Website
What is this project?
This is a simple portfolio website for Kiran Kumar Challa. It shows my skills, education, work experience, projects, research, and a contact form. The website looks good on both computers and mobile phones.
Files in this project

index.html: The main webpage file.
styles.css: The file that makes the website look nice (colors, layout, etc.).
script.js: The file that makes the website work (like the menu and contact form).
images/: A folder with my photo (kiran.jpg).
README.md: This file you are reading!

How to set up the project on your computer

Download the project:

If you have Git, open a terminal in a folder and type:git clone https://github.com/GIT-kiran-kumar/kiran-portfolio.git

Replace GIT-kiran-kumar with your GitHub username.
Or, download the ZIP file from GitHub and unzip it.


Open in VS Code:

Open Visual Studio Code (VS Code).
Go to File > Open Folder and select the kiran-portfolio folder.


Test the website:

Install the "Live Server" extension in VS Code.
Right-click index.html and choose Open with Live Server.
It will open in your browser, and you can see the website.



How to make the contact form work
The contact form sends messages to a Google Sheet. Follow these steps:

Create a new Google Sheet.
Go to Extensions > Apps Script.
Copy and paste this code:function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.Name, data.Email, data.Message, new Date()]);
    return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}


Replace YOUR_SPREADSHEET_ID with your Google Sheet's ID (you can find it in the URL of the sheet).
Click Deploy > New Deployment, choose Web App, set "Who has access" to Anyone, and deploy.
Copy the web app URL.
Open script.js in VS Code and find this line:fetch('https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_URL/exec', {

Replace YOUR_GOOGLE_SCRIPT_URL with the URL you copied.

How to deploy the website (put it online)
This project is already set up to work with GitHub Pages. Here's how to deploy it:

Make sure your project is on GitHub:
If you haven't pushed it yet, open a terminal in VS Code and run:git add .
git commit -m "Add project files"
git push origin main




Enable GitHub Pages:
Go to your GitHub repository (https://github.com/YOUR_GITHUB_USERNAME/kiran-portfolio).
Click Settings.
Scroll to Pages.
Under Source, choose Deploy from a branch, select main branch, and / (root) folder, then click Save.


See your website:
After a few minutes, your website will be live at https://YOUR_GITHUB_USERNAME.github.io/kiran-portfolio/.



How to test on mobile

Open the website on your phone using the GitHub Pages URL.
Or, in your browser on your computer, press Ctrl+Shift+I (or Cmd+Opt+I on Mac) to open Developer Tools, click the device icon (📱), and choose a mobile device to test.

What does the website look like?

Home: Shows my name, a short intro, and my photo.
About: My contact info, skills, languages, and hobbies.
Experience: My work experience.
Education: My education details.
Projects: My projects.
Research: My research publication.
Contact: A form to send me messages.

Notes

Replace YOUR_GITHUB_USERNAME with your actual GitHub username.
If the photo doesn't show, make sure the file images/kiran.jpg is in the images folder, and update the URL in index.html to:https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/kiran-portfolio/main/images/kiran.jpg



Questions?
If you have any questions, email me at kirankumarchallapersonal02@gmail.com.
