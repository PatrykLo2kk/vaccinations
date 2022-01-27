let today_vaccinations = document.getElementById("today-vaccinations")
let today_people_vaccinated = document.getElementById("today-people-vaccinated")
let people_fully_vaccinated = document.getElementById("people-fully-vaccinated")
let people_vaccinated = document.getElementById("people-vaccinated")
function doDate()
{
    var str = "";

    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var now = new Date();

    str += "Today is: " + days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("clock").innerHTML = str;
}

setInterval(doDate, 1000);

let world_vaccinations_text = document.getElementById("world_vaccinations")

function backClick()
{
    if ($("#menu").css("display", "none"))
    {
        $("#menu").css("display", "block")
        $(".button").css("display", "none")
    }   
}
function menuClick()
{
    if ($("#menu").css("display", "block"))
    {
        $("#menu").css("display", "none")
        $(".button").css("display", "block")
    }
}
function polandClick()
{
    location.href = "/myApp/www/other_pages/Poland/poland.html"
}
function vaccinationsClick()
{
    location.href = "/myApp/www/other_pages/Vaccinations/vaccinations.html"
}
function infoAboutVaccinationsClick()
{
    location.href = "/myApp/www/other_pages/Info_About_Vaccinations/Info_About_Vaccinations.html"
}
function belarusClick()
{
    location.href = "/myApp/www/other_pages/Belarus/belarus.html"
}
function czechClick()
{
    location.href = "/myApp/www/other_pages/Czech_republic/czech_republic.html"
}
function europeClick()
{
    location.href = "/myApp/www/other_pages/Europe/europe.html"
}
function germanyClick()
{
    location.href = "/myApp/www/other_pages/Germany/germany.html"
}
function lithuaniaClick()
{
    location.href = "/myApp/www/other_pages/Lithuania/lithuania.html"
}
function russiaClick()
{
    location.href = "/myApp/www/other_pages/Russia/russia.html"
}
function slovakiaClick()
{
    location.href = "/myApp/www/other_pages/Slovakia/slovakia.html"
}
function ukraineClick()
{
    location.href = "/myApp/www/other_pages/Ukraine/ukraine.html"
}
function worldClick()
{
    location.href = "/myApp/www/other_pages/World/world.html"
}
function mainClick()
{
    location.href = "/myApp/www/index.html"
}
function aboutAuthorClick()
{
    location.href = "/myApp/www/other_pages/About_Author/About_Author.html"
}
$.getJSON('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json', function(data) {
    // console.log(data[168].length)
    console.log(data[168].data[327])
    // day.innerHTML = data[168].data[327]["daily_vaccinations"]
    today_vaccinations.innerText = "Daily vaccinations: " + data[168].data[327]["daily_vaccinations"]
    today_people_vaccinated.innerHTML = "Daily people vaccinated: " + data[168].data[327]["daily_people_vaccinated"]
    people_fully_vaccinated.innerHTML = "People fully vaccinated: " + data[168].data[327]["people_fully_vaccinated"]
    people_vaccinated.innerHTML = "People vaccinated: " + data[168].data[327]["people_vaccinated"]
});