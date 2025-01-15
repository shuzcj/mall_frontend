In platforms like **Shopee** or **Taobao**, it is difficult to say with certainty how they manage tokens internally, but large-scale applications typically follow best practices for **authentication and security**. They usually use a combination of **short-lived tokens** (like JWT for access tokens) and **refresh tokens** to maintain a secure and seamless login experience for the user.

To address your assumptions and questions, let's break it down step by step:

---

## **1. Is the JWT Token Stored in Local Storage?**

### **Yes, it could be stored in `localStorage` or `sessionStorage`.**
- Many SPAs (Single Page Applications) like Shopee or Taobao store JWT tokens in `localStorage` to persist authentication and enable seamless page reloads without requiring the user to log in again.
- However, some systems might also store **refresh tokens** in `HttpOnly` cookies (to prevent XSS attacks) while using short-lived JWTs for API access.

---

### **Storage Mechanisms Pros and Cons:**

1. **`localStorage`** (Most common in SPAs):
    - **Pros**:
        - Persistent across browser tabs and sessions.
        - Easy to use in frontend applications to attach tokens to API headers.
    - **Cons**:
        - Vulnerable to **XSS (Cross-Site Scripting)** attacks. If an attacker injects malicious code into the app, they can read the token and impersonate the user.

2. **`HttpOnly` Cookies** (Best for security):
    - **Pros**:
        - Secure against XSS since JavaScript cannot access `HttpOnly` cookies.
        - Easier to manage tokens server-side with proper expiration and CSRF mitigation (`SameSite` cookie settings).
    - **Cons**:
        - Harder to manage in SPAs because cookies are automatically sent with requests, requiring additional CSRF protection.
        - Non-trivial to implement seamless token refresh logic in frontend applications.

---

## **2. Should the Frontend Token Expiration Match the Backend?**

### Yes, the frontend should align with the backend expiration time.

For example:
- If the **JWT token** expires after **1 hour** on the backend, you should set the **same expiration time** in the frontend.
- This ensures the frontend knows when the token becomes invalid and can prompt the user to re-authenticate or silently refresh the token.

#### **How to Handle Expiration in the Frontend?**
1. **Store the Expiry Timestamp**:
    - When the frontend receives the token, it should decode the JWT (which contains the expiration time in the `exp` claim) and store the timestamp in `localStorage` or React state.

   Example:
   ```javascript
   const token = 'eyJhbGciOiJI...'; // JWT token
   const decodedToken = JSON.parse(atob(token.split('.')[1]));
   const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
   localStorage.setItem('token', token);
   localStorage.setItem('token_expiration', expirationTime);
   ```

2. **Check Expiration on Page Load**:
    - Every time the app initializes (e.g., when the user opens a page), check whether the token has expired:
   ```javascript
   const token = localStorage.getItem('token');
   const tokenExpiration = localStorage.getItem('token_expiration');

   if (!token || Date.now() > tokenExpiration) {
       console.log('Token expired. Redirecting to login...');
       // Redirect to login page or refresh token
   } else {
       console.log('Token is valid. Proceed to load the app.');
   }
   ```

3. **Silent Token Refresh**:
    - If you’re using **refresh tokens**, you can implement logic to silently request a new access token before the current one expires. For example:
        - When the token is close to expiring (e.g., 5 minutes before expiration), send a request to the backend to refresh the token.
        - Replace the token in `localStorage` with the new one.

   Example:
   ```javascript
   const refreshToken = async () => {
       const response = await fetch('/auth/refresh-token', { method: 'POST' });
       const newToken = await response.json();
       localStorage.setItem('token', newToken.token);
       localStorage.setItem('token_expiration', newToken.exp * 1000);
   };

   const scheduleTokenRefresh = () => {
       const tokenExpiration = localStorage.getItem('token_expiration');
       const timeUntilRefresh = tokenExpiration - Date.now() - 5 * 60 * 1000; // 5 minutes before expiration

       setTimeout(() => {
           refreshToken();
       }, timeUntilRefresh);
   };

   scheduleTokenRefresh();
   ```

---

## **3. Does the App Always Check Local Storage on Page Load?**

### Yes, on page load, most SPAs will check localStorage (or cookies) for the token.

- When you open a page, the app will:
    1. Check if a token exists in `localStorage` or `cookies`.
    2. Verify if the token is expired (based on the `exp` claim).
    3. If valid, use the token to authenticate API requests.
    4. If invalid, redirect to the login page or silently refresh the token.

---

## **4. Will This Be Safe from CSRF and XSS Attacks?**

### **CSRF Protection**
Storing JWT tokens in `localStorage` is inherently safe from CSRF because:
- CSRF relies on automatically attaching cookies to requests.
- Tokens in `localStorage` are manually added to API headers (e.g., `Authorization: Bearer <token>`), so an attacker cannot forge requests without access to the token.

---

### **XSS Protection**
Storing tokens in `localStorage` exposes them to **XSS attacks** if the app is vulnerable to JavaScript injection. To protect against XSS:

1. **Sanitize Inputs**:
    - Ensure all user inputs are sanitized and validated on both the frontend and backend.

2. **Content Security Policy (CSP)**:
    - Implement a **CSP header** to restrict JavaScript sources and prevent inline scripts.
   ```http
   Content-Security-Policy: default-src 'self'; script-src 'self';
   ```

3. **Short-Lived Tokens with Refresh Tokens**:
    - Use short-lived access tokens (e.g., 15 minutes) and refresh tokens stored in `HttpOnly` cookies.
    - Even if an XSS attack occurs, the short-lived token limits the damage.

---

## **Example Workflow for Persistent Login**

Here’s an example of how Shopee or Taobao might implement persistent login:

1. **Login Flow**:
    - The user logs in, and the backend issues:
        - A **JWT access token** (expires in 1 hour).
        - A **refresh token** (stored in an `HttpOnly` cookie, expires in 7 days).

2. **Frontend Token Management**:
    - The access token is stored in `localStorage` or `sessionStorage`.
    - The frontend decodes the token and stores the expiration time.
    - On page load:
        - If the token is valid, proceed to use it for API requests.
        - If the token is expired but the refresh token exists, silently request a new token.

3. **Silent Token Refresh**:
    - Before the token expires, the app makes a request to `/auth/refresh-token` using the refresh token stored in the `HttpOnly` cookie.

4. **Logout**:
    - When the user logs out, both the access token (in `localStorage`) and the refresh token (in cookies) are cleared.

---

## **Summary**
- **Shopee or Taobao** likely uses a combination of **localStorage** for short-term JWTs and **HttpOnly cookies** for refresh tokens to enable persistent login.
- If the backend sets a 1-hour expiration for the token, the frontend must respect the same expiration and check the token's validity on page load.
- **Security Risks**:
    - Tokens in `localStorage` are safe from **CSRF** but vulnerable to **XSS**.
    - Use measures like **CSP**, input sanitization, and short-lived tokens with refresh mechanisms to mitigate these risks.
- For a robust implementation, consider:
    - **Short-lived tokens (e.g., 15 minutes)** stored in memory or `localStorage`.
    - **Refresh tokens** stored in `HttpOnly` cookies for seamless reauthentication.