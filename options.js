// Saves options to chrome.storage
function save_options() {
    var theme = document.getElementById('theme').value;
    var ads = document.getElementById('ads').checked;
    var splashVideo = document.getElementById('splashVideo').checked;
    var customURL = document.getElementById('customURL').value;
    var muteAudio = document.getElementById('muteAudio').checked;
    var sideMenu = document.getElementById("sideMenu").checked;
    var uspFlash = document.getElementById("uspFlash").checked;
    var videoBackground = document.getElementById("videoBackground").checked;
    var customFooter = document.getElementById("customFooter").checked;
    var customCSS = document.getElementById("customCSS").value;
    chrome.storage.sync.set({
        selectedTheme: theme,
        selectedAds: ads,
        selectedDisclaimer: disclaimer,
        selectedSpash: splashVideo,
        selectedURL: customURL,
        selectedMute: muteAudio,
        selectedMenu: sideMenu,
        selectedBackground: videoBackground,
        selectedUspFlash: uspFlash,
        selectedCustomFooter: customFooter,
        selectedCustomCSS: customCSS
    }, function() {
        // Update status to let user know options were saved.
    });
    changeTheme();
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
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
        document.getElementById('theme').value = items.selectedTheme;
        document.getElementById('ads').checked = items.selectedAds;
        document.getElementById('splashVideo').checked = items.selectedSpash;
        document.getElementById('customURL').value = items.selectedURL;
        document.getElementById('muteAudio').checked = items.selectedMute;
        document.getElementById("sideMenu").checked = items.selectedMenu;
        document.getElementById("uspFlash").checked = items.selectedUspFlash;
        document.getElementById("videoBackground").checked = items.selectedBackground;
        document.getElementById("customFooter").checked = items.selectedCustomFooter;
        document.getElementById("customCSS").value = items.selectedCustomCSS;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);


window.onload = function() {
    changeTheme()
    document.getElementById("sideMenu").addEventListener('input', save_options);
    document.getElementById("uspFlash").addEventListener('input', save_options);
    document.getElementById("theme").addEventListener('input', save_options);
    document.getElementById("ads").addEventListener('input', save_options);
    document.getElementById("customFooter").addEventListener('input', save_options);
    document.getElementById("splashVideo").addEventListener('input', save_options);
    document.getElementById("videoBackground").addEventListener('input', save_options);
    document.getElementById("muteAudio").addEventListener('input', save_options);
    document.getElementById("customURL").addEventListener('input', save_options);
    document.getElementById("customCSS").addEventListener('input', save_options);
}

function changeTheme() {
    chrome.storage.sync.get({
        selectedTheme: "Dark", //Default Values
    }, function(items) {
        theme = items.selectedTheme;
        setCustTheme("Default", "white", "#57B6EF", "black");
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
    })
}

function setCustTheme(check, prim, seco, text) {
    if (theme == check) {
        let root = document.documentElement;

        root.style.setProperty('--primaryColor', prim);
        root.style.setProperty('--secondaryColor', seco);
        root.style.setProperty('--textColor', text);
    }
}