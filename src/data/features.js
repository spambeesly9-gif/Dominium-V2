export const categories = [
  // ─────────────────────────────────────────────────────────
  // ADMIN PANEL — 6 features
  // ─────────────────────────────────────────────────────────
  {
    slug: 'admin',
    title: 'Admin Panel',
    tagline: 'Full control over every block, unit, and resident in one place.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    subFeatures: [

      // 1 ──────────────────────────────────────────────────
      {
        slug: 'manage-blocks-and-clients',
        title: 'Manage Blocks and Clients',
        description: 'Create, configure, and manage every block, unit, and client in your portfolio from one centralised admin panel. Full client profiles, assignment history, real-time account balances, and bulk data export — everything in a single system.',
        image: '/Images/Condominium Page1.png',
        imageAlt: 'Dominium manage blocks and clients screen — Malta condominium management',
        capabilities: [
          'Create and configure unlimited blocks and buildings',
          'Add clients with full profiles and contact details',
          'Assign clients to one or multiple blocks',
          'Store ARMS numbers, custom fields, and block settings',
          'View per-unit account balance and payment history',
          'Bulk export all block and client data via CSV',
          'Maintain maintenance schedules and insurance records per block',
        ],
        sections: [
          {
            heading: 'Easy Block Setup',
            body: 'Administrators set up new blocks by entering the block name, address, ARMS number, and any custom fields required for their portfolio. The setup process is designed for non-technical users — no IT support needed. Multiple blocks and buildings can be added within minutes, and your entire portfolio can be operational in Dominium within a single day.',
          },
          {
            heading: 'Detailed Block Information',
            body: 'Dominium maintains comprehensive records for every block — including ARMS numbers, maintenance schedules, insurance details, building rules, and contact information for block representatives. All records are centralised and immediately accessible to every authorised team member, eliminating the scattered spreadsheets and shared drives that slow most management teams down.',
          },
          {
            heading: 'Easy Client Setup and Flexible Assignment',
            body: 'Create new client profiles quickly by entering name, contact details, and assigned blocks. Clients can be assigned to one or multiple blocks to accurately reflect their involvement across your portfolio. Bulk import of existing resident records ensures that migrating from a previous system is fast and painless — with zero manual re-entry of client data.',
          },
          {
            heading: 'Bulk Export via CSV',
            body: 'Use the CSV export feature to download complete block and client data simultaneously. Whether migrating data, preparing AGM reports, or auditing your portfolio, bulk export puts the information you need at your fingertips instantly. Every export is structured and clean — ready to open in Excel or import into another system without any additional formatting.',
          },
        ],
      },

      // 2 ──────────────────────────────────────────────────
      {
        slug: 'manage-employees-and-suppliers',
        title: 'Manage Employees and Suppliers',
        description: 'Define roles for your internal team, build a comprehensive supplier directory, assign work orders, and receive automated supplier notifications — all from one system. Full performance tracking and seamless integration with work request management.',
        image: '/Images/Settings_Employees Page.png',
        imageAlt: 'Dominium employee and supplier management screen — Malta',
        capabilities: [
          'Define roles: Admin, Block Manager, Employee',
          'Add and manage internal employee profiles',
          'Build a categorised supplier contact directory',
          'Classify suppliers as full-time staff or part-time contractors',
          'Assign work orders to staff or external contractors',
          'Automatic email notification to supplier on assignment',
          '24-hour automated reminder before scheduled service',
          'Supplier performance tracking and service records',
        ],
        sections: [
          {
            heading: 'Role-Based Access Control',
            body: 'Administrators define precise roles — Admins, Block Managers, and Employees — each with distinct access levels tailored to their responsibilities. This ensures team members see only what is relevant to their role, improving security and keeping operations organised. New roles can be configured at any time as your team grows or responsibilities shift.',
          },
          {
            heading: 'Complete Employee Management',
            body: 'Add new employees to the system, update their details, manage their block assignments, and remove access when needed — all through a straightforward interface. Employee records include contact information, assigned blocks, and a complete log of tasks and work orders completed, giving administrators a clear picture of team workload and performance.',
          },
          {
            heading: 'Comprehensive Supplier Directory',
            body: 'Build and maintain a categorised supplier database covering all specialist services — plumbing, electrical, general maintenance, landscaping, and more. Suppliers are classified as full-time staff or part-time contractors, giving administrators a clear picture of their workforce composition at a glance. Having all contacts organised within Dominium means the right contractor is always just a click away when a work request comes in. Supplier profiles include contact information, service categories, and a complete history of assigned jobs.',
          },
          {
            heading: 'Automated Supplier Notifications',
            body: 'When a work request is assigned to a supplier, Dominium automatically dispatches a detailed email notification containing full task requirements and the scheduled work date. A follow-up reminder is sent automatically 24 hours before the appointment — reducing no-shows, improving service reliability, and saving administrators significant time on coordination.',
          },
          {
            heading: 'Supplier Performance Tracking',
            body: 'Monitor supplier performance directly within the platform. Maintain records of all completed tasks, track response times and service quality, and manage supplier ratings over time. This data empowers administrators to make informed decisions about which contractors to retain — and to hold underperforming suppliers accountable with documented evidence.',
          },
        ],
      },

      // 3 ──────────────────────────────────────────────────
      {
        slug: 'communicate-with-clients',
        title: 'Communicate with Clients',
        description: 'Send targeted announcements, fee notifications, and community updates to all residents or specific blocks. Manage polls, community forums, and two-way communication — all within Dominium, with a full message history and multi-channel delivery.',
        image: '/Images/Communications Page.png',
        imageAlt: 'Dominium communicate with clients screen — Malta',
        capabilities: [
          'Bulk announcements to all residents or specific blocks',
          'Email and push notification delivery',
          'Community forums for resident engagement',
          'Built-in polling for community decisions',
          'Two-way direct messaging with residents',
          'File and document attachments on messages',
          'Full communication history log per client',
        ],
        sections: [
          {
            heading: 'Multi-Channel Client Notification System',
            body: 'Administrators use Dominium\'s notification capabilities to keep residents informed about fee changes, upcoming expenses, maintenance schedules, and community events. Communications flow through email, push notifications, and an integrated online forum — ensuring every resident receives updates through their preferred channel. All outgoing communications are logged automatically against each client\'s profile.',
          },
          {
            heading: 'Direct, Two-Way Interaction',
            body: 'The platform enables residents to respond to announcements, engage directly with administrators, and raise concerns without resorting to phone calls or emails. Administrators can respond to individual queries efficiently while maintaining a complete, searchable communication history. This collaborative approach reduces miscommunication and improves resident satisfaction significantly.',
          },
          {
            heading: 'Transparent Community Engagement',
            body: 'Residents access a dedicated portal to participate in discussions, review community notices, and examine financial statements. Administrators and employees use the integrated forums to provide timely project updates, share important announcements, and gather feedback from the community — creating a culture of transparency that builds long-term trust between residents and management.',
          },
          {
            heading: 'Community Polling',
            body: 'Dominium\'s built-in polling feature enables residents to vote on community matters — from installing security cameras to approving maintenance budgets and choosing amenity upgrades. Polls are managed entirely within the platform, making it easy to demonstrate democratic decision-making and document outcomes for AGM purposes. Results are stored permanently in the system for future reference.',
          },
        ],
      },

      // 4 ──────────────────────────────────────────────────
      {
        slug: 'manage-condominium-fees-and-bank-entries',
        title: 'Manage Condominium Fees and Bank Entries',
        description: 'Issue contribution fee requests to all units, track real-time collection rates, automate overdue reminders, and log all income and expenditure against each condominium with a live financial ledger — all in one place.',
        image: '/Images/Contributions Page.png',
        imageAlt: 'Dominium manage condominium fees and bank entries screen — Malta',
        capabilities: [
          'Assign fees to individual units or entire blocks',
          'Bulk-issue contribution requests with one action',
          'Automatic invoice generation per unit',
          'Real-time collection rate dashboard',
          'Automated overdue payment reminders via email and push',
          'Log income and expenditure against each condominium',
          'Upload receipts and maintain a complete financial ledger',
          'Switch between Cash and Accrual accounting views in the Entries ledger',
          'Track supplier bills separately with Pending Payment and Paid statuses',
        ],
        sections: [
          {
            heading: 'Managing Condominium Fees',
            body: 'Dominium revolutionises the management of contribution fees. Administrators assign fees to individual units or entire blocks with precision, accommodating different fee structures per building and variable share coefficients. Each fee request is automatically calculated, invoiced, and delivered to the resident — with the entire process triggering automatically at each billing cycle.',
          },
          {
            heading: 'Automatic Invoice Generation',
            body: 'Each contribution request is automatically calculated based on predefined condominium fees and any additional charges that arise — such as common area upgrades or one-off repairs. Invoices are generated automatically, delivered to residents, and integrated directly into accounting records, eliminating manual work and ensuring every billing cycle runs consistently and without errors.',
          },
          {
            heading: 'Bank Entries and Expenses',
            body: 'Administrators manage all financial transactions for each condominium directly within Dominium — categorising income and expenditure, and uploading supporting receipts against every entry. The Entries ledger supports both Cash and Accrual accounting views, giving administrators the flexibility to report in whichever method their accountant or regulatory requirements demand. A dedicated Bills module tracks all supplier invoices separately, with clear Pending Payment and Paid statuses so nothing falls through the cracks.',
          },
          {
            heading: 'Comprehensive Financial Oversight',
            body: 'Generate comprehensive income and expenditure statements for each condominium at any time. These statements cover regular fee collections, incidental expenses such as common area improvements, and all financial activity. Any discrepancies between entries and bank records are automatically flagged for review — providing AGM-ready documentation with minimal effort from administrators.',
          },
        ],
      },

      // 5 ──────────────────────────────────────────────────
      {
        slug: 'work-requests',
        title: 'Work Requests',
        description: 'Residents submit maintenance issues directly from their portal. Admins assign jobs to employees or suppliers, track every request from submission to resolution, and keep residents updated in real time — with zero email chains and a complete audit trail.',
        image: '/Images/Maintenance Page1.png',
        imageAlt: 'Dominium work requests management screen — Malta',
        capabilities: [
          'Online issue submission by residents from their portal',
          'QR code generation for contactless issue reporting without login',
          'Instant admin and employee notifications on submission',
          'Assign jobs to internal employees or external suppliers',
          'Track status: New → Requested → In Progress → Finished or Denied',
          'Real-time status updates pushed to residents',
          'Automated supplier reminders 24 hours before scheduled work',
          'Full audit trail of every work request and resolution',
        ],
        sections: [
          {
            heading: 'Receive Reports for Issues from Residents',
            body: 'Dominium provides residents with a straightforward platform to log maintenance requests or concerns seamlessly through their personal portal. Issues can range from maintenance needs to general inquiries — submitted directly through the system without phone calls, emails, or WhatsApp messages. Administrators and block managers receive instant notifications the moment a new report is submitted.',
          },
          {
            heading: 'QR Code for Contactless Reporting',
            body: 'Administrators generate a unique QR code for each building that can be printed and displayed in communal areas. Residents scan the code with their smartphone to submit a report instantly — without needing to open the portal or log in. This removes any friction from the reporting process and increases the volume of issues captured, helping management teams stay ahead of building maintenance proactively.',
          },
          {
            heading: 'Update Status for Client Visibility',
            body: 'Dominium prioritises transparency between administrators and residents. Every request moves through a clear, tracked lifecycle — New, Requested, In Progress, Finished, or Denied — with each status change triggering a real-time notification to the resident. If a request cannot be fulfilled, the Denied status ensures the resident is informed promptly with an explanation. Residents track progress directly from their portal without needing to call or email for updates.',
          },
          {
            heading: 'Assign to the Right Supplier Instantly',
            body: 'Administrators assign reported issues to the appropriate supplier directly within the platform. Suppliers receive detailed email notifications outlining the task requirements, location, and any supporting photos provided by the resident. Automated reminders are sent to suppliers 24 hours before their scheduled service date — reducing no-shows, improving service quality, and keeping residents satisfied.',
          },
          {
            heading: 'Complete Audit Trail',
            body: 'Every work request, status change, supplier assignment, and resolution note is logged with a timestamp in Dominium. This creates a verifiable maintenance record for every building — essential for AGM reporting, insurance claims, and compliance documentation. Administrators always have a clear history of what was requested, who was assigned, and when the work was completed.',
          },
        ],
      },

      // 6 ──────────────────────────────────────────────────
      {
        slug: 'cleaning-and-inspection-reports',
        title: 'Cleaning and Inspection Reports',
        description: 'Schedule, log, and report on every cleaning visit and building inspection across your portfolio. Generate professional reports, track completion status, share findings with residents via the portal, and maintain a permanent compliance record for every managed property.',
        image: '/Images/Cleaning and Inspection Reports Page.png',
        imageAlt: 'Dominium cleaning and inspection reports screen — Malta condominium management',
        capabilities: [
          'Schedule recurring cleaning visits and building inspections',
          'Log inspection findings with notes and photo evidence',
          'Track completion status across all managed properties',
          'Generate professional PDF inspection and cleaning reports',
          'Share reports with residents directly through the portal',
          'Configure report templates in Settings per property type',
          'Maintain a permanent compliance record for every building',
        ],
        sections: [
          {
            heading: 'Scheduled Cleaning and Inspection Management',
            body: 'Dominium provides a dedicated module for scheduling and tracking all cleaning visits and building inspections across your portfolio. Administrators log each visit, record findings, and attach photographic evidence — creating a structured, searchable record of every inspection completed. Cleaning schedules are configurable per property, ensuring nothing is missed across any of the buildings you manage.',
          },
          {
            heading: 'Professional Report Generation',
            body: 'Once an inspection or cleaning visit is recorded, Dominium generates a professional, formatted report ready for distribution. Reports can be shared directly with residents through the client portal, providing the transparency residents expect about how their building is being maintained. Having polished, consistent documentation also supports compliance requirements and insurance reviews.',
          },
          {
            heading: 'Customisable Report Templates',
            body: 'Administrators configure inspection and cleaning report templates within Settings to match the specific requirements of each property type — whether a residential block, a mixed-use development, or a commercial condominium. Custom templates ensure every report captures the right information consistently, reducing the time spent formatting documents and keeping reporting standards uniform across the portfolio.',
          },
          {
            heading: 'Compliance and Audit Trail',
            body: 'Every completed cleaning visit and inspection is stored permanently within the system — creating a verifiable audit trail that demonstrates ongoing maintenance obligations are being met. This documentation is invaluable for AGM reporting, insurance claims, and regulatory compliance. Administrators can retrieve historical inspection records for any property at any time, without relying on external filing systems or manual archives.',
          },
        ],
      },

      // 7 ──────────────────────────────────────────────────
      {
        slug: 'branding-and-white-label',
        title: 'Branding and White-Label',
        description: 'Present Dominium as your own platform. Upload your company logo, set your brand colours, and configure company details so that every invoice, report, and resident communication carries your management company\'s identity — not ours.',
        image: '/Images/Settings_Branding Page.png',
        imageAlt: 'Dominium white-label branding settings — Malta condominium management',
        capabilities: [
          'Upload your company logo for invoices and reports',
          'Set custom brand colours across the platform',
          'Configure company name, email, phone, and address',
          'Branded invoices and contribution requests sent to residents',
          'Consistent identity across all resident-facing documents',
          'Update branding details at any time without technical support',
          'Looks and feels like your own software to your residents',
        ],
        sections: [
          {
            heading: 'Your Brand, Your Platform',
            body: 'Dominium is built for management companies that take their professional image seriously. Every invoice, contribution request, inspection report, and resident communication can carry your company\'s logo, colours, and contact details — not a generic software brand. This creates a polished, consistent experience for residents that reinforces trust in your management company from the very first interaction.',
          },
          {
            heading: 'Easy Branding Setup',
            body: 'Administrators configure all branding details from a single Settings page — uploading a logo, entering company contact information, and selecting brand colours without any technical support or developer involvement. Changes take effect immediately across the platform and all outgoing documents. Whether you manage one block or a hundred, your brand stays consistent throughout.',
          },
          {
            heading: 'Branded Invoices and Reports',
            body: 'Every document generated by Dominium — contribution invoices, expense reports, inspection summaries, and AGM documentation — is formatted with your company\'s identity. Residents see your management company\'s name and logo, not Dominium\'s. This professionalism differentiates your service, builds resident confidence, and reinforces your brand at every touchpoint in the management relationship.',
          },
        ],
      },

      // 8 ──────────────────────────────────────────────────
      {
        slug: 'client-notifications',
        title: 'Client Notifications',
        description: 'Keep every resident informed with real-time, targeted alerts via push notification and email. Send block-specific maintenance alerts, AGM announcements, or community-wide updates — all from one notifications hub, with full delivery tracking.',
        image: '/Images/Communications Page.png',
        imageAlt: 'Dominium client notifications screen — Malta',
        capabilities: [
          'Real-time push notifications to resident devices',
          'Email notification delivery with full tracking',
          'Block-specific or portfolio-wide targeting',
          'AGM date and agenda notifications',
          'Maintenance and repair alert broadcasts',
          'Residents choose their preferred notification channel',
          'Full notification delivery log per resident',
        ],
        sections: [
          {
            heading: 'Stay Notified',
            body: 'Dominium delivers real-time alerts to residents about scheduled repairs, maintenance visits, and building updates specific to their block. Whether a water outage affects one building or a community announcement applies to all residents, administrators target the right audience instantly — ensuring every resident stays informed without unnecessary noise or notification fatigue.',
          },
          {
            heading: 'Push Notifications and Email',
            body: 'Users choose their preferred communication method — mobile push alerts or email — and Dominium delivers accordingly. Whether a resident prefers updates on their smartphone or in their inbox, the platform accommodates both seamlessly. All notification preferences are managed within each resident\'s profile, and administrators retain a full delivery log for accountability and follow-up.',
          },
          {
            heading: 'AGM Date Scheduled',
            body: 'Administrators can schedule AGM notices well in advance, including agenda items, venue details, proposed resolutions, and participation instructions. Residents receive advance notification with enough time to review and prepare — improving attendance rates and ensuring community decisions are made with full resident awareness. All scheduled event notifications are logged in the system.',
          },
          {
            heading: 'Block-Specific or Universal Notifications',
            body: 'Not every message is relevant to every resident. Dominium enables precise targeting — administrators send alerts to a specific block, a subset of units, or the entire portfolio in a single action. Urgent alerts such as a gas inspection in Block C reach only affected residents, while AGM notices and community announcements go to all. This precision improves resident engagement and trust.',
          },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────────────────
  // CLIENT PORTAL — 5 features
  // ─────────────────────────────────────────────────────────
  {
    slug: 'client-portal',
    title: 'Client Portal',
    tagline: 'A self-service portal that residents actually love to use.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    subFeatures: [

      // 1 ──────────────────────────────────────────────────
      {
        slug: 'report-issue',
        title: 'Report Issue',
        description: 'Residents report maintenance concerns directly through the Dominium portal. Each issue is instantly logged, assigned to the right administrator or supplier, and tracked in real time — with status updates pushed back to the resident throughout the entire process.',
        image: '/Images/Report Issues Page.png',
        imageAlt: 'Dominium report issue screen — Malta client portal',
        capabilities: [
          'One-click issue submission from the resident portal',
          'QR code scanning for contactless reporting — no login required',
          'Photo and description upload per report',
          'Instant notifications to administrators and block managers',
          'Real-time status tracking: New → Requested → In Progress → Finished or Denied',
          'Supplier assignment tracked within the report',
          'Email notifications to all relevant parties at each stage',
          'Full resolution history per reported issue',
        ],
        sections: [
          {
            heading: 'Seamless Issue Management for Your Community',
            body: 'Residents report any concerns they encounter through the user-friendly Work Requests feature in their personal portal. Issues range from maintenance needs to general inquiries — submitted directly through the system for streamlined processing. No phone calls, no email chains, no WhatsApp groups. The submission process is straightforward: describe the issue, attach photos, and submit in under a minute.',
          },
          {
            heading: 'Reporting an Issue',
            body: 'When residents submit issues, designated administrators and employees receive instant notifications to facilitate rapid response. The software promotes community engagement by centralising communication and simplifying the reporting process. All reports are logged with a timestamp, categorised by type, and immediately visible to every relevant member of the management team.',
          },
          {
            heading: 'Stay Updated on Your Issue',
            body: 'Residents receive real-time notifications at every stage — from initial acknowledgement through supplier assignment to final resolution. The request lifecycle is fully visible: New, Requested, In Progress, Finished, or Denied. If a request cannot be actioned, the resident is notified immediately with an explanation — ensuring no submission is left without a response. This eliminates the frustration of submitting an issue and never hearing back.',
          },
          {
            heading: 'Transparent Resolution History',
            body: 'Once an issue is resolved, the full history of the report — including submission details, assigned personnel, status changes, and resolution notes — is stored in the system permanently. Residents can review the complete record from their portal, and administrators have a verifiable audit trail for every maintenance request that has ever been raised in the building.',
          },
        ],
      },

      // 2 ──────────────────────────────────────────────────
      {
        slug: 'see-live-bank-balance',
        title: 'See Live Bank Balance',
        description: 'Residents see their block\'s live account balance, full payment history, outstanding contributions, and downloadable receipts in real time. Complete financial transparency eliminates disputes, reduces admin queries, and gives residents confidence in how their funds are managed.',
        image: '/Images/Settings_Condominium Page.png',
        imageAlt: 'Dominium live bank balance screen — Malta client portal',
        capabilities: [
          'Real-time account balance display per block',
          'Full payment history with timestamps',
          'Outstanding contribution fee visibility',
          'Downloadable receipts for every transaction',
          'Opening and closing balance views',
          'Budget allocation transparency',
          'Statement download for personal records',
        ],
        sections: [
          {
            heading: 'Transparency and Real-Time Updates',
            body: 'Dominium offers unparalleled transparency with live balance features available directly in the resident portal. Residents access up-to-the-minute details on their block\'s financial status — tracking incoming payments, monitoring expenses, and reviewing budget allocations. This real-time visibility provides the clarity residents need to understand how their contributions are being managed.',
          },
          {
            heading: 'Download Receipts Instantly',
            body: 'Residents access and download receipts for every transaction directly from the Dominium portal or mobile app. Each transaction is meticulously documented, making it easy to track expenses, verify payments, and obtain records for tax purposes, financial audits, or personal record-keeping — without ever needing to contact the administrator or wait for a statement in the post.',
          },
          {
            heading: 'View Opening and Closing Balances',
            body: 'Residents and administrators monitor financial health with clear views of both opening and closing balances at any time. This comprehensive overview of financial activity enables accurate cash flow tracking, budget monitoring, and transparency in how communal funds are being managed. Both administrators and residents see the same numbers — eliminating the ambiguity that typically drives balance queries.',
          },
          {
            heading: 'Eliminate Balance Disputes',
            body: 'When residents can see exactly what they owe, what they have paid, and when — disputes disappear. Dominium\'s live balance feature dramatically reduces the volume of calls and emails that administrators receive about account status, freeing up time to focus on managing properties rather than answering repetitive financial queries. Transparency builds trust, and trust reduces friction.',
          },
        ],
      },

      // 3 ──────────────────────────────────────────────────
      {
        slug: 'pay-contribution-fee',
        title: 'Pay Contribution Fee',
        description: 'Residents pay contribution fees securely and directly from the Dominium portal — from any device, at any time. Automatic invoice generation, instant reconciliation on payment, and immediate digital receipts. Fully paperless, fully tracked.',
        image: '/Images/Bills Page.png',
        imageAlt: 'Dominium pay contribution fee screen — Malta client portal',
        capabilities: [
          'Secure in-portal payment processing',
          'Payments accepted from any device, anywhere',
          'Automatic account reconciliation on payment',
          'Automatic invoice generation per fee cycle',
          'Instant payment confirmation receipts',
          'Full payment audit trail per resident',
          'Overdue notifications sent automatically',
        ],
        sections: [
          {
            heading: 'Online Payments Made Quick and Secure',
            body: 'Residents access their invoices, review payment history, and complete secure payments from any location — whether on desktop or mobile. With Dominium\'s online payment system, settling condominium fees becomes effortless. Transactions are recorded immediately within the system, and multiple payment options accommodate different user preferences. The entire process takes under two minutes.',
          },
          {
            heading: 'Secure Transactions Guaranteed',
            body: 'Dominium implements industry-standard encryption and security protocols to protect every financial transaction. Personal and financial data are secured throughout the complete payment process, with ongoing system monitoring ensuring compliance with current security standards. Residents pay with complete confidence — knowing their financial information is protected at every stage.',
          },
          {
            heading: 'Automatic Invoice Generation',
            body: 'The system generates invoices automatically based on each unit\'s assigned contribution fees and notifies residents when a new invoice requires payment. This automation eliminates manual invoicing effort, reduces errors, and ensures residents receive timely, consistent billing with a clear breakdown of what they owe — and why — for every billing cycle.',
          },
          {
            heading: 'Instant Reconciliation',
            body: 'Once a payment is made, Dominium automatically reconciles it against the resident\'s account and updates the contribution record to paid. Administrators see the updated collection rate in real time, and residents receive an immediate digital receipt — removing any ambiguity about payment status for both parties. The entire process happens instantly and without any manual input.',
          },
        ],
      },

      // 4 ──────────────────────────────────────────────────
      {
        slug: 'receive-push-notifications-via-mobile-app',
        title: 'Receive Push Notifications Via Mobile App',
        description: 'The Dominium mobile app for iOS and Android gives residents full portal access in their pocket. Instant push notifications deliver personalised alerts for maintenance updates, fee reminders, AGM notices, and community announcements — keeping every resident informed in real time.',
        image: '/App mockup.png',
        imageAlt: 'Dominium mobile app push notifications — iOS and Android',
        customVisual: 'phone',
        capabilities: [
          'Native iOS and Android app',
          'Instant push notifications to resident devices',
          'Issue reporting and status tracking on the go',
          'View balance and pay contribution fees from the app',
          'Block-specific or community-wide alerts',
          'AGM date and agenda notifications',
          'Customisable notification preferences per resident',
        ],
        sections: [
          {
            heading: 'Instant Updates with Push Notifications',
            body: 'Dominium enables users to stay informed and connected effortlessly through real-time push notifications about their condominium community. Features include updates on scheduled maintenance, manager messages, issue report status changes, and payment confirmations. Users customise notification preferences and remain engaged with the latest developments without logging into the portal each time.',
          },
          {
            heading: 'Push Notifications',
            body: 'The platform delivers immediate smartphone alerts about scheduled maintenance, administrator communications, issue updates, payment reminders, and community news — matching each resident\'s preferred channel. Block-specific or community-wide alerts ensure relevant information reaches the right residents promptly without overwhelming people with updates that don\'t concern them.',
          },
          {
            heading: 'Supplier Sent to Fix Issue',
            body: 'When residents report problems through the app, the system assigns qualified suppliers for quick resolution. The app provides real-time progress updates at each stage — from assignment through to completion. Administrators monitor the process closely, and the software maintains detailed records to identify recurring issues, plan preventive maintenance, and improve contractor performance over time.',
          },
          {
            heading: 'AGM and Scheduled Event Notifications',
            body: 'The system provides residents with advance notification of Annual General Meetings — including agenda items, venue information, and proposed resolutions — enabling active participation and community engagement. Scheduled maintenance, cleaning visits, and inspections are also communicated in advance so residents can plan accordingly and arrange access when necessary.',
          },
        ],
      },

      // 5 ──────────────────────────────────────────────────
      {
        slug: 'communication',
        title: 'Communication',
        description: 'Residents access a shared document library and community forums all from their personal portal. AGM minutes, inspection reports, maintenance logs, and building notices — organised, accessible, and always up to date.',
        image: '/Images/Files Page1.png',
        imageAlt: 'Dominium communication files and forums screen — Malta client portal',
        capabilities: [
          'Shared document library per building',
          'AGM minutes and community notices accessible to residents',
          'Maintenance logs and inspection reports on demand',
          'Community forums for resident discussions',
          'Administrator announcements pinned in the portal',
          'File download from any device including mobile',
          'Role-based access — residents see what is relevant to them',
        ],
        sections: [
          {
            heading: 'Stay Informed and Stay Connected',
            body: 'Dominium\'s Communication feature gives residents a single destination for everything they need to know about their building. From shared files and community notices to open discussion forums, the resident portal keeps everyone connected and informed — without relying on scattered email chains, WhatsApp groups, or physical notice boards.',
          },
          {
            heading: 'Shared Files',
            body: 'Residents effortlessly manage and access important documents through the user-friendly file system in their portal. Key documents include financial records, receipts, maintenance logs, AGM minutes, insurance certificates, and cleaning schedules — all organised by block for quick retrieval. Files are accessible from any device, including the Dominium mobile app, ensuring residents always have what they need.',
          },
          {
            heading: 'Forums',
            body: 'Dominium\'s integrated online forums create a dedicated space where condominium administrators, employees, and residents communicate openly about building issues, upcoming projects, and community events. Rather than fragmented WhatsApp groups or scattered email threads, all community conversation happens within a structured, searchable, and moderated environment — improving transparency and reducing miscommunication.',
          },
          {
            heading: 'Transparency That Builds Trust',
            body: 'When residents can view financial statements, read meeting minutes, and participate in community discussions directly from their portal, trust in management increases naturally. Dominium\'s communication and file features eliminate the opacity that breeds resident dissatisfaction — replacing it with an open, transparent relationship between administrators and the communities they manage.',
          },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────────────────
  // ACCOUNTING — 3 features
  // ─────────────────────────────────────────────────────────
  {
    slug: 'accounting',
    title: 'Accounting',
    tagline: 'Automated financial management — no double-entry, no spreadsheets.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
    subFeatures: [

      // 1 ──────────────────────────────────────────────────
      {
        slug: 'xero-quickbooks-zoho-books',
        title: 'Xero, QuickBooks and Zoho Books',
        description: 'Connect Dominium with Xero, QuickBooks Online, or Zoho Books for fully automated, two-way accounting synchronisation. Payments, contributions, bank entries, and expenses flow between systems in real time — eliminating double-entry entirely.',
        image: '/Images/Settings_Integration Xero Page.png',
        imageAlt: 'Dominium Xero QuickBooks Zoho Books accounting integration — Malta',
        capabilities: [
          'Two-way sync with Xero, QuickBooks Online, or Zoho Books',
          'Automatic payment and contribution reconciliation',
          'Contribution invoices pushed directly to your accounting platform',
          'Expense and bill categorisation per block',
          'Aged receivables tracking in your accounting system',
          'Real-time financial accuracy across both platforms',
          'Eliminate manual data entry between systems entirely',
        ],
        sections: [
          {
            heading: 'Effortless Financial Control',
            body: 'Dominium connects directly with Xero, QuickBooks Online, and Zoho Books, synchronising payments, contributions, bank entries, and expenses automatically. Every transaction recorded in Dominium flows into your accounting platform in real time — and vice versa — ensuring both systems remain accurate without any manual intervention. Month-end close becomes a formality rather than a weekend-long effort.',
          },
          {
            heading: 'Streamlining Payments and Reporting',
            body: 'The integration includes advanced tools for tracking aged receivables, providing detailed visibility into overdue accounts across all blocks. Administrators identify payment delays early, escalate where needed, and maintain healthy cash flow for every condominium they manage. The system seamlessly matches Dominium transactions with accounting platform bank records — eliminating manual reconciliation effort completely.',
          },
          {
            heading: 'Automated Reminders',
            body: 'Residents receive timely notifications prompting them to settle their dues, reducing the risk of overdue payments and improving collection rates across the portfolio. Reminders are sent at configurable intervals, ensuring residents are notified promptly without requiring manual follow-up from administrators — and all reminder activity is logged against the resident\'s account.',
          },
          {
            heading: 'Recording Bills and Expenses',
            body: 'Administrators upload and organise documentation — receipts, supplier invoices, and expense records — directly within Dominium. These records are automatically categorised and pushed to the connected accounting platform as bills, ensuring comprehensive expense tracking across all condominiums. This supports accurate profit and loss reporting and keeps books ready for audit at any time.',
          },
        ],
      },

      // 2 ──────────────────────────────────────────────────
      {
        slug: 'contribution-request-for-payment',
        title: 'Contribution Request for Payment',
        description: 'Issue contribution fee requests to all units automatically with precise per-unit fee configuration. Dominium generates invoices automatically, delivers them to residents, and integrates the records directly into your accounting platform — with zero manual work.',
        image: '/Images/Contributions Page.png',
        imageAlt: 'Dominium contribution request for payment screen — Malta',
        capabilities: [
          'Create and manage contribution requests per unit or block',
          'Automatic invoice generation based on predefined fees',
          'Handle routine and additional one-off expenses',
          'Transparent, itemised invoices delivered to residents',
          'Direct integration into accounting records',
          'Automated overdue reminders via email and push',
          'Full invoice and request history per condominium',
        ],
        sections: [
          {
            heading: 'Seamless Contributions, Transparent Transactions',
            body: 'Dominium enables administrators to create, update, and manage contribution requests for routine expenses and additional costs like upgrades or repairs with ease. The system maintains accurate financial documentation at all times and automatically adjusts for new expenses as they arise — ensuring the billing cycle is always current, accurate, and consistent across every building in the portfolio.',
          },
          {
            heading: 'Effortless Management of Contributions',
            body: 'Administrators create contribution requests for each billing period with a few clicks. The platform handles routine contributions and additional expenses — such as upgrades or one-off repairs — through swift, accurate cost recording. Fee amounts can be updated at any time, with changes reflected immediately in the next billing cycle for the affected units.',
          },
          {
            heading: 'Automatic Invoice Generation',
            body: 'The system calculates payment requests using predefined condominium fees and any additional expenses recorded in the period, then automatically generates and delivers the corresponding invoices to residents. Invoices are simultaneously incorporated into the accounting system — reducing manual work and maintaining consistent financial records across both Dominium and the connected accounting platform.',
          },
          {
            heading: 'Transparency and Accuracy',
            body: 'Clients receive clear, detailed invoices that break down every element of their contribution — regular fees, additional expenses, and adjustments — fostering understanding and reducing queries. The automation embedded in Dominium reduces manual work and minimises the risk of errors throughout the entire contribution cycle, from initial request through to payment reconciliation.',
          },
        ],
      },

      // 3 ──────────────────────────────────────────────────
      {
        slug: 'payment-of-contributions',
        title: 'Payment of Contributions',
        description: 'Contribution payments made through the Dominium portal are automatically reconciled, marked as paid, and reflected in your accounting records in real time. Administrators see collection rates update instantly — zero manual input required.',
        image: '/Images/Entries Page2.png',
        imageAlt: 'Dominium payment of contributions screen — Malta',
        capabilities: [
          'Assign and update fees for each block and resident',
          'Automatic invoice generation based on fee assignments',
          'Payments reconciled within the accounting system automatically',
          'Real-time bank balance updates on payment receipt',
          'Collection rate dashboard updated instantly',
          'Residents see paid status immediately in their portal',
          'Full payment history per unit and per block',
        ],
        sections: [
          {
            heading: 'Efficient Payments, Transparent Tracking',
            body: 'Dominium enables administrators to assign and update fees for each block and resident with ease. The system automatically generates invoices based on these assignments and reconciles processed payments within the accounting system, updating bank balances in real time. The automated process minimises manual intervention and errors while enhancing financial oversight and transparency across the community.',
          },
          {
            heading: 'Payment Assignment and Reconciliation',
            body: 'When administrators assign contribution fees in Dominium, the system generates the corresponding invoices and tracks them through the payment lifecycle automatically. As residents pay, each payment is reconciled against the outstanding invoice, the balance is updated, and the accounting records are adjusted — all without any manual matching or data entry from the management team.',
          },
          {
            heading: 'Real-Time Payment Updates',
            body: 'Once payments are reconciled, they display immediately as paid on the contribution screen — providing residents with instant visibility of their updated financial status. This automation reduces the administrative burden on managers significantly, ensures accurate and current financial records at all times, and eliminates the ambiguity about payment status that typically generates resident queries.',
          },
          {
            heading: 'Portfolio-Wide Collection Visibility',
            body: 'Administrators managing multiple condominiums get a consolidated view of collection rates across the entire portfolio. See total received, outstanding balances, and overdue accounts at a glance — or drill into individual buildings for a granular breakdown. Automated overdue reminders are sent to residents at configurable intervals, improving collection rates without requiring manual follow-up.',
          },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────────────────
  // BANKING — 3 features
  // ─────────────────────────────────────────────────────────
  {
    slug: 'banking',
    title: 'Banking',
    tagline: 'Virtual IBANs and banking automation powered by Fyorin.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
    subFeatures: [

      // 1 ──────────────────────────────────────────────────
      {
        slug: 'virtual-bank-accounts-per-condominium',
        title: 'Virtual Bank Accounts Per Condominium',
        description: 'Every condominium you manage gets its own dedicated virtual IBAN, created instantly when you add a new block. Resident payments land in the correct account automatically — no manual sorting, no misallocations, complete financial separation between buildings.',
        image: null,
        imageAlt: null,
        customVisual: 'iban-icon',
        capabilities: [
          'Dedicated virtual IBAN provisioned per condominium automatically',
          'Instant IBAN creation on new block setup — no bank visits',
          'IBAN embedded directly in every resident invoice',
          'Automatic payment allocation to the correct building',
          'Complete financial separation between condominiums',
          'No manual sorting of incoming resident payments',
          'Full transaction visibility per IBAN',
        ],
        sections: [
          {
            heading: 'Empower Your Condominium Finances with Fyorin',
            body: 'Dominium integrates with Fyorin to deliver a complete automated banking layer for property managers. Rather than managing finances through a separate bank portal, administrators handle all banking operations — from IBAN provisioning to payment processing — directly within Dominium. This saves time, reduces errors, and provides a single source of financial truth across the entire portfolio.',
          },
          {
            heading: 'Automatic Virtual Bank Account Creation',
            body: 'The platform automates virtual account setup for every condominium. Upon creating a new block within Dominium, a dedicated virtual bank account is instantly generated — complete with a unique IBAN. There are no bank visits, no paperwork, and no waiting periods. Each building has a clearly separated account from day one, ensuring financial records are clean from the moment the block goes live.',
          },
          {
            heading: 'Integrated IBAN in Invoices',
            body: 'Invoices issued through Dominium include the specific IBAN associated with each condominium\'s virtual bank account. This integration supports accurate payment routing and reduces transaction complications for residents. When residents pay, funds flow directly into the correct building account — eliminating the misallocations that are common when all funds pass through a single shared account.',
          },
          {
            heading: 'EU-Regulated Banking Infrastructure',
            body: 'Fyorin operates within EU regulatory frameworks, providing condominium administrators with the security and compliance assurances required for managing communal funds. Virtual IBANs are fully functional bank accounts — residents pay using standard bank transfers, and all transactions are processed through regulated financial infrastructure, giving administrators and residents complete confidence in every payment.',
          },
        ],
      },

      // 2 ──────────────────────────────────────────────────
      {
        slug: 'automated-payables',
        title: 'Automated Payables',
        description: 'When expenses are recorded in Dominium, they automatically enter the payables workflow via Fyorin. Supplier invoices are queued and settled without manual intervention — ensuring timely, accurate payments with a complete audit trail and zero manual processing.',
        image: '/Images/Entries Page3.png',
        imageAlt: 'Dominium automated payables screen — Malta',
        capabilities: [
          'Expenses automatically entered into payables workflow on recording',
          'Supplier invoices queued for payment automatically',
          'Payments processed without logging into a separate banking portal',
          'Precise administrator control and approval workflows',
          'Full audit trail of every outgoing payment',
          'Seamless integration between Dominium and Fyorin',
          'Real-time payables visibility per condominium',
        ],
        sections: [
          {
            heading: 'Effortless Financial Precision with Automated Payables',
            body: 'Fyorin simplifies condominium financial operations through its automated payables feature within Dominium. When expenses are incurred, they are seamlessly integrated into the condominium\'s accounting records. This process is triggered automatically by the Dominium system, ensuring all expenses are recorded accurately and promptly as payables — without any manual data entry from the management team.',
          },
          {
            heading: 'Streamlined Expense Management',
            body: 'The integration provided by Dominium eliminates the need for manual data entry into a separate banking portal, reducing the risk of errors and ensuring up-to-date financial records at all times. By automating this process, Fyorin enhances financial efficiency and accuracy, streamlining the management of payables and providing a more organised approach to handling condominium finances across the entire portfolio.',
          },
          {
            heading: 'Efficient Payment Processing',
            body: 'Once recorded, payables are automatically queued for payment processing within Dominium, ensuring timely and accurate settlement without requiring manual intervention from administrators. The seamless integration of payment processing provides a smooth and streamlined payment experience — administrators gain precise control over financial transactions, with clear oversight and management of all payables at all times.',
          },
          {
            heading: 'Precise Control and Full Audit Trail',
            body: 'Despite full automation, administrators retain complete visibility and control over all payables. Approval workflows can be configured within the platform, and every payment is recorded with a complete audit trail. This supports transparent financial management, simplifies supplier disputes, and ensures every transaction is accountable — giving administrators the confidence to delegate payment processing without losing oversight.',
          },
        ],
      },

      // 3 ──────────────────────────────────────────────────
      {
        slug: 'automated-receivables',
        title: 'Automated Receivables',
        description: 'Contribution invoices are dispatched automatically, incoming payments are reconciled in real time, and outstanding balances are tracked continuously. The full receivables cycle runs itself — from invoice generation through to payment confirmation and accounting entry.',
        image: '/Images/Entries Page4.png',
        imageAlt: 'Dominium automated receivables screen — Malta',
        capabilities: [
          'Invoices automatically dispatched to residents on generation',
          'Real-time reconciliation of all incoming payments',
          'Outstanding receivables tracked and updated continuously',
          'Payments automatically matched to corresponding invoices',
          'Overdue alerts sent to administrators automatically',
          'Residents receive instant payment confirmation',
          'Full receivables history per condominium and per resident',
        ],
        sections: [
          {
            heading: 'Streamline Condominium Finances with Automated Receivables',
            body: 'Dominium revolutionises condominium financial management with an advanced automated receivables feature, offering a comprehensive solution for handling invoicing and payment processes. When invoices are configured through the system, they are seamlessly integrated into the accounting platform, ensuring a high level of accuracy and operational efficiency across the entire receivables workflow.',
          },
          {
            heading: 'Effortless Invoicing and Payment Tracking',
            body: 'Once created, invoices are automatically dispatched to clients, eliminating delays and facilitating prompt payment processing. This automation reduces manual work and errors, allowing administrators to manage finances effortlessly while ensuring timely payments and contributing to a smoother, more transparent financial operation. Administrators always have a clear, up-to-date view of what has been invoiced and what remains outstanding.',
          },
          {
            heading: 'Automated Reconciliation',
            body: 'The system automatically reconciles payments in real time within the accounting system, streamlining the entire reconciliation process. This eliminates manual reconciliation efforts, reduces the potential for errors, and significantly saves time. As each payment arrives, it is matched to the corresponding invoice, the balance is updated, and the resident receives instant confirmation — all without any manual action.',
          },
          {
            heading: 'Real-Time Receivables Visibility',
            body: 'Dominium provides a live dashboard of receivables activity across all condominiums in the portfolio. Administrators see collection rates update in real time as payments arrive, and can identify outstanding balances without running manual reports. Automated overdue reminders are sent to residents at configurable intervals, improving collection rates without requiring manual follow-up from the management team.',
          },
        ],
      },

    ],
  },
];

export function getCategoryBySlug(slug) {
  return categories.find(c => c.slug === slug);
}

export function getSubFeature(categorySlug, featureSlug) {
  const cat = getCategoryBySlug(categorySlug);
  return cat?.subFeatures.find(f => f.slug === featureSlug);
}
