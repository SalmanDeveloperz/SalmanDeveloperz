<div align="center">

<a href="https://github.com/SalmanDeveloperz">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=2EC4B6&center=true&vCenter=true&width=650&lines=Muhammad+Salman;GSoC+2025+%40+FOSSology;Linux+Foundation+LiFT+%40+2025;Fixes+pipelines+nobody+wants+to+touch;Kubernetes.+Jenkins.+OpenTelemetry." alt="typing banner" />
</a>

<!-- <img src="https://komarev.com/ghpvc/?username=SalmanDeveloperz&label=Profile%20Views&color=2EC4B6&style=flat" /> -->

</div>


## Overview
 
Hi, <br>
I'm Muhammad Salman,<br>
Software Engineer based in Pakistan.<br>
Actively contributing in complex codebases, 
fixing the infrastructure and accessibility bugs<br>

## 🌍 Work and Open Source Contributions

### <img src="https://github.com/user-attachments/assets/d229a3cb-6031-4c9d-afd2-9d459382f6de" width="24" alt="Jenkins"> Jenkins (`jenkinsci`, `jenkins-infra`)

**Shipped in Official Releases**
- **Weekly 2.565**: ([https://github.com/jenkinsci/docker/releases/tag/2.565](https://github.com/jenkinsci/docker/releases/tag/2.565))
- **LTS 2.568.1**: ([https://github.com/jenkinsci/docker/releases/tag/2.565](https://github.com/jenkinsci/docker/releases/tag/2.568.1))

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

**Full history:** [search: author:SalmanDeveloperz org:jenkinsci](https://github.com/search?q=author%3ASalmanDeveloperz+org%3Ajenkinsci&type=pullrequests&s=created&o=asc)

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


## <img src="https://github.com/user-attachments/assets/e4b767e7-b3dc-4f2b-813e-a5d9b1a5ec7a" alt="Projects" width="36"> Projects

**[OpenTelemetry Collector Jenkins](https://github.com/SalmanDeveloperz/PoS-OTel)**
A local observability stack I built after being burned one too many times by silent CI failures. Jenkins feeds traces into an OpenTelemetry Collector, which does tail sampling and span to metrics conversion, then hands off to Jaeger for traces and Prometheus/Grafana for metrics and dashboards. There's a pipeline simulator running alongside it so the dashboards aren't empty on day one. Cut trace data volume by 81% across 9 pipeline runs through the sampling policy alone.
`OpenTelemetry` `Prometheus` `Grafana` `Docker Compose`

**[Micorservices Infrastructure of FOSSology](https://github.com/SalmanDeveloperz/GSoC-2025)**
The full Kubernetes and Docker microservices infrastructure built for FOSSology over a summer: scheduler, database, agents, all wired together. Migrated build system from Make to CMake, fixed database connectivity issues, aligned the old-skool codebase of 2021 with 2025, write k8s and .yaml files for new agents and build 10+ services.
`Kubernetes` `Docker` `Microservices` `CMake` `Linux`

**[Ezvor](https://github.com/ezvor/ezvor)**

**[Website](https://github.com/SalmanDeveloperz/web)**
My portfolio site, built on Gatsby with Styled Components, deployed via GitHub Pages. Live at [salman-ch.netlify.app](https://salman-ch.netlify.app/).
`Gatsby` `JavaScript` `Node.js`

**[AutoAccept-Facebook-Friends](https://github.com/SalmanDeveloperz/AutoAccept-Facebook-Friends)**
A Chrome extension that injects a one click "Accept All" button into Facebook's Friends page, with infinite scroll handling so it keeps working as more requests load.
`Chrome Extension` `JavaScript`

<details>
<summary>More</summary>
[Repos](https://github.com/SalmanDeveloperz?tab=repositories)
</details>

<br>

## <img src="https://github.com/user-attachments/assets/bf638791-faea-4245-9189-2b7111e898ab" alt="Awards and Honours" width="32"> Awards & Honours

- **Google Summer of Code 2025**
Selected globally at FOSSology, a program with a sub 5% acceptance rate. One of a small number of Pakistani contributors in the 2025 cohort.

- **Linux Foundation LiFT Scholar 2025**
Full scholarship covering the Kubernetes for Developers (LFD259) certification, awarded by the Linux Foundation, July 2025.

- **Byte and Battle Hackathon**
1st place university wide, 3rd place at the district level, in a speed programming competition, March 2025.

- **PEEF Scholarship**
80% academic fee scholarship from the Government of Punjab, awarded for extraordinary academic standing and Intermediate (FSc) results, at a HEC recognized university.

<br>


## 🛠️ Tech Stack
 
**Languages**
<p align="left">
<img src="https://cdn.simpleicons.org/docker" width="46" height="46" title="Docker" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/kubernetes" width="46" height="46" title="Kubernetes" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/jenkins" width="46" height="46" title="Jenkins" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/linux" width="46" height="46" title="Linux" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/javascript" width="46" height="46" title="JavaScript" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/typescript" width="46" height="46" title="TypeScript" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/python" width="46" height="46" title="Python" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/cplusplus" width="46" height="46" title="C++" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/react" width="46" height="46" title="React" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/angular" width="46" height="46" title="Angular" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/tailwindcss" width="46" height="46" title="Tailwind CSS" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/html5" width="46" height="46" title="HTML5" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/nodedotjs" width="46" height="46" title="Node.js" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/express" width="46" height="46" title="Express.js" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/jsonwebtokens" width="46" height="46" title="JWT" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/socketdotio" width="46" height="46" title="Socket.io" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/git" width="46" height="46" title="Git" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/mongodb" width="46" height="46" title="MongoDB" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/postgresql" width="46" height="46" title="PostgreSQL" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/mysql" width="46" height="46" title="MySQL" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/redis" width="46" height="46" title="Redis" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/githubactions" width="46" height="46" title="GitHub Actions" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/numpy" width="46" height="46" title="NumPy" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/pandas" width="46" height="46" title="Pandas" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/scikitlearn" width="46" height="46" title="scikit-learn" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
<img src="https://cdn.simpleicons.org/huggingface" width="46" height="46" title="Transformers" style="border-radius:50%;background:#ffffff;padding:8px;margin:3px;"/>
</p>
<br>
