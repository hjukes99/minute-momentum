# Minute Momentum — MVP Spec

## App description
Minute Momentum is a tiny command-line habit tracker that helps users build consistency by logging one-minute actions each day and viewing short streak summaries.

## Target user
- Busy builders who want lightweight accountability
- People who dislike complex productivity tools
- Users who prefer terminal-based workflows

## MVP (v0.1)
1. Add a one-minute action entry with timestamp and optional note.
2. List recent entries (latest 20).
3. Show current streak and total entries.
4. Persist data locally in a JSON file (`data/entries.json`).
5. Include a smoke test to verify CLI boots and data path initializes.

## Non-goals (for now)
- Cloud sync
- User accounts
- Rich UI/web app
- Notifications/reminders
