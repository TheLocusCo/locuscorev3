SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ahoy_events; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE ahoy_events (
    id bigint NOT NULL,
    visit_id bigint,
    user_id bigint,
    name character varying,
    properties jsonb,
    "time" timestamp without time zone
);


--
-- Name: ahoy_events_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE ahoy_events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ahoy_events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE ahoy_events_id_seq OWNED BY ahoy_events.id;


--
-- Name: ahoy_visits; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE ahoy_visits (
    id bigint NOT NULL,
    visit_token character varying,
    visitor_token character varying,
    user_id bigint,
    ip character varying,
    user_agent text,
    referrer text,
    referring_domain character varying,
    search_keyword character varying,
    landing_page text,
    browser character varying,
    os character varying,
    device_type character varying,
    country character varying,
    region character varying,
    city character varying,
    utm_source character varying,
    utm_medium character varying,
    utm_term character varying,
    utm_content character varying,
    utm_campaign character varying,
    started_at timestamp without time zone
);


--
-- Name: ahoy_visits_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE ahoy_visits_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ahoy_visits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE ahoy_visits_id_seq OWNED BY ahoy_visits.id;


--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE categories (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE categories_id_seq OWNED BY categories.id;


--
-- Name: comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE comments (
    id bigint NOT NULL,
    poster_name character varying(255) DEFAULT ''::character varying,
    poster_email character varying(255) DEFAULT ''::character varying,
    poster_website character varying(255) DEFAULT ''::character varying,
    poster_ip character varying(255) DEFAULT ''::character varying,
    content text DEFAULT ''::text,
    approved boolean DEFAULT false,
    user_id integer DEFAULT 0,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    commentable_id integer,
    commentable_type character varying(255)
);


--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE comments_id_seq OWNED BY comments.id;


--
-- Name: friendly_id_slugs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE friendly_id_slugs (
    id integer NOT NULL,
    slug character varying NOT NULL,
    sluggable_id integer NOT NULL,
    sluggable_type character varying(50),
    scope character varying,
    created_at timestamp without time zone
);


--
-- Name: friendly_id_slugs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE friendly_id_slugs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: friendly_id_slugs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE friendly_id_slugs_id_seq OWNED BY friendly_id_slugs.id;


--
-- Name: graphics; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE graphics (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    script_content text DEFAULT ''::text NOT NULL,
    icon character varying(255),
    load_from_file character varying(255),
    canvas_id character varying(255),
    fullscreen_by_default boolean DEFAULT false NOT NULL,
    content_description text,
    basic_description text,
    extra_params character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    library character varying(255),
    slug character varying
);


--
-- Name: graphics_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE graphics_categories (
    id bigint NOT NULL,
    graphic_id bigint,
    category_id bigint,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: graphics_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE graphics_categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: graphics_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE graphics_categories_id_seq OWNED BY graphics_categories.id;


--
-- Name: graphics_comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE graphics_comments (
    id bigint NOT NULL,
    graphic_id bigint,
    comment_id bigint
);


--
-- Name: graphics_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE graphics_comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: graphics_comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE graphics_comments_id_seq OWNED BY graphics_comments.id;


--
-- Name: graphics_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE graphics_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: graphics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE graphics_id_seq OWNED BY graphics.id;


--
-- Name: mangas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE mangas (
    id bigint NOT NULL,
    name text DEFAULT ''::text,
    sources text DEFAULT '{}'::text,
    header_image_location text DEFAULT ''::text,
    genres text DEFAULT ''::text,
    needs_update boolean DEFAULT true,
    total_chapters integer DEFAULT 0,
    authors character varying(255) DEFAULT ''::character varying,
    artists character varying(255) DEFAULT ''::character varying,
    description text DEFAULT ''::text,
    downloaded_chapters text DEFAULT ''::text,
    licensed_at text DEFAULT ''::text,
    chapters_at text DEFAULT '{}'::text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    slug character varying
);


--
-- Name: mangas_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE mangas_categories (
    id bigint NOT NULL,
    manga_id bigint,
    category_id bigint,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: mangas_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE mangas_categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: mangas_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE mangas_categories_id_seq OWNED BY mangas_categories.id;


--
-- Name: mangas_comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE mangas_comments (
    id bigint NOT NULL,
    manga_id bigint,
    comment_id bigint
);


--
-- Name: mangas_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE mangas_comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: mangas_comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE mangas_comments_id_seq OWNED BY mangas_comments.id;


--
-- Name: mangas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE mangas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: mangas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE mangas_id_seq OWNED BY mangas.id;


--
-- Name: media; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE media (
    id bigint NOT NULL,
    name text DEFAULT ''::text,
    description text DEFAULT ''::text,
    globally_visible boolean DEFAULT false,
    user_ids_who_can_view integer[] DEFAULT ARRAY[]::integer[],
    user_id integer NOT NULL,
    local_media character varying(255),
    arc_media character varying(255),
    arc_media_generic character varying(255),
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    image_file_name character varying,
    image_content_type character varying,
    image_file_size integer,
    image_updated_at timestamp without time zone,
    generic_file_name character varying,
    generic_content_type character varying,
    generic_file_size integer,
    generic_updated_at timestamp without time zone,
    slug character varying
);


--
-- Name: media_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE media_categories (
    id bigint NOT NULL,
    medium_id bigint,
    category_id bigint,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: media_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE media_categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: media_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE media_categories_id_seq OWNED BY media_categories.id;


--
-- Name: media_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE media_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: media_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE media_id_seq OWNED BY media.id;


--
-- Name: notifications; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE notifications (
    id bigint NOT NULL,
    from_name character varying(255) NOT NULL,
    from_email character varying(255) NOT NULL,
    content text DEFAULT ''::text,
    start_displaying_at timestamp without time zone,
    stops_displaying_at timestamp without time zone,
    viewed_users integer[] DEFAULT ARRAY[]::integer[],
    n_type character varying(255) DEFAULT 'admin'::character varying,
    icon character varying(255) DEFAULT 'mail'::character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: notifications_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE notifications_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: notifications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE notifications_id_seq OWNED BY notifications.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE posts (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    content text,
    author_id bigint,
    icon character varying(255) DEFAULT 'star'::character varying,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    hidden boolean DEFAULT false,
    published_at timestamp without time zone DEFAULT now(),
    slug character varying
);


--
-- Name: posts_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE posts_categories (
    id bigint NOT NULL,
    post_id bigint,
    category_id bigint,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: posts_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE posts_categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE posts_categories_id_seq OWNED BY posts_categories.id;


--
-- Name: posts_comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE posts_comments (
    id bigint NOT NULL,
    post_id bigint,
    comment_id bigint
);


--
-- Name: posts_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE posts_comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE posts_comments_id_seq OWNED BY posts_comments.id;


--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE posts_id_seq OWNED BY posts.id;


--
-- Name: posts_media; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE posts_media (
    id bigint NOT NULL,
    post_id bigint,
    medium_id bigint,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: posts_media_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE posts_media_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_media_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE posts_media_id_seq OWNED BY posts_media.id;


--
-- Name: projects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE projects (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    main_description text,
    client character varying(255),
    role character varying(255),
    link character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    slug character varying
);


--
-- Name: projects_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE projects_categories (
    id bigint NOT NULL,
    project_id bigint,
    category_id bigint,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: projects_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE projects_categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: projects_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE projects_categories_id_seq OWNED BY projects_categories.id;


--
-- Name: projects_comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE projects_comments (
    id bigint NOT NULL,
    project_id bigint,
    comment_id bigint
);


--
-- Name: projects_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE projects_comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: projects_comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE projects_comments_id_seq OWNED BY projects_comments.id;


--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE projects_id_seq OWNED BY projects.id;


--
-- Name: projects_media; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE projects_media (
    id bigint NOT NULL,
    project_id bigint,
    medium_id bigint,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: projects_media_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE projects_media_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: projects_media_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE projects_media_id_seq OWNED BY projects_media.id;


--
-- Name: resumes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE resumes (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    prawn_content text DEFAULT 'This is a blank pdf'::text,
    company character varying(255) DEFAULT ''::character varying,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    slug character varying
);


--
-- Name: resumes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE resumes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: resumes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE resumes_id_seq OWNED BY resumes.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE roles (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    pf_graphics character varying(255) DEFAULT 'r'::character varying,
    pf_projects character varying(255) DEFAULT 'r'::character varying,
    pf_posts character varying(255) DEFAULT 'cr'::character varying,
    pf_users character varying(255) DEFAULT ''::character varying,
    pf_categories character varying(255) DEFAULT 'crud'::character varying,
    pf_roles character varying(255) DEFAULT ''::character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    pf_resumes character varying(255) DEFAULT ''::character varying,
    pf_media character varying(255) DEFAULT 'cr'::character varying,
    pf_mangas character varying(255) DEFAULT ''::character varying,
    pf_notifications character varying(255) DEFAULT 'cr'::character varying,
    pf_comments character varying(255) DEFAULT 'cr'::character varying,
    pf_visits character varying DEFAULT ''::character varying,
    slug character varying
);


--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE roles_id_seq OWNED BY roles.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE schema_migrations (
    version bigint NOT NULL,
    inserted_at timestamp without time zone
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE users (
    id bigint NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    sign_in_count integer DEFAULT 0,
    current_sign_in_ip character varying(255),
    agent_list text,
    failed_attempts integer DEFAULT 0,
    name character varying(255),
    security_hash text DEFAULT '{}'::text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    role_id integer,
    ip_list character varying(255)[] DEFAULT ARRAY[]::character varying[],
    provider character varying DEFAULT 'email'::character varying NOT NULL,
    uid character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp without time zone,
    remember_created_at timestamp without time zone,
    current_sign_in_at timestamp without time zone,
    last_sign_in_at timestamp without time zone,
    last_sign_in_ip character varying,
    confirmation_token character varying,
    confirmed_at timestamp without time zone,
    confirmation_sent_at timestamp without time zone,
    unconfirmed_email character varying,
    tokens json,
    locked_at timestamp without time zone,
    slug character varying
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: ahoy_events id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY ahoy_events ALTER COLUMN id SET DEFAULT nextval('ahoy_events_id_seq'::regclass);


--
-- Name: ahoy_visits id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY ahoy_visits ALTER COLUMN id SET DEFAULT nextval('ahoy_visits_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY categories ALTER COLUMN id SET DEFAULT nextval('categories_id_seq'::regclass);


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY comments ALTER COLUMN id SET DEFAULT nextval('comments_id_seq'::regclass);


--
-- Name: friendly_id_slugs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY friendly_id_slugs ALTER COLUMN id SET DEFAULT nextval('friendly_id_slugs_id_seq'::regclass);


--
-- Name: graphics id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY graphics ALTER COLUMN id SET DEFAULT nextval('graphics_id_seq'::regclass);


--
-- Name: graphics_categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY graphics_categories ALTER COLUMN id SET DEFAULT nextval('graphics_categories_id_seq'::regclass);


--
-- Name: graphics_comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY graphics_comments ALTER COLUMN id SET DEFAULT nextval('graphics_comments_id_seq'::regclass);


--
-- Name: mangas id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY mangas ALTER COLUMN id SET DEFAULT nextval('mangas_id_seq'::regclass);


--
-- Name: mangas_categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY mangas_categories ALTER COLUMN id SET DEFAULT nextval('mangas_categories_id_seq'::regclass);


--
-- Name: mangas_comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY mangas_comments ALTER COLUMN id SET DEFAULT nextval('mangas_comments_id_seq'::regclass);


--
-- Name: media id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY media ALTER COLUMN id SET DEFAULT nextval('media_id_seq'::regclass);


--
-- Name: media_categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY media_categories ALTER COLUMN id SET DEFAULT nextval('media_categories_id_seq'::regclass);


--
-- Name: notifications id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY notifications ALTER COLUMN id SET DEFAULT nextval('notifications_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts ALTER COLUMN id SET DEFAULT nextval('posts_id_seq'::regclass);


--
-- Name: posts_categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_categories ALTER COLUMN id SET DEFAULT nextval('posts_categories_id_seq'::regclass);


--
-- Name: posts_comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_comments ALTER COLUMN id SET DEFAULT nextval('posts_comments_id_seq'::regclass);


--
-- Name: posts_media id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_media ALTER COLUMN id SET DEFAULT nextval('posts_media_id_seq'::regclass);


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects ALTER COLUMN id SET DEFAULT nextval('projects_id_seq'::regclass);


--
-- Name: projects_categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_categories ALTER COLUMN id SET DEFAULT nextval('projects_categories_id_seq'::regclass);


--
-- Name: projects_comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_comments ALTER COLUMN id SET DEFAULT nextval('projects_comments_id_seq'::regclass);


--
-- Name: projects_media id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_media ALTER COLUMN id SET DEFAULT nextval('projects_media_id_seq'::regclass);


--
-- Name: resumes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY resumes ALTER COLUMN id SET DEFAULT nextval('resumes_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY roles ALTER COLUMN id SET DEFAULT nextval('roles_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Name: ahoy_events ahoy_events_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ahoy_events
    ADD CONSTRAINT ahoy_events_pkey PRIMARY KEY (id);


--
-- Name: ahoy_visits ahoy_visits_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ahoy_visits
    ADD CONSTRAINT ahoy_visits_pkey PRIMARY KEY (id);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: friendly_id_slugs friendly_id_slugs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY friendly_id_slugs
    ADD CONSTRAINT friendly_id_slugs_pkey PRIMARY KEY (id);


--
-- Name: graphics_categories graphics_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY graphics_categories
    ADD CONSTRAINT graphics_categories_pkey PRIMARY KEY (id);


--
-- Name: graphics_comments graphics_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY graphics_comments
    ADD CONSTRAINT graphics_comments_pkey PRIMARY KEY (id);


--
-- Name: graphics graphics_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY graphics
    ADD CONSTRAINT graphics_pkey PRIMARY KEY (id);


--
-- Name: mangas_categories mangas_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY mangas_categories
    ADD CONSTRAINT mangas_categories_pkey PRIMARY KEY (id);


--
-- Name: mangas_comments mangas_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY mangas_comments
    ADD CONSTRAINT mangas_comments_pkey PRIMARY KEY (id);


--
-- Name: mangas mangas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY mangas
    ADD CONSTRAINT mangas_pkey PRIMARY KEY (id);


--
-- Name: media_categories media_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY media_categories
    ADD CONSTRAINT media_categories_pkey PRIMARY KEY (id);


--
-- Name: media media_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY media
    ADD CONSTRAINT media_pkey PRIMARY KEY (id);


--
-- Name: notifications notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);


--
-- Name: posts_categories posts_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_categories
    ADD CONSTRAINT posts_categories_pkey PRIMARY KEY (id);


--
-- Name: posts_comments posts_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_comments
    ADD CONSTRAINT posts_comments_pkey PRIMARY KEY (id);


--
-- Name: posts_media posts_media_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_media
    ADD CONSTRAINT posts_media_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: projects_categories projects_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_categories
    ADD CONSTRAINT projects_categories_pkey PRIMARY KEY (id);


--
-- Name: projects_comments projects_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_comments
    ADD CONSTRAINT projects_comments_pkey PRIMARY KEY (id);


--
-- Name: projects_media projects_media_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_media
    ADD CONSTRAINT projects_media_pkey PRIMARY KEY (id);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: resumes resumes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY resumes
    ADD CONSTRAINT resumes_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: ahoy_visits_to_tsvector_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ahoy_visits_to_tsvector_idx ON ahoy_visits USING gin (to_tsvector('english'::regconfig, (ip)::text));


--
-- Name: ahoy_visits_to_tsvector_idx1; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ahoy_visits_to_tsvector_idx1 ON ahoy_visits USING gin (to_tsvector('english'::regconfig, (referring_domain)::text));


--
-- Name: ahoy_visits_to_tsvector_idx2; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ahoy_visits_to_tsvector_idx2 ON ahoy_visits USING gin (to_tsvector('english'::regconfig, (country)::text));


--
-- Name: ahoy_visits_to_tsvector_idx3; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ahoy_visits_to_tsvector_idx3 ON ahoy_visits USING gin (to_tsvector('english'::regconfig, (region)::text));


--
-- Name: ahoy_visits_to_tsvector_idx4; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ahoy_visits_to_tsvector_idx4 ON ahoy_visits USING gin (to_tsvector('english'::regconfig, (city)::text));


--
-- Name: ahoy_visits_to_tsvector_idx5; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ahoy_visits_to_tsvector_idx5 ON ahoy_visits USING gin (to_tsvector('english'::regconfig, landing_page));


--
-- Name: ahoy_visits_to_tsvector_idx6; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ahoy_visits_to_tsvector_idx6 ON ahoy_visits USING gin (to_tsvector('english'::regconfig, (browser)::text));


--
-- Name: ahoy_visits_to_tsvector_idx7; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ahoy_visits_to_tsvector_idx7 ON ahoy_visits USING gin (to_tsvector('english'::regconfig, (os)::text));


--
-- Name: ahoy_visits_to_tsvector_idx8; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ahoy_visits_to_tsvector_idx8 ON ahoy_visits USING gin (to_tsvector('english'::regconfig, user_agent));


--
-- Name: categories_name_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX categories_name_index ON categories USING btree (name);


--
-- Name: categories_to_tsvector_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX categories_to_tsvector_idx ON categories USING gin (to_tsvector('english'::regconfig, (name)::text));


--
-- Name: comments_to_tsvector_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX comments_to_tsvector_idx ON comments USING gin (to_tsvector('english'::regconfig, content));


--
-- Name: graphics_categories_graphic_id_category_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX graphics_categories_graphic_id_category_id_index ON graphics_categories USING btree (graphic_id, category_id);


--
-- Name: graphics_comments_graphic_id_comment_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX graphics_comments_graphic_id_comment_id_index ON graphics_comments USING btree (graphic_id, comment_id);


--
-- Name: graphics_title_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX graphics_title_index ON graphics USING btree (title);


--
-- Name: graphics_to_tsvector_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX graphics_to_tsvector_idx ON graphics USING gin (to_tsvector('english'::regconfig, (title)::text));


--
-- Name: index_ahoy_events_on_name_and_time; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_ahoy_events_on_name_and_time ON ahoy_events USING btree (name, "time");


--
-- Name: index_ahoy_events_on_properties_jsonb_path_ops; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_ahoy_events_on_properties_jsonb_path_ops ON ahoy_events USING gin (properties jsonb_path_ops);


--
-- Name: index_ahoy_events_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_ahoy_events_on_user_id ON ahoy_events USING btree (user_id);


--
-- Name: index_ahoy_events_on_visit_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_ahoy_events_on_visit_id ON ahoy_events USING btree (visit_id);


--
-- Name: index_ahoy_visits_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_ahoy_visits_on_user_id ON ahoy_visits USING btree (user_id);


--
-- Name: index_ahoy_visits_on_visit_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_ahoy_visits_on_visit_token ON ahoy_visits USING btree (visit_token);


--
-- Name: index_friendly_id_slugs_on_slug_and_sluggable_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_friendly_id_slugs_on_slug_and_sluggable_type ON friendly_id_slugs USING btree (slug, sluggable_type);


--
-- Name: index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope ON friendly_id_slugs USING btree (slug, sluggable_type, scope);


--
-- Name: index_friendly_id_slugs_on_sluggable_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_friendly_id_slugs_on_sluggable_id ON friendly_id_slugs USING btree (sluggable_id);


--
-- Name: index_friendly_id_slugs_on_sluggable_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_friendly_id_slugs_on_sluggable_type ON friendly_id_slugs USING btree (sluggable_type);


--
-- Name: index_graphics_on_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_graphics_on_slug ON graphics USING btree (slug);


--
-- Name: index_mangas_on_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_mangas_on_slug ON mangas USING btree (slug);


--
-- Name: index_media_on_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_media_on_slug ON media USING btree (slug);


--
-- Name: index_posts_on_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_posts_on_slug ON posts USING btree (slug);


--
-- Name: index_projects_on_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_projects_on_slug ON projects USING btree (slug);


--
-- Name: index_resumes_on_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_resumes_on_slug ON resumes USING btree (slug);


--
-- Name: index_roles_on_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_roles_on_slug ON roles USING btree (slug);


--
-- Name: index_users_on_confirmation_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_confirmation_token ON users USING btree (confirmation_token);


--
-- Name: index_users_on_reset_password_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_reset_password_token ON users USING btree (reset_password_token);


--
-- Name: index_users_on_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_users_on_slug ON users USING btree (slug);


--
-- Name: index_users_on_uid_and_provider; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_uid_and_provider ON users USING btree (uid, provider);


--
-- Name: mangas_categories_manga_id_category_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX mangas_categories_manga_id_category_id_index ON mangas_categories USING btree (manga_id, category_id);


--
-- Name: mangas_comments_manga_id_comment_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX mangas_comments_manga_id_comment_id_index ON mangas_comments USING btree (manga_id, comment_id);


--
-- Name: mangas_name_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX mangas_name_index ON mangas USING btree (name);


--
-- Name: mangas_to_tsvector_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX mangas_to_tsvector_idx ON mangas USING gin (to_tsvector('english'::regconfig, name));


--
-- Name: mangas_to_tsvector_idx1; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX mangas_to_tsvector_idx1 ON mangas USING gin (to_tsvector('english'::regconfig, (authors)::text));


--
-- Name: mangas_to_tsvector_idx2; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX mangas_to_tsvector_idx2 ON mangas USING gin (to_tsvector('english'::regconfig, (artists)::text));


--
-- Name: media_categories_medium_id_category_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX media_categories_medium_id_category_id_index ON media_categories USING btree (medium_id, category_id);


--
-- Name: media_name_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX media_name_index ON media USING btree (name);


--
-- Name: media_to_tsvector_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX media_to_tsvector_idx ON media USING gin (to_tsvector('english'::regconfig, name));


--
-- Name: notifications_to_tsvector_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX notifications_to_tsvector_idx ON notifications USING gin (to_tsvector('english'::regconfig, content));


--
-- Name: posts_categories_post_id_category_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX posts_categories_post_id_category_id_index ON posts_categories USING btree (post_id, category_id);


--
-- Name: posts_comments_post_id_comment_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX posts_comments_post_id_comment_id_index ON posts_comments USING btree (post_id, comment_id);


--
-- Name: posts_media_post_id_medium_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX posts_media_post_id_medium_id_index ON posts_media USING btree (post_id, medium_id);


--
-- Name: posts_title_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX posts_title_index ON posts USING btree (title);


--
-- Name: posts_to_tsvector_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX posts_to_tsvector_idx ON posts USING gin (to_tsvector('english'::regconfig, (title)::text));


--
-- Name: posts_to_tsvector_idx1; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX posts_to_tsvector_idx1 ON posts USING gin (to_tsvector('english'::regconfig, content));


--
-- Name: projects_categories_project_id_category_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX projects_categories_project_id_category_id_index ON projects_categories USING btree (project_id, category_id);


--
-- Name: projects_comments_project_id_comment_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX projects_comments_project_id_comment_id_index ON projects_comments USING btree (project_id, comment_id);


--
-- Name: projects_media_project_id_medium_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX projects_media_project_id_medium_id_index ON projects_media USING btree (project_id, medium_id);


--
-- Name: projects_name_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX projects_name_index ON projects USING btree (name);


--
-- Name: projects_to_tsvector_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX projects_to_tsvector_idx ON projects USING gin (to_tsvector('english'::regconfig, (name)::text));


--
-- Name: resumes_title_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX resumes_title_index ON resumes USING btree (title);


--
-- Name: trgm_graphics_title_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_graphics_title_indx ON graphics USING gist (title gist_trgm_ops);


--
-- Name: trgm_mangas_artists_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_mangas_artists_indx ON mangas USING gist (artists gist_trgm_ops);


--
-- Name: trgm_mangas_authors_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_mangas_authors_indx ON mangas USING gist (authors gist_trgm_ops);


--
-- Name: trgm_mangas_name_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_mangas_name_indx ON mangas USING gist (name gist_trgm_ops);


--
-- Name: trgm_media_name_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_media_name_indx ON media USING gist (name gist_trgm_ops);


--
-- Name: trgm_notifications_from_email_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_notifications_from_email_indx ON notifications USING gist (from_email gist_trgm_ops);


--
-- Name: trgm_posts_title_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_posts_title_indx ON posts USING gist (title gist_trgm_ops);


--
-- Name: trgm_projects_name_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_projects_name_indx ON projects USING gist (name gist_trgm_ops);


--
-- Name: trgm_resumes_title_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_resumes_title_indx ON resumes USING gist (title gist_trgm_ops);


--
-- Name: trgm_users_name_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_users_name_indx ON users USING gist (name gist_trgm_ops);


--
-- Name: trgm_users_username_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_users_username_indx ON users USING gist (username gist_trgm_ops);


--
-- Name: trgm_visits_ip_indx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trgm_visits_ip_indx ON ahoy_visits USING gist (ip gist_trgm_ops);


--
-- Name: users_email_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX users_email_index ON users USING btree (email);


--
-- Name: users_to_tsvector_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_to_tsvector_idx ON users USING gin (to_tsvector('english'::regconfig, (username)::text));


--
-- Name: users_to_tsvector_idx1; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_to_tsvector_idx1 ON users USING gin (to_tsvector('english'::regconfig, (name)::text));


--
-- Name: graphics_categories graphics_categories_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY graphics_categories
    ADD CONSTRAINT graphics_categories_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id);


--
-- Name: graphics_categories graphics_categories_graphic_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY graphics_categories
    ADD CONSTRAINT graphics_categories_graphic_id_fkey FOREIGN KEY (graphic_id) REFERENCES graphics(id);


--
-- Name: graphics_comments graphics_comments_comment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY graphics_comments
    ADD CONSTRAINT graphics_comments_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES comments(id);


--
-- Name: graphics_comments graphics_comments_graphic_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY graphics_comments
    ADD CONSTRAINT graphics_comments_graphic_id_fkey FOREIGN KEY (graphic_id) REFERENCES graphics(id);


--
-- Name: mangas_categories mangas_categories_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY mangas_categories
    ADD CONSTRAINT mangas_categories_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id);


--
-- Name: mangas_categories mangas_categories_manga_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY mangas_categories
    ADD CONSTRAINT mangas_categories_manga_id_fkey FOREIGN KEY (manga_id) REFERENCES mangas(id);


--
-- Name: mangas_comments mangas_comments_comment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY mangas_comments
    ADD CONSTRAINT mangas_comments_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES comments(id);


--
-- Name: mangas_comments mangas_comments_manga_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY mangas_comments
    ADD CONSTRAINT mangas_comments_manga_id_fkey FOREIGN KEY (manga_id) REFERENCES mangas(id);


--
-- Name: media_categories media_categories_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY media_categories
    ADD CONSTRAINT media_categories_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id);


--
-- Name: media_categories media_categories_medium_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY media_categories
    ADD CONSTRAINT media_categories_medium_id_fkey FOREIGN KEY (medium_id) REFERENCES media(id);


--
-- Name: posts posts_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts
    ADD CONSTRAINT posts_author_id_fkey FOREIGN KEY (author_id) REFERENCES users(id);


--
-- Name: posts_categories posts_categories_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_categories
    ADD CONSTRAINT posts_categories_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id);


--
-- Name: posts_categories posts_categories_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_categories
    ADD CONSTRAINT posts_categories_post_id_fkey FOREIGN KEY (post_id) REFERENCES posts(id);


--
-- Name: posts_comments posts_comments_comment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_comments
    ADD CONSTRAINT posts_comments_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES comments(id);


--
-- Name: posts_comments posts_comments_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_comments
    ADD CONSTRAINT posts_comments_post_id_fkey FOREIGN KEY (post_id) REFERENCES posts(id);


--
-- Name: posts_media posts_media_medium_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_media
    ADD CONSTRAINT posts_media_medium_id_fkey FOREIGN KEY (medium_id) REFERENCES media(id);


--
-- Name: posts_media posts_media_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY posts_media
    ADD CONSTRAINT posts_media_post_id_fkey FOREIGN KEY (post_id) REFERENCES posts(id);


--
-- Name: projects_categories projects_categories_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_categories
    ADD CONSTRAINT projects_categories_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id);


--
-- Name: projects_categories projects_categories_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_categories
    ADD CONSTRAINT projects_categories_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects(id);


--
-- Name: projects_comments projects_comments_comment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_comments
    ADD CONSTRAINT projects_comments_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES comments(id);


--
-- Name: projects_comments projects_comments_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_comments
    ADD CONSTRAINT projects_comments_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects(id);


--
-- Name: projects_media projects_media_medium_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_media
    ADD CONSTRAINT projects_media_medium_id_fkey FOREIGN KEY (medium_id) REFERENCES media(id);


--
-- Name: projects_media projects_media_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY projects_media
    ADD CONSTRAINT projects_media_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects(id);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO "schema_migrations" (version) VALUES
(20171025130932),
(20171025131937),
(20171025141957),
(20171030044957),
(20171030050717),
(20171030053814),
(20171101020213),
(20171101021620),
(20171101060643),
(20171101061444),
(20171101165408),
(20171114102236),
(20171116035745),
(20171116214433),
(20171120191240),
(20171121060533),
(20171124084202),
(20171125092521),
(20171125092849),
(20171125115251),
(20171126113212),
(20171127233749),
(20171128014232),
(20171128080314),
(20171128080457),
(20171128094326),
(20171203000156),
(20171203150949),
(20171204185753),
(20171206115302),
(20171207114451),
(20171211133637),
(20171211222311),
(20180111095548),
(20180222102505),
(20180303102110),
(20180303105037),
(20180306045548),
(20180307030657),
(20180313170603),
(20180325235025),
(20180325235245),
(20180326005341),
(20180329212329),
(20180408073426),
(20180528041419),
(20180614194330),
(20180614195253),
(20180614200635);


