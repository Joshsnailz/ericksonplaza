# Erickson Plaza eCommerce

> This is an ecommerce platform for one of the main online stores in Zimbabwe

## Tech Stack

- Framework: `Next.Js 13 App Directory`
- State Container: `Redux Toolkit`
- Styling: `Tailwind CSS`
- Icons: `React Icons`
- Database: `MongoDB`
- ORM: `Mongoose`
- Linting: `ESLint`
- Formatter: `Prettier`
- Work Management: `Asana`
- Backend Directory: `Node.Js Express Server`

## Technologies

| Client                  | Server                    |
| ----------------------- | ------------------------- |
| @reduxjs/toolkit        | bcryptjs                  |
| autoprefixer            | cloudinary                |
| eslint                  | colors                    |
| eslint-config-next      | cors                      |
| next                    | dotenv                    |
| postcss                 | express                   |
| react                   | jsonwebtoken              |
| react-dom               | mongoose                  |
| react-icons             | multer                    |
| react-redux             | multer-storage-cloudinary |
| tailwind-scrollbar-hide | validator                 |
| tailwindcss             | nodemon                   |
| @tailwindcss/forms      |

# Development

## Clone Repository

You can use any package manager like `npm` or `yarn`

```bash
git clone https://github.com/Joshsnailz/ericksonplaza.git
cd ericksonplaza

cd client
yarn install

cd ..

cd server
yarn install
```

## Environment Setup

### Client Side

```bash
NEXT_PUBLIC_BASE_URL="http://localhost:8080/api"
```

### Server Side

```bash
# Port number
PORT=8080

# Origin URL
ORIGIN_URL="http://localhost:3000"

# MongoDB Atlas URI
DB_Name="ericksonplazadb"
ATLAS_URI="YOUR_MONGODB_ATLAS_URI"

# JWT secret
TOKEN_SECRET="JWT_TOKEN"

# Cloudinary credentials
CLOUD_NAME="CLOUDINARY_CLOUD_NAME"
API_KEY="CLOUDINARY_API_KEY"
API_SECRET="CLOUDINARY_API_SECRET"

# Stripe Payment Credentials
STRIPE_PUBLISHABLE_KEY="YOUR_STRIPE_PUBLISHABLE_KEY"
STRIPE_SECRET_KEY="YOUR_STRIPE_SECRET_KEY"
```
