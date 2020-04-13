export default class IntroScene extends Phaser.Scene
{
	constructor()
	{
		super('instro-scene')
	}

	preload()
	{

	}

	create()
	{
		this.add.text(200, 50, "Hello from Phaser running in Cordova");
	}
}