<div align="center">

<a href="https://github.com/SalmanDeveloperz">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=2EC4B6&center=true&vCenter=true&width=650&lines=Muhammad+Salman;GSoC+2025+%40+FOSSology;Linux+Foundation+LiFT+%40+2025;Fixes+pipelines+nobody+wants+to+touch;Kubernetes.+Jenkins.+OpenTelemetry." alt="typing banner" />
</a>

<!-- <img src="https://komarev.com/ghpvc/?username=SalmanDeveloperz&label=Profile%20Views&color=2EC4B6&style=flat" /> -->

</div>

## About Me

I'm a Software Engineer based in Pakistan. Google Summer of Code 2025 Contributor at FOSSology, Linux Foundation LiFT Scholar 2025, and someone who spends more time in other people's repositories than my own.

I go looking for the boring bugs. Docker builds that use Make when they should use CMake. Config files that need env var substitution and nobody wanted to write it. . Dropdown menus that don't scroll right on keyboard input. That's the work that keeps large open source projects alive, and it's the work I actually enjoy.

Right now I build full stack apps with React and Node, and I break/fix infrastructure with Kubernetes, Docker and Jenkins. Open to Software Engineer, Full Stack and DevOps roles.

## 🌍 Work and Open Source Contributions

### <img src="https://github.com/user-attachments/assets/d229a3cb-6031-4c9d-afd2-9d459382f6de" width="24" alt="Jenkins"> Jenkins (`jenkinsci`, `jenkins-infra`)

