
create table ngos (

    -- Primary Key
    id uuid primary key default gen_random_uuid(),

    -- Link to the NGO's profile
    profile_id uuid not null
        references profiles(id)
        on delete cascade,

    -- NGO Details
    ngo_name text not null,
    description text,

    category text,
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

    website text,
    email text,
    phone text,

    logo_url text,

    address text,
    city text,
    state text,

    verified boolean not null default false,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);