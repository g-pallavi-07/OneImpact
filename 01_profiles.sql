create table profiles (

    -- Same ID as auth.users.id
    id uuid primary key references auth.users(id) on delete cascade,

    -- Personal Information
    full_name text not null,
    role text NOT NULL DEFAULT 'volunteer'
    CHECK (role IN ('volunteer', 'ngo', 'admin')),

    avatar_url text,
    phone text,

    city text,
    state text,

    bio text,

    -- Statistics
    total_points integer not null default 0,
    missions_completed integer not null default 0,
    hours_contributed integer not null default 0,

    -- Timestamps
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()

);