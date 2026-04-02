/* ═══════════════════════════════════════════════════════
   AI READINESS FRICTION DIAGNOSTIC — CONTENT DATA
   Edit this file to update all diagnostic content.

   Each friction object contains:
     id       — internal identifier (do not change)
     name     — display name
     desc     — short description shown in results hero
     qs       — 2 diagnostic questions shown to the user
     insight  — "Why this matters" paragraph
     reframe  — "What the evidence shows" pull quote
     recs     — array of 3 recommended actions
═══════════════════════════════════════════════════════ */

const FRICTIONS = [
  {
    id: 'pace',
    name: 'Pace',
    desc: 'The widening gap between the speed of AI-driven workplace change and the slower cadence of curriculum and institutional decision-making.',
    qs: [
      'How are you monitoring the distance between AI developments in the workplace and what is currently reflected in your curricula?',
      'How are you building sufficient agility into your curriculum review process to respond to labour market shifts as they emerge?'
    ],
    insight: 'Your institution may be teaching yesterday\'s skills for tomorrow\'s workforce. AI capabilities are evolving faster than traditional curriculum cycles — and the gap is widening faster than most leaders recognise.',
    reframe: '"Many leaders believe annual curriculum reviews are sufficient. The evidence shows AI-relevant skills are shifting on a quarterly cycle — institutions that wait fall measurably behind."',
    recs: [
      'Establish a real-time labour market intelligence feed connected directly to curriculum governance',
      'Create a rapid curriculum update pathway that bypasses standard review timelines for AI-critical content',
      'Build faculty AI fluency programmes that run in parallel with curriculum updates, not after them'
    ]
  },
  {
    id: 'connection',
    name: 'Connection',
    desc: 'Weak feedback loops between education and employers, reducing alignment between workforce needs and learning design.',
    qs: [
      'How are you systematically capturing shifting workforce requirements from employers — and how rapidly does that intelligence reach curriculum decisions?',
      'How are your academic leaders actively collaborating with industry partners to shape graduate outcomes?'
    ],
    insight: 'Strong employer relationships are the bridge between institutional intent and graduate outcomes. Without systematic intelligence-gathering, even well-designed programmes miss the mark on day-one readiness.',
    reframe: '"Many institutions have employer advisory boards. Few have mechanisms that translate employer insight into curriculum change within months, not years — and graduates pay the price."',
    recs: [
      'Create industry advisory boards with binding curriculum input mechanisms and clear delivery timelines',
      'Implement quarterly employer skills surveys with direct links to academic planning processes',
      'Establish co-design frameworks where industry partners actively shape AI module content'
    ]
  },
  {
    id: 'capability',
    name: 'Capability',
    desc: 'Uneven faculty and instructor AI capability, limiting consistent integration of AI into learning experiences.',
    qs: [
      'How are you developing faculty AI capability across the institution as a whole, rather than relying on individual initiative?',
      'How are you sustaining faculty AI development as a continuous institutional commitment rather than a one-time intervention?'
    ],
    insight: 'Individual faculty champions can only take you so far. Institutional AI capability requires systematic investment — not reliance on enthusiastic early adopters carrying the weight for everyone else.',
    reframe: '"Many institutions have run AI training workshops. Few have built the ongoing professional development infrastructure to sustain capability at scale — the difference shows in student outcomes."',
    recs: [
      'Launch a structured faculty AI development programme with mandatory baseline standards for all staff',
      'Create peer learning networks that scale expertise beyond individual champions and early adopters',
      'Invest in continuous professional development rather than treating it as a one-time training event'
    ]
  },
  {
    id: 'governance',
    name: 'Governance',
    desc: 'The absence of clear, practical guidance translating AI access into responsible, governed practice.',
    qs: [
      'How are you communicating institutional AI policy in a way that is experienced as enabling and supportive rather than punitive or restrictive?',
      'How are you embedding ethics and responsible AI use as a core requirement across all disciplines, rather than as a niche or elective provision?'
    ],
    insight: 'Restrictive or unclear AI governance creates a vacuum — students and faculty work around policies rather than within them. Governance that enables rather than prohibits is the foundation for responsible innovation.',
    reframe: '"Many institutions have published AI policies. Few have governance that faculty and students experience as clear, enabling, and consistently applied across departments."',
    recs: [
      'Reframe your AI policy as an enabling framework, not a compliance document',
      'Ensure coherence between institutional policy, departmental guidance, and course-level expectations',
      'Embed ethical AI stewardship as a discipline-wide requirement, not a standalone or optional module'
    ]
  },
  {
    id: 'experience',
    name: 'Experience',
    desc: 'A disconnect between access to AI tools and structured opportunities to practise, apply, and demonstrate real-world capability.',
    qs: [
      'How are you structuring student AI engagement to include both task-level shortcuts as well as authentic workplace applications?',
      'How are you identifying and addressing the competency gaps that represent the most significant barriers to graduate employability?'
    ],
    insight: 'Using AI for shortcuts and using AI for authentic professional work are very different competencies. Without deliberate design, students develop surface-level familiarity rather than genuine workplace readiness.',
    reframe: '"Many institutions have integrated AI tools into courses. Few have mapped those integrations to real employer scenarios and verified that graduates can perform — not just use — AI in professional contexts."',
    recs: [
      'Map AI integration points across the student journey to real workplace scenarios and employer expectations',
      'Create assessments that require demonstration of applied AI competency, not just AI-assisted outputs',
      'Establish graduate AI competency benchmarks in partnership with employers across key disciplines'
    ]
  },
  {
    id: 'skills',
    name: 'Skills',
    desc: 'Misalignment between the capabilities graduates demonstrate and the applied judgment, adaptability, and collaboration employers require.',
    qs: [
      'How are you balancing the development of functional AI proficiency with the cultivation of strategic intelligence, ethical stewardship, and critical human skills?',
      'How are you translating employer feedback on day-one graduate readiness into tangible changes in what and how you teach?'
    ],
    insight: 'Functional AI proficiency is necessary but not sufficient. The graduates who thrive will combine technical fluency with strategic intelligence, ethical judgement, and distinctly human capabilities.',
    reframe: '"Many institutions are focused on AI tool proficiency. Employers consistently report that what they need is graduates who can think with AI, not just operate it."',
    recs: [
      'Map curricula against all four graduate AI capability dimensions: functional, strategic, ethical, and human',
      'Create visible pathways for students to develop and demonstrate AI-adjacent skills across disciplines',
      'Use employer feedback loops to continuously validate and refine the skills portfolio you\'re building'
    ]
  }
];

const RESPONSES = [
  { label: 'Not yet started',   val: 1 },
  { label: 'Early exploration', val: 2 },
  { label: 'Developing',        val: 3 },
  { label: 'Well established',  val: 4 },
  { label: 'Leading practice',  val: 5 }
];
