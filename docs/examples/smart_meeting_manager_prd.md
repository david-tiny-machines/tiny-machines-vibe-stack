# Smart Meeting Manager - Product Requirements Document (Improved)

## **Product Overview**

### **Vision**

Turn raw meeting transcripts into actionable, trackable work items with AI-powered natural language processing. Eliminate lost commitments, unclear ownership, and wasted prep time.

### **Problem Statement**

- Meeting summaries are passive text with no follow-through.
- Action items get forgotten between sessions.
- Ownership of tasks is unclear, deadlines are missed.
- Next meeting agendas are rebuilt from scratch instead of evolving.

### **Solution**

A lightweight tool where meeting transcripts become structured tasks, tracked through completion, and automatically rolled into the next agenda.

---

## **Target Users**

### **Primary Users**

- **Product Managers** running standups and planning sessions.
- **Engineering Managers** overseeing sprints and retros.
- **CPOs** leading Monday leadership meetings.
- **Product Leaders** running fortnightly product reviews.

### **User Personas**

**Sarah – Product Manager**

- Runs weekly team standups with 6 people.
- Struggles to track who committed to what.
- Needs next meeting agenda pre-filled.
- Values: Accountability, efficiency, follow-through.

**Marcus – Engineering Manager**

- Leads sprint planning and retros.
- Action items often forgotten between meetings.
- Wants visibility into commitments.
- Values: Transparency, systematic tracking.

**Alexa – Chief Product Officer (CPO)**

- Chairs Monday leadership meetings and fortnightly product reviews.
- Needs a clear view of follow-ups across multiple product teams.
- Wants confidence that strategic commitments are being tracked and executed.
- Values: Accountability, visibility at scale, alignment across teams.

---

## **Core Features (MVP Scope)**

### **1. Transcript Upload & Processing**

- **UI**: Drag-and-drop area + file picker (txt, docx, pdf).
- **Flow**:
  - User drags file → progress indicator shows upload.
  - On success: transcript parsed.
  - On failure: toast message → “Retry Upload.”
- **Constraints**: Max 10MB file size, supported formats only.

### **2. AI Action Item Extraction**

- **NLP task**: Identify commitments in conversational text.
- **Structured Output**:
  - Description
  - Assignee (if mentioned)
  - Due date (if mentioned)
  - Confidence score
- **Edge Case**:
  - If confidence < threshold (e.g., 0.6), item is flagged for manual review.
  - UI: Badge “⚠ Needs Review.”
- **UI**:
  - Table/List of extracted action items.
  - Inline editing: user can change assignee/description/due date.

### **3. Team Dashboard**

- **View**: Card/grid layout.
  - Task description
  - Assigned person (dropdown of team members)
  - Due date (date picker)
  - Status (Not Started, In Progress, Complete)
- **Filters**:
  - View by team member.
  - View by meeting.
- **Mobile responsive** for quick updates.

### **4. Status Tracking**

- **UI**:
  - Status toggle on each card.
  - Visual progress bars for each person.
  - Overdue items highlighted in red.
- **Edge Case**:
  - Multiple assignees not supported in MVP (error prompt: “Assign to one owner”).

### **5. Next Meeting Agenda Generation**

- **Flow**:
  - Incomplete tasks automatically rolled into draft agenda.
  - Template applied (customisable later).
  - User can edit agenda before saving.
- **UI**:
  - Agenda preview with editable text blocks.

---

## **Future Features (Not in MVP)**

- Calendar integration (Google/Outlook).
- Slack/Teams notifications.
- Analytics (completion rates, common item types).
- Advanced AI (sentiment, risk detection, priority scoring).
- Google SSO authentication option.

---

## **Technical Requirements**

### **Frontend**

- Next.js 15 + React 19.
- Tailwind CSS + shadcn/ui components.
- Zustand for state management.
- React-dropzone for file uploads.
- react-hook-form + Zod for validation.

### **Backend**

- Supabase (database, auth, storage).
- Auth via Supabase Auth.
- Supabase Storage for transcript files.
- AI extraction via Claude API.

### **AI Integration**

- Provider: Anthropic Claude API.
- **Pipeline**:
  1. Extract raw text from file.
  2. Send prompt to Claude to extract structured action items.
  3. Receive JSON with description, assignee, due date, confidence.
  4. Store results in Supabase.
- **Links**: [Anthropic API Docs](https://docs.anthropic.com/claude)

### **Data Models**

```typescript
interface Meeting {
  id: string
  title: string
  date: Date
  transcript: string
  team_id: string
  created_at: Date
}

interface ActionItem {
  id: string
  meeting_id: string
  description: string
  assignee: string
  due_date?: Date
  status: 'not_started' | 'in_progress' | 'complete'
  confidence_score: number
  created_at: Date
  updated_at: Date
}

interface Team {
  id: string
  name: string
  members: string[]
  created_at: Date
}
```

---

## **User Journeys**

### **Journey 1: Transcript → Action Items**

1. User logs in with Supabase Auth.
2. User uploads transcript via drag-and-drop.
3. System parses + calls AI.
4. Extracted items displayed in dashboard.
5. Low-confidence items flagged.
6. User edits items inline.

### **Journey 2: Team Member Updates Status**

1. Team member opens dashboard on mobile.
2. Sees their assigned tasks.
3. Taps on status → toggles to “In Progress” or “Complete.”
4. Overdue tasks are highlighted red.

### **Journey 3: Generate Next Agenda**

1. User clicks “Generate Agenda.”
2. System carries forward incomplete items.
3. Draft agenda displayed.
4. User edits + saves as final agenda.

---

## **Success Metrics**

- **Usage**: % teams using across 3 consecutive meetings.
- **Engagement**: % of tasks updated at least once.
- **Accuracy**: % of correctly extracted tasks vs. edits.
- **Retention**: Active teams after 30 days.

---

## **Risks & Mitigations**

- **AI Accuracy Risk**: Extraction misses context.
  - Mitigation: Confidence scoring + manual review queue.
- **User Adoption Risk**: Teams resist new workflow.
  - Mitigation: Minimal friction, show immediate value.
- **Cost Risk**: Claude API usage spikes.
  - Mitigation: Monitor usage, optimise prompts.

---

## **Open Questions**

1. Should incomplete items always roll forward, or should users opt-in each time?
2. What’s the default confidence threshold for flagging (0.6, 0.7)?
3. Do we need a user management screen in MVP, or rely on Supabase config only?

---

**Next Steps**:

- Define acceptance criteria per feature.
- Create wireframe-style UI descriptions for upload, dashboard, and agenda views.
- Plan technical scaffolding in Next.js + Supabase.

