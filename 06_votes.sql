
create table votes (

    -- Primary Key
    id uuid primary key default gen_random_uuid(),

    -- User who voted
    voter_id uuid not null
        references profiles(id)
        on delete cascade,

    -- Issue being voted on
    issue_id uuid not null
        references issue_reports(id)
        on delete cascade,

    -- Vote Timestamp
    created_at timestamptz not null default now(),

    -- Prevent duplicate votes
    unique (voter_id, issue_id)

);