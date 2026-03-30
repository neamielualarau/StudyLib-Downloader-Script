// ==UserScript==
// @name         StudyLib Downloader Script
// @namespace    https://github.com/neamielualarau/StudyLib-Downloader-Script
// @version      1.1.0
// @description  Updated downloader for the new StudyLib PDF.js viewer
// @author       neamielualarau
// @match        https://*.studylib.net/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // UI Styles
    GM_addStyle(`
        #sl-download-btn {
            position: fixed; top: 20px; right: 20px;
            background-color: #ff5722; color: white;
            padding: 12px 20px; border: none; border-radius: 5px;
            cursor: pointer; font-weight: bold; z-index: 10000;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        #sl-download-btn:hover { background-color: #e64a19; }
    `);

    function init() {
        // Look for the viewer element you found
        const viewer = document.getElementById('viewer') || document.querySelector('.pdfViewer');
        
        if (viewer && viewer.getAttribute('data-src')) {
            createButton(viewer.getAttribute('data-src'));
        } else {
            // If it's not loaded yet, wait and try again
            setTimeout(init, 2000);
        }
    }

    function createButton(pdfUrl) {
        if (document.getElementById('sl-download-btn')) return;

        const btn = document.createElement('button');
        btn.id = 'sl-download-btn';
        btn.innerText = 'DOWNLOAD PDF';
        
        btn.onclick = function() {
            // Ensure the URL is absolute
            let finalUrl = pdfUrl.startsWith('//') ? 'https:' + pdfUrl : pdfUrl;
            
            // Force download by creating a temporary link
            const a = document.createElement('a');
            a.href = finalUrl;
            a.download = document.title.replace(/[/\\?%*:|"<>]/g, '-') + '.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };

        document.body.appendChild(btn);
    }

    // Start checking for the viewer
    init();
})();
