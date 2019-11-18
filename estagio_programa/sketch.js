var dist_bordas = 100;
var tam_rect = 50;
var x;
var y;
var cor = '#faffff';
let x0, y0;
//coloque aqui quantos mm tem o lado do quadrado
//valor 9.5 para o macbook Air
var fator = 9.5;

/*
paleta de cores
azul - '#4D85BD'
verde - '#7CAA2D'
amarelo - '#F5E356'
marrom - '#CB6318'
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = int(random(0, windowWidth-dist_bordas-tam_rect));
	y = int(random(0, windowHeight-dist_bordas-tam_rect));

}

function draw() {
	background('#faffff');
	strokeWeight(3);

	//retangulo reiniciar
	fill('#fffceb');
	rect(155+75, windowHeight-dist_bordas, windowWidth-160-75, dist_bordas-5);
	//texto reiniciar
	textSize(70);
	fill(0);
	text('Reiniciar', windowWidth/2-80, windowHeight-dist_bordas/2+20);
	//retangulo com informacoes
	fill('#68fca6');
	noStroke();
	rect(5, windowHeight-dist_bordas, 220, dist_bordas-3);
	textSize(20);
	fill(0);
	text('Centro quadrado (mm):', 5, windowHeight-80);
	x0 = ((x + tam_rect/2)*fator)/tam_rect;
	y0 = ((y + tam_rect/2)*fator)/tam_rect;
	text(x0, 5, windowHeight-60);
	text(y0, 5, windowHeight-40);
	//retangulo de clique
	fill(cor);
	stroke(0);
	rect(x, y, tam_rect, tam_rect);
	strokeWeight(4);
	fill(0);
	point(x + tam_rect/2, y + tam_rect/2);

	//print('posx:', mouseX, 'posy:', mouseY);
}

function mousePressed(){
	if (dentro(x, mouseX, x+tam_rect) && dentro(y, mouseY, y+tam_rect)){
		cor = '#00ff00';
	} else {
		cor = '#faffff';
	}
	if (dentro(0, mouseX, windowWidth) && dentro(windowHeight-dist_bordas, mouseY, windowHeight)){
		x = int(random(0, windowWidth-dist_bordas-tam_rect));
		y = int(random(0, windowHeight-dist_bordas-tam_rect));
	}
}

function dentro(lowerBound, coord, upperBound){
	return (lowerBound <= coord && coord <= upperBound);
}
