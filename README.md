# SAIMI hub — saimi.ch

The permanent home of the **Symposium on Artificial Intelligence in Medical Imaging
(SAIMI)**, maintained by the steering committee.

Live at **https://saimi.ch** *(not deployed yet — see below)*

## What lives here vs. on an edition site

| | Hub (`saimi.ch`) | Edition (`YYYY.saimi.ch`) |
|---|---|---|
| Owner | Steering committee | That year's organising committee |
| Lifetime | Permanent, kept current | Frozen once the event is over |
| Content | Mission, steering committee, editions index, sponsoring info, code of conduct, contact | Programme, dates, call for abstracts, registration, venue, keynotes, local team, that year's sponsors |

Related repositories:

- `saimi-edition-template` — starting point for a new edition
- `saimi-2027` — https://2027.saimi.ch
- `saimi-2026` — https://2026.saimi.ch (frozen)

## Maintaining the hub

Nearly everything is in **`src/hub.ts`**.

**After each edition:**

1. Move the finished edition object from `upcoming` into the top of `past`.
2. Set `upcoming` to the next edition, or `null` if no host is confirmed yet.
Hosts for future editions are approached internally by the steering committee, so
the hub carries no public call for hosts.

**Other things you may need to change:**

- `steeringCommittee` — portraits go in `src/assets/images/`, referenced by path.
- `contactEmail` — currently `null`, which makes the contact section fall back to a
  "being set up" message. **TODO:** set this to a role address such as `info@saimi.ch`
  once one exists, so the contact point survives changes in the teams.
- `src/pages/code-of-conduct.md` — the code of conduct, as a standalone page.

## Development

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build
```

Stack: Astro + Tailwind, based on the [AstroWind](https://github.com/arthelokyo/astrowind)
template — the same base as the edition sites, so the visual identity stays consistent.

## Deployment (not done yet)

**Order matters: `2026.saimi.ch` must be live before `saimi.ch` is replaced by this hub,
so no content is ever unreachable.**

1. Push to `main` in the `SAIMI-Switzerland` organisation.
2. Repo **Settings → Pages**: source *GitHub Actions*, custom domain `saimi.ch`.
   (`public/CNAME` is already in place.)
3. DNS — apex domain, so `A`/`AAAA` records rather than a `CNAME`.

See `DEPLOYMENT.md` at the top of the `websites` folder for the full sequence.
