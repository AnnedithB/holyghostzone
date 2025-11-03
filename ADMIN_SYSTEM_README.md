# Admin System Documentation

## Overview

A secure Firebase-based authentication system has been implemented for the Holy Ghost Zone RCCG website. The admin panel is accessible at `/admin` and provides a foundation for future content management features.

## Features Implemented

### 1. Authentication System
- **Login Page**: Located at `/admin`
- **Email/Password Authentication**: Using Firebase Authentication
- **Protected Routes**: Admin dashboard requires authentication
- **Persistent Sessions**: Authentication state persists across page reloads
- **Secure Logout**: Clean session termination

### 2. Admin Dashboard
- **Welcome Page**: Located at `/admin/dashboard`
- **User Information Display**: Shows logged-in admin email
- **Feature Preview Cards**: Displays upcoming content management features
- **Clean UI**: No rounded borders as specified

### 3. Design Specifications
- ✅ No rounded borders on any UI components
- ✅ Clean, modern design
- ✅ Responsive layout
- ✅ Loading states during authentication checks
- ✅ Error handling for login failures

## File Structure

```
├── .env.local                          # Firebase credentials (DO NOT COMMIT)
├── lib/
│   ├── firebase.ts                     # Firebase initialization
│   └── auth-context.tsx                # Authentication context & hooks
├── components/
│   ├── protected-route.tsx             # Route protection component
│   └── ui/
│       ├── button.tsx                  # Updated with no rounded borders
│       └── input.tsx                   # Updated with no rounded borders
├── app/
│   ├── layout.tsx                      # Updated with AuthProvider
│   └── admin/
│       ├── page.tsx                    # Admin login page
│       └── dashboard/
│           ├── layout.tsx              # Protected route wrapper
│           └── page.tsx                # Admin dashboard page
```

## Environment Setup

Your `.env.local` file should contain the following Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=holyghostzonerccg.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=holyghostzonerccg
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=holyghostzonerccg.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

**Note**: The `.env.local` file is automatically ignored by Git.

## Usage

### Accessing the Admin Panel

1. Navigate to `/admin` in your browser
2. Enter your admin email and password
3. Click "Sign In"
4. You'll be redirected to `/admin/dashboard` upon successful authentication

### Admin Account Management

Currently, admin accounts must be created manually through the Firebase Console:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `holyghostzonerccg`
3. Navigate to **Authentication** > **Users**
4. Click **Add User**
5. Enter email and password
6. Save

### Using Authentication in Your Code

The authentication system is available throughout the app via the `useAuth` hook:

```tsx
import { useAuth } from '@/lib/auth-context';

function YourComponent() {
  const { user, loading, signIn, signOut } = useAuth();
  
  // user: Current authenticated user or null
  // loading: Boolean indicating auth state check
  // signIn: Function to authenticate
  // signOut: Function to log out
}
```

### Protected Routes

To protect any page, wrap it with the `ProtectedRoute` component:

```tsx
import ProtectedRoute from '@/components/protected-route';

export default function YourProtectedPage() {
  return (
    <ProtectedRoute>
      {/* Your protected content */}
    </ProtectedRoute>
  );
}
```

## Security Considerations

1. **Hidden Access**: The admin panel is not linked from the public website
2. **No Public Registration**: Users cannot self-register
3. **Firebase Security**: All authentication is handled securely by Firebase
4. **Environment Variables**: Sensitive credentials are stored in `.env.local`
5. **Protected Routes**: Unauthenticated users are automatically redirected

## Next Steps / Upcoming Features

The dashboard currently shows preview cards for these future features:

### 1. Events Management
- Add new church events
- Edit existing events
- Control event visibility
- Upload event images

### 2. Teachings Management
- Upload sermon recordings
- Add written teachings
- Organize study materials
- Manage media files

### 3. Gallery Management
- Upload photos
- Create albums
- Organize images
- Manage gallery sections

### 4. Page Content Management
- Edit page text
- Update images
- Manage all website sections
- Live preview changes

### 5. Subscriber Management
- View newsletter subscribers
- Export subscriber list
- Manage communications
- Send newsletters

### 6. Admin Management (In-App)
- Add new administrators
- Remove admin access
- Manage permissions
- View admin activity

## Firebase Configuration

### Current Setup
- **Project**: holyghostzonerccg
- **Authentication Method**: Email/Password
- **Database**: Firestore (ready to use)
- **Storage**: Firebase Storage (ready to use)

### Firebase Console Access
[Firebase Console](https://console.firebase.google.com/project/holyghostzonerccg)

## Troubleshooting

### "Invalid email or password" error
- Verify the email exists in Firebase Authentication
- Check that the password is correct
- Ensure the account is enabled in Firebase Console

### "Too many failed attempts" error
- Firebase temporarily blocks the IP after multiple failed login attempts
- Wait 15-30 minutes before trying again
- Or reset the password through Firebase Console

### Page redirects immediately after login
- Check browser console for errors
- Verify all Firebase credentials in `.env.local`
- Ensure Firebase project has Authentication enabled

### Changes not reflecting
- Clear browser cache
- Restart the development server: `npm run dev`
- Check for any console errors

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for linting errors
npm run lint
```

## Support

For issues or questions regarding the admin system:
1. Check Firebase Console for authentication issues
2. Review browser console for client-side errors
3. Verify environment variables are correctly set
4. Ensure Firebase services are enabled in your project

---

**Version**: 1.0.0  
**Last Updated**: October 19, 2025  
**Status**: ✅ Fully Implemented & Ready to Use

