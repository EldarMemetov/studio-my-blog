import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import post from "./schemas/post";
import { dashboardTool } from "@sanity/dashboard";
export default defineConfig({
  name: "default",
  title: "My Sanity Studio",
  projectId: "79cqv88x",
  dataset: "production",
  plugins: [deskTool(), dashboardTool()],
  schema: {
    types: [post],
  },
});
