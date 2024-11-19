import { defineCommand } from "../../core";
import { UserError } from "../../errors";

defineCommand({
	command: "wrangler versions deploy view",
	metadata: {
		description:
			"`wrangler deployments view` has been renamed to `wrangler deployments status`. Please use that command instead.",
		owner: "Workers: Authoring and Testing",
		status: "stable",
	},
	args: {
		name: {
			describe: "Name of the worker",
			type: "string",
			requiresArg: true,
		},
		"deployment-id": {
			describe:
				"Deprecated. Deployment ID is now referred to as Version ID. Please use `wrangler versions view [version-id]` instead.",
			type: "string",
			requiresArg: true,
		},
	},
	handler: async function versionsDeploymentsViewHandler(args) {
		if (args.deploymentId === undefined) {
			throw new UserError(
				"`wrangler deployments view` has been renamed `wrangler deployments status`. Please use that command instead."
			);
		} else {
			throw new UserError(
				"`wrangler deployments view <deployment-id>` has been renamed `wrangler versions view [version-id]`. Please use that command instead."
			);
		}
	},
});
