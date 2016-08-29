# Save for Good

[Heroku link][heroku] **Note:** Broken

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Save for Good is a micro lending platform supported by Maple Microfinace. It allows to make no-intrest loans to entrepenuers around the world where traditional lending services aren't availible.

- [ ] Hosting on Heroku
- [ ] Lender account creation
- [ ] Lender Portfolio View
- [ ] Portfolio Statistics/Table
- [ ] Entrepenuer Feed
- [ ] Individual Entrepenuer Page
- [ ] Checkout Process Using Stripe
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframe
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `User/Session API` to interact with the session API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank portfolio component after signup/signin
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Basic Styling (1 day)

- [ ] Basic CSS reset/skeleton
- [ ] Toolbar CSS
- [ ] Lightbox CSS
- [ ] Notifications CSS
- [ ] Tooltips CSS
- [ ] Style signup/signin components

### Phase 3: Entrepreneur Feed (1 Day)

**Objective:** Entrepreneurs (Ents) can be collected and browsed through the index/feed page

- [ ] `Loan` Model
- [ ] `Entrepenuer` model
- [ ] `Contribution` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for entrepreneur (`LoansController`)
- [ ] JBuilder views for Loans/Loan
- [ ] JBuilder views for User
- [ ] `EntrepreneursIndex`
- [ ] Style Entrepreneur Feed

### Phase 3: Entrepeneur Page / show (1 day)

**Objective:** Single Entreprenuers can be shown.

- [ ] Style and build single Entrepreneur page
- [ ] Build Contribution Redux loop (not submission)
- [ ] Build lightbox to add contribution to state for later checkout
- [ ] Review feed and single ent page

### Phase 4: Checkout Process (2 days)

- [ ] Build accordian for checkout process
- [ ] Structure steps for form
- [ ] Build Confirm Form
- [ ] Build Donate Form
- [ ] Add Donate Redux Loop
- [ ] Add Billing form
- [ ] Build Billing form redux loop
- [ ] Build Submit page
- [ ] Build Submission/Stripe Loop
- [ ] CRUD API for Contributions (`UserController`)
- [ ] Style Checkout Process

### Phase 5: Portfolio Page (1 Day)
- [ ] Contributions Table
- [ ] Total Contributions
- [ ] Due Contirbutions
- [ ] Style Portfolio Page

### Bonus Features (TBD)
- [ ] Entrepreneurs Feed Can be Filtered with a Search-as-you-type bar
- [ ] Crumbs to navigate wherever you are
- [ ] Single Entrepreneur Page has a map to show where ent is located
- [ ] Multiple sessions
- [ ] Feed to see updates on loans made (...Maybe...)
- [ ] Graphs / statistics shown on protfolio page
