# What is it?
`blog` is a dead simple blog platform. You create a new post, write it in your editor of choice
(configurable), then it gets injected into a .html template. It let's you choose deployment method
with a deploy script.

# How to use it?
1. Clone this repository
2. Clear the contents of `drafts/, published/, titles html/posts/ and html/{all,list}.html` (I need to
   figure out how to keep my blog and the script separate)
3. You might want to customise the `html/*.template.html` files and CSS and JS, located in
   `html/src/` (SCSS and TS).
4. With the way I set it, you can `cd html; yarn run dev` to run a dev server with live compile

Once you're done with customising it to your liking, you can start writing blog posts:
1. Open `blog` with a text editor and check if the variables at the top suit you.
2. Edit `deploy` script so that it works for you
3. Just running `blog` will show a menu with actions you can choose, for example create new post,
   render the posts or publish them. You can also run it with specific option directly: `blog c`
4. Selecting `c` will ask you for a title (be careful with special characters, as some servers don't
   like them)
5. After you write the title, an editor will open for you to write the post in. Posts are just HTML
   that will be later injected into a template.
6. Once you're done, just close the editor. The script will then ask you if you want to mark it for
   publishing. Only marked posts will be rendered into posts.
7. You now have to render the posts with `blog r` in order for them to become finished HTML files
8. After that running `blog d` will run the deploy script (or you can run it directly). How that
   works is up to you to decide.

# TODO:
- Keep more metadata, like create/publish time
- RSS generator

# Contributing
I'm open to Pull Requests and feature requests (through issues). If you find a bug (I'm sure you will, given how bad the code is), please report it as an issue, or create a PR with a fix.

# Luke Smith's `lb`
This blog system was inspired by [lb](https://github.com/lukesmithxyz/lb), just not as polished.
