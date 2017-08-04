/*jshint esversion: 6*/
var homeBtn = document.getElementById('home-btn');
var aboutBtn = document.getElementById('about-btn');
var portfolioBtn = document.getElementById('portfolio-btn');
var resumeBtn = document.getElementById('resume-btn');
var navHover = document.getElementById('nav-overlay');
var navBg = document.getElementById('nav-bg');

homeBtn.style.backgroundColor = 'transparent';
aboutBtn.style.backgroundColor = 'transparent';
portfolioBtn.style.backgroundColor = 'rgba(0, 120, 63, 0.9)';
resumeBtn.style.backgroundColor = 'transparent';
navHover.style.right = '145px';
navBg.style.right = '145px';


homeBtn.onmouseover = function() {
  navHover.style.right = '315px';
};
aboutBtn.onmouseover = function() {
  navHover.style.right = '230px';
};
portfolioBtn.onmouseover = function() {
  navHover.style.right = '145px';
};
resumeBtn.onmouseover = function() {
  navHover.style.right = '60px';
};
homeBtn.onmouseout = function() {
  navHover.style.right = '145px';
};
aboutBtn.onmouseout = function() {
  navHover.style.right = '145px';
};
portfolioBtn.onmouseout = function() {
  navHover.style.right = '145px';
};
resumeBtn.onmouseout = function() {
  navHover.style.right = '145px';
};