## Project Structure

-   `app/`: Contains all the routes and pages.
    -   `page.tsx`: The main landing page.
    -   `(landings)/black-friday/page.tsx`: An example of a separate landing page. This shows how to reuse components to create different marketing pages.
-   `components/`: Contains all the reusable React components.
    -   `sections/`: Larger page sections like `Hero`, `Features`, `Footer`.
    -   `ui/`: Smaller UI elements like `Button`, `Container`.
-   `hooks/`: Custom React hooks. e.g., `use-pixel.ts` for tracking.
-   `public/`: Static assets like images and fonts.
