let divs = {};
let current_page = null;
let divs_slid_left = [];
let div_slid_in = null;

function div(n) {
    if (!(n in divs)) {
        divs[n] = document.getElementById(n);
    }
    return divs[n];
}

function slide_left(to) {
    current_page.classList.add("stage-left");
    divs_slid_left.push(current_page);
    current_page = to;
}

function slide_left_and_wait(to) {
    slide_left(to);
    setTimeout(function() {
        div("goto-measure2-page").classList.remove("text-hidden");
    }, 5000);
}

function slide_in(to) {
    to.classList.add("stage-left");
    div_slid_in = to;
}

function slide_away(to) {
    div_slid_in.classList.add("stage-reset");
    setTimeout(function () {
        div_slid_in.classList.remove("stage-left");
        div_slid_in.classList.remove("stage-reset");
        div_slid_in = null;
    }, 1000);
}

function reset_all(to) {
    divs_slid_left.forEach(function (n) {
        n.classList.add("stage-reset");
    });
    setTimeout(function () {
        divs_slid_left.forEach(function (n) {
            n.classList.remove("stage-left");
            n.classList.remove("stage-reset");
        });
        current_page = to;
        divs_slid_left = [];
    }, 1000);
}

function link(from, to, switch_func) {
    div(from).addEventListener("click", function () { switch_func(div(to)); });
}

function initial_setup() {
    current_page = div("title-page");
    link("goto-unconc-page", "unconc-page", slide_left);
    link("goto-sympt-page", "sympt-page", slide_left);
    link("goto-measure-page", "measure-page", slide_left);
    link("goto-sugar-page", "sugar-page", slide_left);
    link("goto-wait-page", "wait-page", slide_left_and_wait);
    link("goto-measure2-page", "measure2-page", slide_left);
    link("goto-final-page", "final-page", slide_left);
    link("goto-title-page", "title-page", reset_all);

    link("goto-measure-help-page", "measure-help-page", slide_in);
    link("goback-measure-page", "measure-page", slide_away);

    link("goto-sugar-help-page", "sugar-help-page", slide_in);
    link("goback-sugar-page", "sugar-page", slide_away);

    link("goto-measure2-help-page", "measure2-help-page", slide_in);
    link("goback-measure2-page", "measure2-page", slide_away);

    var node_list = Array.from(document.getElementsByClassName("select-option"));
    node_list.forEach(function(n) {
        n.addEventListener("click", function(ev) { 

	    let el = ev.target;
	    while (!el.classList.contains("select-option")) {
	      el = el.parentNode;
	    }

	    if (!el.classList.contains("selected")) {
	        el.classList.add("selected");
	    } else {
	        el.classList.remove("selected");
	    }
	});
    });
};

window.onload = initial_setup;
