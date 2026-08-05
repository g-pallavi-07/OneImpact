
create table community_posts (

    -- Primary Key
    id uuid primary key default gen_random_uuid(),

    -- Author
    author_id uuid not null
        references profiles(id)
        on delete cascade,

    -- Post Content
    title text,

    content text not null,

    image_url text,

    -- Optional: Link post to a mission
    mission_id uuid
        references missions(id)
        on delete set null,


    -- Timestamps
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()

);