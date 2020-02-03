if (window.location == "https://portal.uspcollege.ac.uk/moodle/") {
    document.getElementById("page-header").style.display = "none";
}


if ((window.location).toString().includes("https://portal.uspcollege.ac.uk/moodle/")) {
    var version = "1.3.0";
    var buildNum = 14;

    var adsOn = true;
    var theme = "Dark";
    var disclaimer = true;
    var splashVideo = false;
    var customURL = "";
    var muteAudio = true;
    var sideMenu = false;
    var videoBackground = false;
    var USPFlash = true;
    //Defines vars for user settings

    chrome.storage.sync.get({
        selectedTheme: "Dark", //Default Values
        selectedAds: true,
        selectedDisclaimer: true,
        selectedSpash: false,
        selectedURL: "",
        selectedMute: true,
        selectedMenu: false,
        selectedBackground: false,
        selectedUspFlash: true,
        selectedCustomFooter: true,
        selectedCustomCSS: ""
    }, function(items) {
        theme = items.selectedTheme;
        adsOn = items.selectedAds;
        disclaimer = items.selectedDisclaimer;
        splashVideo = items.selectedSpash;
        customURL = items.selectedURL;
        muteAudio = items.selectedMute;
        sideMenu = items.selectedMenu;
        USPFlash = items.selectedUspFlash;
        videoBackground = items.selectedBackground;
        customFooter = items.selectedCustomFooter;
        customCSS = items.selectedCustomCSS;

        if (window.location == "https://portal.uspcollege.ac.uk/moodle/" && USPFlash == true || window.location == "https://portal.uspcollege.ac.uk/moodle/my/" && USPFlash == true) {
            loadFlashUSP();
        }


        setCustTheme("Dark", "#0B0B0A", "#1D1C1A", "white");
        setCustTheme("Tree", "#609e60", "#556B2F", "white");
        setCustTheme("Paper", "#F8E0C8", "#B99566", "78233F");
        setCustTheme("Vomit", "red", "#39FF14", "FAED27");
        setCustTheme("Candy", "#c9fdff", "#ffcbcb", "black");
        setCustTheme("Rhubarb&Custard", "#9aceff", "#4a69bb", "black");
        setCustTheme("HellSpawn", "#0B0B0A", "#cc3333", "white");
        setCustTheme("Transparent", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.2)", "white");
        setCustTheme("uspTrue", "#0C3455", "#0A2947", "white");
        //Adds themeing

        console.log(customFooter);
        if (customFooter == true) {
            console.log("Test");
            var d = new Date();
            var currentDay = d.getDay();
            window.currentDate = d.getDate();
            window.currentMonth = d.getMonth();

            window.customMessage = 'Have an awesome day xx';
            if (currentDay == 0 || currentDay == 6) {
                customMessage = "It's the weekend! You should make sure to have a rest once in a while!"
            }
            if (currentDay == 3) {
                customMessage = "It's Wednesday my dudes"
            }
            if (currentDate == 1) {
                customMessage = "Pinch punch first day of the month!"
            }
            setCustFoot(0, 1, "Happy new years day! I cannot believe a year has passed already.");
            setCustFoot(6, 0, "<a href='https://en.wikipedia.org/wiki/Epiphany_(holiday)'>Today is Epiphany, have you taken down your decorations yet?</a>");
            setCustFoot(8, 0, "Today is a cool day!");
            setCustFoot(12, 0, "It's Rubber Duck day. Have you got one to explain your thoughts to yet?");
            setCustFoot(19, 0, "It's Popcorn day in the US. Are you jealous?");
            setCustFoot(14, 1, "Have a good valentines day. Did you get a card from anyone?");
            setCustFoot(13, 2, "Get your red noses on!");
            setCustFoot(14, 3, "It's Pi day! But only if you read your dates awkwardly");
            setCustFoot(20, 3, "It's getting pretty dank in here for some reason");
            setCustFoot(1, 4, "<a href='https://en.wikipedia.org/wiki/International_Workers%27_Day'>It's international Workers day, did you get the day off?</a>");
            setCustFoot(4, 4, "May the 4th be with you");
            setCustFoot(6, 4, "Revenge of the sixth");
            setCustFoot(25, 4, "Happy Towl Day ;)");
            setCustFoot(4, 5, "Give you cat a hug and cuddle for me today");
            setCustFoot(5, 5, "Idk if I can make it to work today");
            setCustFoot(19, 8, "ARRRRRRR IT'S TALK LIKE A PIRATE DAY!!!!");
            setCustFoot(23, 9, "Get ready fellow chemists, it's mole day!");
            setCustFoot(31, 9, "<a href = 'https://www.youtube.com/watch?v=-1dSY6ZuXEY'> Happy Halloween! Have a spooky day!</a >");
            setCustFoot(25, 11, "Merry Christmas. I hope you have loads of fun today!");
            setCustFoot(26, 11, "Make sure to relax and chill on boxing day!");
            setCustFoot(31, 11, "Happy new years eve! Are you counting down the minutes till new year already?");

            document.getElementById("page-footer").innerHTML = "<div class=PMISFooter><h1>Useful Links</h1><ul><li><a href='https://portal.uspcollege.ac.uk/moodle/my/'>DashBoard</a></li><li><a href='https://portal.uspcollege.ac.uk/moodle/course/index.php'>All Courses</a></li><li><a href='https://proparent.seevic-college.ac.uk/timetable/?Grid=Show'>Time Table</a></li><li><a href='<li><a href='https://proparent.seevic-college.ac.uk/timetable/?Grid=Show'>Student Email</a></li></ul><p>" + customMessage + "</p></div>"
            document.getElementById("page-footer").style = 'display:block !important';
        }


        if (adsOn == false && window.location == "https://portal.uspcollege.ac.uk/moodle/my/") {
            var adSpace = document.getElementById("inst471")
            adSpace.parentElement.removeChild(adSpace);
        }
        //Removes Ads

        if (splashVideo == false) {
            var video = document.getElementById('myVideo');
            try {
                video.parentElement.removeChild(video)
            } catch (error) {

            }
        }
        //Removes splash video

        if (customURL != "") {
            try {
                document.getElementById('myVideo').src = customURL;
            } catch (error) {

            }
        }

        if (muteAudio == false) {
            document.getElementById('myVideo').muted = false;
        }

        if (sideMenu == false) {
            navBar = document.querySelectorAll(".pull-xs-left");
            try {
                document.getElementById("nav-drawer").parentNode.removeChild(document.getElementById("nav-drawer"));
            } catch (error) {

            }
            try {
                document.getElementById("page-my-index").style.margin = "0px";
            } catch (error) {

            }
            for (let i = 0; i < navBar.length; i++) {
                navBar[i].parentNode.removeChild(navBar[i]);
            }
        }
        //Changes video URL



        if ((window.location).toString().includes("https://portal.uspcollege.ac.uk/moodle/course/view.php?id=70")) {
            document.getElementById("page-header").innerHTML = document.getElementById("page-header").innerHTML + "<div class=backUpMsg><h2>Hey! If you've noticed that some of the tasks are gone, someone may have removed them. But don't worry, Rourke has kept a backup here : </h2><a href='https://drive.google.com/open?id=1K7M5X7MEUSJSSjz88cVmegX3PBcABT9i'><h2>LINK</h2></a></div>"
        }
        if ((window.location).toString().includes("https://portal.uspcollege.ac.uk/moodle/course/view.php?id=208")) {
            document.getElementById("page-header").innerHTML = document.getElementById("page-header").innerHTML + "<div class=backUpMsg><h2>Hey! If you've noticed that some of the tasks are gone, someone may have removed them. But don't worry, Rourke has kept a backup here : </h2><a href='https://drive.google.com/drive/folders/12ocGdxKotvMIpIC96TBjNja__e4wGrpi'><h2>LINK</h2></a></div>"
        }
        if (videoBackground == true || (videoBackground == false && window.location == "https://portal.uspcollege.ac.uk/moodle/"))
            if (customURL != "") {
                insertDiv = document.createElement('div');
                insertDiv.id = 'insertVideo';
                insertDiv.innerHTML = '<iframe id="iframe" frameborder="0" height="1080" width="100%"> </iframe>';
                container = document.getElementById('page-wrapper');
                container.appendChild(insertDiv);
                videoId = customURL.replace("https://www.youtube.com/watch?v=", "");
                customURL = customURL.replace("watch?v=", "embed/");
                if (muteAudio == false) {
                    customURL += '?controls=1&autoplay=1&playlist=' + videoId + '&loop=1';
                } else {
                    customURL += '?controls=0&mute=1&autoplay=1&playlist=' + videoId + '&loop=1';
                }
                iframeVid = document.getElementById('iframe').src = customURL;
            }
            //Changes video URL

        style = customCSS;
        document.querySelector('head').innerHTML += "<style>" + style + "</style>";
    })
};


