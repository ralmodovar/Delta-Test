window.TOUR_CONFIG = {
  project: {
    title: "Delta Test",
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
      initialView: { pitch: 0, yaw: 0, hfov: 95 },
      hotspots: [
        {
          pitch: -5,
          yaw: -145,
          targetScene: "scene1",
          targetPitch: 0,
          targetYaw: 35,
          label: "Return to Scene 1"
        },
        {
          pitch: -5,
          yaw: 35,
          targetScene: "scene3",
          targetPitch: 0,
          targetYaw: -145,
          label: "Go to Scene 3"
        }
      ]
    },

    {
      id: "scene3",
      title: "Scene 3",
      panorama: "panoramas/scene-3.jpg",
      thumbnail: "thumbs/scene-3.jpg",
      initialView: { pitch: 0, yaw: 0, hfov: 95 },
      hotspots: [
        {
          pitch: -5,
          yaw: -145,
          targetScene: "scene2",
          targetPitch: 0,
          targetYaw: 35,
          label: "Return to Scene 2"
        },
        {
          pitch: -5,
          yaw: 35,
          targetScene: "scene4",
          targetPitch: 0,
          targetYaw: -145,
          label: "Go to Scene 4"
        }
      ]
    },

    {
      id: "scene4",
      title: "Scene 4",
      panorama: "panoramas/scene-4.jpg",
      thumbnail: "thumbs/scene-4.jpg",
      initialView: { pitch: 0, yaw: 0, hfov: 95 },
      hotspots: [
        {
          pitch: -5,
          yaw: -145,
          targetScene: "scene3",
          targetPitch: 0,
          targetYaw: 35,
          label: "Return to Scene 3"
        },
        {
          pitch: -5,
          yaw: 35,
          targetScene: "scene5",
          targetPitch: 0,
          targetYaw: -145,
          label: "Go to Scene 5"
        }
      ]
    },

    {
      id: "scene5",
      title: "Scene 5",
      panorama: "panoramas/scene-5.jpg",
      thumbnail: "thumbs/scene-5.jpg",
      initialView: { pitch: 0, yaw: 0, hfov: 95 },
      hotspots: [
        {
          pitch: -5,
          yaw: -145,
          targetScene: "scene4",
          targetPitch: 0,
          targetYaw: 35,
          label: "Return to Scene 4"
        }
      ]
    }
  ]
};
