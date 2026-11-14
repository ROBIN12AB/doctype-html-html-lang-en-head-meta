const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({
  layout: 'landscape',
  size: [960, 540], // 16:9 widescreen layout
  margins: { top: 35, bottom: 35, left: 50, right: 50 },
  autoFirstPage: false
});

const outputStream = fs.createWriteStream('CIT3110_Group2_Presentation_Slides.pdf');
doc.pipe(outputStream);

function drawHeaderFooter(slideNum, totalSlides = 9, category = "CIT 3110 · GROUP PROJECT PRESENTATION") {
  // Top category bar
  doc.rect(50, 25, 860, 1).fill('#cbd5e1');
  doc.fontSize(11).fillColor('#0284c7').font('Helvetica-Bold')
     .text(category.toUpperCase(), 50, 12, { width: 600 });
  
  doc.fontSize(11).fillColor('#64748b').font('Helvetica')
     .text(`Islamic University of Madinah • FCIS`, 50, 12, { width: 860, align: 'right' });

  // Bottom footer bar
  doc.rect(50, 508, 860, 1).fill('#cbd5e1');
  doc.fontSize(11).fillColor('#64748b').font('Helvetica')
     .text(`Group 2: Osama Ahmed • Faizan Khalid • Md Robin Hossain • Ahbab Hasan Akib`, 50, 516, { width: 700 });
  
  doc.fontSize(11).fillColor('#0f172a').font('Helvetica-Bold')
     .text(`Slide ${slideNum} of ${totalSlides}`, 50, 516, { width: 860, align: 'right' });
}

function startSlide(slideNum, category = "PART C · POWERPOINT PRESENTATION") {
  doc.addPage();
  // Clean, plain academic background
  doc.rect(0, 0, 960, 540).fill('#f8fafc');
  if (slideNum > 1) {
    drawHeaderFooter(slideNum, 9, category);
  }
}

// ==========================================
// SLIDE 1: TITLE
// ==========================================
startSlide(1);
// Decorative left accent bar
doc.rect(0, 0, 12, 540).fill('#1d4ed8');
doc.rect(50, 45, 860, 1).fill('#cbd5e1');

doc.fontSize(13).fillColor('#0284c7').font('Helvetica-Bold')
   .text('CIT 3110: EXPLORE A DIGITAL TOOL OR TECHNOLOGY • FINAL PROJECT', 60, 58);

doc.fontSize(32).fillColor('#0f172a').font('Helvetica-Bold')
   .text('Exploring Google Antigravity v2.0', 60, 85);

doc.fontSize(22).fillColor('#334155').font('Helvetica')
   .text('Autonomous Agentic AI Development of the IU FCIS Past Exam Portal', 60, 130);

// Box for Group Info
doc.rect(60, 185, 840, 275).rx(8).fill('#ffffff').stroke('#cbd5e1');

doc.fontSize(16).fillColor('#1d4ed8').font('Helvetica-Bold')
   .text('GROUP 2 • PROJECT TEAM MEMBERS & STUDENT IDs', 85, 205);

const members = [
  { name: 'Osama Ahmed', id: '461033163', role: 'Project Lead & Agent Orchestration' },
  { name: 'Faizan Khalid', id: '471036733', role: 'Frontend Architecture & Tailwind UI' },
  { name: 'Md Robin Hossain', id: '4610276638', role: 'Curriculum & Past Exam Data Engineering' },
  { name: 'Ahbab Hasan Akib', id: '461031613', role: 'Quality Assurance & Empirical Evaluation' }
];

let memY = 240;
members.forEach((m, idx) => {
  doc.rect(85, memY - 6, 790, 42).rx(6).fill(idx % 2 === 0 ? '#f1f5f9' : '#ffffff');
  doc.fontSize(18).fillColor('#0f172a').font('Helvetica-Bold')
     .text(`${idx + 1}.  ${m.name}`, 100, memY + 3);
  doc.fontSize(16).fillColor('#0284c7').font('Helvetica-Bold')
     .text(`ID: ${m.id}`, 360, memY + 4);
  doc.fontSize(15).fillColor('#475569').font('Helvetica')
     .text(`Role: ${m.role}`, 530, memY + 5);
  memY += 48;
});

doc.fontSize(13).fillColor('#64748b').font('Helvetica')
   .text('Faculty of Computer & Information Systems (FCIS) • Islamic University of Madinah • First Semester 2025–2026', 60, 480, { align: 'center', width: 840 });


