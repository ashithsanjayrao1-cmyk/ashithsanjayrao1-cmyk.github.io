/* ===================================================================
   ASHITH SANJAY RAO | PORTFOLIO 2026 - CLIENT-SIDE INTERACTION ENGINE
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initNavbarScroll();
  initMobileDrawer();
  initHeroCodeTabs();
  initSkillsFilter();
  initPlayground();
  initInteractiveTerminal();
  initContactForm();
});

/* -------------------------------------------------------------------
   1. Animated Typewriter Subtitle
   ------------------------------------------------------------------- */
const ROLES = [
  "Full-Stack Python Engineer",
  "FastAPI & Django Specialist",
  "Algorithmic System Architect",
  "MCA Final-Year Postgraduate",
  "Creator of E-Waste Master ERP"
];

function initTypewriter() {
  const target = document.getElementById('typing-role');
  if (!target) return;

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 75;

  function type() {
    const current = ROLES[roleIdx];
    if (isDeleting) {
      target.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      target.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIdx === current.length) {
      typingSpeed = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % ROLES.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* -------------------------------------------------------------------
   2. Navbar Scroll Observer & Mobile Drawer
   ------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initMobileDrawer() {
  const toggleBtn = document.getElementById('nav-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => drawer.classList.remove('active'));
  });
}

/* -------------------------------------------------------------------
   3. Recruiter Snapshot Fast-Track Toggle
   ------------------------------------------------------------------- */
function toggleRecruiterSnapshot() {
  const card = document.getElementById('recruiter-snapshot');
  if (!card) return;
  card.classList.toggle('open');
  if (card.classList.contains('open')) {
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* -------------------------------------------------------------------
   4. Hero Code Card Switcher & Copy
   ------------------------------------------------------------------- */
const CODE_SNIPPETS = {
  profile: `<span class="c-kw">class</span> <span class="c-fn">AshithSanjayRao</span>:
    <span class="c-prop">degree</span>: <span class="c-str">"MCA (Master of Computer Applications)"</span>
    <span class="c-prop">status</span>: <span class="c-str">"Final Semester (2026 Graduate)"</span>
    <span class="c-prop">location</span>: <span class="c-str">"Bengaluru, India"</span>
    <span class="c-prop">availability</span>: <span class="c-str">"Immediate (0-Day Notice Period)"</span>
    
    <span class="c-prop">core_stack</span> = [
        <span class="c-str">"Python"</span>, <span class="c-str">"FastAPI"</span>, <span class="c-str">"Django"</span>,
        <span class="c-str">"SQLAlchemy"</span>, <span class="c-str">"MySQL"</span>, <span class="c-str">"React.js"</span>
    ]

    <span class="c-kw">def</span> <span class="c-fn">get_value_proposition</span>(self):
        <span class="c-kw">return</span> {
            <span class="c-str">"architecture"</span>: <span class="c-str">"Asynchronous High-Throughput REST APIs"</span>,
            <span class="c-str">"security"</span>: <span class="c-str">"Zero-Trust RBAC & JWT Bearer Tokens"</span>,
            <span class="c-str">"algorithms"</span>: <span class="c-str">"Algorithmic Data Integrity Validation"</span>
        }`,
  capabilities: `{
  <span class="c-prop">"candidate"</span>: <span class="c-str">"Ashith Sanjay Rao"</span>,
  <span class="c-prop">"specialization"</span>: <span class="c-str">"Backend Systems & Full-Stack Web"</span>,
  <span class="c-prop">"verified_skills"</span>: {
    <span class="c-prop">"fastapi_jwt_rbac"</span>: <span class="c-bool">true</span>,
    <span class="c-prop">"sqlalchemy_orm_schemas"</span>: <span class="c-bool">true</span>,
    <span class="c-prop">"algorithmic_reconciliation"</span>: <span class="c-bool">true</span>,
    <span class="c-prop">"cryptographic_signatures"</span>: <span class="c-bool">true</span>,
    <span class="c-prop">"cloud_deployment_docker"</span>: <span class="c-bool">true</span>
  },
  <span class="c-prop">"interview_readiness"</span>: <span class="c-num">100</span>
}`,
  algorithm: `<span class="c-comment"># Algorithmic Inbound vs Extraction Reconciliation</span>
<span class="c-kw">def</span> <span class="c-fn">validate_extraction_batch</span>(inbound_kg: <span class="c-fn">float</span>, extractions: <span class="c-fn">list</span>) -> <span class="c-fn">bool</span>:
    total_yield = <span class="c-fn">sum</span>(item[<span class="c-str">'weight_kg'</span>] <span class="c-kw">for</span> item <span class="c-kw">in</span> extractions)
    
    <span class="c-comment"># Enforce zero-artificial-inflation constraint</span>
    <span class="c-kw">if</span> total_yield > inbound_kg:
        <span class="c-kw">raise</span> <span class="c-fn">ValueError</span>(<span class="c-str">"Extraction yield cannot exceed inbound batch weight!"</span>)
        
    <span class="c-comment"># Route toxic elements to hazardous manifests automatically</span>
    <span class="c-kw">for</span> mat <span class="c-kw">in</span> extractions:
        <span class="c-kw">if</span> mat[<span class="c-str">'type'</span>] == <span class="c-str">"Lithium-Battery"</span>:
            dispatch_hazardous_manifest(mat)
            
    <span class="c-kw">return</span> <span class="c-bool">True</span>`
};

function initHeroCodeTabs() {
  const tabs = document.querySelectorAll('.code-tab-btn');
  const codeBody = document.getElementById('hero-code-content');
  if (!tabs || !codeBody) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const snippetKey = tab.getAttribute('data-tab');
      if (CODE_SNIPPETS[snippetKey]) {
        codeBody.innerHTML = `<code>${CODE_SNIPPETS[snippetKey]}</code>`;
      }
    });
  });
}