**Pull Requests**
- Fixed keyboard navigation scrolling in dropdowns, off screen items were losing visual feedback during arrow key navigation. [PR #26358](https://github.com/jenkinsci/jenkins/pull/26358), reported the bug myself in [#26357](https://github.com/jenkinsci/jenkins/issues/26357)
- Fixed keyboard navigation for the theme picker using event delegation on dynamically inserted elements. [PR #350](https://github.com/jenkinsci/theme-manager-plugin/pull/350), requested directly by the plugin maintainer
- Fixed a broken GitHub profile link on jenkins.io after confirming with the affected contributors. [PR #8629](https://github.com/jenkins-infra/jenkins.io/pull/8629)
- Fixed search bar placeholder selection so double clicking no longer blocks input. [PR #26418](https://github.com/jenkinsci/jenkins/pull/26418), reported in [#26390](https://github.com/jenkinsci/jenkins/issues/26390)
- Added ARIA roles for screen reader support on dropdown menus. [PR #26321](https://github.com/jenkinsci/jenkins/pull/26321)
- Added opt in environment variable substitution for containerized Jenkins deployments. [PR #2250](https://github.com/jenkinsci/docker/pull/2250), an issue that had sat open since 2017
- Brought the same env var substitution to Windows containers: `Invoke-EnvVarSubstitution` for `.xml`, `.conf`, `.properties` and `.groovy` files, with 3 new Pester tests. [PR #2365](https://github.com/jenkinsci/docker/pull/2365)

**Issues Opened**
- [ #26357 ](https://github.com/jenkinsci/jenkins/issues/26357) Dropdown keyboard navigation bug, with video reproduction → fixed in PR [ #26358](https://github.com/jenkinsci/jenkins/pull/26358)
- [ #26389 ](https://github.com/jenkinsci/jenkins/issues/26389) Search bar placeholder selection issue → fixed in PR[ #26418](https://github.com/jenkinsci/jenkins/pull/26418)
- [ #26390 ](https://github.com/jenkinsci/jenkins/issues/26390) Breadcrumb dropdown bug, code review provided → fixed in PR[#26391](https://github.com/jenkinsci/jenkins/pull/26391)
- [ #2350 ](https://github.com/jenkinsci/docker/issues/2350) Windows parity for env var substitution → fixed in PR[ #2365](https://github.com/jenkinsci/docker/pull/2365)

<details>
<summary><strong>Discussions & Code Reviews<strong></summary>
  
- [Matrix community accessibility support thread](https://matrix.to/#/!pMDTuapUyVPztBFZJr:g4v.dev/$xP9OG6CPMMqEnvLz4_GdvUKoPfxrAR6DLqfrvyO8kHo)
- [jenkins-infra/plugin-site-api #107](https://github.com/jenkins-infra/plugin-site-api/issues/107)
- [Code review on jenkinsci/jenkins PR #26391](https://github.com/jenkinsci/jenkins/pull/26391#discussion_r2885522600)
- [theme-manager-plugin #354 discussion](https://github.com/jenkinsci/theme-manager-plugin/issues/354#issuecomment-3999501777)
- [Jenkins Community—GSoC 2026 OpenTelemetry scaling strategies](https://community.jenkins.io/t/gsoc-2026-opentelemetry-scaling-strategies/36647/3?u=salmandeveloperz)
  
</details>

**Full history:** [search: author:SalmanDeveloperz org:jenkinsci](https://github.com/search?q=author%3ASalmanDeveloperz+org%3Ajenkinsci)

---
### <img src="https://github.com/user-attachments/assets/d80f7ad4-cfdc-4663-a09e-fb595484ef24" alt="Party FOSSology" height="30" valign="middle"> FOSSology, Google Summer of Code 2025

I spent a summer building a complete microservices infrastructure for FOSSology: scheduler, database and agent components running in Docker and Kubernetes. It taught me distributed systems and configuration management, but mostly it taught me what happens when you don't have observability. I spent whole afternoons manually correlating logs across containers trying to figure out why the scheduler kept crashing. That pain is the reason I later built PoS-OTel.

- 📓 Weekly Reports: [fossology.github.io/gsoc/docs/2025/microservices-infrastructure](https://fossology.github.io/gsoc/docs/2025/microservices-infrastructure/)
- 💻 Repo: [github.com/SalmanDeveloperz/GSoC-2025](https://github.com/SalmanDeveloperz/GSoC-2025)
- 📄 Final Report: [summerofcode.withgoogle.com/archive/2025](https://summerofcode.withgoogle.com/archive/2025/projects/MjOyiOj7)
- 🚀 Working branch: [`OmarAbdelSamea/GSoC/Microservices`](https://github.com/SalmanDeveloperz/fossology/tree/OmarAbdelSamea/GSoC/Microservices)

Key commits on that branch:
- `feat(core)`: Microservices infrastructure project GSoC 2025 · [1af934a](https://github.com/SalmanDeveloperz/fossology/commit/1af934a48c449a2aacdb3bdec285a79534488db4) · Jun 26, 2025
- `fix(scheduler)`: resolved CrashLoopBackOff issue and updated web deployment causing connectivity issue · [440f907](https://github.com/SalmanDeveloperz/fossology) · Jul 2, 2025
- `build(Microservices)`: migrate from Make to CMake, update deps, added missing agent dockerfiles/deployment, aligned with master · [4fd4787](https://github.com/SalmanDeveloperz/fossology/commit/4fd4787936081c0c8db7df8e40d57e76e123a51a) · Aug 26, 2025

**Selected Contributions** ( [22 PRs total →](https://github.com/search?q=author%3ASalmanDeveloperz+org%3Afossology&type=pullrequests) )
- `fix`: excluded invalid characters from the URL regex in the copyright agent. PR[ #3212](https://github.com/fossology/fossology/pull/3212)
- `fix(agent-tests)`: modernized PHPUnit tests for the CMake migration. PR[ #3037](https://github.com/fossology/fossology/pull/3037)
- `feat(debug)`: enabled more debugging logs for version control commands. PR[ #2958](https://github.com/fossology/fossology/pull/2958)
- `fix`: excluded URLs and email addresses in example domains and specific TLDs from false positive matches. PR[ #2955](https://github.com/fossology/fossology/pull/2955)
- `fix(cli)`: error handling for failed downloads in cp2foss, so it stops silently queueing jobs for inaccessible URLs. PR[ #3314](https://github.com/fossology/fossology/pull/3314)
- `fix`: prevented the nomos CLI from connecting to the DB when it isn't required. PR[ #2947](https://github.com/fossology/fossology/pull/2947)

<details>
<summary><strong>Weekly Report</strong></summary>

| Week | Report | Highlights |
|:---|:---:|:---|
| Community Bonding | [#300](https://github.com/fossology/gsoc/pull/300) | Kickoff and community meetings, Slack set up as the main channel, closed out a previously raised PR (#1299), 1-on-1s with mentors Soham and Avinal, local codebase ready by May 31. |
| Week 1 | [#314](https://github.com/fossology/gsoc/pull/314) | Set up Docker, Minikube and kubectl on Ubuntu 24.04, rebased Omar's original microservices branch, investigated Docker build failures, an outdated etcd image, and the web UI serving the default Debian Apache page instead of FOSSology. |
| Week 2 | [#319](https://github.com/fossology/gsoc/pull/319) | Evaluated `bookworm-slim`, rolled back to `buster-slim` after compatibility issues, fixed the Debian default page by correcting file paths, built every base image successfully, then encountered `db-0` stuck in the Init state. |
| Week 3 | [#327](https://github.com/fossology/gsoc/pull/327) | Fixed a missing `libcurl` dependency breaking the scheduler build, prevented the web pod from starting before PostgreSQL was ready, reset the database to resolve a schema crash, and loaded the FOSSology UI successfully for the first time. |
| Week 4 | [#330](https://github.com/fossology/gsoc/pull/330) | Switched from Minikube to Kind for faster local development, learned the project's rebase workflow from mentors, submitted the first working implementation for review, and continued debugging the scheduler's `CrashLoopBackOff`. |
| Week 5 | [#340](https://github.com/fossology/gsoc/pull/340) | Permanently fixed the scheduler's `CrashLoopBackOff`, submitted the fix for review, then investigated a new issue where the web pod resolved PostgreSQL through `localhost` instead of the Kubernetes service. |
| Week 6 | [#346](https://github.com/fossology/gsoc/pull/346) | Debugged PHP configuration and database connectivity, analyzed pod logs, and aligned with mentors on migrating the build system from Make to CMake. |
| Week 7 | [#349](https://github.com/fossology/gsoc/pull/349) | Successfully built most components under the new CMake workflow, isolated the scheduler as the final failing image, and passed the Google Summer of Code Midterm Evaluation. |
| Week 8 | [#355](https://github.com/fossology/gsoc/pull/355) | Rebuilt the project with CMake on Debian Bookworm, migrated back from Kind to Minikube, synchronized with upstream `master`, and authored missing Docker and Kubernetes manifests for four agents. |
| Week 9 | [#364](https://github.com/fossology/gsoc/pull/364) | Added missing database columns blocking the web agent, implemented a `curl`-based scheduler health-check strategy, and submitted a cleaned-up `Dockerfile.ojo` for mentor testing. |
| Week 10 | [#365](https://github.com/fossology/gsoc/pull/365) | Brought the scheduler pod into a partially functional state after weeks of debugging, began restructuring deployments with Kustomize, and consulted the original 2021 GSoC contributor for historical context. |
| Week 11 | [#371](https://github.com/fossology/gsoc/pull/371) | Improved scheduler and web pod stability, designed a complete Kustomize base with development and production overlays across 26 Kubernetes manifests. |
| Week 12 | [#372](https://github.com/fossology/gsoc/pull/372) | Investigated the remaining scheduler instability, identified installation path mismatches and unclear evaluation criteria as root blockers, and evaluated rebuilding the scheduler from scratch versus incremental fixes. |
| Week 13 | [#373](https://github.com/fossology/gsoc/pull/373) | Compared legacy and modern scheduler implementations, traced the remaining failures to upstream database migrations and agent changes, finalized evaluation documentation, and submitted the closing project report. |

</details>

**Issues Opened**
- Fix email notification setup docs for modern Debian/Ubuntu compatibility ( [#3374](https://github.com/fossology/fossology/issues/3374) )
- Panel Synchronization Button is Non-Functional ( [#2996](https://github.com/fossology/fossology/issues/2996) )

**Full history:** [search: author:SalmanDeveloperz org:fossology](https://github.com/search?q=author%3ASalmanDeveloperz+org%3Afossology&type=pullrequests)


---
### <img src="https://github.com/user-attachments/assets/c7ebe300-efa2-473a-a4c3-f6e855259099" alt="OWASP" width="32" valign="middle"> OWASP Foundation

- [ OWASP/Nest ] Reported inconsistent and clipped focus visible outlines across the Header and Footer, an accessibility bug. [#3561](https://github.com/OWASP/Nest/issues/3561)
- [ OWASP/Nest ] Updated MENTORS.md with country, timezone and description for the GSoC 2026 mentor requirements. [PR #3605](https://github.com/OWASP/Nest/pull/3605)
- Collaborator access granted, January 2026

---
### <img src="https://github.com/user-attachments/assets/225654a5-e7e3-44a0-b2fc-01771bd451a1" alt="sktime" width="32"> sktime & aeon-toolkit

- [sktime/sktime]: fixed sporadic optimization bracket errors in `BoxCoxBiasAdjustedForecaster`. [#10316](https://github.com/sktime/sktime/pull/10316)
- [aeon-toolkit/aeon]: enabled `RDSTRegressor` and `RISTRegressor` tests after Ubuntu CI verification. [#2599](https://github.com/aeon-toolkit/aeon/pull/2599)
- [aeon-toolkit/aeon]: added an example notebook for using aeon distances with sklearn clusterers. [#2511](https://github.com/aeon-toolkit/aeon/pull/2511)

---
### Other Open Source

- [Infomaniak/desktop-kDrive]: reported the sign up flow getting stuck with the "Create an account" option not showing on first launch. [#1117](https://github.com/Infomaniak/desktop-kDrive/issues/1117)
- [NumFOCUS/DISCOVER-Cookbook]: cleaned up tone and fixed a typo in the documentation. [#73](https://github.com/numfocus/DISCOVER-Cookbook/pull/73)
- [TYPO3BestPractices/tea]: reworked the testing framework docs, removed deprecated Nimut references. [#1480](https://github.com/TYPO3BestPractices/tea/pull/1480)

<br>


## Projects

**[OpenTelemetry Collector Jenkins](https://github.com/SalmanDeveloperz/PoS-OTel)**
A local observability stack I built after being burned one too many times by silent CI failures. Jenkins feeds traces into an OpenTelemetry Collector, which does tail sampling and span to metrics conversion, then hands off to Jaeger for traces and Prometheus/Grafana for metrics and dashboards. There's a pipeline simulator running alongside it so the dashboards aren't empty on day one. Cut trace data volume by 81% across 9 pipeline runs through the sampling policy alone.
`OpenTelemetry` `Prometheus` `Grafana` `Docker Compose`

**[Micorservices Infrastructure of FOSSology](https://github.com/SalmanDeveloperz/GSoC-2025)**
The full Kubernetes and Docker microservices infrastructure built for FOSSology over a summer: scheduler, database, agents, all wired together. Migrated build system from Make to CMake, fixed database connectivity issues, aligned the old-skool codebase of 2021 with 2025, write k8s and .yaml files for new agents and build 10+ services.
`Kubernetes` `Docker` `Microservices` `CMake` `Linux`

**[web](https://github.com/SalmanDeveloperz/web)**
My portfolio site, built on Gatsby with Styled Components, deployed via GitHub Pages. Live at [salman-ch.netlify.app](https://salman-ch.netlify.app/).
`Gatsby` `JavaScript` `Node.js`

**[AutoAccept-Facebook-Friends](https://github.com/SalmanDeveloperz/AutoAccept-Facebook-Friends)**
A Chrome extension that injects a one click "Accept All" button into Facebook's Friends page, with infinite scroll handling so it keeps working as more requests load.
`Chrome Extension` `JavaScript`

<details>
<summary>More</summary>

| Project | Description |
|---|---|
| **Face Attendance** | Camera based face recognition attendance system, built in Python. [Code](https://github.com/SalmanDeveloperz/Face-Attendence-Python-Project-) |

</details>

<br>

## Honours and Awards

**Google Summer of Code 2025**
Selected globally at FOSSology, a program with a sub 5% acceptance rate. One of a small number of Pakistani contributors in the 2025 cohort.

**Linux Foundation LiFT Scholar 2025**
Full scholarship covering the Kubernetes for Developers (LFD259) certification, awarded by the Linux Foundation, July 2025.

**Byte and Battle Hackathon**
1st place university wide, 3rd place at the district level, in a speed programming competition, March 2025.

**PEEF Scholarship**
80% academic fee scholarship from the Government of Punjab, awarded for extraordinary academic standing and Intermediate (FSc) results, at a HEC recognized university.

<br>

## Tech Stack

**Languages**
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white)

**Frontend**
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

**Backend**
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) ![REST APIs](https://img.shields.io/badge/REST_APIs-02569B?style=flat-square) ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socketdotio&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

**Databases**
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)

**Infrastructure**
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white) ![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white) ![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) ![Kustomize](https://img.shields.io/badge/Kustomize-326CE5?style=flat-square&logo=kubernetes&logoColor=white)

**AI / ML**
![ML/DL](https://img.shields.io/badge/ML%2FDL-FF6F00?style=flat-square) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white) ![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white) ![Matplotlib](https://img.shields.io/badge/Matplotlib-11557C?style=flat-square) ![scikit--learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white) ![Transformers](https://img.shields.io/badge/Transformers-FFD21E?style=flat-square&logo=huggingface&logoColor=black)

<br>

## Connect

If you're a maintainer with a bug nobody wants to touch, or a team that needs someone who reads the whole stack trace before asking questions, my inbox is open.

[LinkedIn](https://www.linkedin.com/in/msalman199/) · [GitHub](https://github.com/SalmanDeveloperz) · [Portfolio](https://salman-ch.netlify.app/)
