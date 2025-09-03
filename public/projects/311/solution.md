<h2>Service Request Live Update Interface</h2>
**Problems:**
- No interface for actively tracking SR status
- Citizens do not feel like their concerns are being addressed
- "Orange/Green/Blue" is not very clear colour coding
- Labels for SR status are small
- SR status update status is unclear, what does "Closed" mean?
- Time display next to status update is also unclear, in muted text that might be hard to see
- Pop up is confusing and could catch people off guard
- No other confirmation if SR has been successfully submitted besides a small tooltip pop up at bottom of screen that is hard to notice
- No further details provided within the app, only within an email, and only if you include your personal details when you send your SR
- Description near top vs Issue Description at bottom can create confusion

**Changes:**
- Clear description of SR status update
- Separate section for live SR updates
- Bigger UI element than a small box
- More detailed description for "Closed" like the email
- Explanation of what happens to SRs when the user submits one
- Text is readable and not muted
- Time viewed is clearer
- More clear colour coding

<h2>Service Report Category Hierarchy</h2>

**Problems:**
- Too much text
- Categories seem all over the place, not really in a particular order
- Different SR categories bring up a toast when selected, with the option of "Cancel" or "Ok"
- The toast pop ups tell the user where to go and don't show them where they should go
- Too much scrolling to find right SR category
- All the text is the same colour and font size
- Decision paralysis; takes user too long to find proper category especially if their category could fall under multiple categories
- Most important text is red at the top, is it really the most important text?

**Changes:**
- Colour coded categories with SR report categories
- Symbol coded categories, with sub-menus
- Less verbose SR category names
- Re-organize categories into ones that make more sense and can't be misconstrued
- Get rid of the list view, make it a grid with category titles
- Examples of categories within each menu when use mouses over potentially

<h2>User Flow 1: Submitting a SR, choosing the proper category</h2>
**Situation:** "You are tasked with finding the service request category for a "damaged sidewalk curb" and sending a report to 311."




<h2>User Flow 2: Checking the updated status of a previously submitted SR</h2>
**Situation:** "You are tasked with viewing the latest update for your service request that you submitted and determining its current status and when it was last viewed by 311."


<h2>Changes for first round of user testing:</h2>
- Implement urgency order for categories
- Implement colours and symbols for full list of categories
- Implement back buttons for phone UI cause I noticed they were being tapped by users
- Make description for "Submitted" category a little more detailed on successful submission screen
- Create new screens for each status update with appropriate detailed descriptions and colours
- Implement detailed checkpoints and ETA system into each update screen
- Give user suggestions on what they can do to speed up service request response time next time they submit a request

<h2>Changes for second round of user testing</h2>
**Feedback:**
- colour has meaning vs colour has no meaning, go with your own knowledge for colour for updates
- no centre aligned text
- colour visual hierarchy is confusing (red/red/blue for category screen), maybe just icons are needed for differentiation?
- separate colour for category icons from grey background, its hard to see some of them
- icon on request select screen too big
- ETA/checkpoints can be vertically aligned with description to the right of each point
- Improve language to let user know that 311 will continue to update them throughout the lifecycle of the SR to help them feel more confident
- play into user's emotions, make it clear that they submitted an SR and helped their community!

**Changes:**
change all centre aligned text to left aligned
- change colour for update labels to what makes sense
	- Submitted - Cyan (starting colour, slightly undecided)
	- Received - Orange (bright, good colour but not finished yet)
	- In Review - Blue (undecided)
	- Forwarded - Gold (wait/slow)
	- Complete - Green (go)
	- Incomplete - Red (stop)
- remove colours from icons, users said they could easily differentiate icons by themselves
- reduce size for category icon on SR request select screen
- add text to congratulate user on successful SR completion or encourage user to submit another if it was unsuccessful
- make text explaining each update stage bigger and clearer for users to know right away
- add light or dark rounded rectangle background behind each icon in scroll list for SR category screen
- improve language after SR submission to let user know right away that 311 will continue to update them throughout the lifecycle of the SR to help them feel more confident
- keep ETA but change checkpoints display to be vertically aligned and add short descriptions to the right of each point
- create "Incomplete" SR screen to show hypothetically what it would show

- [x] change all centre aligned text to left aligned 
- [x] change colour for update labels to what makes sense
    - Submitted - Cyan (starting colour, slightly undecided)
	- Received - Orange (bright, good colour but not finished yet)
	- In Review - Blue (undecided)
	- Forwarded - Gold (wait/slow)
	- Complete - Green (go)
	- Incomplete - Red (stop)
- [x] remove colours from icons, users said they could easily differentiate icons by themselves
- [x] reduce size for category icon on SR request select screen
- [x] add text to congratulate user on successful SR completion or encourage user to submit another if it was unsuccessful
- [x] make text explaining each update stage bigger and clearer for users to know right away
- [x]  add light or dark rounded rectangle background behind each icon in scroll list for SR category screen
- [x] improve language after SR submission to let user know right away that 311 will continue to update them throughout the lifecycle of the SR to help them feel more confident
- [x]  keep ETA but change checkpoints display to be vertically aligned and add short descriptions to the right of each point
- [x] create "Incomplete" SR screen to show hypothetically what it would show