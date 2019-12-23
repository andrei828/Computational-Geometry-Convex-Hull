pencil_click = true;
eraser_click = false;
toggle_color_tab = false;
toggle_algorithm_tab = false;

var color_tab;
var pencil_element;
var eraser_element;
var algorithms_tab;

window.onload = () => {
    pencil_element = document.getElementById("pencil_icon")
    eraser_element = document.getElementById("eraser_icon")
    algorithms_tab = document.getElementById("select_tab")
    color_tab = document.getElementsByClassName("color_tab")[0];
    eraser_element.style.cursor = "pointer"
}

window.onresize = () => {
    location.reload()
}

function choose_algorithm(element) {

    var choice = element.children[0].textContent
    
    if (choice == "No Algorithm") {
        localStorage.drawGraham = ""
        document.getElementById("choose_alg").innerHTML = "&nbsp;&nbsp;&nbsp; No Algorithm"
        toggle_algorithms_tab()
    } else if (choice == "Graham Algorithm") {
        localStorage.drawGraham = "draw"
        document.getElementById("choose_alg").innerHTML = "&nbsp;&nbsp;&nbsp; Graham Algorithm"
        toggle_algorithms_tab()
    } else if (choice == "Jarvis Algorithm") {
        alert("Not implemented yet...")
    }
}

function get_coords() {
    var coords = localStorage.coords.split(' '), points = []
    
    for (let i = 0; i < coords.length - 2; i +=2 ) { 
        points.push(new Point(coords[i], coords[i + 1]))
    }
    console.log(points)
}

function set_draw() {
    console.log("grtgr")
    localStorage.drawGraham = "draw"
}

function pencil_clicked() {
    if (!pencil_click) {
        localStorage.state = "draw";

        pencil_click = true
        eraser_click = false
        eraser_element.style.cursor = "pointer"
        pencil_element.style.cursor = "default"
        pencil_element.src = "./pencil_icon2.png"
        eraser_element.src = "./eraser_icon1.png"
    }
}

function eraser_clicked() {
    if (!eraser_click) {
        localStorage.state = "erase";

        eraser_click = true
        pencil_click = false
        pencil_element.src = "./pencil_icon1.png"
        eraser_element.src = "./eraser_icon2.png"
        eraser_element.style.cursor = "default"
        pencil_element.style.cursor = "pointer"
    } 
}

function toggle_colors_tab() {

    if (toggle_color_tab == true) {
        console.log(toggle_color_tab)

        color_tab.style.display = "none"
        toggle_color_tab = false

    } else if (toggle_color_tab == false) {
        console.log(toggle_color_tab)

        color_tab.style.display = "block"
        toggle_color_tab = true
    }
}

function toggle_algorithms_tab() {
    
    if (toggle_algorithm_tab == true) {
        algorithms_tab.style.display = "none"
        toggle_algorithm_tab = false

    } else if (toggle_algorithm_tab == false) {
        algorithms_tab.style.display = "block"
        toggle_algorithm_tab = true
    }
}

function change_color(element) {
    localStorage.color = element.className.split(' ')[1]
    color_tab.style.display = "none"
    toggle_color_tab = false
}

