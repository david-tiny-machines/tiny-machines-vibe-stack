# Smart Meeting Manager - Product Requirements Document (Lean MVP)

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

## **MVP Scope - 3 Core Views**

### **1. Upload Screen**

**Purpose**: Single entry point for transcript processing

**UI Elements**:
- Large drag-and-drop zone with file picker fallback
- "Generate Action Items" button (disabled until file uploaded)
- Progress indicator during AI processing
- Simple error states (file too large, unsupported format)

**Flow**:
- User drags transcript file → upload starts automatically
- Progress bar shows processing status
- On completion → redirect to Action Tracker with extracted items
- On failure → error message with retry option

**Constraints**: 
- Max 10MB file size
- Supported formats: txt, docx, pdf
- One file at a time

### **2. Action Tracker**

**Purpose**: Central dashboard for all tasks with status management

**UI Elements**:
- Filter tabs: "All" | "Not Started" | "In Progress" | "Done"
- Task cards/rows showing:
  - Task description (editable inline)
  - Auto-detected assignee (editable dropdown/text)
  - Status toggle (Not Started → In Progress → Done)
  - Confidence indicator (⚠ icon for low confidence items)
- Progress summary: "X of Y tasks complete"
- "Generate Next Agenda" button

**Key Behaviors**:
- Default view shows "All" tasks
- Click status to cycle through: Not Started → In Progress → Done
- Low confidence items (< 0.7) show warning icon
- Inline editing for description and assignee
- Status changes auto-save immediately
- Mobile responsive for quick status updates

### **3. Next Meeting Agenda View**

**Purpose**: Auto-generated agenda from incomplete tasks

**UI Elements**:
- Agenda preview (formatted text)
- Only shows "Not Started" and "In Progress" tasks
- Organized by assignee for clarity
- "Copy to Clipboard" button
- "Back to Tracker" link

**Logic**:
- Automatically excludes "Done" items
- Groups items by assignee for clarity
- Simple text format for easy copy/paste into calendar invites

---

## **UI/UX Design Principles**

### **Visual Design**
- **Modern Minimalist Aesthetic**: Clean, uncluttered interface with generous whitespace
- **Typography**: Clear hierarchy using simple, readable fonts
- **Color Palette**: Neutral base with minimal accent colors for status and actions
- **Layout**: Spacious, grid-based design that breathes

### **Interaction Design**
- **Minimal UI Elements**: Avoid overuse of badges, excessive dropdowns, and complex filters
- **Progressive Disclosure**: Show only essential information initially
- **Direct Manipulation**: Click-to-edit, drag-to-upload, single-click status changes
- **Subtle Feedback**: Gentle animations and micro-interactions for state changes

### **Component Guidelines**
- **Buttons**: Primary action prominent, secondary actions understated
- **Status Indicators**: Simple color coding rather than busy badge collections
- **Filters**: Maximum 3-4 filter options, presented as clean tabs
- **Forms**: Inline editing preferred over modal dialogs
- **Notifications**: Minimal toast messages, avoid notification overload

### **Mobile-First Approach**
- Touch-friendly targets (minimum 44px)
- Simplified navigation optimized for thumbs
- Responsive typography and spacing

---

## **Core User Journey**

### **Single End-to-End Flow**

1. **Upload**: User drags transcript → AI processes → extracts tasks + assignees automatically
2. **Review**: Lands on Action Tracker with all extracted items
3. **Track**: Throughout week, users update task statuses on Action Tracker
4. **Prepare**: When ready for next meeting → click "Generate Agenda" → only incomplete tasks formatted as agenda
5. **Use**: Copy/paste agenda text into calendar invite or meeting tool

### **Edge Cases**

- **AI misses assignee**: User can edit assignee field inline
- **Low confidence extraction**: Warning icon shown, user can edit description
- **No incomplete tasks**: Agenda view shows "All tasks complete! 🎉"
- **Upload fails**: Simple retry button with error message

---

## **AI Integration Specifications**

### **Provider**: Anthropic Claude API
- **Model**: claude-sonnet-4-20250514
- **API Endpoint**: https://api.anthropic.com/v1/messages
- **Authentication**: API key via environment variable

### **Processing Pipeline**:
1. Extract raw text from uploaded file (txt/docx/pdf)
2. Send structured prompt to Claude API requesting action item extraction
3. Receive JSON response with extracted items, assignees, and confidence scores
4. Store results in Supabase database
5. Display on Action Tracker with confidence warnings where applicable

### **NLP Requirements**

**Input**: Raw transcript text
**Output**: Structured JSON with:
```json
{
  "action_items": [
    {
      "description": "Finish API integration for user dashboard",
      "assignee": "John Smith", 
      "due_date": "2025-01-15",
      "confidence_score": 0.85,
      "status": "not_started"
    }
  ]
}
```

**Extraction Logic**:
- Identify commitments in conversational text
- Extract assignee names from phrases like:
  - "John, can you handle..."
  - "Sarah will follow up on..."
  - "I'll take care of..." (match to speaker)
- Detect due dates from natural language
- Generate confidence score for each item

**Confidence Threshold**: Items < 0.7 flagged with warning icon

---

## **Technical Requirements**

### **Frontend**
- Next.js 15 + React 19
- Tailwind CSS + shadcn/ui components
- React-dropzone for file uploads
- Zustand for state management
- react-hook-form + Zod for validation

### **Backend**
- Supabase (database, storage)
- No authentication required for MVP
- Supabase Storage for transcript files
- AI extraction via Anthropic Claude API (claude-sonnet-4 model)

### **Data Models**

```typescript
interface Meeting {
  id: string
  title: string
  date: Date
  transcript: string
  created_at: Date
}

interface ActionItem {
  id: string
  meeting_id: string
  description: string
  assignee: string
  due_date?: Date
  status: 'not_started' | 'in_progress' | 'done'
  confidence_score: number
  created_at: Date
  updated_at: Date
}
```

---

## **Success Metrics**

- **Extraction Accuracy**: % of action items requiring zero edits
- **Task Completion**: % of "Not Started" items that move to "Done"
- **Agenda Usage**: % of sessions where agenda is generated
- **User Retention**: Users who upload multiple transcripts

---

## **Out of Scope for MVP**

- User authentication/accounts
- Team management screens
- Calendar integration
- Notifications
- Advanced AI features (sentiment, priority scoring)
- Multi-file uploads
- Export formats beyond copy/paste
- Task assignments to multiple people
- Due date reminders
- Analytics dashboard