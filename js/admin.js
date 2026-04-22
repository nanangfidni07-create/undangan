import { inject } from '@vercel/analytics';
import { admin } from './app/admin/admin.js';

// Initialize Vercel Web Analytics
inject();

((w) => {
    w.undangan = admin.init();
})(window);