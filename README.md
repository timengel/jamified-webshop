![Jamified Webshop](./public/logo_jamified-webshop.png "Jamified Webshop")

# Jamified Webshop

Welcome to the Jamified Webshop - a project to evaluate the capabilities of the Jamstack web
architecture. A more detailed description will follow.

## ToDo List

- **Frontend**
    - [x] <s>Make vertically scrolling product list</s>
        - [ ] Show only 20 products at a time without scrolling
    - [x] <s>Add dynamic product detail pages (fetch data from CMS?)</s>
    - [ ] Add product categories (incl. filter?)
        - Add header/banner for every category (jumbotron style)
        - Add dynamic styling for categories (e.g. different backgrounds)
- **Rendering**
    - [ ] Test different rendering strategies --> Performance
        - Pre-render 20/100 products, load more on scroll
- **Build Process**
    - [x] <s>Deploy App on Vercel</s>
    - [ ] Make use of ISR (+ On-demand builders?) --> Build speed up?
- **Content**
    - [x] <s>Integrate headless CMS --> Difference to conventional CMS (ease of use, performance,
      workflow, etc.)?</s>
    - [ ] Add more dummy data (a lot)
- **Edge Computing**
    - [x] <s>Choose use case(s)
        - Redirects (based on Geolocation --> Different prices, shipping, etc.)
        - Warenkorb Reservierung (in Upstash Item ID für andere locken?)</s>
    - [x] <s>Add Next.js _middleware</s>
    - [x] <s>Deploy as Edge Functions / Cloud workers</s>
- **Third Party APIs**
    - [ ] Choose use cases
        - Authentication? --> Auth0
        - Payments? --> Stripe