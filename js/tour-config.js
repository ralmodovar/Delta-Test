window.TOUR_CONFIG = {
  project: {
    title: "Project Horizon",
    description: "Interactive architectural panorama tour."
  },

  firstScene: "scene1",

  scenes: [
    {
      id: "scene1",
      title: "Scene 1",
      panorama: "panoramas/scene-1.jpg",
      thumbnail: "thumbs/scene-1.jpg",
      initialView: { pitch: 0, yaw: 0, hfov: 95 },
      hotspots: [
        {
          pitch: -5,
          yaw: 35,
          targetScene: "scene2",
          targetPitch: 0,
          targetYaw: -145,
          label: "Go to Scene 2"
        }
      ]
    },

    {
      id: "scene2",
      title: "Scene 2",
      panorama: "panoramas/scene-2.jpg",
      thumbnail: "thumbs/scene-2.jpg",
      initialView: { pitch: 0, yaw: 180, hfov: 95 },
      hotspots: [
        {
          pitch: -5,
          yaw: -145,
          targetScene: "scene1",
          targetPitch: 0,
          targetYaw: 35,
          label: "Return to Scene 1"
        }
      ]
    }
  ]
};
