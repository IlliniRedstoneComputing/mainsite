# The Illini Redstone Computing (IRC) Website


## Page styling

Shared page styles are in `src/lib/styles/universal.css`, loaded globally by
`app.css`. No per-page stylesheet import is required. Existing brand titles can
stay outside the wrapper; use `content-page content-page--home` for content below
an existing title without adding more top padding.

```svelte
<div class="content-page">
    <header class="intro">
        <p class="eyebrow">Guides</p>
        <h1 class="content-title">Page title</h1>
        <p>A short description of the page.</p>
    </header>

    <section class="section" aria-labelledby="details">
        <div class="section-heading"><h2 id="details">Details</h2></div>
        <div class="card-grid">
            <article class="info-card">
                <h3>Card title</h3>
                <p>Card content.</p>
            </article>
        </div>
    </section>
</div>
```

- `card-grid` uses three columns, then two and one as the content narrows.
  `card-grid card-grid--two` starts with two columns.
- `info-card` supplies the border, background, padding, and vertical spacing.
  Set `style="--card-accent: var(--color-redstone)"` to change its top border.
- `prose` limits text width and spaces paragraphs. `page-heading` and `page-copy`
  also work inside `content-page` with consistent margins.
- `callout` pairs text with an `action` link and stacks on narrow screens.
- `action-row` spaces a group of buttons and wraps them on narrow screens.
- `section-nav`, `placeholder`, and `empty-state` cover in-page links and
  unfinished content. `eyebrow` is an optional short category label.

Adjust `--content-card-bg` and `--content-grid-gap` in `universal.css` to update
all these layouts. FAQ, meeting, contact, and member content is maintained in
`src/lib/data/community.ts`.


## Buttons, skin images, and motion

Use `Button.svelte` for full-width links, or `class="action"` on an anchor or
native button. Both use the same flat style. Override `--button-color` for a
brand color; the component also accepts `color`. FAQ topic buttons use this
style with `aria-pressed` for selection.

Member entries accept an optional `skinImage`, such as `/members/alex.png`.
Save a rendered skin image in `static/members/`; raw Minecraft skin textures
must be rendered first. Omitting the field displays the reserved image space.
No third-party skin service or invented usernames are needed.

Use `accordion` on native `<details>` for shared opening/closing motion where
the browser supports intrinsic-size transitions. Other browsers retain native
expand/collapse behavior. All interaction and navigation motion respects
`prefers-reduced-motion`.

For page navigation, add `transition-1` through `transition-4` to up to four
headings or prose blocks on each page. Each stage must occur only once per page.
Do not put a stage on a card, a card grid, or any ancestor containing cards:
view-transition snapshots interfere with background blur. The layout supplies
route-specific snapshot names to avoid movement between unrelated positions.
Same-page hash navigation skips view transitions.