function loadFlashUSP() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            USPFlash = (xhr.responseText);
            USPFlash = (USPFlash.toString());
            USPFlash = USPFlash.split("~~");
            window.USPnews = USPFlash[0];
            window.USPmemes = USPFlash[1];
            window.USPupdates = USPFlash[2];
            window.PMISver = USPFlash[3];

            var versionTitle = "";
            if (parseFloat(PMISver) > parseFloat(buildNum)) {
                versionTitle = "        NEW UPDATE AVAILABLE"
            }


            document.getElementById("region-main").innerHTML = `<h1 class=title id=title><br>USP Flash</h1>
        <p>Version : Custom Koala  [` + version + "]" + versionTitle + `</p>
        <div>
        <h2 class=flashTitle>Current News:</h2>
        <div class=contentBar>` + USPnews + `

        </div>
        <h2 class=flashTitle>Internet Memes:</h2>
        <div class=contentBar>` + USPmemes + `

        </div>
        <h2 class=flashTitle>PMIS Updates:</h2>
        <div class=contentBar>` + USPupdates + `

        </div>
        `
        }
        if (window.location == "https://portal.uspcollege.ac.uk/moodle/") {
            try {
                document.getElementById("title").style.marginTop = "-90px";
            } catch (error) {

            }
        }
    }
    xhr.open('GET', 'https://adam-shea.github.io/Palmers-Moodle-Improvement-Suite/', true);
    xhr.send(null);
}

function setCustTheme(check, prim, seco, text) {
    if (theme == check) {
        let root = document.documentElement;

        root.style.setProperty('--primaryColor', prim);
        root.style.setProperty('--secondaryColor', seco);
        root.style.setProperty('--textColor', text);
    }
}

function setCustFoot(date, month, msg) {
    if (window.currentDate == date && window.currentMonth == month) {
        window.customMessage = msg;
    }
}