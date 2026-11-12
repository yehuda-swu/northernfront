# Northern Front: The Security Cabinet

StandWithUs UK Explore interactive history game for pupils aged 16 to 17.

## Play the game

Open `index.html` in a modern browser. The activity requires no server or paid account. The interface, maps and gameplay work offline. If internet access is available, the browser may load the optional Google Barlow fonts; local fallbacks are provided.

Select **Enter the Cabinet**, read the opening briefing, review the military and diplomatic advice, and choose a course of action. Each decision leads to a simulated tradeoffs page and a historical outcome reveal.

The six chapters cover 1978, 1982, 1993, 2000, 2006 and 2024. A final historical record summarises the user's decisions. A downloadable text record is available at the end.

## Files included

* `index.html` game entry point
* `styles.css` responsive theme
* `game.js` complete standalone game and chapter data
* `educator_guide.html` facilitator notes and historical context
* `SOURCES.md` research references and image notes
* `assets/` four map images, programme logos, six historical archive slide extracts and a media folder with compressed photos and two optional video clips
* `README.md` these instructions

## Upload through the GitHub website

1. Create a new public GitHub repository, such as `northernfront`, or open the repository where you want to host the game.
2. On your computer, extract this ZIP file first.
3. In GitHub, choose **Add file**, then **Upload files**.
4. Upload the extracted files and the `assets` folder contents. Make sure `index.html` is located at the repository root, not inside another folder.
5. Enter this exact suggested commit message:

   `Update Northern Front chapter images and video autoplay`

6. Select **Commit changes**.
7. Open **Settings**, then **Pages**.
8. Under **Build and deployment**, select **Deploy from a branch**.
9. Select the `main` branch and the `/ (root)` folder, then save.
10. When GitHub has finished deploying, use the Pages URL shown under Settings, Pages.

For a repository named `northernfront` under the user account `yehuda-swu`, the expected URL format is `https://yehuda-swu.github.io/northernfront/` after deployment. Check GitHub Pages for the actual link.

## Commit through Git

Run these commands from the extracted project folder, with the remote pointing at the repository you created:

```bash
git init
git branch -M main
git add .
git commit -m "Update Northern Front chapter images and video autoplay"
git remote add origin https://github.com/yehuda-swu/northernfront.git
git push -u origin main
```

If your local project already tracks a remote repository, do not run `git init` or `git remote add origin` again. Instead use:

```bash
git add .
git commit -m "Update Northern Front chapter images and video autoplay"
git push
```

## Editing scenarios

Open `game.js`. The six chapters are in the `CHAPTERS` array. Each chapter defines its historical briefing, adviser names, map, decision options, possible consequences, actual history and source references. Edit text in the corresponding chapter object, save and commit the changes. Do not claim alternative choices are what would actually have happened.

Replace an archive photo by keeping the same filename in the `assets` folder. The source photos are excerpts from the supplied presentation. Confirm image reuse rights before publicly deploying them.

## Accessibility and troubleshooting

* Classroom mode enlarges text. It can be switched on at the top of the screen.
* Ambient sound is off by default. Select SOUND OFF to enable it. Archive clips autoplay muted on entering the 1982 and 1993 briefings. Use the video player speaker control to enable sound. Browsers often block autoplay with audio.
* Motion respects the device's reduced movement preference.
* Decision buttons are keyboard accessible; the dialogue closes with Escape.
* The source documents are web links and will require an internet connection.
* If you see missing images, check that the `assets` directory is next to `index.html` and that filenames match exactly, including capitalisation.
* The game does not use tracking, accounts, a database or external gameplay services.

## Educational note

This is a history and decision making activity, not a military training tool. It is not a prediction engine. The simulation uses historically established events and clearly labels reconstructed dialogues and possible tradeoffs.

## Public image use

The maps and logos were supplied as user materials. The six archive panels come from the user supplied Northern Arrows presentation and may contain third party photographs. Check copyright and licence permissions before publicly publishing the archive image files through GitHub Pages.

## Update: archive material and sixth chapter

* Chapter 1 now includes image dossiers for the Avivim bus attack, Kiryat Shmona and Maalot. The Maalot historical photograph is hidden behind a content notice until requested.
* Chapter 2 uses the newly supplied 1982 armoured forces photograph in its cabinet meeting and a second supplied photograph on the historical reveal page. It also includes a 78 second MP4 clip that starts automatically when the chapter briefing appears.
* Chapter 3 (new) covers Hezbollah's rise and Operation Accountability in 1993. A 68 second modern news explainer starts automatically when the chapter briefing appears.
* Chapter 5 uses the newly supplied 2006 IDF photograph on the historical reveal page, and includes the Katyusha attack illustration, photographs of Goldwasser and Regev, IDF soldiers, a UN Security Council photo and a seven part explanation of Resolution 1701.
* Body copy, choices and adviser fonts are larger. The layout scales to phones and classroom screens.
* The complete interactive game still works without internet access, although linked sources require internet. Both historical clips now start automatically (muted, as required by most browsers). Use the video controls to enable sound or pause playback. They remain optional to watch.

### Video size and classroom time

The original videos exceed 24 minutes and 5 minutes. To keep the game suitable for a 12 to 15 minute lesson, only excerpts are bundled. Both excerpts have been reencoded for web playback. Clips begin automatically, muted, but viewers can pause or skip them without affecting gameplay. Watching both in full extends the 12 to 15 minute activity.

### Media rights

Both clips and the new photographs may contain third party copyrighted material. In particular the 1982 clip carries an AP logo. **Verify publishing rights before uploading these assets to a public repository.** The file package is technically ready for GitHub Pages but this is not a guarantee of permission to publish every included photograph or video.

## Version 3: new chapter images and autoplay

* Chapter 2 cabinet: supplied 1982 photograph of Israeli armoured vehicles.
* Chapter 2 historical reveal: supplied 1982 photograph of soldiers on an armoured vehicle.
* Chapter 5 historical reveal: supplied 2006 photograph of Israeli soldiers.
* Both bundled MP4 clips automatically play in the briefing as embedded videos. Autoplay is muted for browser compatibility, with controls to unmute and pause. The expand button opens an enlarged player.
* New photographs are resized and compressed to WebP for GitHub Pages.
