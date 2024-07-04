// ==UserScript==
// @name         Click and Move "New to you" Chip on YouTube
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Click and move the "New to you" chip to the second position in the YouTube feed filter
// @author       ChatGPT prompted by Sitaram Iyer
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Function to click and move the "New to you" chip
    function clickAndMoveNewToYouChip() {
        const chipRenderers = document.querySelectorAll('yt-chip-cloud-chip-renderer');
        let newToYouChip = null;
        chipRenderers.forEach((chip) => {
            const textElement = chip.querySelector('#text');
            if (textElement && textElement.getAttribute('title') === 'New to you') {
                newToYouChip = chip; // Store the reference to "New to you" chip
            }
        });
        if (newToYouChip) {
            // Move "New to you" chip to the second position (after "All")
            const parent = newToYouChip.parentNode;
            parent.insertBefore(newToYouChip, parent.children[1]);

            // Simulate a click event on the "New to you" chip
            newToYouChip.click();
        }
    }

    // Run the function when the page loads
    window.addEventListener('load', clickAndMoveNewToYouChip);
    // Run the function when navigating between pages on YouTube
    document.addEventListener('yt-navigate-finish', clickAndMoveNewToYouChip);
})();
