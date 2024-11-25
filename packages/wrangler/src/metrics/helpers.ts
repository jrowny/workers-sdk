import os from "node:os";
import whichPmRuns from "which-pm-runs";
import { version as wranglerVersion } from "../../package.json";

export function getWranglerVersion() {
	return wranglerVersion;
}

export function getPackageManager() {
	return whichPmRuns()?.name;
}

// used by "new" metrics
export function getPlatform() {
	const platform = os.platform();

	switch (platform) {
		case "win32":
			return "Windows";
		case "darwin":
			return "Mac OS";
		case "linux":
			return "Linux";
		default:
			return `Others: ${platform}`;
	}
}

// used by "old" metrics
export function getOS() {
	return process.platform + ":" + process.arch;
}

export function getOSVersion() {
	return os.version();
}

export function getNodeVersion() {
	return process.version;
}
