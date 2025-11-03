import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
function initAdmin() {
  if (admin.apps.length > 0) {
    return admin.apps[0];
  }

  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: privateKey,
    }),
  });
}

// Initialize
const app = initAdmin();

// Export commonly used services
export const adminAuth = admin.auth(app);
export const adminDb = admin.firestore(app);
export const adminStorage = admin.storage(app);

export default app;

