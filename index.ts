import Phaser from "phaser";
import { Menu } from "./src";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  canvas,
  width: 360,
  height: 640,
  scene: Menu,
};

new Phaser.Game(config);
