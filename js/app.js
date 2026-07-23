const viewer = pannellum.viewer('panorama', {
  default: {
    firstScene: 'scene1',
    sceneFadeDuration: 700,
    autoLoad: true
  },
  scenes: {
    scene1: {
      title: 'Scene 1',
      type: 'equirectangular',
      panorama: 'panoramas/scene-1.png',
      hotSpots: [
        {
          pitch: -5,
          yaw: 35,
          type: 'scene',
          text: 'Go to Scene 2',
          sceneId: 'scene2'
        }
      ]
    },
    scene2: {
      title: 'Scene 2',
      type: 'equirectangular',
      panorama: 'panoramas/scene-2.png',
      hotSpots: [
        {
          pitch: -5,
          yaw: -145,
          type: 'scene',
          text: 'Return to Scene 1',
          sceneId: 'scene1'
        }
      ]
    }
  }
});

const menu = document.getElementById('sceneMenu');
document.getElementById('menuButton').addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.querySelectorAll('[data-scene]').forEach((button) => {
  button.addEventListener('click', () => {
    viewer.loadScene(button.dataset.scene);
    menu.classList.remove('open');
  });
});
