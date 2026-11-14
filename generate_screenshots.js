const sharp = require('sharp');
const fs = require('fs');

async function createScreenshots() {
  // Screenshot 1: Antigravity IDE Terminal & Agent Planning Session (Slide 5)
  const svg1 = `
  <svg width="840" height="420" viewBox="0 0 840 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="840" height="420" rx="10" fill="#0f172a" stroke="#334155" stroke-width="2"/>
    <!-- Window Bar -->
    <rect width="840" height="36" rx="10" fill="#1e293b"/>
    <circle cx="20" cy="18" r="6" fill="#ef4444"/>
    <circle cx="38" cy="18" r="6" fill="#f59e0b"/>
    <circle cx="56" cy="18" r="6" fill="#10b981"/>
    <text x="420" y="23" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="13">Google Antigravity v2.0 - Agent Execution Sandbox</text>
    
    <!-- Terminal Content -->
    <g font-family="monospace" font-size="15" fill="#f8fafc">
      <text x="24" y="70" fill="#38bdf8">agent@antigravity:~/fcis-portal$ <tspan fill="#ffffff">antigravity run --autonomous "Build IU FCIS Exam Papers Archive"</tspan></text>
      
      <text x="24" y="105" fill="#64748b">--------------------------------------------------------------------------------</text>
      <text x="24" y="130" fill="#38bdf8">[AGENT PLANNER]</text>
      <text x="160" y="130" fill="#cbd5e1">Decomposing CIT 3110 project requirements into execution phases...</text>
      
      <text x="36" y="165" fill="#10b981">✓ Phase 1: Synthesize exam datasets for 4 departments (CIT 3110, IS 3102, CS 2201, CIT 2405)</text>
      <text x="36" y="195" fill="#10b981">✓ Phase 2: Construct responsive Tailwind CSS UI with search bar &amp; quick-filter pills</text>
      <text x="36" y="225" fill="#10b981">✓ Phase 3: Implement client-side search engine and in-memory revision bookmark state</text>
      <text x="36" y="255" fill="#10b981">✓ Phase 4: Build interactive modal with collapsible official model answer keys</text>
      
      <text x="24" y="295" fill="#64748b">--------------------------------------------------------------------------------</text>
      <text x="24" y="325" fill="#f59e0b">[SANDBOX VERIFY]</text>
      <text x="180" y="325" fill="#cbd5e1">Validating index.html (6 Exam Papers, 14 Questions, 0 Syntax Errors)</text>
      <text x="24" y="360" fill="#10b981">[SUCCESS 200 OK]</text>
      <text x="180" y="360" fill="#38bdf8">Live preview hosted at: https://antigravity.luch.dev/site/... [Ready]</text>
      <text x="24" y="395" fill="#94a3b8">Execution Time: 1.84s | Memory: 42.1MB | Sandbox Mode: Strict (Passed)</text>
    </g>
  </svg>`;

  // Screenshot 2: FCIS Portal Main Search & Filter Interface (Slide 5/6)
  const svg2 = `
  <svg width="840" height="420" viewBox="0 0 840 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="840" height="420" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Top Academic Banner -->
    <rect width="840" height="28" rx="10" fill="#0f172a"/>
    <text x="20" y="19" fill="#94a3b8" font-family="sans-serif" font-size="11">Islamic University of Madinah • FCIS</text>
    <text x="820" y="19" text-anchor="end" fill="#38bdf8" font-family="sans-serif" font-size="11">CIT 3110 Group 2 • Antigravity v2.0</text>
    
    <!-- Header -->
    <rect y="28" width="840" height="52" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    <rect x="20" y="38" width="32" height="32" rx="6" fill="#1d4ed8"/>
    <text x="36" y="59" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="14">IU</text>
    <text x="62" y="52" fill="#0f172a" font-family="sans-serif" font-weight="bold" font-size="14">FCIS Past Exam Papers Portal</text>
    <text x="62" y="68" fill="#64748b" font-family="sans-serif" font-size="10">Final &amp; Midterm Preparation Archive</text>
    
    <rect x="670" y="42" width="150" height="26" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="745" y="59" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif" font-weight="bold" font-size="11">Saved for Revision: 1</text>
    
    <!-- Hero / Search area -->
    <rect y="80" width="840" height="90" fill="#0f172a"/>
    <text x="30" y="112" fill="#38bdf8" font-family="sans-serif" font-weight="bold" font-size="11">FINAL EXAM PREPARATION HUB</text>
    <text x="30" y="136" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="18">Search Previous Years' Exam Questions &amp; Model Solutions</text>
    
    <!-- Search Bar Card -->
    <rect x="20" y="152" width="800" height="42" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="36" y="177" fill="#64748b" font-family="sans-serif" font-size="12">Search course (e.g., CIT 3110, SQL, Networking)...</text>
    <rect x="520" y="158" width="130" height="30" rx="6" fill="#f1f5f9"/>
    <text x="535" y="177" fill="#334155" font-family="sans-serif" font-size="11">Dept: All (CS/IS/IT)</text>
    <rect x="660" y="158" width="70" height="30" rx="6" fill="#f1f5f9"/>
    <text x="675" y="177" fill="#334155" font-family="sans-serif" font-size="11">Year: All</text>
    <rect x="738" y="158" width="74" height="30" rx="6" fill="#f1f5f9"/>
    <text x="752" y="177" fill="#334155" font-family="sans-serif" font-size="11">Reset</text>
    
    <!-- Filter Pills -->
    <text x="30" y="214" fill="#64748b" font-family="sans-serif" font-size="11">Quick Filters:</text>
    <rect x="100" y="202" width="150" height="20" rx="10" fill="#1d4ed8"/>
    <text x="175" y="216" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="10">CIT 3110 (Digital Tools) [Active]</text>
    <rect x="260" y="202" width="140" height="20" rx="10" fill="#e2e8f0"/>
    <text x="330" y="216" text-anchor="middle" fill="#475569" font-family="sans-serif" font-size="10">CS 2201 (Data Structures)</text>
    <rect x="410" y="202" width="135" height="20" rx="10" fill="#e2e8f0"/>
    <text x="477" y="216" text-anchor="middle" fill="#475569" font-family="sans-serif" font-size="10">IS 3102 (Database Systems)</text>
    
    <!-- Exam Paper Cards Grid -->
    <!-- Card 1 -->
    <rect x="20" y="234" width="390" height="170" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
    <rect x="32" y="246" width="70" height="20" rx="4" fill="#eff6ff"/>
    <text x="67" y="260" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif" font-weight="bold" font-size="11">CIT 3110</text>
    <rect x="290" y="246" width="60" height="20" rx="4" fill="#fef3c7"/>
    <text x="320" y="260" text-anchor="middle" fill="#92400e" font-family="sans-serif" font-weight="bold" font-size="10">★ Saved</text>
    <text x="32" y="286" fill="#0f172a" font-family="sans-serif" font-weight="bold" font-size="14">Explore a Digital Tool or Technology</text>
    <text x="32" y="304" fill="#64748b" font-family="sans-serif" font-size="11">Final Exam 2025 • Duration: 120 Mins • 40 Marks</text>
    <text x="32" y="326" fill="#475569" font-family="sans-serif" font-size="10">Topics: Agentic IDEs • Prompt Engineering • Cloud Privacy</text>
    <line x1="32" y1="344" x2="398" y2="344" stroke="#f1f5f9" stroke-width="1"/>
    <text x="32" y="376" fill="#64748b" font-family="sans-serif" font-size="11">3 Exam Questions Included</text>
    <rect x="260" y="358" width="138" height="30" rx="6" fill="#0f172a"/>
    <text x="329" y="378" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="11">View Questions &amp; Key</text>
    
    <!-- Card 2 -->
    <rect x="430" y="234" width="390" height="170" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    <rect x="442" y="246" width="60" height="20" rx="4" fill="#f1f5f9"/>
    <text x="472" y="260" text-anchor="middle" fill="#334155" font-family="sans-serif" font-weight="bold" font-size="11">IS 3102</text>
    <text x="442" y="286" fill="#0f172a" font-family="sans-serif" font-weight="bold" font-size="14">Database Management Systems</text>
    <text x="442" y="304" fill="#64748b" font-family="sans-serif" font-size="11">Final Exam 2025 • Duration: 120 Mins • 50 Marks</text>
    <text x="442" y="326" fill="#475569" font-family="sans-serif" font-size="10">Topics: SQL Joins • 3NF Normalization • ACID Transactions</text>
    <line x1="442" y1="344" x2="808" y2="344" stroke="#f1f5f9" stroke-width="1"/>
    <text x="442" y="376" fill="#64748b" font-family="sans-serif" font-size="11">3 Exam Questions Included</text>
    <rect x="670" y="358" width="138" height="30" rx="6" fill="#0f172a"/>
    <text x="739" y="378" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="11">View Questions &amp; Key</text>
  </svg>`;

  // Screenshot 3: Modal Question & Step-by-Step Model Answer Key (Slide 6)
  const svg3 = `
  <svg width="840" height="420" viewBox="0 0 840 420" xmlns="http://www.w3.org/2000/svg">
    <!-- Backdrop -->
    <rect width="840" height="420" fill="#0f172a" opacity="0.85"/>
    
    <!-- Modal Window -->
    <rect x="70" y="25" width="700" height="370" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
    
    <!-- Modal Header -->
    <rect x="70" y="25" width="700" height="52" rx="10" fill="#0f172a"/>
    <text x="90" y="46" fill="#38bdf8" font-family="sans-serif" font-weight="bold" font-size="10">CIT 3110 • FINAL EXAM (2025)</text>
    <text x="90" y="65" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="14">Explore a Digital Tool or Technology</text>
    <text x="690" y="55" fill="#94a3b8" font-family="sans-serif" font-size="14">✕</text>
    
    <!-- Question 1 Container -->
    <rect x="90" y="90" width="660" height="195" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <rect x="105" y="102" width="95" height="22" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="152" y="117" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif" font-weight="bold" font-size="11">Q1 (10 Marks)</text>
    <text x="650" y="117" text-anchor="end" fill="#1d4ed8" font-family="sans-serif" font-weight="bold" font-size="11">Hide Model Answer ▲</text>
    
    <text x="105" y="142" fill="#0f172a" font-family="sans-serif" font-weight="bold" font-size="12">Explain the primary difference between a traditional code autocomplete extension and an</text>
    <text x="105" y="158" fill="#0f172a" font-family="sans-serif" font-weight="bold" font-size="12">agent-first development environment such as Google Antigravity.</text>
    
    <!-- Answer Box (Revealed) -->
    <rect x="105" y="174" width="630" height="98" rx="6" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
    <text x="120" y="194" fill="#065f46" font-family="sans-serif" font-weight="bold" font-size="11">✓ Official Model Answer Key (Grading Rubric):</text>
    <text x="120" y="214" fill="#064e3b" font-family="sans-serif" font-size="11">"A traditional autocomplete tool only suggests single lines or snippets inside an active file.</text>
    <text x="120" y="232" fill="#064e3b" font-family="sans-serif" font-size="11">In contrast, an agent-first IDE like Google Antigravity uses autonomous AI agents to create</text>
    <text x="120" y="250" fill="#064e3b" font-family="sans-serif" font-size="11">structured multi-step plans (tasks.md), modify multiple files, and verify results in a sandbox."</text>
    
    <!-- Question 2 (Collapsed) -->
    <rect x="90" y="295" width="660" height="50" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    <rect x="105" y="307" width="95" height="22" rx="4" fill="#f1f5f9"/>
    <text x="152" y="322" text-anchor="middle" fill="#334155" font-family="sans-serif" font-weight="bold" font-size="11">Q2 (15 Marks)</text>
    <text x="215" y="322" fill="#0f172a" font-family="sans-serif" font-size="11">What are Interactive Artifacts in Google Antigravity and how do they...</text>
    <text x="650" y="322" text-anchor="end" fill="#2563eb" font-family="sans-serif" font-size="11">Show Answer ▼</text>
    
    <!-- Modal Footer -->
    <rect x="70" y="355" width="700" height="40" fill="#f1f5f9"/>
    <text x="90" y="379" fill="#64748b" font-family="sans-serif" font-size="10">Islamic University of Madinah • Faculty of Computer &amp; Information Systems</text>
    <rect x="580" y="362" width="170" height="26" rx="6" fill="#1d4ed8"/>
    <text x="665" y="379" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="10">Print / Save Exam PDF</text>
  </svg>`;

  await sharp(Buffer.from(svg1)).png().toFile('screenshot_1_agent.png');
  await sharp(Buffer.from(svg2)).png().toFile('screenshot_2_portal.png');
  await sharp(Buffer.from(svg3)).png().toFile('screenshot_3_modal.png');
  console.log('Screenshots generated successfully!');
}

createScreenshots().catch(console.error);
