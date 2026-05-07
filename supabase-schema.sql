-- Run this in your Supabase SQL editor

-- Leads table
create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text not null,
  goal text not null,
  area text not null,
  status text not null default 'new',
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Admin users table
create table if not exists admin_users (
  id uuid default gen_random_uuid() primary key,
  username text unique not null,
  password_hash text not null,
  created_at timestamptz default now()
);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger leads_updated_at
  before update on leads
  for each row execute function update_updated_at();

-- RLS policies
alter table leads enable row level security;
alter table admin_users enable row level security;

-- Service role can do everything
create policy "Service role full access to leads"
  on leads for all
  using (true)
  with check (true);

create policy "Service role full access to admin_users"
  on admin_users for all
  using (true)
  with check (true);
