import { mutation, query } from "./_generated/server";
import { v } from "convex/values";  // ✅ Ensure this is present

export const generateUploadUrl = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl();
});




export const getFileUrl = query(async ({ storage }, { fileId }) => {
    if (!fileId) {
        throw new Error("File ID is required");
    }
    return await storage.getUrl(fileId);
});



export const getImageUrls = query({
    args: { storageIds: v.array(v.string()) }, // Accepts an array of storage IDs
    handler: async (ctx, args) => {
        const urls = await Promise.all(
            args.storageIds.map(async (id) => {
                return await ctx.storage.getUrl(id);
            })
        );
        return urls; // Returns an array of URLs
    },
});