function copyHeroCode() {
  const codeBody = document.getElementById('hero-code-content');
  if (!codeBody) return;
  navigator.clipboard.writeText(codeBody.innerText).then(() => {
    showToast("Code copied to clipboard! 📋");
  });
}

/* -------------------------------------------------------------------
   5. Technical Skills Matrix Filtering
   ------------------------------------------------------------------- */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  if (!filterBtns || !skillCards) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* -------------------------------------------------------------------
   6. Interactive Developer Playground (REST API, SQL, DSA)
   ------------------------------------------------------------------- */
const API_MOCKS = {
  login: {
    status: "200 OK",
    time: "118ms",
    method: "POST",
    data: {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTgwMDAwMDAwMH0.3e8f...",
      "token_type": "bearer",
      "role": "admin",
      "authenticated": true,
      "permissions": ["READ_INVENTORY", "ASSIGN_DISPATCH", "MINT_COMPLIANCE_CERTIFICATES", "AUDIT_RECONCILIATION"]
    }
  },
  inventory: {
    status: "200 OK",
    time: "142ms",
    method: "GET",
    data: {
      "facility_name": "E-Waste Master Recycling Hub 01",
      "timestamp": "2026-11-02T20:55:00Z",
      "live_commodities": [
        { "material": "Refined Copper", "stock_kg": 1420.50, "market_rate_inr": 820.00, "classification": "SAFE" },
        { "material": "Gold Flakes (Circuitry)", "stock_kg": 18.25, "market_rate_inr": 62500.00, "classification": "HIGH_VALUE" },
        { "material": "Lithium Battery Cells", "stock_kg": 380.00, "status": "ISOLATED", "classification": "HAZARDOUS_DISPOSAL" },
        { "material": "Shredded Aluminum Casing", "stock_kg": 2150.00, "market_rate_inr": 210.00, "classification": "SAFE" }
      ],
      "algorithmic_discrepancy_rate": "0.00% (Balanced)"
    }
  },
  certificate: {
    status: "200 OK",
    time: "96ms",
    method: "POST",
    data: {
      "certificate_id": "CERT-2026-EW-9821",
      "client": "TechCorp Solutions Pvt Ltd",
      "batch_weight_kg": 540.0,
      "sha256_digital_signature": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "cryptographic_verification": "VALID_AUTHENTIC_RECORD",
      "reportlab_in_memory_pdf": "Generated (2 Pages Landscape)",
      "legal_compliance": "CPCB E-Waste Rules 2026 Certified"
    }
  }
};

