const { createCanvas, Image } = require("canvas");
const { JSDOM } = require("jsdom");

// Simuler un DOM avec jsdom
const { window } = new JSDOM('<!DOCTYPE html><html><body><canvas id="canvas1"></canvas></body></html>');
const document = window.document;

// Création du canvas et du contexte 2D
const canvas = createCanvas(600, 600);
const ctx = canvas.getContext("2d");

console.log(ctx);  // Vérifie si le contexte est bien créé

// Définition de la taille du canvas
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// Chargement de l'image
const playerImage = new Image();
playerImage.src = "shadow_dog.png";

// Fonction d'animation corrigée
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);  // Correction de la casse
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 100);  // Dessiner un rectangle bleu

    // Comme requestAnimationFrame ne fonctionne pas en Node.js, on utilise setTimeout pour la simulation
//    setTimeout(animate, 1000 / 60);  // Simule ~60 FPS
}

// Lancer l'animation
animate();
