create extension if not exists pgcrypto;

create table if not exists public.designers (
  id uuid primary key default gen_random_uuid(),
  company_name text not null, contact_name text not null, position text,
  phone text not null, wechat text, province text, city text not null,
  project_types jsonb not null default '[]', annual_project_count text,
  pain_points jsonb not null default '[]', annual_material_amount text,
  platform_expectation text, category_names jsonb not null default '[]',
  priority_category_names jsonb not null default '[]',
  privacy_agreed boolean not null default false, consent_version text not null,
  consent_at timestamptz not null, submission_token uuid unique not null,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), deleted_at timestamptz
);

create table if not exists public.suppliers (
  id uuid primary key default gen_random_uuid(),
  company_name text not null, brand_name text, contact_name text not null, position text,
  phone text not null, wechat text, province text, city text not null,
  supplier_type text, authorized_regions text, contract_entity text,
  delivery_entity text, after_sales_entity text, project_types jsonb not null default '[]',
  representative_projects text, support_types jsonb not null default '[]',
  platform_expectation text, category_names jsonb not null default '[]',
  privacy_agreed boolean not null default false, consent_version text not null,
  consent_at timestamptz not null, submission_token uuid unique not null,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), deleted_at timestamptz
);

create table if not exists public.categories (
  id bigserial primary key, name text unique not null, sort_order int not null default 0,
  active boolean not null default true, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table if not exists public.resource_reviews (
  id uuid primary key default gen_random_uuid(), resource_type text not null check(resource_type in ('designer','supplier')),
  resource_id uuid not null, verification_status text not null default 'new', cooperation_intent text not null default 'unknown',
  resource_level text not null default 'unrated', owner_admin_id uuid, internal_tags jsonb not null default '[]',
  internal_note text, last_contacted_at timestamptz, next_follow_up_at timestamptz, rejection_reason text,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(resource_type,resource_id)
);

create table if not exists public.admin_action_logs (
  id uuid primary key default gen_random_uuid(), admin_user_id uuid, action_type text not null,
  resource_type text, resource_id uuid, action_summary text, created_at timestamptz not null default now()
);

create index if not exists designers_city_idx on public.designers(city) where deleted_at is null;
create index if not exists suppliers_city_idx on public.suppliers(city) where deleted_at is null;
create index if not exists designers_created_idx on public.designers(created_at desc);
create index if not exists suppliers_created_idx on public.suppliers(created_at desc);
create index if not exists reviews_followup_idx on public.resource_reviews(next_follow_up_at);

alter table public.designers enable row level security;
alter table public.suppliers enable row level security;
alter table public.categories enable row level security;
alter table public.resource_reviews enable row level security;
alter table public.admin_action_logs enable row level security;

insert into public.categories(name,sort_order) values
('瓷砖或岩板',1),('木地板或锁扣地板',2),('石材',3),('智能家居或灯光',4),('家具或饰品',5),('床垫',6),('金属定制',7),('全屋定制',8),('电器',9),('窗帘或织物',10),('涂料',11),('其他',99)
on conflict(name) do update set sort_order=excluded.sort_order;
