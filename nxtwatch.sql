-- CREATE TABLE IF NOT EXISTS videos (
--         id TEXT PRIMARY KEY NOT NULL,
--         title TEXT NOT NULL,
--         thumbnail_url TEXT NOT NULL,
--         channel_name TEXT NOT NULL,
--         channel_profile_image_url TEXT NOT NULL,
--         view_count TEXT NOT NULL,
--         published_at TEXT NOT NULL



-- INSERT INTO videos (id, title, thumbnail_url, channel_name, channel_profile_image_url, view_count, published_at)
-- VALUES (?, ?, ?, ?, ?, ?, ?);

-- PRAGMA TABLE_INFO(videos);

SELECT * FROM videos
  WHERE title LIKE '%%';

