![Jamified Webshop](./public/logo/logo_jamified-webshop.png "Jamified Webshop")

# Jamified Webshop

Welcome to the Jamified Webshop - a project to evaluate the capabilities of the Jamstack web
architecture. A more detailed description will follow.

## ToDo List

- **Frontend**
    - [ ] Make vertically scrolling product list
        - Show only 20 products at a time without scrolling
    - [ ] Add dynamic product detail pages (fetch data from CMS?)
    - [ ] Add product categories (incl. filter?)
        - Add header/banner for every category (jumbotron style)
        - Add dynamic styling for categories (e.g. different backgrounds)
- **Rendering**
    - [ ] Test different rendering strategies --> Performance
        - Pre-render 20/100 products, load more on scroll
- **Build Process**
    - [ ] Deploy App on Vercel
    - [ ] Make use of ISR (+ On-demand builders?) --> Build speed up?
- **Content**
    - [ ] Integrate headless CMS --> Difference to conventional CMS (ease of use, performance,
      workflow, etc.)?
    - [ ] Add more dummy data (a lot)
- **Edge Computing**
    - [ ] Choose use case(s)
        - Redirects (based on Geolocation --> Different prices, shipping, etc.)
    - [ ] Add Next.js _middleware
    - [ ] Deploy as Edge Functions / Cloud workers
- **Third Party APIs**
    - [ ] Choose use cases
        - Authentication? --> Auth0
        - Payments? --> Stripe