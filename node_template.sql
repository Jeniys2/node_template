/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost:3306
 Source Schema         : node_template

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 22/03/2018 11:22:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for map
-- ----------------------------
DROP TABLE IF EXISTS `map`;
CREATE TABLE `map`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `map` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of map
-- ----------------------------
INSERT INTO `map` VALUES (1, 'A');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 177 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (160, 'Jenny');
INSERT INTO `users` VALUES (165, 'Joenny');
INSERT INTO `users` VALUES (175, 'Joennyy');
INSERT INTO `users` VALUES (145, 'N');
INSERT INTO `users` VALUES (1234567891, 'No');
INSERT INTO `users` VALUES (149, 'Noy');
INSERT INTO `users` VALUES (158, 'Noyy');
INSERT INTO `users` VALUES (142, 'Ny');
INSERT INTO `users` VALUES (1339, 'YY');

SET FOREIGN_KEY_CHECKS = 1;
