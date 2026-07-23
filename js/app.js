
(() => {
  const cfg = window.TOUR_CONFIG;
  const byId = Object.fromEntries(cfg.scenes.map(s => [s.id, s]));

  function makeHotspot(div) {
    div.classList.add("scene-hotspot");
    const ring = document.createElement("span");
    ring.className = "ring";
    const dot = document.createElement("span");
    dot.className = "dot";
    div.append(ring, dot);
  }

  const scenes = {};
  cfg.scenes.forEach(scene => {
    scenes[scene.id] = {
      title: scene.title,
      type: "equirectangular",
      panorama: scene.panorama,
      pitch: scene.initialView?.pitch ?? 0,
      yaw: scene.initialView?.yaw ?? 0,
      hfov: scene.initialView?.hfov ?? 95,
      hotSpots: (scene.hotspots || []).map(h => ({
        pitch: h.pitch,
        yaw: h.yaw,
        type: "scene",
        text: h.label || "",
        sceneId: h.targetScene,
        targetPitch: h.targetPitch ?? "same",
        targetYaw: h.targetYaw ?? "same",
        cssClass: "scene-hotspot",
        createTooltipFunc: makeHotspot
      }))
    };
  });

  const viewer = pannellum.viewer("viewer", {
    default: {
      firstScene: cfg.firstScene,
      sceneFadeDuration: 650,
      autoLoad: true,
      showControls: false,
      friction: .18
    },
    scenes
  });

  const $ = id => document.getElementById(id);
  $("projectTitle").textContent = cfg.project.title;
  $("infoTitle").textContent = cfg.project.title;
  $("infoDescription").textContent = cfg.project.description;

  const strip = $("thumbStrip");
  const drawerScenes = $("drawerScenes");

  function setImgFallback(img, fallback) {
    img.addEventListener("error", () => { img.src = fallback; }, { once:true });
  }

  cfg.scenes.forEach(scene => {
    const t = document.createElement("button");
    t.className = "scene-thumb";
    t.dataset.scene = scene.id;
    t.innerHTML = "<img alt=''><span></span>";
    t.querySelector("span").textContent = scene.title;
    const ti = t.querySelector("img");
    ti.src = scene.thumbnail || scene.panorama;
    setImgFallback(ti, scene.panorama);
    t.addEventListener("click", () => viewer.loadScene(scene.id));
    strip.appendChild(t);

    const d = document.createElement("button");
    d.className = "drawer-scene";
    d.dataset.scene = scene.id;
    d.innerHTML = "<img alt=''><span></span>";
    d.querySelector("span").textContent = scene.title;
    const di = d.querySelector("img");
    di.src = scene.thumbnail || scene.panorama;
    setImgFallback(di, scene.panorama);
    d.addEventListener("click", () => { viewer.loadScene(scene.id); closeDrawer(); });
    drawerScenes.appendChild(d);
  });

  function setActive(id) {
    const scene = byId[id];
    if (!scene) return;
    $("sceneTitle").textContent = scene.title;
    document.querySelectorAll("[data-scene]").forEach(el => el.classList.toggle("active", el.dataset.scene === id));
    strip.querySelector(`[data-scene="${id}"]`)?.scrollIntoView({ behavior:"smooth", inline:"center", block:"nearest" });
  }
  viewer.on("scenechange", setActive);
  setActive(cfg.firstScene);

  const drawer = $("drawer");
  const backdrop = $("backdrop");
  function openDrawer() { drawer.classList.add("open"); backdrop.classList.add("visible"); }
  function closeDrawer() { drawer.classList.remove("open"); backdrop.classList.remove("visible"); }

  $("menuBtn").addEventListener("click", openDrawer);
  $("drawerClose").addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  $("infoBtn").addEventListener("click", () => $("infoPanel").classList.add("open"));
  $("infoClose").addEventListener("click", () => $("infoPanel").classList.remove("open"));

  $("zoomIn").addEventListener("click", () => viewer.setHfov(Math.max(35, viewer.getHfov() - 10)));
  $("zoomOut").addEventListener("click", () => viewer.setHfov(Math.min(120, viewer.getHfov() + 10)));

  let rotating = false;
  $("rotateBtn").addEventListener("click", () => {
    rotating = !rotating;
    rotating ? viewer.startAutoRotate(-2.2) : viewer.stopAutoRotate();
  });

  $("fullBtn").addEventListener("click", async () => {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  });

  $("prevThumb").addEventListener("click", () => strip.scrollBy({ left:-260, behavior:"smooth" }));
  $("nextThumb").addEventListener("click", () => strip.scrollBy({ left:260, behavior:"smooth" }));
})();
