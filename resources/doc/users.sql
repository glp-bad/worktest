CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- LOIJNSU&^%$A7a67s
-- $2y$10$k2S5gIlC0G6wVnEDX6xSD.zSiKofQgOXhTIPj9V10J2sPc1UZWZfK

INSERT INTO badminto_worktest.users (`name`, `email`, `password`, `created_at`)
VALUES ('Gavrila Leonard Paul', 'gavrilapaul@hotmail.com', '$2y$10$k2S5gIlC0G6wVnEDX6xSD.zSiKofQgOXhTIPj9V10J2sPc1UZWZfK', NOW());