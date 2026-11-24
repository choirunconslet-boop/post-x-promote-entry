# post-x-promote-make-your-own-bounty-01

Entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X".

Jon's entry is a quote-tweet of make.fun's post
(https://x.com/makefunai/status/2124915864336236646), posted from his public
X account @Ncor321 on 24 Nov 2026, with its own photo attached (a screenshot
of https://make.fun/sponsor/new). Its text carries @makefunai, a make.fun
link, and the play code `makefun-ballroom-wardrobe-signpost`.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win. Its post
says anyone can now make a bounty of their own there: describe any task, set
the reward and the entry fee, and keep a share of every fee people pay to
enter.

## Scoring

Places go by the post's score at the deadline, highest first:

    score = replies + reposts + quotes

Views and likes move nothing. The top 50 entries share $250 USDC.

## Files

- `POST.json` — the address of Jon's entry post on X.
- `main.ts` — copies `POST.json` to `/output/POST.json` for the grader
  (Node 22, standard library only, no network, no clock).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
