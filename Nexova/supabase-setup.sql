-- ==============================================================
-- NEXOVA bot — Supabase setup
-- ==============================================================
-- Run this once in your Supabase project: Dashboard → SQL Editor →
-- New query → paste this whole file → Run.
--
-- This creates 3 tables:
--   bot_keywords        — phrases that route a query to one of the
--                          8 services (same idea as bot-knowledge.js,
--                          but live-editable from Supabase's Table
--                          Editor, no redeploy needed).
--   bot_qa               — custom question/answer pairs for things
--                          that don't map to any of the 8 services.
--                          Add a row here any time you want the bot
--                          to "learn" a new answer.
--   bot_missed_queries   — every question the bot couldn't answer
--                          confidently gets logged here automatically,
--                          so you know exactly what to add above.
--
-- Security model (important):
--   - The site uses Supabase's "anon" public key, which is SAFE to
--     expose in client-side code BY DESIGN — Supabase is built so
--     that key only does what Row Level Security (RLS) policies
--     below explicitly allow.
--   - bot_keywords / bot_qa: visitors can only READ (SELECT).
--     Only you, signed into the Supabase dashboard, can add/edit rows.
--   - bot_missed_queries: visitors can only WRITE (INSERT) — the bot
--     logs questions but can never read other visitors' logged
--     questions back. You read them from the dashboard.
-- ==============================================================

create table if not exists bot_keywords (
  id bigint generated always as identity primary key,
  service_index int not null,        -- 0-7, matches SERVICES order in index.html
  lang text not null,                -- 'es' or 'en'
  phrase text not null,
  created_at timestamptz default now()
);

create table if not exists bot_qa (
  id bigint generated always as identity primary key,
  lang text not null,                -- 'es' or 'en'
  trigger_phrase text not null,      -- what the visitor might type/say
  response text not null,            -- the answer the bot should give
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists bot_missed_queries (
  id bigint generated always as identity primary key,
  query text not null,
  lang text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security on all three
alter table bot_keywords enable row level security;
alter table bot_qa enable row level security;
alter table bot_missed_queries enable row level security;

-- bot_keywords: public read-only
create policy "Public can read keywords"
  on bot_keywords for select
  to anon
  using (true);

-- bot_qa: public read-only (only active rows)
create policy "Public can read active qa"
  on bot_qa for select
  to anon
  using (active = true);

-- bot_missed_queries: public write-only (no read, no update, no delete)
create policy "Public can log missed queries"
  on bot_missed_queries for insert
  to anon
  with check (true);

-- ==============================================================
-- Optional: seed bot_qa with one example row so you can see the
-- shape of the data. Feel free to delete this row afterwards.
-- ==============================================================
insert into bot_qa (lang, trigger_phrase, response)
values (
  'es',
  'cuanto cuesta',
  'Los precios varían según el alcance del proyecto — lo más preciso es que dejes tu consulta y el equipo te cotice según tu caso específico.'
);
