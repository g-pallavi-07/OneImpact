
create table issue_reports (

    -- Primary Key
    id uuid primary key default gen_random_uuid(),

    -- User who reported the issue
    reporter_id uuid not null
        references profiles(id)
        on delete cascade,

    -- Issue Details
    title text not null,
    description text not null,

    category text
    check (
        category in (
            'Garbage',
            'Potholes',
            'Water Leakage',
            'Broken Streetlight',
            'Pollution',
            'Illegal Dumping',
            'Other'
        )
    ),

    severity text
    check (
        severity in (
            'Low',
            'Medium',
            'High'
        )
    )
    default 'Medium',

    -- Location
    address text,
    city text,
    state text,

    latitude double precision,
    longitude double precision,

    -- Image uploaded by volunteer
    image_url text,

    -- Report Status
    status text
    check (
        status in (
            'Submitted',
            'Under Review',
            'In Progress',
            'Resolved',
            'Rejected'
        )
    )
    default 'Submitted',

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);