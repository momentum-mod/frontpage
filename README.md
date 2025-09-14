![Momentum Mod](https://momentum-mod.org/assets/images/logo.svg)

> _Momentum Mod is a standalone game built on the Source Engine, aiming to
> centralize movement gamemodes found in CS:S, CS:GO, and TF2._

# Frontpage

Momentum Mod's frontpage site plus branding and legal pages.

Uses [Astro](https://astro.build/) for static site generation.

## Development

Use `git submodule update --remote` to ensure you have the `styling` submodule
fetched.

With Node installed, run `npm install`.

To launch a dev session with auto reloading, run `npm run dev`. Open the URL
Vite spits out and all should work.

For auto-formatting, run `npm run format`. If on VSCode I recomemend the
[Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

Please use Chromium's Lighthouse reports before submitting work, keeping
**Performance**, **Accessibility** and **SEO** at 99/100 ("Best Practices" is
hopeless because of garbage in Steam iframes).
