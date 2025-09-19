# Holy Ghost Zone MK - Church Website

A modern, dynamic church website built with Next.js, featuring a comprehensive content management system for church administrators.

## Features

### 🎨 Modern Design
- Dynamic hero section with animated background
- Responsive design optimized for all devices
- Brand-consistent color scheme (Orange #F6A023, Blue #0DA3E6)
- Accessibility-compliant (WCAG AA standards)

### 📅 Event Management
- Featured events display
- Event categories and filtering
- Registration integration ready
- Attendance tracking

### 🎥 Teaching Library
- Video/audio sermon management
- Series organization
- Scripture references
- Speaker profiles

### 🖼️ Gallery System
- Lightbox image viewer
- Category-based filtering
- Responsive grid layout
- Image metadata management

### 📧 Newsletter Integration
- Email subscription system
- API-ready for email services
- Success/error handling
- Privacy-compliant

### 🔧 CMS Integration
- Flexible content structure
- Easy-to-manage data models
- API endpoints for content updates
- Mock data for development

## Content Management

### Adding Events
\`\`\`typescript
// Update lib/cms.ts - mockEvents array
{
  id: "unique-id",
  title: "Event Title",
  description: "Event description",
  date: "2024-01-21",
  time: "9:00 AM",
  location: "Main Sanctuary",
  category: "worship", // worship | youth | outreach | fellowship | special
  image: "/event-image.jpg",
  featured: true // Shows on homepage
}
\`\`\`

### Adding Teachings
\`\`\`typescript
// Update lib/cms.ts - mockTeachings array
{
  id: "unique-id",
  title: "Teaching Title",
  speaker: "Pastor Name",
  description: "Teaching description",
  date: "2024-01-14",
  series: "Series Name",
  videoUrl: "https://youtube.com/watch?v=...",
  thumbnail: "/teaching-thumbnail.jpg",
  scripture: "Bible Reference",
  tags: ["faith", "trust"],
  featured: true
}
\`\`\`

### Updating Church Information
Edit the `mockChurchInfo` object in `lib/cms.ts` to update:
- Contact information
- Service times
- Social media links
- Address details

## Production Setup

### CMS Integration Options
1. **Headless CMS**: Strapi, Contentful, Sanity
2. **Database**: PostgreSQL, MongoDB with Prisma
3. **Email Service**: Mailchimp, ConvertKit, SendGrid

### Environment Variables
\`\`\`env
# Email Service
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_LIST_ID=your_list_id

# CMS (if using Strapi/Contentful)
CMS_API_URL=your_cms_url
CMS_API_TOKEN=your_api_token

# Database (if using direct DB)
DATABASE_URL=your_database_url
\`\`\`

### Deployment
1. Deploy to Vercel for optimal Next.js performance
2. Configure environment variables in Vercel dashboard
3. Set up domain and SSL certificate
4. Configure email service integration

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## File Structure

\`\`\`
├── app/
│   ├── api/subscribe/route.ts    # Newsletter API
│   ├── globals.css               # Global styles & design tokens
│   ├── layout.tsx               # Root layout with fonts
│   └── page.tsx                 # Homepage
├── components/
│   ├── ui/                      # Shadcn UI components
│   ├── header.tsx               # Navigation header
│   ├── hero-section.tsx         # Dynamic hero
│   ├── events-section.tsx       # Events display
│   ├── teachings-section.tsx    # Teachings display
│   ├── gallery-section.tsx      # Photo gallery
│   ├── subscribe-section.tsx    # Newsletter signup
│   └── footer.tsx               # Site footer
├── lib/
│   └── cms.ts                   # Content management system
└── public/
    └── images/                  # Church photos and assets
\`\`\`

## Customization

### Colors
Update design tokens in `app/globals.css`:
\`\`\`css
--primary: 30 100% 56%;     /* Orange #F6A023 */
--secondary: 199 89% 48%;   /* Blue #0DA3E6 */
--accent: 210 40% 15%;      /* Dark slate #0F1724 */
\`\`\`

### Typography
Modify fonts in `app/layout.tsx` and update font variables in `globals.css`.

### Content
All content is managed through `lib/cms.ts`. Update mock data or integrate with your preferred CMS.

## Support

For technical support or customization requests, please contact the development team.

---

Built with ❤️ for the Kingdom of God
