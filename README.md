# Viva Dentistry Website

A modern, responsive website for Viva Dentistry built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark/light mode toggle
- Smooth scrolling and animations
- Interactive service cards
- Testimonials carousel
- Before/after gallery
- Contact form
- FAQ section

## Technologies Used

- **Next.js 14**: React framework with server-side rendering
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **Next Themes**: Dark mode implementation

## Deployment on Vercel

This project is optimized for deployment on Vercel. Follow these steps to deploy:

1. **Push your code to GitHub**:
   ```
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Import your project on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project" and import your GitHub repository
   - Select the "Next.js" framework preset
   - Keep the default build settings
   - Click "Deploy"

3. **Environment Variables**:
   - No environment variables are required for basic deployment

4. **Custom Domain**:
   - After deployment, go to "Settings" > "Domains"
   - Add your custom domain and follow the verification steps

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: Reusable React components
- `/src/styles`: Global styles
- `/public`: Static assets (images, favicon)

## Performance Optimizations

- Images are optimized using Next.js Image component
- Tailwind CSS is purged in production
- Code splitting for smaller bundle sizes
- Static generation for faster page loads
- Proper caching headers for static assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

---

Created for Viva Dentistry by Dr. Amin Yeganeh