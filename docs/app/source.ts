import { docs, meta, changelog as _changelog } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { createOpenAPI } from "fumadocs-openapi/server";

export const source = loader({
	baseUrl: "/docs",
	source: createMDXSource(docs, meta),
	pageTree: {
		attachFile,
	},
});

export const changelog = loader({
	baseUrl: "/changelog",
	source: createMDXSource(_changelog, meta),
});

export const openapi = createOpenAPI({});
