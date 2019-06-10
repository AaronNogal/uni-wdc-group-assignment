# `restaurant-booking-website`

## Milestone Submission Notes

Design changes past the initial visual design have been noted, and will be implemented, though due to the tediousness of redrawing the designs and potential for that to be done multiple times for minor changes, we have simply made note of them.

The front end code is mostly implemented, though will be refined and altered before final submission, whereas the backend routing is currently non-functional, and is simply boilerplate code in its current state.

## Final Submission Notes

## Feature Plan

-   [ ] ALL_PAGES
    -   [ ] Header
        -   [ ] Overlay type background `background: rgba(0,0,0,0.8)`
        -   [ ] Height: 100px
        -   [ ] Width: 100%
-   [ ] /
    -   [ ] Search
        -   [ ] Restaurant or city (text input)
        -   [ ] Date of reservation (numeric input, numeric input, numeric input)
        -   [ ] Time of reservation (numeric input, numeric input, dropdown am/pm)
        -   [ ] Number of people (numeric input)
-   [ ] /search
    -   [ ] Search
        -   [ ] Restaurant or city (text input)
        -   [ ] Date of reservation (numeric input, numeric input, numeric input)
        -   [ ] Time of reservation (numeric input, numeric input, dropdown am/pm)
        -   [ ] Number of people (numeric input)
    -   [ ] Current Search results
    -   [ ] A search result should display the restaurants
        -   [ ] pictures;
        -   [ ] name;
        -   [ ] address;
        -   [ ] rating; and
        -   [ ] the first few sentences of their description
    -   [ ] Clicking on a search result take the user to `/restaurant/<restaurant_name>`.
-   [ ] `/restaurant/<restaurant_name>`
    -   [ ] Displays restaurant information
    -   [ ] Displays **customers** existing bookings at the restaurant
    -   [ ] **Customer** can request a booking: using time and seat number from search
    -   [ ] **Customer** can cancel an existing booking
    -   [ ] **Customer** calendar reminder; **customer**s can have their bookings automatically added to their Google Calendar when making a booking, and removed if cancelling.
    -   [ ] **Customer **can leave a review after booking
-   [ ] /sign-up
    -   [ ] Email
    -   [ ] Sign up with third party accounts (Google and Facebook)
    -   [ ] User chooses either **‘Customer’ **or ‘**Restaurateur**’ during signup
-   [ ] /login
    -   [ ] Login with email and password
    -   [ ] Login with third party accounts (Google and Facebook) (required for **customer**)
-   [ ] /manage
    -   [ ] **Customer**
        -   [ ] Account information
    -   [ ] **Customer** information
        -   [ ] Google calendar account
            -   [ ] **Customer **calendar reminder; **customer**s can have their bookings automatically added to their Google Calendar when making a booking, and removed if cancelling.
        -   [ ] Table bookings
        -   [ ] Link third party accounts for easy login (Google and Facebook)
            -   [ ] Third party account login only **required for customer accounts**, though it may be easier to have it for all accounts
            -   [ ] Third party account login should be linkable in settings/management
    -   [ ] **Restaurateur**
        -   [ ] Account information
        -   [ ] Restaurant profile
        -   [ ] Maximum seating capacity
        -   [ ] Individual bookings

## TODO

-   [ ] Demote headings (H1 → H2, etc.)
-   [ ] HTML headings/IDs
-   [ ] Wrap HTML
-   [ ] Help: Docs, Bugs
-   [ ] The front end needs to use the `vue.js` framework

## Allocated Tasks

We each need to implement ...

a) the front end Vue.js-based Javascript, HTML, and CSS (not vanilla Javascript, HTML, and CSS). The CSS shoul be in a file that applies to all pages.

b) the backend routing and database for our pages.

THEN: When you finish your part, help someone else.

-   **Barry:**
    -   [ ] `/sign-up`
    -   [ ] `/login`
-   **Anas:**
    -   [ ] `/search`
    -   [ ] `/restaurant/<restaurant_name>` (Search restaurant and store the restaurant into database).
-   **Aaron:**
    -   [ ] `/manage` (Management page for restaurant and user, and connect to the database as well).
-   **Robert:**
    -   [ ] `/` Fix CSS.
    -   [x] Basic server page routing.
    -   [ ] Ensuring everything works together.~~

**Will sort out pages we are all going to do after talkign about vue, till then will do whatever we need to.**

## Logs

### Robert

-   Wrote some basic routing for each page, though we might consider organising them differently later.
-   Added 404 handling to `app.js` and removed jade-based templating system left over from server generation.
-   Formatted all the files, and setup prettier so when we save it auto formats.
-   NOTE: We need to discuss how we are going to use `vue.js`. We could simply have one app html file, then populate it with vue components and so on. We would probably lose quite a bit of marks if we do regualar js without vue. Besides, it should be faster and easier with vue, we just need to decide on the structure.
-   QUESTION: Does anyone know whether we are allowed to use bootstrap for the CSS? WOuld make things easy.
-   Fixed the page links in the html.

### Anas

-

### Aaron

-

### Barry

-

## **Temporary Paste Area**

After we have discussed our use of vue.js, we should insert the following favicon links in out header.

```html
<link rel="apple-touch-icon" sizes="57x57" href="/assets/favicons/apple-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="/assets/favicons/apple-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="/assets/favicons/apple-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="/assets/favicons/apple-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/assets/favicons/apple-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/assets/favicons/apple-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/assets/favicons/apple-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-icon-180x180.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/assets/favicons/android-icon-192x192.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="96x96" href="/assets/favicons/favicon-96x96.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png" />
<link rel="manifest" href="/assets/favicons/manifest.json" />
<meta name="msapplication-TileColor" content="#ffffff" />
<meta name="msapplication-TileImage" content="/assets/favicons/ms-icon-144x144.png" />
<meta name="theme-color" content="#ffffff" />
```
