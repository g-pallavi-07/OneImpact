
create table missions (

    -- Primary Key
    id uuid primary key default gen_random_uuid(),

    -- NGO who created this mission
    ngo_id uuid not null
        references ngos(id)
        on delete cascade,

    -- Mission Details
    title text not null,
    description text not null,

    category text
    check (
        category in (
            'Education',
            'Environment',
            'Healthcare',
            'Animal Welfare',
            'Women Empowerment',
            'Food',
            'Disaster Relief',
            'Other'
        )
    ),

    -- Location
    address text,
    city text,
    state text,
    latitude double precision,
    longitude double precision,

    -- Mission Media
    cover_image_url text,

    -- Volunteer Details
    volunteers_required integer not null,
    volunteers_joined integer not null default 0,

    -- Dates
    start_date date not null,
    end_date date not null,

    -- Mission Status
    status text
    check (
        status in (
            'Upcoming',
            'Ongoing',
            'Completed',
            'Cancelled'
        )
    )
    default 'Upcoming',

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    featured boolean default false
);