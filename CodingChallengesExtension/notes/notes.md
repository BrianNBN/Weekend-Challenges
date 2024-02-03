# Build Your Own Chrome Extension - Notes

## Overview
This challenge focuses on building a Chrome extension to customize the look and functionality of each new tab in the Google Chrome web browser. The extension will be developed using JavaScript or TypeScript, along with HTML and CSS.

## Chrome Extensions
- Chrome extensions are software programs that extend the functionality of the Google Chrome browser.
- They are typically written in HTML, CSS, and JavaScript.
- Extensions modify or enhance the browser's functionality, providing features like customizing website appearance, improving productivity, blocking ads, managing passwords, and more.
- Chrome extensions can be installed and managed through the Chrome Web Store.

## Challenge Steps

### Step Zero - Setup
- Set up your preferred Integrated Development Environment (IDE).
- This challenge will be tackled using JavaScript or TypeScript, along with HTML and CSS.

### Step 1 - Hello, World
- Create a basic Chrome extension that can be installed locally.
- Set the background color of the new tab to Coding Challenges Blue (#04295B).
- Display the text "Coding Challenges>_" in the center of the new tab, with bonus points for matching the Coding Challenges branding.

### Step 2 - Time and Date
- Add the current time to the tab.
- Display the date in a human-friendly format below.
- Ensure functionality to update the time dynamically.

### Step 3 - Version 1 - Dynamic Information (Substack Feed)
- Add dynamic information by listing the latest coding challenges from the Coding Challenges Substack Feed.
- Address CORS issues if the Substack RSS feed lacks CORS headers.
- Consider fetching the feed through a proxy.

### Step 3 - Version 2 - Dynamic Information (GitHub PRs)
- Create an alternate version by displaying all open PRs for the Shared Solutions GitHub Repository.
- Utilize Github’s REST API endpoint to fetch the list of PRs.
  
### Going Further
- Extract additional information from dynamic elements, such as images, titles, and descriptions of each challenge.
- Consider making the extension more generic, offering features like displaying a daily quote and a customizable GitHub feed.
- Explore packaging the extension and making it available on the Chrome Web Store.

## Feedback
- Your feedback on the challenges is highly appreciated. Share thoughts on how challenges can be improved to better assist software engineers in leveling up.

Happy coding!
