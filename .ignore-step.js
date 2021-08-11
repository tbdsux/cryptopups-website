const { VERCEL_GIT_COMMIT_MESSAGE } = process.env;

// ignore deploys or build with `[skip-build]` in commit messages
if (VERCEL_GIT_COMMIT_MESSAGE.includes('[skip-build]')) {
  process.exit(0);
}

process.exit(1);
