# Service Request Live Update Interface

## Problems
- No interface for actively tracking SR status  
- Citizens do not feel like their concerns are being addressed  
- "Orange / Green / Blue" is not very clear colour coding  
- Labels for SR status are small  
- SR status update is unclear — what does "Closed" mean?  
- Time display next to status update is also unclear, in muted text that might be hard to see  
- Pop up is confusing and could catch people off guard  
- No other confirmation if SR has been successfully submitted besides a small tooltip pop up at bottom of screen that is hard to notice  
- No further details provided within the app, only within an email, and only if you include your personal details when you send your SR  
- Description near top vs Issue Description at bottom can create confusion  

## Changes
- Clear description of SR status update  
- Separate section for live SR updates  
- Bigger UI element than a small box  
- More detailed description for "Closed" (like the email provides)  
- Explanation of what happens to SRs when the user submits one  
- Text is readable and not muted  
- Time viewed is clearer  
- More clear colour coding  

---

# Service Report Category Hierarchy

## Problems
- Too much text  
- Categories seem all over the place, not really in a particular order  
- Different SR categories bring up a toast when selected, with the option of "Cancel" or "Ok"  
- The toast pop ups tell the user where to go but don’t show them how to get there  
- Too much scrolling to find the right SR category  
- All the text is the same colour and font size  
- Decision paralysis; takes user too long to find proper category especially if their category could fall under multiple categories  
- Most important text is red at the top — is it really the most important?  

## Changes
- Colour-coded categories for SR report types  
- Symbol-coded categories, with sub-menus  
- Less verbose SR category names  
- Re-organize categories into groups that make more sense and can’t be misconstrued  
- Replace list view with a grid of category tiles  
- Provide examples of categories within each menu when the user hovers or taps  

---

# User Flow 1: Submitting a SR
**Situation:**  
“You are tasked with finding the service request category for a *damaged sidewalk curb* and sending a report to 311.”

---

# User Flow 2: Checking SR Status
**Situation:**  
“You are tasked with viewing the latest update for your service request that you submitted and determining its current status and when it was last viewed by 311.”

---

# Changes for First Round of User Testing
- Implement urgency order for categories  
- Implement colours and symbols for full list of categories  
- Add back buttons for phone UI (users were tapping them instinctively)  
- Make description for "Submitted" category more detailed on successful submission screen  
- Create new screens for each status update with appropriate detailed descriptions and colours  
- Implement detailed checkpoints and ETA system into each update screen  
- Give users suggestions on how they can speed up service request response time for future submissions  

---

# Changes for Second Round of User Testing

## Feedback
- Colour has meaning vs colour has no meaning → users default to their own interpretations of colours for updates  
- No centre-aligned text (harder to read)  
- Colour visual hierarchy is confusing (red/red/blue for category screen) — maybe icons alone are enough for differentiation  
- Separate category icon colours from grey background (hard to see)  
- Icon on request select screen is too big  
- ETA/checkpoints could be vertically aligned with description text to the right  
- Improve language so users know 311 will continue to update them throughout the SR lifecycle (build confidence)  
- Play into user emotions — make it clear they helped their community by submitting an SR!  

## Changes
- Change all centre-aligned text to left-aligned  
- Adjust colours for update labels:
  - **Submitted** – Cyan (starting, slightly undecided)  
  - **Received** – Orange (bright, in progress but unfinished)  
  - **In Review** – Blue (undecided)  
  - **Forwarded** – Gold (waiting/slow)  
  - **Complete** – Green (done, positive)  
  - **Incomplete** – Red (stop, failed)  
- Remove colours from icons (users said shape alone was enough)  
- Reduce size of category icon on SR request select screen  
- Add text to congratulate users on successful SR completion, or encourage resubmission if unsuccessful  
- Make text explaining each update stage bigger and clearer  
- Add light or dark rounded rectangle backgrounds behind category icons on SR category screen  
- Improve post-submission language so users know immediately that 311 will keep updating them  
- Keep ETA but vertically align checkpoints and add short descriptions to the right of each point  
- Create “Incomplete” SR screen as a hypothetical  