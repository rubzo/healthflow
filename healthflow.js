let div_ids_to_preload = [
    "page-1",
    "page-2",
    "page-3",
    "page-4",
    "page-5",
    "page-6",
    "page-7",
    "page-8",
    "page-9",
    "goto-page-2",
    "goto-page-3",
    "goto-page-4",
    "goto-page-5",
    "goto-page-6",
    "goto-page-4-2",
    "goto-page-7",
    "goto-page-6-2",
    "goto-page-8",
    "goto-page-9",
    "goto-page-1",
];
let ds = {};
let current_page = null;

function preload_divs() {
    div_ids_to_preload.forEach(function (n) {
        ds[n] = document.getElementById(n);
    });
    current_page = ds["page-1"];
}

function switch_to(to) {
    current_page.classList.remove("visible");
    current_page.classList.add("hidden");
    to.classList.remove("hidden");
    to.classList.add("visible");
    current_page = to;
}

function link(from, to) {
    from.addEventListener("click", function () { switch_to(to); });
}

function initial_setup() {
    preload_divs();
    link(ds["goto-page-2"], ds["page-2"]);
    link(ds["goto-page-3"], ds["page-3"]);
    link(ds["goto-page-4"], ds["page-4"]);
    link(ds["goto-page-5"], ds["page-5"]);
    link(ds["goto-page-6"], ds["page-6"]);
    link(ds["goto-page-7"], ds["page-7"]);
    link(ds["goto-page-8"], ds["page-8"]);
    link(ds["goto-page-9"], ds["page-9"]);
    link(ds["goto-page-1"], ds["page-1"]);
    link(ds["goto-page-4-2"], ds["page-4"]);
    link(ds["goto-page-6-2"], ds["page-6"]);
};

window.onload = initial_setup;