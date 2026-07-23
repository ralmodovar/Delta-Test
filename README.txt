KUULA-STYLE HOTSPOT TEMPLATE

This version uses a white, concentric circular navigation hotspot matching the screenshot reference.

Before uploading:
1. Put your panorama files in the panoramas folder.
2. Rename them:
   scene-1.png
   scene-2.png

Upload these items to the ROOT of your GitHub repository:
- index.html
- css
- js
- panoramas

To move the hotspot:
Open js/app.js and change:
- pitch = vertical position
- yaw = horizontal position

Example:
pitch: -5,
yaw: 35

Positive yaw moves right; negative yaw moves left.
Positive pitch moves up; negative pitch moves down.
