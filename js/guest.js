import { inject } from '@vercel/analytics';
import { guest } from './app/guest/guest.js';

// Initialize Vercel Web Analytics
inject();

((w) => {
    w.undangan = guest.init();
})(window);