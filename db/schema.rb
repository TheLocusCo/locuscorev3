# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180325235025) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "pg_trgm"

  create_table "categories", force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "categories_name_index", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.string "poster_name", limit: 255, default: ""
    t.string "poster_email", limit: 255, default: ""
    t.string "poster_website", limit: 255, default: ""
    t.string "poster_ip", limit: 255, default: ""
    t.text "content", default: ""
    t.boolean "approved", default: false
    t.integer "user_id", default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "commentable_id"
    t.string "commentable_type", limit: 255
  end

  create_table "graphics", force: :cascade do |t|
    t.string "title", limit: 255, null: false
    t.text "script_content", default: "", null: false
    t.string "icon", limit: 255
    t.string "load_from_file", limit: 255
    t.string "canvas_id", limit: 255
    t.boolean "fullscreen_by_default", default: false, null: false
    t.text "content_description"
    t.text "basic_description"
    t.string "extra_params", limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "library", limit: 255
    t.index ["title"], name: "graphics_title_index", unique: true
  end

  create_table "graphics_categories", force: :cascade do |t|
    t.bigint "graphic_id"
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["graphic_id", "category_id"], name: "graphics_categories_graphic_id_category_id_index", unique: true
  end

  create_table "graphics_comments", force: :cascade do |t|
    t.bigint "graphic_id"
    t.bigint "comment_id"
    t.index ["graphic_id", "comment_id"], name: "graphics_comments_graphic_id_comment_id_index", unique: true
  end

  create_table "mangas", force: :cascade do |t|
    t.text "name", default: ""
    t.text "sources", default: "{}"
    t.text "header_image_location", default: ""
    t.text "genres", default: ""
    t.boolean "needs_update", default: true
    t.integer "total_chapters", default: 0
    t.string "authors", limit: 255, default: ""
    t.string "artists", limit: 255, default: ""
    t.text "description", default: ""
    t.text "downloaded_chapters", default: ""
    t.text "licensed_at", default: ""
    t.text "chapters_at", default: "{}"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["name"], name: "mangas_name_index", unique: true
  end

  create_table "mangas_categories", force: :cascade do |t|
    t.bigint "manga_id"
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["manga_id", "category_id"], name: "mangas_categories_manga_id_category_id_index", unique: true
  end

  create_table "mangas_comments", force: :cascade do |t|
    t.bigint "manga_id"
    t.bigint "comment_id"
    t.index ["manga_id", "comment_id"], name: "mangas_comments_manga_id_comment_id_index", unique: true
  end

  create_table "media", force: :cascade do |t|
    t.text "name", default: ""
    t.text "description", default: ""
    t.boolean "globally_visible", default: false
    t.integer "user_ids_who_can_view", array: true
    t.integer "user_id", null: false
    t.string "local_media", limit: 255
    t.string "arc_media", limit: 255
    t.string "arc_media_generic", limit: 255
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.string "generic_file_name"
    t.string "generic_content_type"
    t.integer "generic_file_size"
    t.datetime "generic_updated_at"
    t.index ["name"], name: "media_name_index", unique: true
  end

  create_table "media_categories", force: :cascade do |t|
    t.bigint "medium_id"
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["medium_id", "category_id"], name: "media_categories_medium_id_category_id_index", unique: true
  end

  create_table "notifications", force: :cascade do |t|
    t.string "from_name", limit: 255, null: false
    t.string "from_email", limit: 255, null: false
    t.text "content", default: ""
    t.datetime "start_displaying_at"
    t.datetime "stops_displaying_at"
    t.integer "viewed_users", array: true
    t.string "n_type", limit: 255, default: "admin"
    t.string "icon", limit: 255, default: "mail"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "title", limit: 255, null: false
    t.text "content"
    t.bigint "author_id"
    t.string "icon", limit: 255, default: "star"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean "hidden", default: false
    t.datetime "published_at", default: -> { "now()" }
    t.index ["title"], name: "posts_title_index", unique: true
  end

  create_table "posts_categories", force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id", "category_id"], name: "posts_categories_post_id_category_id_index", unique: true
  end

  create_table "posts_comments", force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "comment_id"
    t.index ["post_id", "comment_id"], name: "posts_comments_post_id_comment_id_index", unique: true
  end

  create_table "posts_media", force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "medium_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id", "medium_id"], name: "posts_media_post_id_medium_id_index", unique: true
  end

  create_table "projects", force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.text "main_description"
    t.string "client", limit: 255
    t.string "role", limit: 255
    t.string "link", limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["name"], name: "projects_name_index", unique: true
  end

  create_table "projects_categories", force: :cascade do |t|
    t.bigint "project_id"
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id", "category_id"], name: "projects_categories_project_id_category_id_index", unique: true
  end

  create_table "projects_comments", force: :cascade do |t|
    t.bigint "project_id"
    t.bigint "comment_id"
    t.index ["project_id", "comment_id"], name: "projects_comments_project_id_comment_id_index", unique: true
  end

  create_table "projects_media", force: :cascade do |t|
    t.bigint "project_id"
    t.bigint "medium_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id", "medium_id"], name: "projects_media_project_id_medium_id_index", unique: true
  end

  create_table "resumes", force: :cascade do |t|
    t.string "title", limit: 255, null: false
    t.text "prawn_content", default: "This is a blank pdf"
    t.string "company", limit: 255, default: ""
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["title"], name: "resumes_title_index", unique: true
  end

  create_table "roles", force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.string "description", limit: 255, null: false
    t.string "pf_graphics", limit: 255, default: "r"
    t.string "pf_projects", limit: 255, default: "r"
    t.string "pf_posts", limit: 255, default: "cr"
    t.string "pf_users", limit: 255, default: ""
    t.string "pf_categories", limit: 255, default: "crud"
    t.string "pf_roles", limit: 255, default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "pf_resumes", limit: 255, default: ""
    t.string "pf_media", limit: 255, default: "cr"
    t.string "pf_mangas", limit: 255, default: ""
    t.string "pf_notifications", limit: 255, default: "cr"
    t.string "pf_comments", limit: 255, default: "cr"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", limit: 255, null: false
    t.string "email", limit: 255, null: false
    t.string "encrypted_password", default: "", null: false
    t.integer "sign_in_count", default: 0
    t.string "current_sign_in_ip", limit: 255
    t.text "agent_list"
    t.integer "failed_attempts", default: 0
    t.string "name", limit: 255
    t.text "security_hash", default: "{}"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "role_id"
    t.string "ip_list", limit: 255, array: true
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.json "tokens"
    t.datetime "locked_at"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "users_email_index", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "graphics_categories", "categories", name: "graphics_categories_category_id_fkey"
  add_foreign_key "graphics_categories", "graphics", name: "graphics_categories_graphic_id_fkey"
  add_foreign_key "graphics_comments", "comments", name: "graphics_comments_comment_id_fkey"
  add_foreign_key "graphics_comments", "graphics", name: "graphics_comments_graphic_id_fkey"
  add_foreign_key "mangas_categories", "categories", name: "mangas_categories_category_id_fkey"
  add_foreign_key "mangas_categories", "mangas", name: "mangas_categories_manga_id_fkey"
  add_foreign_key "mangas_comments", "comments", name: "mangas_comments_comment_id_fkey"
  add_foreign_key "mangas_comments", "mangas", name: "mangas_comments_manga_id_fkey"
  add_foreign_key "media_categories", "categories", name: "media_categories_category_id_fkey"
  add_foreign_key "media_categories", "media", name: "media_categories_medium_id_fkey"
  add_foreign_key "posts", "users", column: "author_id", name: "posts_author_id_fkey"
  add_foreign_key "posts_categories", "categories", name: "posts_categories_category_id_fkey"
  add_foreign_key "posts_categories", "posts", name: "posts_categories_post_id_fkey"
  add_foreign_key "posts_comments", "comments", name: "posts_comments_comment_id_fkey"
  add_foreign_key "posts_comments", "posts", name: "posts_comments_post_id_fkey"
  add_foreign_key "posts_media", "media", name: "posts_media_medium_id_fkey"
  add_foreign_key "posts_media", "posts", name: "posts_media_post_id_fkey"
  add_foreign_key "projects_categories", "categories", name: "projects_categories_category_id_fkey"
  add_foreign_key "projects_categories", "projects", name: "projects_categories_project_id_fkey"
  add_foreign_key "projects_comments", "comments", name: "projects_comments_comment_id_fkey"
  add_foreign_key "projects_comments", "projects", name: "projects_comments_project_id_fkey"
  add_foreign_key "projects_media", "media", name: "projects_media_medium_id_fkey"
  add_foreign_key "projects_media", "projects", name: "projects_media_project_id_fkey"
end
