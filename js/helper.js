var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLbioPic = '<img src="%data%" id="biopic">';
var HTMLabout = '<p id="about">%data%</p>';
var HTMLiconLink = '<a href="%link%" target="_blank" ><img src="%data%" class="socialIcon"></a>';
var HTMLskills = '<i class="skillIcon flex-item %data%"></i>';
var HTMLbtn = '<form method="get" action="resume.pdf" target"_blank"><button id="resBtn" type="submit">%data%</button></form>';
var HTMLcard = '<div class="card"><img src="%img%"><div class="cardDown"><h3>%title%</h3><hr width="100px" align="center"><p>%text%<p><div class="links"><a href="%git%">github</a><a href="%check%">Check it out</a></div></div></div>';
var HTMLcontact = '<li><i class="material-icons">%icon%</i><br><b>%title%</b><span>%data%</span></li>'


var headInfo = {
	name : "Heidi Konswah.", 
	title : "Frontend Developer",
	about : "I'm a communications and electronics engineering student, who loves making cool interactive websites.",
	pic : "img/img.png",
	socials : [
	{title:"github", icon:"img/git_icon.png", url:"https://github.com/HeidiKonswah"},
	{title:"linkedin", icon:"img/in_icon.png", url:"https://www.linkedin.com/in/heidi-saied-konswah/"},
	{title:"codepen", icon:"img/codepen_icon.png", url:"https://github.com/HeidiKonswah"}
	]
};

var skills = [{name:"HTML5",r:70,color:"#E2AB7F",icon:'devicon-html5-plain-wordmark'},
{name:"CSS",r:70,color:"#E2AB7F",icon:'devicon-css3-plain-wordmark'},
{name:"Bootstrap",r:30,color:"#E2AB7F",icon:'devicon-bootstrap-plain'},
{name:"SASS",r:20,color:"#E2AB7F",icon:'devicon-sass-original'},
{name:"Responsive Design",r:50,color:"#E2AB7F",icon:""},
{name:"Javascript",r:90,color:"#C05850",icon:'devicon-javascript-plain'},
{name:"jQuery",r:80,color:"#C05850",icon:'devicon-jquery-plain-wordmark'},
{name:"React.js",r:60,color:"#C05850",icon:'devicon-react-original-wordmark'},
{name:"Git version control",r:40,color:"#505668",icon:'devicon-git-plain-wordmark'},
{name:"Chrome developer tools",r:30,color:"#505668",icon:""},
{name:"Python",r:80,color:"#C05850",icon:'devicon-python-plain-wordmark'},
{name:"C programming language",r:70,color:"#C05850",icon:'devicon-c-plain'},
{name:"Basic Algorithms and Data Structures",r:40,color:"#505668",icon:""}];

var projects = [{title: "Recipe Box", img:"img/recipebox.png",desc:"A simple app you can use to store your favourite recipes!", git:"https://github.com/HeidiKonswah/recipe-box", check:"http://recipe-box-1024.surge.sh"},
{title: "tetris", img:"img/tetris.png",desc:"The classic tetris game.", git:"#", check:"#"},
{title: "Tic Tac Toe", img:"img/tictactoe.png",desc:"Try to beat the algorithm, if you dare.", git:"#", check:"https://codepen.io/HeidiKonswah/pen/mvgpbZ"},
{title: "Snake game", img:"img/snake.png",desc:"", git:"https://github.com/HeidiKonswah/Snake-game", check:"https://heidikonswah.github.io/Snake-game/"},
{title: "the weather", img:"img/weather.png", desc:"using a weather API, know the current weather at your location",git:"https://github.com/HeidiKonswah/WeatherApp",check:"https://heidikonswah.github.io/WeatherApp/"},
{title: "gallery website", img:"img/gallery.png",desc:"a simple website for a gallery or a an artist",check:"https://codepen.io/HeidiKonswah/pen/QpyOmY",git:"https://codepen.io/HeidiKonswah/pen/QpyOmY"}];

var contacts = [{title:"Email", value:"Heidikonswah@gmail.com", icon:"alternate_email"},
{title:"Phone", value:"(2011) 469 55 011", icon:"phone"}]