const SQL_MOCKS = {
  yield: {
    query: `SELECT 
    em.material_type, 
    ROUND(SUM(em.yield_weight_kg), 2) AS total_yield_kg,
    ROUND(AVG(em.yield_weight_kg), 2) AS avg_batch_yield_kg
FROM extracted_materials em
JOIN job_cards jc ON em.job_id = jc.id
WHERE jc.status = 'COMPLETED'
GROUP BY em.material_type
ORDER BY total_yield_kg DESC;`,
    headers: ["material_type", "total_yield_kg", "avg_batch_yield_kg"],
    rows: [
      ["Refined Copper", "1,420.50", "118.37"],
      ["Shredded Aluminum", "980.20", "81.68"],
      ["Gold Flakes (Circuit)", "18.25", "1.52"],
      ["Polycarbonate Plastic", "2,310.00", "192.50"]
    ],
    execTime: "0.82 ms"
  },
  discrepancy: {
    query: `SELECT 
    pt.id AS task_id,
    c.name AS client_name,
    pt.expected_weight_kg,
    iw.actual_arrived_weight,
    ROUND((iw.actual_arrived_weight - pt.expected_weight_kg), 2) AS weight_diff_kg,
    iw.discrepancy_note
FROM pickup_tasks pt
JOIN inbound_waste iw ON pt.id = iw.task_id
JOIN clients c ON pt.client_id = c.id
WHERE iw.actual_arrived_weight != pt.expected_weight_kg;`,
    headers: ["task_id", "client_name", "expected_kg", "actual_kg", "weight_diff_kg", "discrepancy_note"],
    rows: [
      ["#1042", "Infosys Campus Hub", "450.00", "441.20", "-8.80", "Moisture evaporation & packaging variance"],
      ["#1058", "Wipro Green Terminal", "800.00", "800.00", "0.00", "Verified exact weight"],
      ["#1069", "Dell Logistics Unit", "320.00", "318.50", "-1.50", "Pallet tare discrepancy logged"]
    ],
    execTime: "0.64 ms"
  },
  toxic: {
    query: `SELECT 
    em.id,
    em.material_type,
    em.yield_weight_kg,
    'SPECIALIZED_DISPOSAL' AS manifest_action,
    'HAZARDOUS_DO_NOT_AUCTION' AS b2b_marketplace_visibility
FROM extracted_materials em
WHERE LOWER(em.material_type) LIKE '%battery%' 
   OR LOWER(em.material_type) LIKE '%lithium%';`,
    headers: ["id", "material_type", "yield_weight_kg", "manifest_action", "b2b_visibility"],
    rows: [
      ["#881", "Lithium-Ion Battery Pack", "125.40", "SPECIALIZED_DISPOSAL", "HAZARDOUS_DO_NOT_AUCTION"],
      ["#894", "Lead-Acid Sealed Unit", "84.00", "SPECIALIZED_DISPOSAL", "HAZARDOUS_DO_NOT_AUCTION"]
    ],
    execTime: "0.45 ms"
  }
};

