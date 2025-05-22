## Front-End Test Task Submission

This is my submission for the Front-End Test Task:

[Live link](https://front-end-test-task-henna.vercel.app)

[Video demo](https://www.loom.com/share/2824845579374dbabc67c3c733fae701?sid=960661e8-84c0-49e4-bae3-c45c4e04bb80)

### Notable Technical Implementation
- Use of TanStack Query and React context to manage global state: Handle product filtering and user authentication
- A modal system for authentication prompts

### User Flow
1. Users can browse through the available products in the catalog
2. Each product displays its details including price and description
3. **Important**: When attempting to make a purchase without being connected:
   - A modal automatically appears
   - The modal informs the user that they need to connect/login
   - This simulates a realistic user experience similar to actual real-world usage.


### Tech Stack

Use this stack (already included in the repo):

- **Next.js** (App Router)
- **Tailwind CSS**
- **pnpm**
- **TanStack Query**
- **TypeScript**
- **ethers v6**
- **TypeChain**

### Objectives

The main objective is to build a responsive, well-documented, and maintainable products page.

Below are step-by-step instructions to complete the objective.

1. Create `/src/hooks/products/useProducts.ts` and use TanStack Query to fetch product data from `/api/products`.
2. Use the hook you've created in step 1 to load the products on the home page. Handle loading and error states.
3. Create `/src/services/web3/contracts`, connect the USDC factory from TypeChain to the provider and the USDC address in `/src/constants/addresses.ts`, and export it.
4. Create `/src/hooks/web3/useUsdcDecimals.ts` and use TanStack Query with the contract you've created in step 3 to get the number of decimals that the USDC token has.
5. Use the hook you've created in step 2 to get the USDC decimals on the home page. Handle loading and error states.
6. Define `processedProducts` on the home page. The items of this array should have their prices parsed to USDC using ethers and the decimals and be sorted by price low to high.
7. Create `/src/components/core/itemCard.tsx` that returns an item card component that displays the item image, name, and price, and has a buy button that `console.log`s the item when clicked.
8. Display the products in a grid layout on the home page.
9. Create `/src/hooks/web3/useUserBalance.ts` and use TanStack Query with the contract you've created in step 3 to get the amount of USDC that the user wallet address in `/src/constants/addresses.ts` has.
10. Define `processedUsdcBalance` on the home page. This value should have the USDC balance parsed to USDC using ethers and the decimals.
11. Display the user's balance on the home page.
12. Disable the buy buttons on the items that the user cannot afford.

### Rules

- Do not install any new packages such as Axios.
- The project must be able to build successfully using `pnpm build`.
- The page must be responsive for desktop, mobile, and tablets.
- The page must follow the Figma design.
- The parts of code that could be confusing must be explained using comments.
- The code must be formatted with Prettier.
- The code must be type-safe and not use `any` or casting to `unknown`.
