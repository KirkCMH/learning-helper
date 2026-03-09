This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- src/app/api/**：Route Handlers（thin controller）

- src/server/services：商業邏輯（use-cases）

- src/server/repos：資料存取（SQL/DB）

- src/shared/validators：zod schema（前後端共用）

- src/lib：共用工具（例如 supabase client 工廠）
