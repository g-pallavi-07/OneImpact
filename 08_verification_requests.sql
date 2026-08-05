

create table verification_requests (

    -- Primary Key
    id uuid primary key default gen_random_uuid(),

    participant_id uuid not null
        references mission_participants(id)
        on delete cascade,

    -- Proof
    proof_description text,

    proof_image_url text not null,

    -- Verification Status
    status text
    check (
        status in (
            'Pending',
            'Approved',
            'Rejected'
        )
    )
    default 'Pending',

    -- NGO/Admin review
    reviewed_by uuid
        references profiles(id)
        on delete set null,

    review_notes text,

    submitted_at timestamptz not null default now(),

    reviewed_at timestamptz

);