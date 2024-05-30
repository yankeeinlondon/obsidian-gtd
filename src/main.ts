
import { Plugin } from 'obsidian';
import { getAPI } from "obsidian-dataview";
import { SettingsTab} from './config-ui/SettingsTab';
import {  DataViewApi } from './types/dataview_types';
import {  KindModelSettings } from './types/settings_types';
import { DEFAULT_SETTINGS } from './utils/Constants'
import { Logger, logger } from './utils/logging';
// import App from "./App.vue";
import { api } from './utils/base_api/api';
import { initialize_cache } from './utils/on_load/initialize_cache';
import { KindCache } from 'types/KindCache';
import { csv } from './utils/on_load/csv';
import { on_editor_change } from './utils/on_load/on_editor_change';
import { add_commands } from './utils/on_load/add_commands';
import { on_file_deleted } from './utils/on_load/on_file_deleted';
import { on_file_created } from './utils/on_load/on_file_created';
import { on_file_modified } from './utils/on_load/on_file_modified';
import { km_codeblock_parser } from './utils/on_load/km_codeblock_parser';


export default class KindModelPlugin extends Plugin {
	settings: KindModelSettings;
	/** the Dataview API surface */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public dv: DataViewApi = (globalThis as any)["DataviewAPI"] as DataViewApi;
	public api: ReturnType<typeof api>;

	public debug: Logger["debug"];
	public info: Logger["info"];
	public warn: Logger["warn"];
	public error: Logger["error"];

	public get_cache(): KindCache | null {
		return this.settings.cache?.pages
			? this.settings.cache
			: null;
	}

	/**
	 * provides a boolean flag which indicates whether this plugin's 
	 * cache is complete and therefore other operations which depend
	 * on this can proceed.
	 */
	public get ready() {
		return this.settings.cache && this.settings.cache?.pages !== null
	}

	/**
	 * Setup this plugin on the "onload" event from Obsidian
	 */
	async onload() {
		await this.loadSettings();
		const log = logger(this.settings.log_level);
		const { debug, info, warn, error } = log;
		this.debug = debug;
		this.info = info;
		this.warn = warn;
		this.error = error;

		// expose the Dataview API
		this.dv = getAPI(this.app);
		// expose Kind Model API
		this.api = api(this);
		
		initialize_cache(this);
		csv(this);
		on_editor_change(this);
		add_commands(this);
		// file events
		on_file_deleted(this);
		on_file_created(this);
		on_file_modified(this);

		// code blocks
		km_codeblock_parser(this);



		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl = this.addStatusBarItem();
		statusBarItemEl.setText('Kind Models');
		statusBarItemEl.addClass("clickable");

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new SettingsTab(this.app, this));

		this.info(`Kind Model has reloaded`);
		
		this.mount();
	}

	mount() {
		// Vue.createApp(App, {
		// app: this.app
		// }).mount(document.body.createDiv())
	}

	onunload() {
		// 
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		const { debug,  error } = logger(this.settings.log_level);
		if(typeof this.saveData !== "function") {
			error("the 'this' context appear to have been lost when trying to call saveSettings()", this)
			return
		} else {
			debug("saving settings", this.settings);
		}
		await this.saveData(this.settings);
	}
}

