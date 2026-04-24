# QHE4103 Fundamentals of Web Technology Coursework Project
## Online Car Sale Website
Group Project Repository

This project is developed for the **Fundamentals of Web Technology** coursework.
The goal is to design and implement an **Online Car Sale** website, where sellers can register, log in, and add car advertisements, while buyers can search for cars by model and year.

The project is divided into two phases:

- **Phase A**: Front-end development with HTML, CSS, and JavaScript
- **Phase B**: Back-end development with PHP, MySQL, and session handling

This branch contains the current **Next.js App Router** frontend implementation for Member 1's public integration scope: global layout, navigation, footer, shared visual shell, and the premium homepage presentation for a high-end used-car platform.

---

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open the local site:

   ```text
   http://localhost:3000
   ```

---

## Frontend Notes

This branch uses:

- **Next.js App Router** under `src/app/`
- **React client components** only where browser APIs or interactivity are needed
- **Tailwind CSS** through the global stylesheet setup
- **Lenis** for shared smooth scrolling
- Shared layout components in `src/components/layout/`
- Homepage-specific components in `src/components/home/`

Member 1 owns the public shell and homepage integration work. Other members should continue building only their assigned business pages and should not duplicate the global navigation, footer, or page shell inside their own route files.

---

## Route Ownership

All routes live under `src/app/`.

| Route | File | Owner |
|---|---|---|
| `/` | `src/app/page.js` | Member 1 - Homepage / public presentation |
| `/register` | `src/app/register/page.js` | Member 2 - Seller registration |
| `/login` | `src/app/login/page.js` | Member 3 - Login / session flow |
| `/seller` | `src/app/seller/page.js` | Member 3 - Seller flow |
| `/search` | `src/app/search/page.js` | Member 4 - Car search |
| `/add-car` | `src/app/add-car/page.js` | Member 4 - Add car |
| `/car/[id]` | `src/app/car/[id]/page.js` | Member 4 - Car detail |

If a page needs React state, effects, DOM APIs, or event handlers, add `"use client"` as the first line of that page or component.

---

## Team Members

| Member | GitHub Username | Role |
|---|---|---|
| Member 1 | `wangchaoyu` | Project Integration / Public Pages |
| Member 2 | `luojingyu` | Seller Registration Developer |
| Member 3 | `juzi` | Login / Session / Seller Flow Developer |
| Member 4 | `taogefei` | Car Data / Search Developer |

---

## Task Allocation

### Member 1 - `wangchaoyu`
**Main Responsibility:** Project integration, public pages, and team coordination

**Phase A**
- Develop the **Homepage**
- Build the **main navigation structure**
- Maintain **consistent global styles**
- Support the **responsive layout framework**
- Integrate all front-end pages together

**Phase B**
- Coordinate **project integration**
- Help with **overall database design**
- Maintain shared **header/footer** and common layout
- Organize the **presentation video**
- Collect and prepare final submission materials

---

### Member 2 - `luojingyu`
**Main Responsibility:** Seller Registration

**Phase A**
- Design and implement the **Seller Registration page UI**
- Complete **client-side validation** using **RegEx**

**Phase B**
- Design and maintain the **sellers** table
- Implement **seller registration data insertion**
- Display **successful registration messages**
- Test the complete registration workflow

---

### Member 3 - `juzi`
**Main Responsibility:** Login / Session / Seller Flow

**Phase A**
- Design and implement the **Login page**
- Connect the **seller flow** between related pages

**Phase B**
- Implement **login authentication**
- Manage **session handling**
- Redirect users to the **seller page / add car page** after successful login
- Implement basic **access control**

---

### Member 4 - `taogefei`
**Main Responsibility:** Car Data / Search

**Phase A**
- Design and implement the **Add Car page**
- Design and implement the **Search page**
- Build the **search result display**
- Build the **car detail page**

**Phase B**
- Design and maintain the **cars** table
- Implement **add car data insertion**
- Implement **search function with database queries**
- Connect the **result page** and **detail page** with database data

---

## Collaboration Workflow

This project follows a GitHub collaboration workflow:

- `main` branch: stable and deployable version
- `develop` branch: integration branch
- `feature/*` branches: individual feature development

Each member works on their own feature branch and merges changes into `develop` through pull requests.

---

## Project Features

### Phase A
- Responsive homepage
- Shared navigation and footer shell
- Seller registration form
- Login page
- Add car page
- Search page
- Search result and detail display
- Client-side form validation

### Phase B
- MySQL database for sellers and cars
- Seller registration with database storage
- Login authentication
- Session handling
- Add car with database storage
- Search function with database queries

---

## Notes

- All members contribute through GitHub commits and feature branches.
- Weekly meetings are recorded in the meeting minutes.
- The final project includes both development process evidence and functional demonstration.
