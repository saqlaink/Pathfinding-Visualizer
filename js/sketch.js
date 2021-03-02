const widthRatio = 0.95;
const heightRatio = 0.89;

const fps = 65; //speed
let scale = 25;
let offset = 1.5; //cells

const canvas = document.getElementById("main-canvas");
const context = canvas.getContext("2d");

let width, height;
let board;

const randomMazeProbability = 0.3;
const weightValue = 1.5;

// Colors and images
const startImg = "./img/start.png";
const endImg = "./img/circle.svg";

const activeColor = "#ff304f";
const discoveredColor = "#98FB98";
const visitedColor = "grey";
const wallColor = "#000000";

const weightBorder = "peru";
const defaultBorder = "#000000";
const defaultColor = "#FFFFFF";

const pathColor = "yellow";
const pathLineColor = "red";

// user controls buttons
const diagonals = false;
let interrupt = false;
let doingSomething = false;

setSize();
board = new Board();
board.show();