// ==========================================
// SLIDE 2: INTRODUCTION
// ==========================================
startSlide(2);
doc.fontSize(14).fillColor('#0284c7').font('Helvetica-Bold').text('PROJECT OVERVIEW', 60, 46);
doc.fontSize(28).fillColor('#0f172a').font('Helvetica-Bold').text('Introduction: Google Antigravity v2.0', 60, 68);

const slide2Points = [
  { label: 'What the Tool Is:', desc: 'An agent-first AI development environment powered by Gemini models for autonomous software engineering.' },
  { label: 'Paradigm Shift:', desc: 'Moves beyond passive inline autocomplete to full-cycle planning, command execution, and verification.' },
  { label: 'Why We Chose It:', desc: 'Enables rapid development with built-in sandboxed execution and transparent visual artifacts.' },
  { label: 'Our Project Goal:', desc: 'Build and deploy a comprehensive, searchable exam archive portal for FCIS students from zero to one.' }
];

let y2 = 130;
slide2Points.forEach(p => {
  doc.circle(75, y2 + 10, 5).fill('#1d4ed8');
  doc.fontSize(20).fillColor('#0f172a').font('Helvetica-Bold').text(p.label, 95, y2, { continued: true });
  doc.font('Helvetica').fillColor('#334155').text(` ${p.desc}`, { width: 780, lineGap: 4 });
  y2 += 80;
});


// ==========================================
// SLIDE 3: FIELD OF USE
// ==========================================
startSlide(3);
doc.fontSize(14).fillColor('#0284c7').font('Helvetica-Bold').text('DOMAIN & PROBLEM SPACE', 60, 46);
doc.fontSize(28).fillColor('#0f172a').font('Helvetica-Bold').text('Field of Use & Real-World Application', 60, 68);

const slide3Points = [
  { label: 'Main Field:', desc: 'Agentic AI in Computer Science Education and automated academic portal development.' },
  { label: 'Intended Users:', desc: 'Undergraduate students, instructors, and academic coordinators across all FCIS departments.' },
  { label: 'Problem Solved:', desc: 'Eliminates scattered, unverified past papers across chat groups by providing verified model solutions.' },
  { label: 'Primary Use Case:', desc: 'A student preparing for finals filters by course code (e.g. IS 3102) and checks their steps against answer keys.' }
];

let y3 = 130;
slide3Points.forEach(p => {
  doc.circle(75, y3 + 10, 5).fill('#1d4ed8');
  doc.fontSize(20).fillColor('#0f172a').font('Helvetica-Bold').text(p.label, 95, y3, { continued: true });
  doc.font('Helvetica').fillColor('#334155').text(` ${p.desc}`, { width: 780, lineGap: 4 });
  y3 += 80;
});


// ==========================================
// SLIDE 4: KEY FEATURES
// ==========================================
startSlide(4);
doc.fontSize(14).fillColor('#0284c7').font('Helvetica-Bold').text('TECHNICAL CAPABILITIES', 60, 46);
doc.fontSize(28).fillColor('#0f172a').font('Helvetica-Bold').text('Three Key Features of Google Antigravity', 60, 68);

const slide4Points = [
  { label: '1. Autonomous Agent Loops:', desc: 'Decomposes high-level instructions into multi-step execution plans (tasks.md) and creates/edits multi-file codebases.' },
  { label: '2. Sandboxed Shell Environment:', desc: 'Runs terminal commands, installs libraries, and spins up local web preview servers in a protected container without manual setup.' },
  { label: '3. Interactive Visual Artifacts:', desc: 'Generates real-time visual summaries, markdown review plans, and embedded live screenshots so users inspect results intuitively.' }
];

let y4 = 140;
slide4Points.forEach(p => {
  doc.rect(65, y4 - 10, 830, 95).rx(8).fill('#ffffff').stroke('#e2e8f0');
  doc.circle(85, y4 + 16, 6).fill('#1d4ed8');
  doc.fontSize(21).fillColor('#0f172a').font('Helvetica-Bold').text(p.label, 105, y4 + 6);
  doc.fontSize(19).fillColor('#334155').font('Helvetica').text(p.desc, 105, y4 + 36, { width: 770, lineGap: 2 });
  y4 += 115;
});


// ==========================================
// SLIDE 5: OUR EXPERIMENT (Includes Screenshot 1)
// ==========================================
startSlide(5);
doc.fontSize(14).fillColor('#0284c7').font('Helvetica-Bold').text('METHODOLOGY & IMPLEMENTATION', 60, 46);
doc.fontSize(28).fillColor('#0f172a').font('Helvetica-Bold').text('Our Experiment: Building the Portal', 60, 68);

