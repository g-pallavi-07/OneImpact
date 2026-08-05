
create table impact_records (

    -- Primary Key
    id uuid primary key default gen_random_uuid(),

    participant_id uuid not null
        references mission_participants(id)
        on delete cascade,    

    -- Verification Request
    verification_request_id uuid
        references verification_requests(id)
        on delete set null,

    -- Impact Details
    impact_type text not null,

    impact_value numeric not null,

    unit text not null,

    description text,

    -- Timestamp
    created_at timestamptz not null default now()

);