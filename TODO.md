# Critical to implement
* Production hide elements until they are done loading
    * https://www.andrewhfarmer.com/detect-image-load/

### Stuff to implement
* ---Handle not founds better (Pseudofix, canary treats all not founds as 403s)---
* Handle 500 errors on api for forms
* Code Browser
* Analytics table
  * each site is a row with some meta data, each row has many events
* params update pagination so pagination is remembered from external visits
* SceneJS?
* Searching
* Refresh button / polling for notifications while authed
* Add categories to blog post / project show page
* Better ways to handle uploads in dev?
* Fullscreening things? (media / web graphics)
* Secure resume microservice using names as ids instead of ids
* Underline not working right on markdown, use only frontend markdown processor?
* Progress bar for uploads
* Guardian db for revoking tokens
* Portfolio / Manga Gallery Pages slow down when lots of elements are present
  * Infinite scroll to prevent lots of loading?
* Manga image not set, causing frontend error
* Cleanup old media files when media is changed / deleted

#### Stuff to nearly never implement
* Scroll to top button
* Syntax highlighting for code snippets
* Multiselect sometimes not taking tag selections
* Use https://github.com/nsarno/knock to make resumes authenticated
  * During login, send request to both elixir api and any microservices that need auth
    * each one sets their own token from the action

### Stuff to do
* Blog post about multiselect onCreate
* Blog post about elixir ecto many_to_many row creation / management
* Blog post about disillusionment with jQuery
* Blog post about elixir niche with few libraries
* Blog post about using rails with prawn as a microservice in elixir
* Blog post about engineers building a thing and losing interest because the "hard" parts are solved
* Blog post about there and back again (rails -> phoenix -> rails)
* Blog post about code splitting saving significant time
* Add info about create-react-app to on new things part 1 / 2

File sizes after gzip:

  378.5 KB                build/static/js/0.0a5e7eff.chunk.js
  235.56 KB (-399.37 KB)  build/static/js/main.b9db6c02.js
  99.6 KB                 build/static/js/1.6c9f93a1.chunk.js
  99.36 KB                build/static/js/2.3bf443b8.chunk.js
  96.64 KB                build/static/js/7.2bff6b64.chunk.js
  41.61 KB (-4.02 KB)     build/static/css/main.810dc9cf.css
  27.83 KB                build/static/js/6.d956d910.chunk.js
  27.82 KB                build/static/js/5.fd3f9a46.chunk.js
  2.25 KB                 build/static/js/8.7f9b026e.chunk.js
  1.94 KB                 build/static/js/4.9ed38abf.chunk.js
  1.63 KB                 build/static/js/10.43e168bb.chunk.js
  1.61 KB                 build/static/js/9.27eb5aea.chunk.js
  1.6 KB                  build/static/js/11.3f7caab6.chunk.js
  1.49 KB                 build/static/js/3.b6913db2.chunk.js
  1.48 KB                 build/static/js/12.f840c3b1.chunk.js