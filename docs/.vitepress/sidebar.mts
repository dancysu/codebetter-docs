/**
 * @author 'Dancy'
 * @description '侧边栏配置项'
 */

import { Sidebar } from "./type/sidebar.mts"
import HTML from "../src/guide/html/sidebar.mts"
import CSS from "../src/guide/css/sidebar.mts"
import JavaScript from "../src/guide/javascript/sidebar.mts"
import TypeScript from "../src/guide/typescript/sidebar.mts"
import Node from "../src/guide/node/sidebar.mts"
import Vue from "../src/guide/vue/sidebar.mts"
import React from "../src/guide/react/sidebar.mts"
import MiniApp from "../src/guide/mini-app/sidebar.mts"
import Vue3AdminTemplate from "../src/guide/project/vue3-admin-template/sidebar.mts"
import Vue3UiLibrary from "../src/guide/project/vue3-ui-library/sidebar.mts"
export const sidebar: Sidebar = {
	"/guide/html/": HTML,
	"/guide/css/": CSS,
	"/guide/javascript/": JavaScript,
	"/guide/typescript/": TypeScript,
	"/guide/node/": Node,
	"/guide/vue/": Vue,
	"/guide/react/": React,
	"/guide/mini-app/": MiniApp,
	"/guide/project/vue3-admin-template/": Vue3AdminTemplate,
	"/guide/project/vue3-ui-library/": Vue3UiLibrary,
}
