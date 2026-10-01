# CI Setup & Token Scope Resolution Guide (`gym-os-v3`)

**Goal:** Complete Phase 1 Audit Finding F-09 (CI setup for `somilsharma2000/gym-os-v3`).  
**Status:** Branch `ci/setup` created with `docs/ci-pending.md` pushed to remote. Local clone in `/tmp/w3-v3` contains the complete `.github/workflows/ci.yml` workflow file, validated syntax and local execution.

---

## Executive Summary & Findings

1. **Local Verification Results:**
   - **Node Version:** Node 20 LTS (Next.js 16 requires Node 20+).
   - **Linter (`npm run lint` / `eslint .`):** Clean (0 errors, 0 warnings).
   - **Test Suite (`npx vitest run`):** 201 tests across 26 test files exist.
     - Pure unit tests (auth, scrypt, RBAC, rate limiting, state transitions, schema) run and pass locally.
     - Database integration tests hit Neon Postgres via `DATABASE_URL` / `NEON_DATABASE_URL`. Without `DATABASE_URL` set, DB queries fail with connection refused to placeholder host.
   - **Build Command:** `npm run build` (`next build`).
   - **Dependencies:** Installed cleanly via `npm ci`.

2. **GitHub Push Restriction Encountered:**
   Attempting to push `.github/workflows/ci.yml` to remote via `git push origin ci/setup` produced the expected OAuth scope rejection from GitHub:
   ```text
   ! [remote rejected] ci/setup -> ci/setup (refusing to allow an OAuth App to create or update workflow `.github/workflows/ci.yml` without `workflow` scope)
   error: failed to push some refs to 'https://github.com/somilsharma2000/gym-os-v3.git'
   ```

3. **Remote Documentation Pushed:**
   `docs/ci-pending.md` has been pushed to `origin/ci/setup` on GitHub so all details and instructions are accessible directly in the repository web interface.

---

## Option A: 30-Second Web UI Setup (Recommended Instant Fix)

Follow these exact steps to activate CI in under 30 seconds:

1. **Navigate to the Repository on GitHub:**  
   [https://github.com/somilsharma2000/gym-os-v3](https://github.com/somilsharma2000/gym-os-v3)

2. **Switch to Branch `ci/setup`:**  
   Click the branch dropdown (currently on `main`) and select `ci/setup`.

3. **Create the Workflow File:**  
   - Click **Add file** -> **Create new file**.  
   - In the filename box, enter exactly: `.github/workflows/ci.yml`  
     *(GitHub will automatically create `.github` and `workflows` directories).*

4. **Paste Workflow Configuration:**  
   Copy and paste the following content into the editor:

   ```yaml
   name: CI

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-test:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout repository
           uses: actions/checkout@v4

         - name: Set up Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Run linter
           run: npm run lint

         - name: Run tests
           run: npx vitest run
   ```

5. **Commit and Merge:**  
   - Click **Commit changes...**  
   - Select **Commit directly to the `ci/setup` branch**.  
   - Click **Compare & pull request** to merge `ci/setup` into `main`.

---

## Option B: Fine-Grained PAT with `workflow` Scope (Permanent Agent Token Fix)

If you want the agent to automatically manage workflow files across estate repositories without web UI copy-pasting in the future:

1. **Go to GitHub Personal Access Tokens Settings:**  
   [https://github.com/settings/tokens](https://github.com/settings/tokens)

2. **Generate Token:**  
   - **Classic PAT:** Select `repo` AND `workflow` scopes.  
   - **Fine-Grained PAT:** Select repository `somilsharma2000/gym-os-v3` (and estate repos), under **Repository permissions** grant:
     - **Workflows**: `Read and write`
     - **Contents**: `Read and write`

3. **Provide Token to Agent / Workspace Configuration:**  
   Replace the agent's GitHub token so future workflow commits push automatically.

---

## Optional: Configuring Database Secrets for Integration Tests

To allow full end-to-end database integration tests to run in GitHub Actions:
1. Open **Settings** -> **Secrets and variables** -> **Actions** in the repo:  
   `https://github.com/somilsharma2000/gym-os-v3/settings/secrets/actions`
2. Add a repository secret named `DATABASE_URL` (or `NEON_DATABASE_URL`) containing a Neon Postgres connection string.
