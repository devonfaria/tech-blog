// Declaring elements for manipulation
const homeBtn = document.querySelector('.home');
const dashboardBtn = document.querySelector('.dashboard');
const loginBtn = document.querySelector('.login');
const logoutBtn = document.querySelector('.logout');
const loginBlock = document.querySelector('.login-block');
const signUpBlock = document.querySelector('.sign-up-block');

// Navigation buttons
homeBtn.addEventListener('click', () => console.log('Home chosen'));
dashboardBtn.addEventListener('click', () => console.log('Dashboard chosen'));
loginBtn.addEventListener('click', () => {
  console.log('Login chosen')
  loginBlock.classList.remove('hidden');
});
signUpBtn.addEventListener('click', () => {
  console.log('Sign Up chosen')
  signUpBlock.classList.remove('hidden');
});
logoutBtn.addEventListener('click', () => console.log('Logout chosen'));

// Form handlers
loginBlock.addEventListener('submit', () => console.log('Login'));
signUpBlock.addEventListener('submit', () => console.log('Sign Up'));