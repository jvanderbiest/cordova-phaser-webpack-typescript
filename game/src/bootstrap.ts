import * as Phaser from 'phaser';
import IntroScene from './scenes/intro.scene';

export class PhaserGame {
	gameConfig = {
		type: Phaser.AUTO,
		width: 800,
		height: 600,
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 200 }
			}
		},
		scene: [IntroScene]
	}

	constructor() {
		debugger;
		new Phaser.Game(this.gameConfig)
	}
}