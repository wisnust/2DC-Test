/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.details-toggle');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const detailsContent = button.nextElementSibling;
  
      if (detailsContent.style.display === 'none' || detailsContent.style.display === '') {
        // Hide all details-content and reset the text of all buttons
        toggleButtons.forEach(otherButton => {
          const otherContent = otherButton.nextElementSibling;
          otherContent.style.display = 'none';
          otherButton.textContent = 'View Details';
          otherButton.classList.remove('active');
        });
  
        // Show the clicked details-content and change the button text
        detailsContent.style.display = 'block';
        button.textContent = 'Hide Details';
        button.classList.add('active');
      } else {
        // If the details-content is already visible, hide it and change the button text
        detailsContent.style.display = 'none';
        button.textContent = 'View Details';
        button.classList.remove('active');
      }
    });
  });
  
});
/* eslint-enable no-console */
