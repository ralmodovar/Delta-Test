PROJECT HORIZON V1

WHAT THIS IS
A small, code-only Kuula-style panorama viewer. The ZIP is tiny because it does not include your large panoramas.

RECOMMENDED WORKFLOW
1. Install GitHub Desktop.
2. Clone your Delta-Test repository.
3. Delete the old website files from the cloned folder.
4. Copy all Project Horizon files into the cloned folder.
5. Add your panorama images to /panoramas.
6. Rename them:
   scene-1.jpg
   scene-2.jpg
7. In GitHub Desktop:
   - Write a summary such as "Install Project Horizon V1"
   - Click Commit to main
   - Click Push origin

WHY JPG
GitHub.com browser uploads reject files over 25 MB. GitHub Desktop can push larger files, but GitHub itself still rejects individual files above 100 MB. JPEG usually gives the best balance of quality and file size.

EDIT SCENES
Open js/tour-config.js in Notepad or VS Code.

HOTSPOT POSITION
pitch = up/down
yaw = left/right

Add more scene objects by copying an existing scene block and changing:
id
title
panorama
thumbnail
hotspots
