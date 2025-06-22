Here's a detailed list of **all routes** in your premium clothing eCommerce website (JavaScript-based with Next.js 14 + App Router), grouped by **purpose and access level**:

---

# 🌐 Public Routes (For Customers)

| Route                            | Description                                       |
| -------------------------------- | ------------------------------------------------- |
| `/`                              | Homepage – featured products, categories, banners |
| `/products`                      | All products listing                              |
| `/products/[slug]`               | Single product detail page                        |
| `/cart`                          | Customer’s cart                                   |
| `/checkout`                      | Checkout form (COD only)                          |
| `/order-success/[orderId]`       | Order success page after checkout                 |
| `/track-order`                   | Page to input order ID for tracking               |
| `/track-order/[orderId]`         | Track a specific order’s status                   |
| `/login`                         | Login page for admin, affiliates                  |
| `/register`                      | Affiliate registration page (optional)            |
| `/contact`                       | Support contact form (optional)                   |
| `/terms`, `/privacy`, `/returns` | Policy pages (static content)                     |

---

# 🧑 Admin Routes (Admin Panel)

> ✅ Protected via login (JWT/session-based auth)

| Route                       | Description                                         |
| --------------------------- | --------------------------------------------------- |
| `/admin`                    | Admin dashboard overview (orders, users, etc.)      |
| `/admin/orders`             | View/manage all customer orders                     |
| `/admin/products`           | List and manage products                            |
| `/admin/products/new`       | Add new product                                     |
| `/admin/products/[id]/edit` | Edit existing product                               |
| `/admin/affiliates`         | Manage affiliate users                              |
| `/admin/settings`           | Admin settings (e.g., contact number, support info) |
| `/admin/login`              | Admin login (can redirect to `/login`)              |

---

# 🤝 Affiliate Routes (Affiliate Dashboard)

> ✅ Also protected (affiliates only)

| Route                       | Description                               |
| --------------------------- | ----------------------------------------- |
| `/affiliate`                | Affiliate dashboard home                  |
| `/affiliate/orders`         | Orders made via their referral code       |
| `/affiliate/payouts`        | Track affiliate earnings & payout history |
| `/affiliate/referral-tools` | Get referral link, QR code, banners       |
| `/affiliate/profile`        | Update affiliate profile info             |

---

# ⚙️ API Routes (via `/app/api` or `pages/api`)

If you use Next.js API routes (inside `app/api` or `pages/api`), typical API endpoints include:

| Method   | Endpoint               | Purpose                  |
| -------- | ---------------------- | ------------------------ |
| `POST`   | `/api/login`           | Login (admin/affiliate)  |
| `POST`   | `/api/checkout`        | Place a COD order        |
| `GET`    | `/api/order/[orderId]` | Get order details        |
| `POST`   | `/api/products`        | Add product (admin)      |
| `PUT`    | `/api/products/[id]`   | Edit product             |
| `DELETE` | `/api/products/[id]`   | Delete product           |
| `GET`    | `/api/affiliates`      | List affiliates (admin)  |
| `POST`   | `/api/payouts`         | Handle affiliate payouts |

---

# 🔐 Auth-Only Middleware Suggestions

Add route protection middleware for:

* `/admin/**` → only for admins
* `/affiliate/**` → only for affiliate users
* `/checkout` → require login or anonymous session (optional)

---

## ✅ Summary of Route Categories

| Type          | Example Routes                                              |
| ------------- | ----------------------------------------------------------- |
| **Public**    | `/`, `/products`, `/checkout`, `/track-order`, `/login`     |
| **Admin**     | `/admin/orders`, `/admin/products/new`, `/admin/affiliates` |
| **Affiliate** | `/affiliate`, `/affiliate/orders`, `/affiliate/payouts`     |
| **API**       | `/api/checkout`, `/api/products`, `/api/login`, etc.        |
| **Static**    | `/terms`, `/privacy`, `/returns`                            |

---

Would you like me to now generate **pages and folders** for these routes or start with **MongoDB models + DB setup**?

Let’s proceed as you prefer.
