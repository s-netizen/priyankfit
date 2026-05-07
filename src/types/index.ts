export type LeadStatus = 'new' | 'contacted' | 'trial_booked' | 'converted' | 'lost';

export type LeadGoal = 'fat_loss' | 'muscle_gain' | 'body_transformation' | 'strength' | 'other';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  goal: LeadGoal;
  area: string;
  status: LeadStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface AdminUser {
  id: string;
  username: string;
  password_hash: string;
  created_at: string;
}
