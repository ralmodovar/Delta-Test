function kuulaHotspot(hotSpotDiv) {
  hotSpotDiv.classList.add('kuula-hotspot');

  const ring = document.createElement('span');
  ring.className = 'ring';

  const core = document.createElement('span');
  core.className = 'core';

  hotSpotDiv.appendChild(ring);
  hotSpotDiv.appendChild(core);
}

pannellum.viewer('panorama', {
  default: {
    firstScene: 'scene1',
    sceneFadeDuration: 700,
    autoLoad: true,
    showControls: true
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
          sceneId: 'scene2',
          cssClass: 'kuula-hotspot',
          createTooltipFunc: kuulaHotspot
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
          sceneId: 'scene1',
          cssClass: 'kuula-hotspot',
          createTooltipFunc: kuulaHotspot
        }
      ]
    }
  }
});
