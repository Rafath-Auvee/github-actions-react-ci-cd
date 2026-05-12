# GitHub Actions React CI/CD — Module 5 Assignment

A React + Vite application with a fully automated CI pipeline using GitHub Actions and a self-hosted runner.

---

## Live Repository

[https://github.com/Rafath-Auvee/github-actions-react-ci-cd](https://github.com/Rafath-Auvee/github-actions-react-ci-cd)

---

## Project Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── src/
│   ├── App.jsx             # Main React component
│   ├── App.css             # Component styles
│   └── index.css           # Global styles + CSS variables
├── public/
├── Screenshots/            # Pipeline execution screenshots
├── index.html
├── package.json
├── vite.config.js
└── task.md                 # Assignment brief
```

---

## CI/CD Pipeline

The pipeline triggers automatically on every push to the `development` branch and runs on a self-hosted runner.

### Workflow File — `.github/workflows/ci.yml`

```yaml
name: React CI Pipeline

on:
  push:
    branches:
      - development

jobs:
  build:
    runs-on: self-hosted

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build React app
        run: npm run build
```

---

## Screenshots

### Self-Hosted Runner Registered
![Self Hosted Runner](Screenshots/Self%20Hosted%20Runner.png)

### All Pipeline Runs
![All Runs](Screenshots/All%20Runs.png)

### Failed Pipeline Run
![Failed Pipeline](Screenshots/Failed%20Pipeline.png)

### Successful Pipeline Run
![Success Pipeline](Screenshots/Success%20Pipeline.png)

### Runner Listed on GitHub
![Runner Github Listed](Screenshots/Runner%20Github%20Listed.png)

---

## Concepts Explained

### What is CI/CD?

CI (Continuous Integration) is the practice of automatically testing and building code every time a developer pushes changes to a repository. CD (Continuous Delivery/Deployment) extends this by automatically deploying the built application to a target environment. Together, CI/CD eliminates manual build and deployment steps, reduces human errors, and speeds up the software delivery process.

### What is a Self-Hosted Runner?

A self-hosted runner is your own machine registered with GitHub to execute GitHub Actions pipeline jobs. Instead of using GitHub's cloud-based servers, the jobs run on local hardware — in this case `DESKTOP-145Q014` (Windows x64). This gives full control over the environment, installed software, and available resources. It is useful when pipelines need access to local services, specific hardware, or private network resources.

### How the Workflow Executes

1. A developer pushes code to the `development` branch
2. GitHub detects the push event and reads `.github/workflows/ci.yml`
3. GitHub sends the job to the registered self-hosted runner (`DESKTOP-145Q014`)
4. The runner executes each step in order:
   - **Checkout code** — clones the repository onto the runner
   - **Set up Node.js** — installs Node.js v20
   - **Install dependencies** — runs `npm install`
   - **Build React app** — runs `npm run build`, producing the `dist/` folder
5. GitHub reports the result (success or failure) in the Actions tab

---

## Pipeline Debugging — Failures Encountered

### Run #1 — Deprecated Node.js in Actions
- **Cause:** `actions/checkout@v3` and `actions/setup-node@v3` used deprecated Node.js 20 runtime internally
- **Fix:** Upgraded both actions to `@v4`

### Run #2 — Node.js Version Mismatch
- **Cause:** Workflow specified Node.js 18, but Vite 8 requires Node.js 20.19+
- **Error:** `ReferenceError: CustomEvent is not defined` at Node.js v18.20.8
- **Fix:** Changed `node-version: '18'` to `node-version: '20'` in the workflow

### Run #3 — Success
- All steps passed in 1 minute 15 seconds

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```
