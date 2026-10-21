export interface Specialization {
  slug: string;
  name: string;
  trackCode: string;
  description: string;
  academicLead: string;
  primaryCoreLab: string;
  totalEnrollment: string;
  curriculumCycle: string;
  studentIds: string[];
}

export interface Department {
  id: string;
  slug: string;
  name: string;
  code: string;
  icon: "code" | "design" | "business";
  description: string;
  specializationsCount: number;
  enrolledStudentsCount: number;
  academicLead?: string;
  specializations: Specialization[];
}
