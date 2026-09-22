import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { handleSarvamProxy } from './lib/sarvamProxy';

function sarvamApiDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'sarvam-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/sarvam', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        let body: unknown = {};
        if (req.method === 'POST') {
          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
          }
          const raw = Buffer.concat(chunks).toString('utf8');
          try {
            body = raw ? JSON.parse(raw) : {};
          } catch {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Invalid JSON body' }));
            return;
          }
        }

        Object.assign(process.env, {
          SARVAM_API_KEY: env.SARVAM_API_KEY || process.env.SARVAM_API_KEY,
          ALLOWED_ORIGINS: env.ALLOWED_ORIGINS || process.env.ALLOWED_ORIGINS,
          APP_URL: env.APP_URL || process.env.APP_URL,
        });

        const result = await handleSarvamProxy({
          method: req.method || 'GET',
          body,
          origin: req.headers.origin,
          referer: req.headers.referer,
        });

        res.statusCode = result.status;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result.body));
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), sarvamApiDevPlugin(env)],
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