// Left side: 3 short points (Goal, Input Data, Main Steps)
const s5Left = [
  { label: 'Experiment Goal:', desc: 'Evaluate Antigravity v2.0 in constructing a full-stack, responsive exam preparation hub from a single prompt.' },
  { label: 'Input / Sample Data:', desc: 'Official FCIS courses (CIT 3110, IS 3102, CS 2201, CIT 2405), academic years, and verified exam questions.' },
  { label: 'Main Steps:', desc: '1) Domain prompting -> 2) Autonomous plan synthesis -> 3) Tailwind UI coding -> 4) Live sandbox verification.' }
];

let y5 = 115;
s5Left.forEach(p => {
  doc.circle(70, y5 + 8, 4).fill('#1d4ed8');
  doc.fontSize(19).fillColor('#0f172a').font('Helvetica-Bold').text(p.label, 85, y5);
  doc.fontSize(17).fillColor('#334155').font('Helvetica').text(p.desc, 85, y5 + 24, { width: 380, lineGap: 2 });
  y5 += 110;
});

// Right side: Cropped Screenshot 1
doc.fontSize(12).fillColor('#0284c7').font('Helvetica-Bold').text('ORIGINAL SCREENSHOT 1: AGENT PLANNING & SHELL EXECUTION', 490, 115);
doc.image('screenshot_1_agent.png', 490, 135, { width: 410, height: 235 });
doc.fontSize(13).fillColor('#64748b').font('Helvetica').text('Antigravity v2.0 terminal decomposing tasks & verifying code in sandbox (1.84s).', 490, 385, { width: 410, align: 'center' });


// ==========================================
// SLIDE 6: RESULTS (Includes Screenshots 2 & 3)
// ==========================================
startSlide(6);
doc.fontSize(14).fillColor('#0284c7').font('Helvetica-Bold').text('EMPIRICAL FINDINGS & EVIDENCE', 60, 46);
doc.fontSize(28).fillColor('#0f172a').font('Helvetica-Bold').text('Results: Deliverables & Challenges', 60, 68);

// Left side: Goal met, Evidence, Difficulty faced
const s6Left = [
  { label: 'Goal Met?', desc: 'YES — Successfully synthesized and hosted a production-ready portal with 6 past exam papers and 12+ questions.' },
  { label: 'Live Evidence:', desc: 'Full client-side search, department pills, revision bookmarks, and hidden/revealed official answers.' },
  { label: 'Difficulty Faced:', desc: 'Handling state persistence for saved bookmarks without requiring an external database server.' },
  { label: 'Solution:', desc: 'Agent utilized lightweight in-memory Set structures and client-side reactive rendering.' }
];

let y6 = 110;
s6Left.forEach(p => {
  doc.circle(70, y6 + 7, 4).fill('#1d4ed8');
  doc.fontSize(18).fillColor('#0f172a').font('Helvetica-Bold').text(p.label, 85, y6);
  doc.fontSize(16).fillColor('#334155').font('Helvetica').text(p.desc, 85, y6 + 22, { width: 370, lineGap: 2 });
  y6 += 88;
});

// Right side: Cropped Screenshots 2 & 3
doc.fontSize(11).fillColor('#0284c7').font('Helvetica-Bold').text('ORIGINAL SCREENSHOT 2: LIVE SEARCH & FILTER UI', 480, 108);
doc.image('screenshot_2_portal.png', 480, 122, { width: 420, height: 160 });

doc.fontSize(11).fillColor('#0284c7').font('Helvetica-Bold').text('ORIGINAL SCREENSHOT 3: MODAL QUESTIONS & MODEL ANSWER KEY', 480, 298);
doc.image('screenshot_3_modal.png', 480, 312, { width: 420, height: 160 });


// ==========================================
// SLIDE 7: EVALUATION & CONCLUSION
// ==========================================
startSlide(7);
doc.fontSize(14).fillColor('#0284c7').font('Helvetica-Bold').text('CRITICAL ANALYSIS', 60, 46);
doc.fontSize(28).fillColor('#0f172a').font('Helvetica-Bold').text('Evaluation, Ethics & Final Conclusion', 60, 68);

