const allowedRoutes = [
'/',
'/index.html'
];


const currentPath = window.location.pathname;


fetch('error.html')
.then(res => res.text())
.then(errorPage => {
if (!allowedRoutes.includes(currentPath)) {
document.getElementById('app').innerHTML = errorPage;
history.replaceState({}, '', '/error');
} else {
document.getElementById('app').innerHTML = `
<h1>Welcome</h1>
<p>Home Page Loaded</p>
`;
}
});