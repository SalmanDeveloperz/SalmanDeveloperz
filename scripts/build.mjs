#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Rebuilds the profile from live sources. No dependencies, Node 20+.
//
//   GitHub API            → merged/open PRs, per-org counts, in_review
//   salman-ch.netlify.app → changelog + now.json (llms.txt), same data as the site
//   data/profile.json     → everything a human decides
//
// Outputs
//   assets/terminal-{dark,light}.svg   animated terminal header
//   assets/trace-{dark,light}.svg      career rendered as a trace
//   README.md                          regions between <!--x:start--> / <!--x:end-->
//
// Animations are SMIL with full-state base values, so renderers that don't
// animate (GitHub mobile, some previews) still show the finished frame.
// Files are only written when their content changes, so the daily job only
// commits when something real moved.
// ─────────────────────────────────────────────────────────────────────────────
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const root = new URL('..', import.meta.url);
const at = (p) => new URL(p, root);
const data = JSON.parse(await readFile(at('data/profile.json'), 'utf8'));
const lc = (s) => String(s).toLowerCase();

// ── sources ──────────────────────────────────────────────────────────────────
async function github() {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': `${data.user}-profile` };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const q = encodeURIComponent(`author:${data.user} is:pr -user:${data.user}`);
  const out = [];
  for (let page = 1; page <= 5; page++) {
    const res = await fetch(`https://api.github.com/search/issues?q=${q}&per_page=100&page=${page}`, { headers, signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`GitHub ${res.status}: ${await res.text()}`);
    const { items } = await res.json();
    for (const i of items) {
      out.push({
        repo: i.repository_url.split('/repos/')[1],
        number: i.number,
        title: i.title,
        url: i.html_url,
        state: i.pull_request?.merged_at ? 'merged' : i.state === 'open' ? 'open' : 'closed',
      });
    }
    if (items.length < 100) break;
  }
  return out;
}

async function site() {
  try {
    const txt = await (await fetch(`${data.site}/llms.txt`, { signal: AbortSignal.timeout(15000) })).text();
    const sec = txt.split('## Changelog')[1]?.split('\n## ')[0] ?? '';
    const log = sec
      .split('\n')
      .map((l) => l.match(/^- (\d{4}-\d{2}(?:-\d{2})?) \[(\w+)\] (.*?)(?: (https?:\/\/\S+))?$/))
      .filter(Boolean)
      .map(([, date, type, text, href]) => ({ date, type, text, href }));
    const n = txt.match(/^Now: shipping (.+?); building (.+?); exploring (.+?)\. \(updated/m);
    return { log, now: n ? { shipping: n[1], building: n[2], exploring: n[3] } : null };
  } catch {
    return { log: [], now: null };
  }
}

const prs = await github().catch((e) => {
  console.error(`github: ${e.message}. Leaving files untouched.`);
  process.exit(0);
});
const fromSite = await site();
const now = { ...data.now, ...(fromSite.now ?? {}) };

const upstream = prs.filter((p) => data.upstreamOwners.includes(lc(p.repo.split('/')[0])));
const merged = upstream.filter((p) => p.state === 'merged');
const inReview = upstream.filter((p) => p.state === 'open').map((p) => `${p.repo.split('/')[1]}#${p.number}`);
const inRepos = (p, repos) => repos.some((r) => lc(r) === lc(p.repo));
const count = (repos, state) => prs.filter((p) => inRepos(p, repos) && p.state === state).length;
const stats = { merged: merged.length, orgs: new Set(merged.map((p) => lc(p.repo.split('/')[0]))).size, review: inReview.length };

// ── svg helpers ──────────────────────────────────────────────────────────────
const themes = {
  dark: { bg: '#0d1117', panel: '#161b22', bar: '#1c2129', border: '#30363d', text: '#e6edf3', text2: '#b1bac4', muted: '#8b949e', faint: '#484f58', accent: '#2ec4b6', violet: '#a78bfa', amber: '#f5b544', green: '#4ade80', blue: '#79c0ff', rose: '#fb7185' },
  light: { bg: '#ffffff', panel: '#f6f8fa', bar: '#eaeef2', border: '#d0d7de', text: '#1f2328', text2: '#424a53', muted: '#656d76', faint: '#afb8c1', accent: '#0d9488', violet: '#7c3aed', amber: '#b45309', green: '#15803d', blue: '#0969da', rose: '#e11d48' },
};
const x = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const MONO = `ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace`;
const SANS = `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif`;
const f = (n) => +n.toFixed(3);
// Appear at `t` seconds. Base opacity stays 1 for non-animating renderers.
const appear = (t) => `<animate attributeName="opacity" values="0;0;1" keyTimes="0;${f(t / (t + 0.06))};1" dur="${f(t + 0.06)}s" fill="freeze"/>`;

// ── terminal ─────────────────────────────────────────────────────────────────
function terminal(th) {
  const W = 880, lh = 21, pad = 22, top = 44, cw = 8.1;
  const rows = [];
  let t = 0.5;
  const cmd = (text) => {
    const d = Math.max(0.45, text.length * 0.032);
    rows.push({ kind: 'cmd', text, t, d });
    t += d + 0.3;
  };
  const out = (parts) => { rows.push({ kind: 'out', parts, t }); t += 0.07; };
  const gap = () => rows.push({ kind: 'gap' });

  cmd('whoami');
  out([[data.whoami, 'text2']]);
  gap();
  cmd('kubectl get contributions -n open-source');
  out([['NAME', 'muted', 0], ['MERGED', 'muted', 190], ['STATUS', 'muted', 270], ['NOTE', 'muted', 360]]);
  const stColor = { shipped: 'accent', merged: 'violet', collab: 'green', review: 'amber' };
  for (const r of data.terminal) {
    const m = count(r.repos, 'merged');
    out([[r.name, 'text2', 0], [m ? String(m) : '-', 'text', 190], [r.status, stColor[r.status] ?? 'text2', 270], [r.note, 'muted', 360]]);
  }
  gap();
  cmd('cat now.json');
  const json = { shipping: now.shipping, building: now.building, exploring: now.exploring, in_review: inReview.slice(0, 3) };
  out([['{', 'text2']]);
  const keys = Object.keys(json);
  keys.forEach((k, i) => {
    const v = json[k];
    const val = Array.isArray(v) ? `[${v.map((s) => `"${s}"`).join(', ')}]` : `"${v}"`;
    rows.push({ kind: 'span', indent: 2 * cw, segs: [[`"${k}"`, 'blue'], [': ', 'text2'], [val + (i < keys.length - 1 ? ',' : ''), 'amber']], t });
    t += 0.07;
  });
  out([['}', 'text2']]);
  gap();
  rows.push({ kind: 'prompt', t });

  const H = top + pad + rows.length * lh + pad - 6;
  const prompt = 'salman@env:~$ ';
  let y = top + pad + 14;
  const body = [];
  rows.forEach((r, i) => {
    if (r.kind === 'gap') { y += lh * 0.6; return; }
    if (r.kind === 'cmd') {
      const w = r.text.length * cw + 12;
      body.push(`<g>${appear(r.t)}<text x="${pad}" y="${y}" fill="${th.accent}">${x(prompt)}</text>
  <clipPath id="c${i}"><rect x="${pad + prompt.length * cw}" y="${y - 15}" height="20" width="${f(w)}"><animate attributeName="width" values="0;0;${f(w)}" keyTimes="0;${f(r.t / (r.t + r.d))};1" dur="${f(r.t + r.d)}s" fill="freeze"/></rect></clipPath>
  <text x="${pad + prompt.length * cw}" y="${y}" fill="${th.text}" clip-path="url(#c${i})" font-weight="600">${x(r.text)}</text></g>`);
    } else if (r.kind === 'out') {
      body.push(`<g>${appear(r.t)}${r.parts.map(([s, c, dx = 0]) => `<text x="${f(pad + dx)}" y="${y}" fill="${th[c]}">${x(s)}</text>`).join('')}</g>`);
    } else if (r.kind === 'span') {
      body.push(`<g>${appear(r.t)}<text x="${f(pad + r.indent)}" y="${y}">${r.segs.map(([s, c]) => `<tspan fill="${th[c]}">${x(s)}</tspan>`).join('')}</text></g>`);
    } else if (r.kind === 'prompt') {
      body.push(`<g>${appear(r.t)}<text x="${pad}" y="${y}" fill="${th.accent}">${x(prompt)}</text><rect x="${f(pad + prompt.length * cw)}" y="${y - 13}" width="8" height="16" fill="${th.accent}"><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.5;1" dur="1.1s" repeatCount="indefinite"/></rect></g>`);
    }
    y += lh;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Terminal: whoami, open source contributions, now.json">
<rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="12" fill="${th.panel}" stroke="${th.border}"/>
<path d="M.5 12.5a12 12 0 0 1 12-12h${W - 25}a12 12 0 0 1 12 12V${top}H.5z" fill="${th.bar}"/>
<line x1="0" y1="${top}" x2="${W}" y2="${top}" stroke="${th.border}"/>
<circle cx="22" cy="22" r="6" fill="#ff5f57"/><circle cx="42" cy="22" r="6" fill="#febc2e"/><circle cx="62" cy="22" r="6" fill="#28c840"/>
<text x="84" y="26.5" font-family="${MONO}" font-size="12.5" fill="${th.muted}">salman@env: ~</text>
<text x="${W - 22}" y="26.5" font-family="${MONO}" font-size="12" fill="${th.muted}" text-anchor="end">${stats.merged} merged upstream · ${stats.orgs} orgs</text>
<g font-family="${MONO}" font-size="13.5" xml:space="preserve">
${body.join('\n')}
</g>
</svg>`;
}

// ── trace ────────────────────────────────────────────────────────────────────
function trace(th) {
  const W = 880, L = 200, R = W - 24, rowH = 30, head = 42, axis = 30;
  const toM = (s) => { const [y, m] = s.split('-').map(Number); return y * 12 + m - 1; };
  const d = new Date();
  const nowM = d.getFullYear() * 12 + d.getMonth();
  const w0 = toM(data.trace.window[0]);
  const w1 = Math.max(toM(data.trace.window[1]), nowM + 2);
  const px = (m) => L + ((m - w0) / (w1 - w0)) * (R - L);
  const color = { work: th.accent, oss: th.violet, edu: th.blue, award: th.amber };
  const dur = (a, b) => { const n = b - a + 1; const y = Math.floor(n / 12), mo = n % 12; return [y && `${y}y`, mo && `${mo}mo`].filter(Boolean).join(' '); };
  const spans = [...data.trace.spans].sort((a, b) => toM(a.start) - toM(b.start));
  const H = head + axis + (spans.length + 1) * rowH + 40;
  const y0 = head + axis;
  const years = [];
  for (let yy = Math.ceil(w0 / 12); yy * 12 <= w1; yy++) years.push(yy);

  const grid = years.map((yy) => `<line x1="${f(px(yy * 12))}" y1="${head}" x2="${f(px(yy * 12))}" y2="${y0 + (spans.length + 1) * rowH}" stroke="${th.border}" stroke-dasharray="2 4"/><text x="${f(px(yy * 12))}" y="${head + 19}" text-anchor="middle" fill="${th.muted}">${yy}</text>`).join('');
  const nowX = f(px(nowM + 1));
  const rootRow = `<text x="20" y="${y0 + 19}"><tspan fill="${th.text}" font-weight="700">salman</tspan><tspan fill="${th.muted}"> career</tspan></text><rect x="${L}" y="${y0 + 11}" width="${f(nowX - L)}" height="8" rx="4" fill="${th.faint}" opacity=".5"/>`;

  const rows = spans.map((s, i) => {
    const a = toM(s.start), b = s.end ? toM(s.end) : nowM, live = !s.end;
    const y = y0 + (i + 1) * rowH;
    const bx = f(px(a)), bw = f(Math.max(px(b + 1) - px(a), 5));
    const c = color[s.kind];
    const label = live ? `${dur(a, b)} · live` : dur(a, b);
    const right = bx + bw + 8 + label.length * 6.6 < W - 4;
    const lx = right ? bx + bw + (live ? 12 : 8) : bx - 8;
    const k = f(0.35 + i * 0.09);
    return `<g>
<text x="20" y="${y + 19}"><tspan fill="${th.faint}">${i === spans.length - 1 ? '└─ ' : '├─ '}</tspan><tspan fill="${th.text}" font-weight="600">${x(s.service)}</tspan><tspan fill="${th.muted}"> ${x(s.op)}</tspan></text>
<rect x="${bx}" y="${y + 9}" width="${bw}" height="12" rx="3" fill="${c}" fill-opacity=".28" stroke="${c}"><animate attributeName="width" values="0;0;${bw}" keyTimes="0;${f(k / (k + 0.7))};1" dur="${f(k + 0.7)}s" fill="freeze"/></rect>
${live ? `<circle cx="${f(bx + bw)}" cy="${y + 15}" r="4" fill="${c}"><animate attributeName="r" values="3.5;5.5;3.5" dur="2s" repeatCount="indefinite"/></circle>` : ''}
<text x="${f(lx)}" y="${y + 19}" fill="${th.text2}" text-anchor="${right ? 'start' : 'end'}" font-size="11">${label}</text>
</g>`;
  });

  const legend = Object.entries({ work: 'work', oss: 'open source', edu: 'education', award: 'award' })
    .map(([k, v], i) => `<rect x="${20 + i * 120}" y="${H - 24}" width="10" height="10" rx="2" fill="${color[k]}"/><text x="${36 + i * 120}" y="${H - 15}" fill="${th.muted}">${v}</text>`)
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Career rendered as a distributed trace">
<rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="12" fill="${th.panel}" stroke="${th.border}"/>
<g font-family="${MONO}" font-size="12" xml:space="preserve">
<text x="20" y="27"><tspan fill="${th.text}" font-weight="700">salman.career</tspan><tspan fill="${th.muted}">   ${spans.length} spans · ${stats.merged} merged upstream PRs</tspan></text>
<text x="${W - 20}" y="27" fill="${th.muted}" text-anchor="end">service · operation → time</text>
<line x1="0" y1="${head}" x2="${W}" y2="${head}" stroke="${th.border}"/>
${grid}
<line x1="${nowX}" y1="${head + 26}" x2="${nowX}" y2="${y0 + (spans.length + 1) * rowH}" stroke="${th.green}" stroke-opacity=".6"/>
<text x="${nowX}" y="${head + 19}" text-anchor="middle" fill="${th.green}">now</text>
${rootRow}
${rows.join('\n')}
${legend}
</g>
</svg>`;
}

// ── README regions ───────────────────────────────────────────────────────────
const searchUrl = (repos, extra) => `https://github.com/search?type=pullrequests&q=${encodeURIComponent(`is:pr ${extra} author:${data.user} ${repos.map((r) => `repo:${r}`).join(' ')}`)}`;

function ossTable() {
  const lines = ['| | Project | Merged | What I did |', '| :-: | :-- | :-: | :-- |'];
  const covered = new Set();
  for (const o of data.oss) {
    o.repos.forEach((r) => covered.add(lc(r)));
    const m = count(o.repos, 'merged');
    const open = count(o.repos, 'open');
    const cell = m ? `[${m}](${searchUrl(o.repos, 'is:merged')})` : open ? `[in&nbsp;review](${searchUrl(o.repos, 'is:open')})` : '–';
    lines.push(`| <img src="https://github.com/${o.avatar}.png?size=64" width="20" height="20" alt=""> | [**${o.name.replace(/ /g, '&nbsp;')}**](${o.href}) | ${cell} | ${o.what} |`);
  }
  const rest = merged.filter((p) => !covered.has(lc(p.repo)));
  const repos = [...new Set(rest.map((p) => p.repo))];
  if (repos.length) lines.push('', `<sub>Plus ${rest.length} more in ${repos.map((r) => `[${r}](https://github.com/${r})`).join(', ')}.</sub>`);
  return lines.join('\n');
}

function statsLine() {
  return `**${stats.merged}** merged upstream PRs across **${stats.orgs}** orgs · **${stats.review}** in review · code in **Jenkins Weekly 2.565** and **LTS 2.568.1**`;
}

function changelog() {
  const fnv = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); } return (h >>> 0).toString(16).padStart(8, '0').slice(0, 7); };
  const verb = { ship: 'feat', merge: 'merge', win: 'win', role: 'chore', write: 'docs' };
  const top = [...fromSite.log].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 8);
  if (!top.length) return null;
  const body = top.map((e) => `* ${fnv(e.date + e.text)}  ${e.date.padEnd(10)}  ${(verb[e.type] ?? e.type).padEnd(5)}  ${e.text}`).join('\n');
  return '```text\n$ git log --oneline --graph -8\n' + body + '\n```';
}

function region(src, name, content) {
  if (content == null) return src;
  const re = new RegExp(`(<!--${name}:start-->)[\\s\\S]*?(<!--${name}:end-->)`);
  return re.test(src) ? src.replace(re, `$1\n${content}\n$2`) : src;
}

// ── write ────────────────────────────────────────────────────────────────────
async function put(path, content) {
  const url = at(path);
  const old = await readFile(url, 'utf8').catch(() => null);
  if (old === content) return false;
  await writeFile(url, content);
  console.log(`wrote ${path}`);
  return true;
}

await mkdir(at('assets'), { recursive: true });
for (const [name, th] of Object.entries(themes)) {
  await put(`assets/terminal-${name}.svg`, terminal(th));
  await put(`assets/trace-${name}.svg`, trace(th));
}
let readme = await readFile(at('README.md'), 'utf8');
readme = region(readme, 'stats', statsLine());
readme = region(readme, 'oss', ossTable());
readme = region(readme, 'log', changelog());
await put('README.md', readme);
console.log(`merged=${stats.merged} orgs=${stats.orgs} review=${stats.review} changelog=${fromSite.log.length}`);
