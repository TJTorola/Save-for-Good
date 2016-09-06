# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160906171747) do

  create_table "contributions", force: :cascade do |t|
    t.integer  "loan_id",    null: false
    t.integer  "user_id",    null: false
    t.integer  "payment_id", null: false
    t.integer  "amount",     null: false
    t.integer  "donation",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "contributions", ["loan_id"], name: "index_contributions_on_loan_id"
  add_index "contributions", ["user_id"], name: "index_contributions_on_user_id"

  create_table "loans", force: :cascade do |t|
    t.integer  "user_id",                           null: false
    t.text     "description",                       null: false
    t.integer  "amount",                            null: false
    t.integer  "status",                default: 0
    t.datetime "end_date",                          null: false
    t.integer  "loan_length",                       null: false
    t.integer  "payment_period_length",             null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  add_index "loans", ["user_id"], name: "index_loans_on_user_id"

  create_table "payments", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "stripe_id",  null: false
    t.integer  "amount",     null: false
    t.string   "card_brand", null: false
    t.string   "last_four",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "name",            null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "location"
    t.text     "about"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
