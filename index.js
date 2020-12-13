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

const sections = [...document.querySelectorAll('section')];
const sectionTabs = [...document.querySelectorAll('.main__tab-list button')];

sectionTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelector('section.show').classList.remove('show');
    sections[sectionTabs.indexOf(tab)].classList.add('show');
  });
});


/* -----------
 * stats
 */