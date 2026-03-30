# StudyLib Downloader Script

A tool that helps you download documents from StudyLib websites for educational purposes only. Available as Tampermonkey script. Please respect copyright laws and the terms of service of StudyLib.

## ✅ Update
The downloader is using now a direct PDF.js implementation. In the new version, the PDF source is stored directly in a data-src attribute of a div with the ID viewer. To address it, we need to use data-src.

## Tampermonkey Script 

### Installation

1. First, install the Tampermonkey browser extension if you don't have it already:
   - [Install Tampermonkey for Chrome / Brave](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Install Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Install Tampermonkey for Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. Install the StudyLib Downloader script:
   - Open Tampermonkey, click "+" (new script), paste script content, enable it and you are good to go.
     
### Usage

1. Navigate to any StudyLib document and open it. It will open in an embedded pdf-viewer.
2. Ignore the green "Download Document" button that will otherwise send you in an exchange page (upload a new doc to download)
3. Instead, look for the new RED "Download" button, and click it. 
4. A new tab will open with the standard document viewer
5. In this standard document viewer, click the "Download Document" arrow and pdf is yours.

### Regional Differences

Tested only on StudyLib.net, but should work elsewhere if the same new mechanics are implemented.

### What the Tools Automate

The extension and Tampermonkey script automate this process by:
1. Scanning the page for the data-src
2. Navigating to the document viewer URL
3. Replacing the fake download button (pointing to doc exchange page) with a new download button
4. Handling the download process

This automation saves time and works at the moment on pages where the document viewer is loaded dynamically.

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC-SA 4.0) - see the [LICENSE.md](LICENSE.md) file for details.

![CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)

Thanks to rh45-one and his original good work which saved me a lot of time, time to give back what I took ;) 
