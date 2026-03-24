---
title: The Dangers of Many Files
pubDate: 2026-03-24
desc: "What happens when there are a lot of similar files?"
image:
  url: ""
  alt: ""
tags: 
  - hack club
  - code
---

# The Dangers of Having Too Many Files

A couple of days ago, Josh and I had the idea to update [Slack Annoyance](https://github.com/heycastawhat/slack-annoyace)'s geoff personality prompt. I decided to make the change, so I opened up Ghostty, cd'd into ~/coding/slack-annoyance, ran a quick `git pull`, and opened up `annoyance/geoff.py`. I made the relevant changes, commited + pushed, and ssh'd into my raspberry pi to deploy them. I pulled the changes, verified the file was changed, and ran `docker compose down && docker compose up --build -d`, as usual. Once that was done, I opened up #annoyance-testing on Slack, sent a test message, and waited for the reply. Strangely, geoff responded as if I hadn't changed his prompt at all! After spending ~10 minutes looking into it and talking it over with Josh, I called it a night and went to bed.

For the next 2 days, I looked into the code trying to work out why it wasn't reflecting my changes. I removed caches, re-cloned the repo, rebuilt the containers many times, and even got a few of my friends to have a look. No one could figure it out. Eventually, I thought of adding a print statement to print the contents of the variable that I changed. Except nothing ever got printed. This time, I had changed it on the pi, not my Mac, so I knew something was really confused or wrong. I read the `compose.yaml` and the `Dockerfile`, and I spotted something: `geoff.py` was never referenced - not even once. I dm'd Josh on Slack and he replied "Geoff.py is my shenanigan file". I had been editing a test file and scratching my head when it didn't work - for the last 3 DAYS!!! After editing the right file, `greg.py`, my changes applied instantly and geoff became a rust dev. We've since renamed `geoff.py` to `geof[TESTUNUSED].py` for clarity. Hopefully I don't make the same mistake again...
