'use strict';

/* -----------
 * theme
 */

document.querySelector('#theme-checkbox').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

/* -----------
 * tabs
 */

const sectionTabs = document.querySelectorAll('.main__tab-list button');

//