function initPlayground() {
  // Tabs Switcher
  const playTabs = document.querySelectorAll('.play-tab-btn');
  const panels = document.querySelectorAll('.play-panel');
  playTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      playTabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const targetPanel = document.getElementById(tab.getAttribute('data-tab'));
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // REST API Trigger
  const apiSelect = document.getElementById('api-endpoint-select');
  const runApiBtn = document.getElementById('api-run-btn');
  const apiStatus = document.getElementById('api-status-span');
  const apiTime = document.getElementById('api-time-span');
  const apiOutput = document.getElementById('api-output-pre');
  const apiBadge = document.getElementById('api-method-badge');

  if (runApiBtn && apiSelect) {
    runApiBtn.addEventListener('click', () => {
      const selected = apiSelect.value;
      const mock = API_MOCKS[selected];
      if (!mock) return;

      runApiBtn.disabled = true;
      runApiBtn.textContent = "Requesting...";
      apiOutput.textContent = "// Sending simulated asynchronous payload...";

      setTimeout(() => {
        apiBadge.textContent = mock.method;
        apiBadge.className = `api-method-badge method-${mock.method.toLowerCase()}`;
        apiStatus.textContent = mock.status;
        apiTime.textContent = mock.time;
        apiOutput.textContent = JSON.stringify(mock.data, null, 2);
        runApiBtn.disabled = false;
        runApiBtn.textContent = "Send Request";
      }, 200);
    });
  }

  // SQL Query Trigger
  const sqlSelect = document.getElementById('sql-query-select');
  const sqlCodeBox = document.getElementById('sql-code-display');
  const sqlRunBtn = document.getElementById('sql-run-btn');
  const sqlTimeSpan = document.getElementById('sql-time-span');
  const sqlTableHead = document.getElementById('sql-table-head');
  const sqlTableBody = document.getElementById('sql-table-body');

  function updateSqlView() {
    const key = sqlSelect.value;
    const mock = SQL_MOCKS[key];
    if (!mock) return;
    sqlCodeBox.textContent = mock.query;
  }

  if (sqlSelect) {
    sqlSelect.addEventListener('change', updateSqlView);
  }

  if (sqlRunBtn && sqlSelect) {
    sqlRunBtn.addEventListener('click', () => {
      const key = sqlSelect.value;
      const mock = SQL_MOCKS[key];
      if (!mock) return;

      sqlRunBtn.disabled = true;
      sqlRunBtn.textContent = "Executing...";

      setTimeout(() => {
        sqlTimeSpan.textContent = `Executed in ${mock.execTime}`;
        
        // Render headers
        sqlTableHead.innerHTML = `<tr>${mock.headers.map(h => `<th>${h}</th>`).join('')}</tr>`;
        
        // Render rows
        sqlTableBody.innerHTML = mock.rows.map(r => `<tr>${r.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');

        sqlRunBtn.disabled = false;
        sqlRunBtn.textContent = "Execute Query";
      }, 150);
    });
  }
}

/* -------------------------------------------------------------------
   7. Interactive Developer Terminal (CLI)
   ------------------------------------------------------------------- */
function initInteractiveTerminal() {
  const terminalInput = document.getElementById('terminal-cli-input');
  const terminalOutput = document.getElementById('terminal-cli-output');
  if (!terminalInput || !terminalOutput) return;

  const COMMANDS = {
    help: "Available Commands:\n  - about     : High-level engineer overview\n  - skills    : Technical stack & tools\n  - projects  : Featured production repositories\n  - contact   : Direct email & communication channels\n  - hire      : Recruiter snapshot summary\n  - clear     : Wipe terminal display",
    about: "Ashith Sanjay Rao | 4th Sem MCA Postgraduate | Bengaluru, India\nSpecializing in high-performance Python backends, FastAPI architectures, and algorithmic inventory systems.",
    skills: "Languages  : Python, JavaScript (ES6+), SQL, HTML5, CSS3, C++\nFrameworks : FastAPI, Django, React.js, Tailwind CSS, SQLAlchemy, Pydantic\nDatabases  : MySQL, SQLite, PostgreSQL\nTools      : Git, GitHub, Vercel, Render, Postman, Linux",
    projects: "1. E-Waste Master ERP (FastAPI, SQLAlchemy, Tailwind, ReportLab, JWT)\n2. Edumerge Attendance System (Python, Django, SQLite/MySQL)\n3. Spottr Fitness Backend (FastAPI, RESTful Analytics)\n4. Digital Heroes Page Pulse (React.js, Tailwind CSS)\n5. DSA Interview Practice (Python 50+ Algorithmic Solutions)",
    contact: "Email    : ashithsanjayrao1@gmail.com\nGitHub   : https://github.com/ashithsanjayrao1-cmyk\nLinkedIn : https://www.linkedin.com/in/ashith-sanjay-rao/",
    hire: "⚡ RECRUITER FAST-TRACK:\nTarget Roles : Software Engineer (SDE), Backend Developer, Full-Stack Engineer\nNotice Period: 0 Days (Immediate Joiner)\nStatus       : MCA Final Semester (2026 Batch)\nReady to interview immediately!"
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value.trim().toLowerCase();
      terminalInput.value = '';

      if (!val) return;

      if (val === 'clear') {
        terminalOutput.innerHTML = '';
        return;
      }

      const res = COMMANDS[val] || `Command not found: '${val}'. Type 'help' to see valid commands.`;
      
      const newEntry = document.createElement('div');
      newEntry.style.marginBottom = "0.75rem";
      newEntry.innerHTML = `<div style="color:var(--accent-emerald); font-weight:700;">visitor@ashith-macbook:~$ ${val}</div><div style="color:#e2e8f0; white-space:pre-wrap; margin-top:0.25rem;">${res}</div>`;
      terminalOutput.appendChild(newEntry);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  });
}

/* -------------------------------------------------------------------
   8. Interactive Case Study Modal
   ------------------------------------------------------------------- */
const CASE_STUDIES = {
  ewaste: {
    title: "E-Waste Master ERP: Architecture & Technical Deep-Dive",
    badge: "Flagship MCA Capstone Project",
    content: `
      <h4>🎯 The Challenge</h4>
      <p>Traditional electronic waste processing hubs face serious inventory inflation risks and lack programmatic tracking for hazardous commodities like Lithium-ion batteries. Physical weights must be mathematically matched against extracted raw materials.</p>
      
      <h4>⚡ Architecture & Algorithmic Validation</h4>
      <p>Built with <strong>FastAPI</strong> and <strong>SQLAlchemy</strong>, the application enforces mathematical boundary conditions: total extracted yields can never exceed inbound raw weights. In-memory cryptographic PDF compliance certificates with <strong>SHA-256</strong> hashes are minted using <strong>ReportLab</strong> and verifiable via dynamic QR codes.</p>
      
      <h4>🛡️ Zero-Trust Security</h4>
      <p>Strict Role-Based Access Control (RBAC) separates Admin, Worker, Driver, and Buyer dashboards using bcrypt password hashing and tamper-proof JSON Web Token (JWT) Bearer tokens.</p>
      
      <h4>📊 Key Metrics</h4>
      <ul>
        <li>100% automated material reconciliation eliminating artificial inventory inflation.</li>
        <li>Sub-150ms API response latency on asynchronous FastAPI event loops.</li>
        <li>Production deployment ready for both Vercel Serverless and Render.</li>
      </ul>
    `
  },
  edumerge: {
    title: "Edumerge Smart Attendance: Architecture Deep-Dive",
    badge: "Enterprise Academic Workflow",
    content: `
      <h4>🎯 The Challenge</h4>
      <p>Manual classroom attendance logging suffers from human entry errors, proxy attendance, and delayed reporting to institutional administration.</p>
      
      <h4>⚡ Engineering Solution</h4>
      <p>Designed a structured multi-tier attendance logging engine in <strong>Django</strong> with normalized relational database models, fast date-range filtering, and automated calculation of attendance thresholds.</p>
      
      <h4>📊 Key Features</h4>
      <ul>
        <li>Teacher and student role separation with isolated administrative privileges.</li>
        <li>Automated warning notifications when attendance falls below 75% criteria.</li>
        <li>Instant Excel/CSV audit export for university semester filings.</li>
      </ul>
    `
  },
  spottr: {
    title: "Spottr Fitness Backend: Engineering Deep-Dive",
    badge: "High-Throughput Fitness Analytics API",
    content: `
      <h4>🎯 The Challenge</h4>
      <p>Fitness applications require rapid, structured workout tracking with real-time volume calculations (Sets × Reps × Weight) without UI lag during gym sessions.</p>
      
      <h4>⚡ Engineering Solution</h4>
      <p>Developed an asynchronous REST API in <strong>FastAPI</strong> utilizing Pydantic data schemas, automatic request validation, and SQLAlchemy ORM bindings to model personal workout splits, rest intervals, and volume progressions.</p>
      
      <h4>📊 Key Metrics</h4>
      <ul>
        <li>Sub-50ms query latency for personal record lookups.</li>
        <li>Complete RESTful lifecycle with comprehensive Swagger UI documentation.</li>
      </ul>
    `
  }
};

function openCaseStudy(key) {
  const modal = document.getElementById('case-study-modal');
  const modalContent = document.getElementById('case-study-modal-body');
  const study = CASE_STUDIES[key];
  if (!modal || !modalContent || !study) return;

  modalContent.innerHTML = `
    <span class="project-type-badge" style="margin-bottom:0.75rem; display:inline-block;">${study.badge}</span>
    <h2 style="font-size:1.6rem; margin-bottom:1.25rem;">${study.title}</h2>
    <div style="font-size:0.95rem; color:var(--text-secondary); line-height:1.7;">
      ${study.content}
    </div>
  `;
  modal.classList.add('active');
}

function closeCaseStudy() {
  const modal = document.getElementById('case-study-modal');
  if (modal) modal.classList.remove('active');
}

/* -------------------------------------------------------------------
   9. Contact Form & Toast
   ------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('c-name').value;
    const email = document.getElementById('c-email').value;
    const msg = document.getElementById('c-msg').value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Ashith,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
    
    showToast("Opening email client... ✉️");
    window.location.href = `mailto:ashithsanjayrao1@gmail.com?subject=${subject}&body=${body}`;
  });
}

function showToast(message) {
  let toast = document.getElementById('portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolio-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.display = 'flex';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3200);
}
