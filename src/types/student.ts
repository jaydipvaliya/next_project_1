export interface Subject {
  code: string;
  title: string;
  credits: string;
}

export interface Student {
  id: string;
  slug: string;
  name: string;
  initials: string;
  avatarColor: {
    bg: string;
    text: string;
    border?: string;
  };
  email: string;
  department: string;
  departmentSlug: string;
  specialization: string;
  specializationSlug: string;
  trackCode: string;
  trackFocus: string;
  status: "Active Student" | "Alumni" | "On Leave";
  year: number;
  yearLabel: string;
  studyYear: string;
  standing: string;
  enrolled: string;
  systemRecordId: string;
  lastValidated: string;
  about: string;
  subjects: Subject[];
}