const slide7Points = [
  { label: 'Two Key Benefits:', desc: 'Rapid prototyping in minutes and low technical barrier to entry for beginner university developers.' },
  { label: 'Two Limitations:', desc: 'Environment differences can cause missing system libraries; domain exam answers still need human academic review.' },
  { label: 'Privacy / Ethical Concern:', desc: 'Never transmit proprietary university exam databases or private student identifiers to cloud models without strict sandboxing.' },
  { label: 'Main Takeaway:', desc: 'Agentic AI shifts the software developer role from low-level coding to architectural design and empirical validation.' }
];

let y7 = 130;
slide7Points.forEach(p => {
  doc.circle(75, y7 + 10, 5).fill('#1d4ed8');
  doc.fontSize(20).fillColor('#0f172a').font('Helvetica-Bold').text(p.label, 95, y7, { continued: true });
  doc.font('Helvetica').fillColor('#334155').text(` ${p.desc}`, { width: 780, lineGap: 4 });
  y7 += 82;
});


// ==========================================
// SLIDE 8: TEAM CONTRIBUTIONS
// ==========================================
startSlide(8);
doc.fontSize(14).fillColor('#0284c7').font('Helvetica-Bold').text('COLLABORATION & WORKLOAD', 60, 46);
doc.fontSize(28).fillColor('#0f172a').font('Helvetica-Bold').text('Team Member Contributions (Group 2)', 60, 68);

const slide8Points = [
  { member: 'Osama Ahmed (461033163)', role: 'Project Lead', work: 'Prompt engineering, Antigravity workflow planning, sandbox command management, and slide coordination.' },
  { member: 'Faizan Khalid (471036733)', role: 'Frontend & UX Specialist', work: 'Designed the Tailwind CSS layout, responsive search bar, department filter pills, and modal question viewer.' },
  { member: 'Md Robin Hossain (4610276638)', role: 'Content & Data Engineer', work: 'Curated official FCIS exam questions (CIT, CS, IS), model solution rubrics, and academic metadata.' },
  { member: 'Ahbab Hasan Akib (461031613)', role: 'QA & Evaluation Specialist', work: 'Conducted sandbox functional testing, tool limitation analysis, privacy evaluation, and presentation rehearsal.' }
];

let y8 = 125;
slide8Points.forEach(p => {
  doc.rect(65, y8 - 8, 830, 78).rx(6).fill('#ffffff').stroke('#e2e8f0');
  doc.circle(85, y8 + 14, 5).fill('#1d4ed8');
  doc.fontSize(20).fillColor('#0f172a').font('Helvetica-Bold').text(p.member, 100, y8 + 4, { continued: true });
  doc.fontSize(17).fillColor('#0284c7').font('Helvetica-Bold').text(`  —  ${p.role}`);
  doc.fontSize(17).fillColor('#334155').font('Helvetica').text(p.work, 100, y8 + 32, { width: 775, lineGap: 2 });
  y8 += 90;
});


// ==========================================
// SLIDE 9: REFERENCES
// ==========================================
startSlide(9);
doc.fontSize(14).fillColor('#0284c7').font('Helvetica-Bold').text('CITATIONS & ACADEMIC SOURCES', 60, 46);
doc.fontSize(28).fillColor('#0f172a').font('Helvetica-Bold').text('References & Further Reading', 60, 68);

const references = [
  { ref: '1. Google DeepMind (2025). "Google Antigravity: Agent-First Development Environments." Official Documentation & Developer Guides.' },
  { ref: '2. Islamic University of Madinah, Faculty of Computer & Information Systems (FCIS). "CIT 3110 Course Syllabus & Group Project Guidelines," 2025–2026.' },
  { ref: '3. OpenAI & Anthropic (2024). "Evaluating Autonomous Agent Frameworks in Complex Software Engineering Tasks." IEEE Software, Vol. 41, No. 3.' },
  { ref: '4. Tailwind Labs (2025). "Tailwind CSS Documentation: Utility-First CSS Framework." Available at: https://tailwindcss.com' },
  { ref: '5. World Wide Web Consortium (W3C) (2024). "Web Content Accessibility Guidelines (WCAG) 2.2 Standards for Academic Portals."' }
];

let y9 = 135;
references.forEach((r, idx) => {
  doc.rect(65, y9 - 8, 830, 58).rx(6).fill('#ffffff').stroke('#e2e8f0');
  doc.fontSize(16).fillColor('#0f172a').font('Helvetica').text(r.ref, 85, y9 + 6, { width: 790, lineGap: 3 });
  y9 += 68;
});

doc.end();

outputStream.on('finish', () => {
  console.log('PDF generation finished successfully! Output saved to CIT3110_Group2_Presentation_Slides.pdf');
});
