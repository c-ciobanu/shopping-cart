import type { FromSchema } from "json-schema-to-ts";

export const schema = {
	type: "object",
	properties: {
		name: { type: "string" }
	},
	additionalProperties: false,
	required: ["name"]
} as const;

export type Body = FromSchema<typeof schema>;
