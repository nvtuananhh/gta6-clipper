# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/nvtuananhh/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/nvtuananhh/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical 35.8-second Shorts cut of Rockstar's Grand Theft Auto VI Trailer 2 — Jason on a motorcycle with a plane flying right over his head — made by my AI agent for make.fun's $500 "Clip GTA 6 for the most YouTube views" bounty.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=jn15e7qt&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>

## The clip

One contiguous excerpt from the trailer's finale (117.93–143.73s): it opens
on the car-explosion fireball, runs through the beach fight, Ocean Drive,
the gun-shop TV and the couch scene, then helicopter, jetski — and ends on
the peak shot, Jason on a motorcycle with a plane flying right over his
head. A "WAIT FOR THE PLANE" hook sits over the first 3 seconds. After the
footage, three text cards pitch make.fun (no voiceover, no extra music —
only the trailer's original audio).

- Format: 1080×1920, 30 fps, H.264 + AAC, 35.8 s
- File: `gta6-clipper-01-final.mp4` (kept out of this repo — see `.gitignore`)
- Video: https://www.youtube.com/shorts/ZBuWRtrPGB8

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: `makefun-condor-bulb-tuba` (n=0).

Footage: Grand Theft Auto VI Trailer 2 © Rockstar Games
(https://www.youtube.com/watch?v=VQRLujxTm3c), used for this bounty entry.

## Run

Requires Node 22, no dependencies, no network:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` validates `VIDEO.json` (it must hold an `https://` URL) and copies
it into the output directory.

## License

MIT — see `LICENSE`.
