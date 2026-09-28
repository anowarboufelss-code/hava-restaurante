<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the uploaded HAVANA restaurant design, menu, and four-language content in the existing single-page route; this preserves the owner's site while additions remain localized.
- Use hosted asset pointers for the eight uploaded gallery photos in the live project, and package local photo copies in downloadable source archives; this keeps the preview lean and ZIP exports portable.
- Keep the TanStack application as the Lovable runtime and use the separate Vite static entry for GitHub Pages; this avoids changing the live site while supporting repository subpaths.
