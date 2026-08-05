
create table mission_participants (

    -- Primary Key
    id uuid primary key default gen_random_uuid(),

    -- Mission
    mission_id uuid not null
        references missions(id)
        on delete cascade,

    -- Volunteer
    volunteer_id uuid not null
        references profiles(id)
        on delete cascade,

    -- Participation Status
    status text
    check (
        status in (
            'Joined',
            'Completed',
            'Rejected'
        )
    )
    not null
    default 'Joined',

    -- Time Information
    joined_at timestamptz not null default now(),
    completed_at timestamptz,

    -- Prevent duplicate joins
    unique (mission_id, volunteer_id),
    hours_worked integer default 0
);